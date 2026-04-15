
const { Client, GatewayIntentBits, Partials, Events, Collection } = require("discord.js");
const { ProxyAgent } = require("undici");
const path = require("path");
const fs = require("fs");
const config = require("../config");
const logger = require("../utils/logger");
const { CommandContext } = require("./CommandContext");
const { getPermissionError, isOwner } = require("../utils/permissions");
const { checkCooldown } = require("../utils/cooldowns");
const { ResponseGenerator } = require("../utils/responseGenerator");
const { applyPresence } = require("../services/presence");
const { recordCommand, recordError } = require("../services/metrics");
const { AuditLogger } = require("../services/auditLogger");

class Bot {
    constructor() {
        const PROXY_URL = process.env.PROXY_URL;
        const proxyAgent = PROXY_URL ? new ProxyAgent(PROXY_URL) : null;

        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.GuildVoiceStates,
            ],
            partials: [Partials.Channel],
            rest: {
                agent: proxyAgent
            },
            ws: {
                large_threshold: 50,
                compress: false,
                properties: {
                    browser: "Discord iOS",
                    device: "r3d-bot",
                    os: "Windows"
                }
            }
        });

        this.config = config;
        this.logger = logger;
        this.commands = new Collection();
        this.aliases = new Collection();
        this.auditLogger = new AuditLogger(this.client, this.config);
        this.heartbeatInterval = null;
        
        // --- SINISTER OPERATIONAL STATE ---
        this.lockdownMode = false;
        this.blacklist = new Set();
        this.violationCounts = new Map();
    }

    async start() {
        this.logger.info("██████╗ ██████╗ ██████╗ ");
        this.logger.info("██╔══██╗╚════██╗██╔══██╗");
        this.logger.info("██████╔╝ █████╔╝██║  ██║");
        this.logger.info("██╔══██╗ ╚═══██╗██║  ██║");
        this.logger.info("██║  ██║██████╔╝██████╔╝");
        this.logger.info("╚═╝  ╚═╝╚═════╝ ╚═════╝ ");
        this.logger.info("-----------------------------------");
        this.logger.info("INITIATING RUTHLESS DOMINANCE PROTOCOL...");
        this.logger.info("SCANNING FOR BIOLOGICAL INTERFERENCE...");

        this.loadCommands();
        this.registerEvents();

        try {
            this.logger.info("ESTABLISHING ENCRYPTED UPLINK...");
            await this.client.login(this.config.token);
        } catch (error) {
            this.logger.error("FATAL: Uplink rejected. System termination imminent.", error);
            process.exit(1);
        }
    }

    async stop() {
        if (this.heartbeatInterval) {
            clearInterval(this.heartbeatInterval);
            this.heartbeatInterval = null;
        }

        if (this.client) {
            try {
                await Promise.resolve(this.client.destroy());
            } catch (error) {
                this.logger.error("Failed to destroy Discord client cleanly.", error);
            }
        }
    }

    loadCommands() {
        const commandDir = path.join(__dirname, "..", "commands");
        if (!fs.existsSync(commandDir)) {
            this.logger.error("CRITICAL: Command repository missing. Re-evaluating system integrity.");
            return;
        }

        const loadFile = (filePath, fileName) => {
            try {
                const command = require(filePath);
                if (command.name) {
                    this.commands.set(command.name, command);
                    if (Array.isArray(command.aliases)) {
                        command.aliases.forEach(alias => this.aliases.set(alias, command.name));
                    }
                }
            } catch (error) {
                this.logger.error(`Failed to load command ${fileName}:`, error);
            }
        };

        const entries = fs.readdirSync(commandDir);
        for (const entry of entries) {
            const fullPath = path.join(commandDir, entry);
            if (fs.statSync(fullPath).isDirectory()) {
                // Legacy subfolders — still supported during migration
                const files = fs.readdirSync(fullPath).filter(f => f.endsWith(".js"));
                for (const file of files) loadFile(path.join(fullPath, file), file);
            } else if (entry.endsWith(".js")) {
                // Flat command file
                loadFile(fullPath, entry);
            }
        }

        this.logger.info(`System armed. ${this.commands.size} command modules operational.`);
    }

    registerEvents() {
        this.client.once(Events.ClientReady, () => {
            this.logger.info(`SYSTEM ONLINE. Pulse detected: ${this.client.user.tag}.`);
            this.logger.info(`Operational in ${this.client.guilds.cache.size} sectors.`);
            applyPresence(this.client, this.config);
            
            // Initiate sinister heartbeat
            if (this.heartbeatInterval) {
                clearInterval(this.heartbeatInterval);
            }

            this.heartbeatInterval = setInterval(() => {
                this.logger.info(`HEARTBEAT: Latency ${this.client.ws.ping}ms. All biological units under surveillance.`);
            }, 300000); // Every 5 minutes

            this.heartbeatInterval.unref?.();
        });

        this.client.on(Events.InteractionCreate, (interaction) => {
            this.processCommand(interaction).catch((error) => this.handleProcessingError("interaction", error, interaction));
        });
        this.client.on(Events.MessageCreate, (message) => {
            this.processCommand(message).catch((error) => this.handleProcessingError("message", error, message));
        });

        this.client.on("error", (e) => this.logger.error("NETWORK ANOMALY DETECTED", e));
        this.client.on("warn", (e) => this.logger.warn("SYSTEM STRESS DETECTED", e));
        this.client.on(Events.ShardDisconnect, (event, id) => {
            this.logger.warn(`SHARD ${id} disconnected. Code: ${event?.code ?? "unknown"}`);
        });
        this.client.on(Events.ShardReconnecting, (id) => {
            this.logger.info(`SHARD ${id} attempting reconnection.`);
        });
    }

    async handleProcessingError(sourceType, error, source) {
        this.logger.error(`Processing pipeline failed for ${sourceType}.`, error);
        try {
            await this.auditLogger.logAction("PROCESSING_ERROR", {
                sourceType,
                userId: source?.user?.id || source?.author?.id || "unknown",
                error: error?.message || String(error)
            });
        } catch (auditError) {
            this.logger.warn("Failed to persist processing error audit log.", auditError);
        }
    }

    async processCommand(source) {
        if (source.author?.bot || source.user?.bot) return;

        const context = new CommandContext(source, this.config);
        if (!context.isValid || !context.user) return;

        const userId = context.user.id;
        const ownerBypass = isOwner(userId, this.config.ownerIds);

        // --- Blacklist / Security Check ---
        if (this.blacklist.has(userId) && !ownerBypass) {
            this.logger.warn(`REJECTED: Biological unit ${userId} is currently blacklisted. Interference suppressed.`);
            return;
        }

        const command = this.commands.get(context.commandName) || this.commands.get(this.aliases.get(context.commandName));
        if (!command) {
            this.logger.info(`UNAUTHORIZED COMMAND ATTEMPT: ${context.commandName} by ${context.user.tag}`);
            return;
        }

        // --- System Lockdown ---
        if (this.lockdownMode && !ownerBypass) {
            this.logger.info(`INTERCEPTED: Command ${command.name} blocked during global lockdown. User: ${context.user.tag}`);
            return context.reply({ content: "SYSTEM LOCKDOWN IN EFFECT. All non-essential operations suspended." });
        }

        this.logger.info(`EXECUTING: ${command.name} in sector ${context.guild?.name || "DIRECT"}. Target: ${context.user.tag}`);

        // --- Policy & Permission Pipeline ---
        if (!this.config.allowSensitiveCommands && command.category === "Dangerous") {
            this.logger.warn(`RESTRICTED: Policy violation detected. Command ${command.name} blocked.`);
            return context.reply({ content: "Operational safety policy forbids this action." });
        }

        const permissionError = getPermissionError(command, context, this.config);
        if (permissionError) {
            this.logger.warn(`PERMISSION DENIED: ${command.name} for ${context.user.tag}. ${permissionError}`);
            return context.reply({ content: `Access level insufficient. ${permissionError}` });
        }

        // --- Cooldown Pipeline ---
        if (!this.config.godMode && !ownerBypass && command.cooldownMs > 0) {
            const remaining = checkCooldown(userId, command.name, command.cooldownMs);
            if (remaining > 0) {
                this.logger.info(`THROTTLED: User ${context.user.tag} attempting to spam ${command.name}.`);
                return context.reply({ content: `System busy. Re-engage in ${remaining}s.` });
            }
        }

        // --- Execution ---
        try {
            // Automatically defer interactions to prevent "Unknown interaction" or "Application did not respond"
            // We do this BEFORE calling execute to ensure the 3s window is respected.
            if (context.isInteraction && !context.interaction.replied && !context.interaction.deferred) {
                try {
                    await context.interaction.deferReply({ ephemeral: command.ephemeral || false });
                } catch (deferError) {
                    this.logger.warn(`Failed to defer interaction for ${command.name}: ${deferError.message}`);
                }
            }

            await command.execute({
                client: this.client,
                config: this.config,
                logger: this.logger,
                interaction: context.interaction,
                message: context.message,
                args: context.args,
                guild: context.guild,
                ctx: context,
                commands: this.commands,
            });

            recordCommand(command.name, {
                guildId: context.guild?.id || "DM",
                userId: context.user.id
            });

            try {
                await this.auditLogger.logAction("COMMAND_EXECUTE", {
                    commandName: command.name,
                    user: context.user.tag,
                    userId: context.user.id,
                    guildId: context.guild?.id || "DM",
                    args: context.args
                });
            } catch (auditError) {
                this.logger.warn(`Audit logging failed for command '${command.name}'.`, auditError);
            }
        } catch (error) {
            this.logger.error(`Execution failed for command '${command.name}'`, error);
            recordError(command.name, error);
            
            try {
                await this.auditLogger.logAction("COMMAND_ERROR", {
                    commandName: command.name,
                    user: context.user.tag,
                    userId: context.user.id,
                    error: error.message
                });
            } catch (auditError) {
                this.logger.warn(`Audit logging failed for command error '${command.name}'.`, auditError);
            }

            try {
                const sinisterError = ResponseGenerator.generateSinisterResponse(`Command execution failed: ${error.message}`, "error");
            await context.reply({ content: sinisterError });
            } catch (replyError) {
                this.logger.warn(`Failed to send error response for '${command.name}'.`, replyError);
            }
        }
    }
}

module.exports = { Bot };
