
const { PermissionsBitField, EmbedBuilder } = require("discord.js");
const { ResponseGenerator } = require("../utils/responseGenerator");

class CommandContext {
    constructor(source, config) {
        this.source = source;
        this.config = config;
        this.isInteraction = source.isChatInputCommand?.() || false;
        this.isMessage = source.constructor.name === "Message";
        this.isValid = false;
        this.commandName = null;
        this.args = [];

        if (this.isInteraction) {
            this.interaction = source;
            this.message = null;
            this.user = source.user;
            this.author = source.user;
            this.channel = source.channel;
            this.guild = source.guild;
            this.member = source.member;
            this.commandName = source.commandName;
            this.options = source.options;
            this.isValid = true;
        } else if (this.isMessage) {
            this.interaction = null;
            this.message = source;
            this.user = source.author;
            this.author = source.author;
            this.channel = source.channel;
            this.guild = source.guild;
            this.member = source.member;
            
            const prefix = this.getPrefix(source, config);
            if (!prefix) return;

            const content = source.content.slice(prefix.length).trim();
            const parts = content.split(/\s+/);
            this.commandName = parts.shift().toLowerCase();
            this.args = parts;
            this.isValid = true;
        }
    }

    getPrefix(message, config) {
        const botMention = `<@${message.client.user.id}>`;
        const botMentionNick = `<@!${message.client.user.id}>`;

        if (message.content.startsWith(config.prefix)) return config.prefix;
        if (message.content.startsWith(botMention)) return botMention;
        if (message.content.startsWith(botMentionNick)) return botMentionNick;
        
        // Use the default prefix if it's not the custom one
        if (message.content.startsWith('>')) return '>';

        return null;
    }

    async reply(options) {
        try {
            // Apply persona if options is a string
            if (typeof options === "string") {
                options = { content: ResponseGenerator.generateSinisterResponse(options) };
            } else if (options.content && typeof options.content === "string") {
                options.content = ResponseGenerator.generateSinisterResponse(options.content);
                // Respect explicit flags if provided, otherwise leave as is.
            }

            if (this.isInteraction) {
                // Handle deprecated 'ephemeral' flag by moving it to MessageFlags
                if (options.ephemeral === true && !options.flags) {
                    const { MessageFlags } = require("discord.js");
                    options.flags = [MessageFlags.Ephemeral];
                    delete options.ephemeral;
                }

                if (this.interaction.replied) {
                    return await this.interaction.followUp(options);
                }
                if (this.interaction.deferred) {
                    return await this.interaction.editReply(options);
                }
                return await this.interaction.reply(options);
            } else {
                return await this.message.reply(options);
            }
        } catch (error) {
            console.error("Failed to send reply:", error);
        }
    }

    async sinisterEmbed(title, description, fields = [], color = "#000000") {
        const embed = ResponseGenerator.createSinisterEmbed(title, description, fields, color);
        return await this.reply({ embeds: [embed] });
    }

    async extract(target, dataName) {
        return await this.reply({
            content: `**EXTRACTION IN PROGRESS:** Harvesting \`${dataName}\` from subject \`${target}\`...`
        });
    }

    async fatal(errorMsg) {
        return await this.reply({
            content: ResponseGenerator.generateSinisterResponse(`CRITICAL SYSTEM FAILURE: ${errorMsg}`, "error")
        });
    }

    // Add other useful methods here
    hasPermission(permission) {
        if (!this.guild || !this.guild.members.me) return false;
        return this.guild.members.me.permissions.has(permission);
    }
}

module.exports = { CommandContext };
