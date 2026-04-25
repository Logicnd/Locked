/*! For license information please see main.de2ce3e9.js.LICENSE.txt */
(()=>{"use strict";var e={730(e,t,n){var r=n(43),i=n(853);function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function l(e,t){c(e,t),c(e+"Capture",t)}function c(e,t){for(s[e]=t,e=0;e<t.length;e++)o.add(t[e])}var u=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},f={};function m(e,t,n,r,i,a,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(f,e)||!d.call(h,e)&&(p.test(e)?f[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),M=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var N=Symbol.iterator;function L(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=N&&e[N]||e["@@iterator"])?e:null}var O,D=Object.assign;function I(e){if(void 0===O)try{throw Error()}catch(Os){var t=Os.stack.trim().match(/\n( *(at )?)/);O=t&&t[1]||""}return"\n"+O+e}var _=!1;function F(e,t){if(!e||_)return"";_=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(zs){var r=zs}Reflect.construct(e,[],t)}else{try{t.call()}catch(zs){r=zs}e.call(t.prototype)}else{try{throw Error()}catch(zs){r=zs}e()}}catch(zs){if(zs&&r&&"string"===typeof zs.stack){for(var i=zs.stack.split("\n"),a=r.stack.split("\n"),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(1!==o||1!==s)do{if(o--,0>--s||i[o]!==a[s]){var l="\n"+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=o&&0<=s);break}}}finally{_=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function V(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=F(e.type,!1);case 11:return e=F(e.type.render,!1);case 1:return e=F(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case E:return"StrictMode";case $:return"Suspense";case M:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case A:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return B(e(t))}catch(Os){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function H(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=H(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function X(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=H(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function K(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Q(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){Q(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(a(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(a(92));if(te(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function ae(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ce,ue=function(e){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n)})}:e}(function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ce=ce||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ce.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function de(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function fe(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=fe(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ge=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ge[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(a(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(a(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(a(62))}}function ve(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function be(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var we=null,ke=null,Se=null;function Ee(e){if(e=vi(e)){if("function"!==typeof we)throw Error(a(280));var t=e.stateNode;t&&(t=bi(t),we(e.stateNode,e.type,t))}}function Ce(e){ke?Se?Se.push(e):Se=[e]:ke=e}function Pe(){if(ke){var e=ke,t=Se;if(Se=ke=null,Ee(e),t)for(e=0;e<t.length;e++)Ee(t[e])}}function je(e,t){return e(t)}function Te(){}var $e=!1;function Me(e,t,n){if($e)return e(t,n);$e=!0;try{return je(e,t,n)}finally{$e=!1,(null!==ke||null!==Se)&&(Te(),Pe())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=bi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var ze=!1;if(u)try{var Re={};Object.defineProperty(Re,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Re,Re),window.removeEventListener("test",Re,Re)}catch(Rs){ze=!1}function Ne(e,t,n,r,i,a,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Le=!1,Oe=null,De=!1,Ie=null,_e={onError:function(e){Le=!0,Oe=e}};function Fe(e,t,n,r,i,a,o,s,l){Le=!1,Oe=null,Ne.apply(_e,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Be(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ue(e){if(Ve(e)!==e)throw Error(a(188))}function We(e){return e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ue(i),e;if(o===r)return Ue(i),t;o=o.sibling}throw Error(a(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(e),null!==e?He(e):null}function He(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=He(e);if(null!==t)return t;e=e.sibling}return null}var Ye=i.unstable_scheduleCallback,Xe=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,qe=i.unstable_requestPaint,Ke=i.unstable_now,Qe=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,Je=i.unstable_UserBlockingPriority,et=i.unstable_NormalPriority,tt=i.unstable_LowPriority,nt=i.unstable_IdlePriority,rt=null,it=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(ot(e)/st|0)|0},ot=Math.log,st=Math.LN2;var lt=64,ct=4194304;function ut(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=268435455&n;if(0!==o){var s=o&~i;0!==s?r=ut(s):0!==(a&=o)&&(r=ut(a))}else 0!==(o=n&~i)?r=ut(o):0!==a&&(r=ut(a));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(a=t&-t)||16===i&&0!==(4194240&a)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ft(){var e=lt;return 0===(4194240&(lt<<=1))&&(lt=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var bt,wt,kt,St,Et,Ct=!1,Pt=[],jt=null,Tt=null,$t=null,Mt=new Map,At=new Map,zt=[],Rt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nt(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Mt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Lt(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=vi(t))&&wt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Ot(e){var t=yi(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Be(n)))return e.blockedOn=t,void Et(e.priority,function(){kt(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Dt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&wt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function It(e,t,n){Dt(e)&&n.delete(t)}function _t(){Ct=!1,null!==jt&&Dt(jt)&&(jt=null),null!==Tt&&Dt(Tt)&&(Tt=null),null!==$t&&Dt($t)&&($t=null),Mt.forEach(It),At.forEach(It)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,Ct||(Ct=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,_t)))}function Vt(e){function t(t){return Ft(t,e)}if(0<Pt.length){Ft(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==jt&&Ft(jt,e),null!==Tt&&Ft(Tt,e),null!==$t&&Ft($t,e),Mt.forEach(t),At.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Ot(n),null===n.blockedOn&&zt.shift()}var Bt=b.ReactCurrentBatchConfig,Ut=!0;function Wt(e,t,n,r){var i=vt,a=Bt.transition;Bt.transition=null;try{vt=1,Yt(e,t,n,r)}finally{vt=i,Bt.transition=a}}function Ht(e,t,n,r){var i=vt,a=Bt.transition;Bt.transition=null;try{vt=4,Yt(e,t,n,r)}finally{vt=i,Bt.transition=a}}function Yt(e,t,n,r){if(Ut){var i=Gt(e,t,n,r);if(null===i)Ur(e,t,r,Xt,n),Nt(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return jt=Lt(jt,e,t,n,r,i),!0;case"dragenter":return Tt=Lt(Tt,e,t,n,r,i),!0;case"mouseover":return $t=Lt($t,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Mt.set(a,Lt(Mt.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,At.set(a,Lt(At.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Nt(e,r),4&t&&-1<Rt.indexOf(e)){for(;null!==i;){var a=vi(i);if(null!==a&&bt(a),null===(a=Gt(e,t,n,r))&&Ur(e,t,r,Xt,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Ur(e,t,r,null,n)}}var Xt=null;function Gt(e,t,n,r){if(Xt=null,null!==(e=yi(e=be(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Be(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Xt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qe()){case Ze:return 1;case Je:return 4;case et:case tt:return 16;case nt:return 536870912;default:return 16}default:return 16}}var Kt=null,Qt=null,Zt=null;function Jt(){if(Zt)return Zt;var e,t,n=Qt,r=n.length,i="value"in Kt?Kt.value:Kt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function en(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tn(){return!0}function nn(){return!1}function rn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?tn:nn,this.isPropagationStopped=nn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tn)},persist:function(){},isPersistent:tn}),t}var an,on,sn,ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=rn(ln),un=D({},ln,{view:0,detail:0}),dn=rn(un),pn=D({},un,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:En,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(an=e.screenX-sn.screenX,on=e.screenY-sn.screenY):on=an=0,sn=e),an)},movementY:function(e){return"movementY"in e?e.movementY:on}}),hn=rn(pn),fn=rn(D({},pn,{dataTransfer:0})),mn=rn(D({},un,{relatedTarget:0})),gn=rn(D({},ln,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vn=rn(yn),xn=rn(D({},ln,{data:0})),bn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function En(){return Sn}var Cn=D({},un,{key:function(e){if(e.key){var t=bn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=en(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:En,charCode:function(e){return"keypress"===e.type?en(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?en(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=rn(Cn),jn=rn(D({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Tn=rn(D({},un,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:En})),$n=rn(D({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),Mn=D({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=rn(Mn),zn=[9,13,27,32],Rn=u&&"CompositionEvent"in window,Nn=null;u&&"documentMode"in document&&(Nn=document.documentMode);var Ln=u&&"TextEvent"in window&&!Nn,On=u&&(!Rn||Nn&&8<Nn&&11>=Nn),Dn=String.fromCharCode(32),In=!1;function _n(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Bn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Un(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Bn[e.type]:"textarea"===t}function Wn(e,t,n,r){Ce(r),0<(t=Hr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hn=null,Yn=null;function Xn(e){Dr(e,0)}function Gn(e){if(X(xi(e)))return e}function qn(e,t){if("change"===e)return t}var Kn=!1;if(u){var Qn;if(u){var Zn="oninput"in document;if(!Zn){var Jn=document.createElement("div");Jn.setAttribute("oninput","return;"),Zn="function"===typeof Jn.oninput}Qn=Zn}else Qn=!1;Kn=Qn&&(!document.documentMode||9<document.documentMode)}function er(){Hn&&(Hn.detachEvent("onpropertychange",tr),Yn=Hn=null)}function tr(e){if("value"===e.propertyName&&Gn(Yn)){var t=[];Wn(t,Yn,e,be(e)),Me(Xn,t)}}function nr(e,t,n){"focusin"===e?(er(),Yn=n,(Hn=t).attachEvent("onpropertychange",tr)):"focusout"===e&&er()}function rr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Yn)}function ir(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var or="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(or(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!or(e[i],t[i]))return!1}return!0}function lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=lr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=lr(r)}}function ur(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ur(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function dr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(Fs){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=dr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ur(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=void 0===r.end?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=cr(n,a);var o=cr(n,r);i&&o&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fr=u&&"documentMode"in document&&11>=document.documentMode,mr=null,gr=null,yr=null,vr=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;vr||null==mr||mr!==G(r)||("selectionStart"in(r=mr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Hr(gr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},kr={},Sr={};function Er(e){if(kr[e])return kr[e];if(!wr[e])return e;var t,n=wr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Sr)return kr[e]=n[t];return e}u&&(Sr=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);var Cr=Er("animationend"),Pr=Er("animationiteration"),jr=Er("animationstart"),Tr=Er("transitionend"),$r=new Map,Mr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){$r.set(e,t),l(t,[e])}for(var zr=0;zr<Mr.length;zr++){var Rr=Mr[zr];Ar(Rr.toLowerCase(),"on"+(Rr[0].toUpperCase()+Rr.slice(1)))}Ar(Cr,"onAnimationEnd"),Ar(Pr,"onAnimationIteration"),Ar(jr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Tr,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nr));function Or(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,l,c){if(Fe.apply(this,arguments),Le){if(!Le)throw Error(a(198));var u=Oe;Le=!1,Oe=null,De||(De=!0,Ie=u)}}(r,t,void 0,e),e.currentTarget=null}function Dr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;Or(i,s,c),a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;Or(i,s,c),a=l}}}if(De)throw e=Ie,De=!1,Ie=null,e}function Ir(e,t){var n=t[fi];void 0===n&&(n=t[fi]=new Set);var r=e+"__bubble";n.has(r)||(Br(t,e,2,!1),n.add(r))}function _r(e,t,n){var r=0;t&&(r|=4),Br(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Fr]){e[Fr]=!0,o.forEach(function(t){"selectionchange"!==t&&(Lr.has(t)||_r(t,!1,e),_r(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,_r("selectionchange",!1,t))}}function Br(e,t,n,r){switch(qt(t)){case 1:var i=Wt;break;case 4:i=Ht;break;default:i=Yt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ur(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==s;){if(null===(o=yi(s)))return;if(5===(l=o.tag)||6===l){r=a=o;continue e}s=s.parentNode}}r=r.return}Me(function(){var r=a,i=be(n),o=[];e:{var s=$r.get(e);if(void 0!==s){var l=cn,c=e;switch(e){case"keypress":if(0===en(n))break e;case"keydown":case"keyup":l=Pn;break;case"focusin":c="focus",l=mn;break;case"focusout":c="blur",l=mn;break;case"beforeblur":case"afterblur":l=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Tn;break;case Cr:case Pr:case jr:l=gn;break;case Tr:l=$n;break;case"scroll":l=dn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=vn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=jn}var u=0!==(4&t),d=!u&&"scroll"===e,p=u?null!==s?s+"Capture":null:s;u=[];for(var h,f=r;null!==f;){var m=(h=f).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==p&&(null!=(m=Ae(f,p))&&u.push(Wr(f,m,h)))),d)break;f=f.return}0<u.length&&(s=new l(s,c,null,n,i),o.push({event:s,listeners:u}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===xe||!(c=n.relatedTarget||n.fromElement)||!yi(c)&&!c[hi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(c=(c=n.relatedTarget||n.toElement)?yi(c):null)&&(c!==(d=Ve(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(l=null,c=r),l!==c)){if(u=hn,m="onMouseLeave",p="onMouseEnter",f="mouse","pointerout"!==e&&"pointerover"!==e||(u=jn,m="onPointerLeave",p="onPointerEnter",f="pointer"),d=null==l?s:xi(l),h=null==c?s:xi(c),(s=new u(m,f+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,yi(i)===r&&((u=new u(p,f+"enter",c,n,i)).target=h,u.relatedTarget=d,m=u),d=m,l&&c)e:{for(p=c,f=0,h=u=l;h;h=Yr(h))f++;for(h=0,m=p;m;m=Yr(m))h++;for(;0<f-h;)u=Yr(u),f--;for(;0<h-f;)p=Yr(p),h--;for(;f--;){if(u===p||null!==p&&u===p.alternate)break e;u=Yr(u),p=Yr(p)}u=null}else u=null;null!==l&&Xr(o,s,l,u,!1),null!==c&&null!==d&&Xr(o,d,c,u,!0)}if("select"===(l=(s=r?xi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=qn;else if(Un(s))if(Kn)g=ar;else{g=rr;var y=nr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=ir);switch(g&&(g=g(e,r))?Wn(o,g,n,i):(y&&y(e,s,r),"focusout"===e&&(y=s._wrapperState)&&y.controlled&&"number"===s.type&&ee(s,"number",s.value)),y=r?xi(r):window,e){case"focusin":(Un(y)||"true"===y.contentEditable)&&(mr=y,gr=r,yr=null);break;case"focusout":yr=gr=mr=null;break;case"mousedown":vr=!0;break;case"contextmenu":case"mouseup":case"dragend":vr=!1,xr(o,n,i);break;case"selectionchange":if(fr)break;case"keydown":case"keyup":xr(o,n,i)}var v;if(Rn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Vn?_n(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(On&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Vn&&(v=Jt()):(Qt="value"in(Kt=i)?Kt.value:Kt.textContent,Vn=!0)),0<(y=Hr(r,x)).length&&(x=new xn(x,e,null,n,i),o.push({event:x,listeners:y}),v?x.data=v:null!==(v=Fn(n))&&(x.data=v))),(v=Ln?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(In=!0,Dn);case"textInput":return(e=t.data)===Dn&&In?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!Rn&&_n(e,t)?(e=Jt(),Zt=Qt=Kt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return On&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Hr(r,"onBeforeInput")).length&&(i=new xn("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}Dr(o,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;5===i.tag&&null!==a&&(i=a,null!=(a=Ae(e,n))&&r.unshift(Wr(e,a,i)),null!=(a=Ae(e,t))&&r.push(Wr(e,a,i))),e=e.return}return r}function Yr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Xr(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==c&&(s=c,i?null!=(l=Ae(n,a))&&o.unshift(Wr(n,l,s)):i||null!=(l=Ae(n,a))&&o.push(Wr(n,l,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Kr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function Qr(e,t,n){if(t=Kr(t),Kr(e)!==t&&n)throw Error(a(425))}function Zr(){}var Jr=null,ei=null;function ti(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ni="function"===typeof setTimeout?setTimeout:void 0,ri="function"===typeof clearTimeout?clearTimeout:void 0,ii="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ii?function(e){return ii.resolve(null).then(e).catch(oi)}:ni;function oi(e){setTimeout(function(){throw e})}function si(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Vt(t)}function li(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var ui=Math.random().toString(36).slice(2),di="__reactFiber$"+ui,pi="__reactProps$"+ui,hi="__reactContainer$"+ui,fi="__reactEvents$"+ui,mi="__reactListeners$"+ui,gi="__reactHandles$"+ui;function yi(e){var t=e[di];if(t)return t;for(var n=e.parentNode;n;){if(t=n[hi]||n[di]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[di])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[di]||e[hi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(a(33))}function bi(e){return e[pi]||null}var wi=[],ki=-1;function Si(e){return{current:e}}function Ei(e){0>ki||(e.current=wi[ki],wi[ki]=null,ki--)}function Ci(e,t){ki++,wi[ki]=e.current,e.current=t}var Pi={},ji=Si(Pi),Ti=Si(!1),$i=Pi;function Mi(e,t){var n=e.type.contextTypes;if(!n)return Pi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,a={};for(i in n)a[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ai(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Ei(Ti),Ei(ji)}function Ri(e,t,n){if(ji.current!==Pi)throw Error(a(168));Ci(ji,t),Ci(Ti,n)}function Ni(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(a(108,U(e)||"Unknown",i));return D({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pi,$i=ji.current,Ci(ji,e),Ci(Ti,Ti.current),!0}function Oi(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=Ni(e,t,$i),r.__reactInternalMemoizedMergedChildContext=e,Ei(Ti),Ei(ji),Ci(ji,e)):Ei(Ti),Ci(Ti,n)}var Di=null,Ii=!1,_i=!1;function Fi(e){null===Di?Di=[e]:Di.push(e)}function Vi(){if(!_i&&null!==Di){_i=!0;var e=0,t=vt;try{var n=Di;for(vt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Di=null,Ii=!1}catch(Ms){throw null!==Di&&(Di=Di.slice(e+1)),Ye(Ze,Vi),Ms}finally{vt=t,_i=!1}}return null}var Bi=[],Ui=0,Wi=null,Hi=0,Yi=[],Xi=0,Gi=null,qi=1,Ki="";function Qi(e,t){Bi[Ui++]=Hi,Bi[Ui++]=Wi,Wi=e,Hi=t}function Zi(e,t,n){Yi[Xi++]=qi,Yi[Xi++]=Ki,Yi[Xi++]=Gi,Gi=e;var r=qi;e=Ki;var i=32-at(r)-1;r&=~(1<<i),n+=1;var a=32-at(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qi=1<<32-at(t)+i|n<<i|r,Ki=a+e}else qi=1<<a|n<<i|r,Ki=e}function Ji(e){null!==e.return&&(Qi(e,1),Zi(e,1,0))}function ea(e){for(;e===Wi;)Wi=Bi[--Ui],Bi[Ui]=null,Hi=Bi[--Ui],Bi[Ui]=null;for(;e===Gi;)Gi=Yi[--Xi],Yi[Xi]=null,Ki=Yi[--Xi],Yi[Xi]=null,qi=Yi[--Xi],Yi[Xi]=null}var ta=null,na=null,ra=!1,ia=null;function aa(e,t){var n=_c(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function oa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ta=e,na=li(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ta=e,na=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:qi,overflow:Ki}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=_c(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ta=e,na=null,!0);default:return!1}}function sa(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function la(e){if(ra){var t=na;if(t){var n=t;if(!oa(e,t)){if(sa(e))throw Error(a(418));t=li(n.nextSibling);var r=ta;t&&oa(e,t)?aa(r,n):(e.flags=-4097&e.flags|2,ra=!1,ta=e)}}else{if(sa(e))throw Error(a(418));e.flags=-4097&e.flags|2,ra=!1,ta=e}}}function ca(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ta=e}function ua(e){if(e!==ta)return!1;if(!ra)return ca(e),ra=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ti(e.type,e.memoizedProps)),t&&(t=na)){if(sa(e))throw da(),Error(a(418));for(;t;)aa(e,t),t=li(t.nextSibling)}if(ca(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){na=li(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}na=null}}else na=ta?li(e.stateNode.nextSibling):null;return!0}function da(){for(var e=na;e;)e=li(e.nextSibling)}function pa(){na=ta=null,ra=!1}function ha(e){null===ia?ia=[e]:ia.push(e)}var fa=b.ReactCurrentBatchConfig;function ma(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=i.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ya(e){return(0,e._init)(e._payload)}function va(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Vc(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Hc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===z&&ya(a)===t.type)?((r=i(t,n.props)).ref=ma(e,t,n),r.return=e,r):((r=Bc(n.type,n.key,n.props,null,e.mode,r)).ref=ma(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Yc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Uc(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Hc(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Bc(t.type,t.key,t.props,null,e.mode,n)).ref=ma(e,null,t),n.return=e,n;case k:return(t=Yc(t,e.mode,n)).return=e,t;case z:return p(e,(0,t._init)(t._payload),n)}if(te(t)||L(t))return(t=Uc(t,e.mode,n,null)).return=e,t;ga(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?c(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case z:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||L(n))return null!==i?null:d(e,t,n,r,null);ga(e,n)}return null}function f(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case z:return f(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||L(r))return d(t,e=e.get(n)||null,r,i,null);ga(t,r)}return null}function m(i,a,s,l){for(var c=null,u=null,d=a,m=a=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=h(i,d,s[m],l);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(i,d),a=o(y,a,m),null===u?c=y:u.sibling=y,u=y,d=g}if(m===s.length)return n(i,d),ra&&Qi(i,m),c;if(null===d){for(;m<s.length;m++)null!==(d=p(i,s[m],l))&&(a=o(d,a,m),null===u?c=d:u.sibling=d,u=d);return ra&&Qi(i,m),c}for(d=r(i,d);m<s.length;m++)null!==(g=f(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),a=o(g,a,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),ra&&Qi(i,m),c}function g(i,s,l,c){var u=L(l);if("function"!==typeof u)throw Error(a(150));if(null==(l=u.call(l)))throw Error(a(151));for(var d=u=null,m=s,g=s=0,y=null,v=l.next();null!==m&&!v.done;g++,v=l.next()){m.index>g?(y=m,m=null):y=m.sibling;var x=h(i,m,v.value,c);if(null===x){null===m&&(m=y);break}e&&m&&null===x.alternate&&t(i,m),s=o(x,s,g),null===d?u=x:d.sibling=x,d=x,m=y}if(v.done)return n(i,m),ra&&Qi(i,g),u;if(null===m){for(;!v.done;g++,v=l.next())null!==(v=p(i,v.value,c))&&(s=o(v,s,g),null===d?u=v:d.sibling=v,d=v);return ra&&Qi(i,g),u}for(m=r(i,m);!v.done;g++,v=l.next())null!==(v=f(m,i,g,v.value,c))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),s=o(v,s,g),null===d?u=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(i,e)}),ra&&Qi(i,g),u}return function e(r,a,o,l){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var c=o.key,u=a;null!==u;){if(u.key===c){if((c=o.type)===S){if(7===u.tag){n(r,u.sibling),(a=i(u,o.props.children)).return=r,r=a;break e}}else if(u.elementType===c||"object"===typeof c&&null!==c&&c.$$typeof===z&&ya(c)===u.type){n(r,u.sibling),(a=i(u,o.props)).ref=ma(r,u,o),a.return=r,r=a;break e}n(r,u);break}t(r,u),u=u.sibling}o.type===S?((a=Uc(o.props.children,r.mode,l,o.key)).return=r,r=a):((l=Bc(o.type,o.key,o.props,null,r.mode,l)).ref=ma(r,a,o),l.return=r,r=l)}return s(r);case k:e:{for(u=o.key;null!==a;){if(a.key===u){if(4===a.tag&&a.stateNode.containerInfo===o.containerInfo&&a.stateNode.implementation===o.implementation){n(r,a.sibling),(a=i(a,o.children||[])).return=r,r=a;break e}n(r,a);break}t(r,a),a=a.sibling}(a=Yc(o,r.mode,l)).return=r,r=a}return s(r);case z:return e(r,a,(u=o._init)(o._payload),l)}if(te(o))return m(r,a,o,l);if(L(o))return g(r,a,o,l);ga(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==a&&6===a.tag?(n(r,a.sibling),(a=i(a,o)).return=r,r=a):(n(r,a),(a=Hc(o,r.mode,l)).return=r,r=a),s(r)):n(r,a)}}var xa=va(!0),ba=va(!1),wa=Si(null),ka=null,Sa=null,Ea=null;function Ca(){Ea=Sa=ka=null}function Pa(e){var t=wa.current;Ei(wa),e._currentValue=t}function ja(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ta(e,t){ka=e,Ea=Sa=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(vs=!0),e.firstContext=null)}function $a(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},null===Sa){if(null===ka)throw Error(a(308));Sa=e,ka.dependencies={lanes:0,firstContext:e}}else Sa=Sa.next=e;return t}var Ma=null;function Aa(e){null===Ma?Ma=[e]:Ma.push(e)}function za(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ra(e,r)}function Ra(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Na=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Da(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ol)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ra(e,n)}return null===(i=r.interleaved)?(t.next=t,Aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ra(e,n)}function _a(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Fa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Va(e,t,n,r){var i=e.updateQueue;Na=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var p=s.lane,h=s.eventTime;if((r&p)===p){null!==u&&(u=u.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var f=e,m=s;switch(p=t,h=n,m.tag){case 1:if("function"===typeof(f=m.payload)){d=f.call(h,d,p);break e}d=f;break e;case 3:f.flags=-65537&f.flags|128;case 0:if(null===(p="function"===typeof(f=m.payload)?f.call(h,d,p):f)||void 0===p)break e;d=D({},d,p);break e;case 2:Na=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(p=i.effects)?i.effects=[s]:p.push(s))}else h={eventTime:h,lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,o|=p;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(p=s).next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}if(null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null!==(t=i.shared.interleaved)){i=t;do{o|=i.lane,i=i.next}while(i!==t)}else null===a&&(i.shared.lanes=0);Wl|=o,e.lanes=o,e.memoizedState=d}}function Ba(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(a(191,i));i.call(r)}}}var Ua={},Wa=Si(Ua),Ha=Si(Ua),Ya=Si(Ua);function Xa(e){if(e===Ua)throw Error(a(174));return e}function Ga(e,t){switch(Ci(Ya,t),Ci(Ha,e),Ci(Wa,Ua),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ei(Wa),Ci(Wa,t)}function qa(){Ei(Wa),Ei(Ha),Ei(Ya)}function Ka(e){Xa(Ya.current);var t=Xa(Wa.current),n=le(t,e.type);t!==n&&(Ci(Ha,e),Ci(Wa,n))}function Qa(e){Ha.current===e&&(Ei(Wa),Ei(Ha))}var Za=Si(0);function Ja(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var eo=[];function to(){for(var e=0;e<eo.length;e++)eo[e]._workInProgressVersionPrimary=null;eo.length=0}var no=b.ReactCurrentDispatcher,ro=b.ReactCurrentBatchConfig,io=0,ao=null,oo=null,so=null,lo=!1,co=!1,uo=0,po=0;function ho(){throw Error(a(321))}function fo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!or(e[n],t[n]))return!1;return!0}function mo(e,t,n,r,i,o){if(io=o,ao=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,no.current=null===e||null===e.memoizedState?Zo:Jo,e=n(r,i),co){o=0;do{if(co=!1,uo=0,25<=o)throw Error(a(301));o+=1,so=oo=null,t.updateQueue=null,no.current=es,e=n(r,i)}while(co)}if(no.current=Qo,t=null!==oo&&null!==oo.next,io=0,so=oo=ao=null,lo=!1,t)throw Error(a(300));return e}function go(){var e=0!==uo;return uo=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?ao.memoizedState=so=e:so=so.next=e,so}function vo(){if(null===oo){var e=ao.alternate;e=null!==e?e.memoizedState:null}else e=oo.next;var t=null===so?ao.memoizedState:so.next;if(null!==t)so=t,oo=e;else{if(null===e)throw Error(a(310));e={memoizedState:(oo=e).memoizedState,baseState:oo.baseState,baseQueue:oo.baseQueue,queue:oo.queue,next:null},null===so?ao.memoizedState=so=e:so=so.next=e}return so}function xo(e,t){return"function"===typeof t?t(e):t}function bo(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=oo,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((io&d)===d)null!==c&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===c?(l=c=p,s=r):c=c.next=p,ao.lanes|=d,Wl|=d}u=u.next}while(null!==u&&u!==o);null===c?s=r:c.next=l,or(r,t.memoizedState)||(vs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{o=i.lane,ao.lanes|=o,Wl|=o,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=vo(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);or(o,t.memoizedState)||(vs=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ko(){}function So(e,t){var n=ao,r=vo(),i=t(),o=!or(r.memoizedState,i);if(o&&(r.memoizedState=i,vs=!0),r=r.queue,Lo(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,Mo(9,Co.bind(null,n,r,i,t),void 0,null),null===Dl)throw Error(a(349));0!==(30&io)||Eo(n,t,i)}return i}function Eo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ao.updateQueue)?(t={lastEffect:null,stores:null},ao.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Co(e,t,n,r){t.value=n,t.getSnapshot=r,jo(t)&&To(e)}function Po(e,t,n){return n(function(){jo(t)&&To(e)})}function jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!or(e,n)}catch(Fs){return!0}}function To(e){var t=Ra(e,1);null!==t&&uc(t,e,1,-1)}function $o(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Xo.bind(null,ao,e),[t.memoizedState,e]}function Mo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=ao.updateQueue)?(t={lastEffect:null,stores:null},ao.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ao(){return vo().memoizedState}function zo(e,t,n,r){var i=yo();ao.flags|=e,i.memoizedState=Mo(1|t,n,void 0,void 0===r?null:r)}function Ro(e,t,n,r){var i=vo();r=void 0===r?null:r;var a=void 0;if(null!==oo){var o=oo.memoizedState;if(a=o.destroy,null!==r&&fo(r,o.deps))return void(i.memoizedState=Mo(t,n,a,r))}ao.flags|=e,i.memoizedState=Mo(1|t,n,a,r)}function No(e,t){return zo(8390656,8,e,t)}function Lo(e,t){return Ro(2048,8,e,t)}function Oo(e,t){return Ro(4,2,e,t)}function Do(e,t){return Ro(4,4,e,t)}function Io(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function _o(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4,4,Io.bind(null,t,e),n)}function Fo(){}function Vo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bo(e,t){var n=vo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Uo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,vs=!0),e.memoizedState=n):(or(n,t)||(n=ft(),ao.lanes|=n,Wl|=n,e.baseState=!0),t)}function Wo(e,t){var n=vt;vt=0!==n&&4>n?n:4,e(!0);var r=ro.transition;ro.transition={};try{e(!1),t()}finally{vt=n,ro.transition=r}}function Ho(){return vo().memoizedState}function Yo(e,t,n){var r=cc(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))qo(t,n);else if(null!==(n=za(e,t,n,r))){uc(n,e,r,lc()),Ko(n,t,r)}}function Xo(e,t,n){var r=cc(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))qo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,or(s,o)){var l=t.interleaved;return null===l?(i.next=i,Aa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(zs){}null!==(n=za(e,t,i,r))&&(uc(n,e,r,i=lc()),Ko(n,t,r))}}function Go(e){var t=e.alternate;return e===ao||null!==t&&t===ao}function qo(e,t){co=lo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ko(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Qo={readContext:$a,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Zo={readContext:$a,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:$a,useEffect:No,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,zo(4194308,4,Io.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yo.bind(null,ao,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:$o,useDebugValue:Fo,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=$o(!1),t=e[0];return e=Wo.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ao,i=yo();if(ra){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===Dl)throw Error(a(349));0!==(30&io)||Eo(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,No(Po.bind(null,r,o,e),[e]),r.flags|=2048,Mo(9,Co.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=Dl.identifierPrefix;if(ra){var n=Ki;t=":"+t+"R"+(n=(qi&~(1<<32-at(qi)-1)).toString(32)+n),0<(n=uo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jo={readContext:$a,useCallback:Vo,useContext:$a,useEffect:Lo,useImperativeHandle:_o,useInsertionEffect:Oo,useLayoutEffect:Do,useMemo:Bo,useReducer:bo,useRef:Ao,useState:function(){return bo(xo)},useDebugValue:Fo,useDeferredValue:function(e){return Uo(vo(),oo.memoizedState,e)},useTransition:function(){return[bo(xo)[0],vo().memoizedState]},useMutableSource:ko,useSyncExternalStore:So,useId:Ho,unstable_isNewReconciler:!1},es={readContext:$a,useCallback:Vo,useContext:$a,useEffect:Lo,useImperativeHandle:_o,useInsertionEffect:Oo,useLayoutEffect:Do,useMemo:Bo,useReducer:wo,useRef:Ao,useState:function(){return wo(xo)},useDebugValue:Fo,useDeferredValue:function(e){var t=vo();return null===oo?t.memoizedState=e:Uo(t,oo.memoizedState,e)},useTransition:function(){return[wo(xo)[0],vo().memoizedState]},useMutableSource:ko,useSyncExternalStore:So,useId:Ho,unstable_isNewReconciler:!1};function ts(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ns(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var rs={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=lc(),i=cc(e),a=Da(r,i);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ia(e,a,i))&&(uc(t,e,i,r),_a(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=lc(),i=cc(e),a=Da(r,i);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=Ia(e,a,i))&&(uc(t,e,i,r),_a(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=lc(),r=cc(e),i=Da(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Ia(e,i,r))&&(uc(t,e,r,n),_a(t,e,r))}};function is(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(i,a))}function as(e,t,n){var r=!1,i=Pi,a=t.contextType;return"object"===typeof a&&null!==a?a=$a(a):(i=Ai(t)?$i:ji.current,a=(r=null!==(r=t.contextTypes)&&void 0!==r)?Mi(e,i):Pi),t=new t(n,a),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=rs,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function os(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&rs.enqueueReplaceState(t,t.state,null)}function ss(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},La(e);var a=t.contextType;"object"===typeof a&&null!==a?i.context=$a(a):(a=Ai(t)?$i:ji.current,i.context=Mi(e,a)),i.state=e.memoizedState,"function"===typeof(a=t.getDerivedStateFromProps)&&(ns(e,t,a,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&rs.enqueueReplaceState(i,i.state,null),Va(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function ls(e,t){try{var n="",r=t;do{n+=V(r),r=r.return}while(r);var i=n}catch(Vs){i="\nError generating stack: "+Vs.message+"\n"+Vs.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function us(e,t){try{console.error(t.value)}catch(Os){setTimeout(function(){throw Os})}}var ds="function"===typeof WeakMap?WeakMap:Map;function ps(e,t,n){(n=Da(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zl||(Zl=!0,Jl=r),us(0,t)},n}function hs(e,t,n){(n=Da(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){us(0,t)}}var a=e.stateNode;return null!==a&&"function"===typeof a.componentDidCatch&&(n.callback=function(){us(0,t),"function"!==typeof r&&(null===ec?ec=new Set([this]):ec.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fs(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new ds;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Rc.bind(null,e,t,n),t.then(e,e))}function ms(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function gs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Da(-1,1)).tag=2,Ia(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,vs=!1;function xs(e,t,n,r){t.child=null===e?ba(t,null,n,r):xa(t,e.child,n,r)}function bs(e,t,n,r,i){n=n.render;var a=t.ref;return Ta(t,i),r=mo(e,t,n,r,a,i),n=go(),null===e||vs?(ra&&n&&Ji(t),t.flags|=1,xs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qs(e,t,i))}function ws(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Fc(a)||void 0!==a.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Bc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,ks(e,t,a,r,i))}if(a=e.child,0===(e.lanes&i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Qs(e,t,i)}return t.flags|=1,(e=Vc(a,r)).ref=t.ref,e.return=t,t.child=e}function ks(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(sr(a,r)&&e.ref===t.ref){if(vs=!1,t.pendingProps=r=a,0===(e.lanes&i))return t.lanes=e.lanes,Qs(e,t,i);0!==(131072&e.flags)&&(vs=!0)}}return Cs(e,t,n,r,i)}function Ss(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Vl,Fl),Fl|=n;else{if(0===(1073741824&n))return e=null!==a?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Vl,Fl),Fl|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==a?a.baseLanes:n,Ci(Vl,Fl),Fl|=r}else null!==a?(r=a.baseLanes|n,t.memoizedState=null):r=n,Ci(Vl,Fl),Fl|=r;return xs(e,t,i,n),t.child}function Es(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,r,i){var a=Ai(n)?$i:ji.current;return a=Mi(t,a),Ta(t,i),n=mo(e,t,n,r,a,i),r=go(),null===e||vs?(ra&&r&&Ji(t),t.flags|=1,xs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qs(e,t,i))}function Ps(e,t,n,r,i){if(Ai(n)){var a=!0;Li(t)}else a=!1;if(Ta(t,i),null===t.stateNode)Ks(e,t),as(t,n,r),ss(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=$a(c):c=Mi(t,c=Ai(n)?$i:ji.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==r||l!==c)&&os(t,o,r,c),Na=!1;var p=t.memoizedState;o.state=p,Va(t,r,o,i),l=t.memoizedState,s!==r||p!==l||Ti.current||Na?("function"===typeof u&&(ns(t,n,u,r),l=t.memoizedState),(s=Na||is(t,n,s,r,p,l,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Oa(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ts(t.type,s),o.props=c,d=t.pendingProps,p=o.context,"object"===typeof(l=n.contextType)&&null!==l?l=$a(l):l=Mi(t,l=Ai(n)?$i:ji.current);var h=n.getDerivedStateFromProps;(u="function"===typeof h||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(s!==d||p!==l)&&os(t,o,r,l),Na=!1,p=t.memoizedState,o.state=p,Va(t,r,o,i);var f=t.memoizedState;s!==d||p!==f||Ti.current||Na?("function"===typeof h&&(ns(t,n,h,r),f=t.memoizedState),(c=Na||is(t,n,c,r,p,f,l)||!1)?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,f,l),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=l,r=c):("function"!==typeof o.componentDidUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return js(e,t,n,r,a,i)}function js(e,t,n,r,i,a){Es(e,t);var o=0!==(128&t.flags);if(!r&&!o)return i&&Oi(t,n,!1),Qs(e,t,a);r=t.stateNode,ys.current=t;var s=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xa(t,e.child,null,a),t.child=xa(t,null,s,a)):xs(e,t,s,a),t.memoizedState=r.state,i&&Oi(t,n,!0),t.child}function Ts(e){var t=e.stateNode;t.pendingContext?Ri(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ri(0,t.context,!1),Ga(e,t.containerInfo)}function $s(e,t,n,r,i){return pa(),ha(i),t.flags|=256,xs(e,t,n,r),t.child}var Ns,Ls,Ds,Is={dehydrated:null,treeContext:null,retryLane:0};function _s(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bs(e,t,n){var r,i=t.pendingProps,o=Za.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ci(Za,1&o),null===e)return la(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Wc(l,i,0,null),e=Uc(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=_s(n),t.memoizedState=Is,e):Ws(t,l));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,i,o,s){if(n)return 256&t.flags?(t.flags&=-257,Hs(e,t,s,r=cs(Error(a(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Wc({mode:"visible",children:r.children},i,0,null),(o=Uc(o,i,s,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xa(t,e.child,null,s),t.child.memoizedState=_s(s),t.memoizedState=Is,o);if(0===(1&t.mode))return Hs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Hs(e,t,s,r=cs(o=Error(a(419)),r,void 0))}if(l=0!==(s&e.childLanes),vs||l){if(null!==(r=Dl)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==o.retryLane&&(o.retryLane=i,Ra(e,i),uc(r,e,i,-1))}return Sc(),Hs(e,t,s,r=cs(Error(a(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Lc.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,na=li(i.nextSibling),ta=t,ra=!0,ia=null,null!==e&&(Yi[Xi++]=qi,Yi[Xi++]=Ki,Yi[Xi++]=Gi,qi=e.id,Ki=e.overflow,Gi=t),t=Ws(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,o,n);if(s){s=i.fallback,l=t.mode,r=(o=e.child).sibling;var c={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==o?((i=t.child).childLanes=0,i.pendingProps=c,t.deletions=null):(i=Vc(o,c)).subtreeFlags=14680064&o.subtreeFlags,null!==r?s=Vc(r,s):(s=Uc(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?_s(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Is,i}return e=(s=e.child).sibling,i=Vc(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ws(e,t){return(t=Wc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Hs(e,t,n,r){return null!==r&&ha(r),xa(t,e.child,null,n),(e=Ws(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),ja(e.return,t,n)}function Xs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(xs(e,t,r.children,n),0!==(2&(r=Za.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ys(e,n,t);else if(19===e.tag)Ys(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(Za,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ja(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ja(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xs(t,!0,n,null,a);break;case"together":Xs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ks(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Wl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Vc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Vc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Zs(e,t){if(!ra)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Js(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function el(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Js(t),null;case 1:case 17:return Ai(t.type)&&zi(),Js(t),null;case 3:return r=t.stateNode,qa(),Ei(Ti),Ei(ji),to(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ia&&(fc(ia),ia=null))),Js(t),null;case 5:Qa(t);var i=Xa(Ya.current);if(n=t.type,null!==e&&null!=t.stateNode)Ls(e,t,n,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(a(166));return Js(t),null}if(e=Xa(Wa.current),ua(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[di]=t,r[pi]=o,e=0!==(1&t.mode),n){case"dialog":Ir("cancel",r),Ir("close",r);break;case"iframe":case"object":case"embed":Ir("load",r);break;case"video":case"audio":for(i=0;i<Nr.length;i++)Ir(Nr[i],r);break;case"source":Ir("error",r);break;case"img":case"image":case"link":Ir("error",r),Ir("load",r);break;case"details":Ir("toggle",r);break;case"input":K(r,o),Ir("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Ir("invalid",r);break;case"textarea":ie(r,o),Ir("invalid",r)}for(var l in ye(n,o),i=null,o)if(o.hasOwnProperty(l)){var c=o[l];"children"===l?"string"===typeof c?r.textContent!==c&&(!0!==o.suppressHydrationWarning&&Qr(r.textContent,c,e),i=["children",c]):"number"===typeof c&&r.textContent!==""+c&&(!0!==o.suppressHydrationWarning&&Qr(r.textContent,c,e),i=["children",""+c]):s.hasOwnProperty(l)&&null!=c&&"onScroll"===l&&Ir("scroll",r)}switch(n){case"input":Y(r),J(r,o,!0);break;case"textarea":Y(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[di]=t,e[pi]=r,Ns(e,t),t.stateNode=e;e:{switch(l=ve(n,r),n){case"dialog":Ir("cancel",e),Ir("close",e),i=r;break;case"iframe":case"object":case"embed":Ir("load",e),i=r;break;case"video":case"audio":for(i=0;i<Nr.length;i++)Ir(Nr[i],e);i=r;break;case"source":Ir("error",e),i=r;break;case"img":case"image":case"link":Ir("error",e),Ir("load",e),i=r;break;case"details":Ir("toggle",e),i=r;break;case"input":K(e,r),i=q(e,r),Ir("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Ir("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Ir("invalid",e)}for(o in ye(n,i),c=i)if(c.hasOwnProperty(o)){var u=c[o];"style"===o?me(e,u):"dangerouslySetInnerHTML"===o?null!=(u=u?u.__html:void 0)&&ue(e,u):"children"===o?"string"===typeof u?("textarea"!==n||""!==u)&&de(e,u):"number"===typeof u&&de(e,""+u):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(s.hasOwnProperty(o)?null!=u&&"onScroll"===o&&Ir("scroll",e):null!=u&&x(e,o,u,l))}switch(n){case"input":Y(e),J(e,r,!1);break;case"textarea":Y(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Js(t),null;case 6:if(e&&null!=t.stateNode)Ds(0,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(n=Xa(Ya.current),Xa(Wa.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[di]=t,(o=r.nodeValue!==n)&&null!==(e=ta))switch(e.tag){case 3:Qr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Qr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[di]=t,t.stateNode=r}return Js(t),null;case 13:if(Ei(Za),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ra&&null!==na&&0!==(1&t.mode)&&0===(128&t.flags))da(),pa(),t.flags|=98560,o=!1;else if(o=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[di]=t}else pa(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Js(t),o=!1}else null!==ia&&(fc(ia),ia=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Za.current)?0===Bl&&(Bl=3):Sc())),null!==t.updateQueue&&(t.flags|=4),Js(t),null);case 4:return qa(),null===e&&Vr(t.stateNode.containerInfo),Js(t),null;case 10:return Pa(t.type._context),Js(t),null;case 19:if(Ei(Za),null===(o=t.memoizedState))return Js(t),null;if(r=0!==(128&t.flags),null===(l=o.rendering))if(r)Zs(o,!1);else{if(0!==Bl||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=Ja(e))){for(t.flags|=128,Zs(o,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(l=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(Za,1&Za.current|2),t.child}e=e.sibling}null!==o.tail&&Ke()>Kl&&(t.flags|=128,r=!0,Zs(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Ja(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Zs(o,!0),null===o.tail&&"hidden"===o.tailMode&&!l.alternate&&!ra)return Js(t),null}else 2*Ke()-o.renderingStartTime>Kl&&1073741824!==n&&(t.flags|=128,r=!0,Zs(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=o.last)?n.sibling=l:t.child=l,o.last=l)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ke(),t.sibling=null,n=Za.current,Ci(Za,r?1&n|2:1&n),t):(Js(t),null);case 22:case 23:return xc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Fl)&&(Js(t),6&t.subtreeFlags&&(t.flags|=8192)):Js(t),null;case 24:case 25:return null}throw Error(a(156,t.tag))}function tl(e,t){switch(ea(t),t.tag){case 1:return Ai(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qa(),Ei(Ti),Ei(ji),to(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Qa(t),null;case 13:if(Ei(Za),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));pa()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ei(Za),null;case 4:return qa(),null;case 10:return Pa(t.type._context),null;case 22:case 23:return xc(),null;default:return null}}Ns=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ls=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Xa(Wa.current);var a,o=null;switch(n){case"input":i=q(e,i),r=q(e,r),o=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),o=[];break;case"textarea":i=re(e,i),r=re(e,r),o=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(u in ye(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(s.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(null!=c||null!=l))if("style"===u)if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else"dangerouslySetInnerHTML"===u?(c=c?c.__html:void 0,l=l?l.__html:void 0,null!=c&&l!==c&&(o=o||[]).push(u,c)):"children"===u?"string"!==typeof c&&"number"!==typeof c||(o=o||[]).push(u,""+c):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(s.hasOwnProperty(u)?(null!=c&&"onScroll"===u&&Ir("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Ds=function(e,t,n,r){n!==r&&(t.flags|=4)};var nl=!1,rl=!1,il="function"===typeof WeakSet?WeakSet:Set,al=null;function ol(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(Fs){zc(e,t,Fs)}else n.current=null}function sl(e,t,n){try{n()}catch(Fs){zc(e,t,Fs)}}var ll=!1;function cl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,void 0!==a&&sl(t,n,a)}i=i.next}while(i!==r)}}function ul(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function hl(e){var t=e.alternate;null!==t&&(e.alternate=null,hl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[di],delete t[pi],delete t[fi],delete t[mi],delete t[gi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fl(e){return 5===e.tag||3===e.tag||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||fl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(yl(e,t,n),e=e.sibling;null!==e;)yl(e,t,n),e=e.sibling}var vl=null,xl=!1;function bl(e,t,n){for(n=n.child;null!==n;)wl(e,t,n),n=n.sibling}function wl(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(rt,n)}catch(Us){}switch(n.tag){case 5:rl||ol(n,t);case 6:var r=vl,i=xl;vl=null,bl(e,t,n),xl=i,null!==(vl=r)&&(xl?(e=vl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):vl.removeChild(n.stateNode));break;case 18:null!==vl&&(xl?(e=vl,n=n.stateNode,8===e.nodeType?si(e.parentNode,n):1===e.nodeType&&si(e,n),Vt(e)):si(vl,n.stateNode));break;case 4:r=vl,i=xl,vl=n.stateNode.containerInfo,xl=!0,bl(e,t,n),vl=r,xl=i;break;case 0:case 11:case 14:case 15:if(!rl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,void 0!==o&&(0!==(2&a)||0!==(4&a))&&sl(n,t,o),i=i.next}while(i!==r)}bl(e,t,n);break;case 1:if(!rl&&(ol(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(Us){zc(n,t,Us)}bl(e,t,n);break;case 21:bl(e,t,n);break;case 22:1&n.mode?(rl=(r=rl)||null!==n.memoizedState,bl(e,t,n),rl=r):bl(e,t,n);break;default:bl(e,t,n)}}function kl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new il),t.forEach(function(t){var r=Oc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Sl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:vl=l.stateNode,xl=!1;break e;case 3:case 4:vl=l.stateNode.containerInfo,xl=!0;break e}l=l.return}if(null===vl)throw Error(a(160));wl(o,s,i),vl=null,xl=!1;var c=i.alternate;null!==c&&(c.return=null),i.return=null}catch(zs){zc(i,t,zs)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)El(t,e),t=t.sibling}function El(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Sl(t,e),Cl(e),4&r){try{cl(3,e,e.return),ul(3,e)}catch(As){zc(e,e.return,As)}try{cl(5,e,e.return)}catch(As){zc(e,e.return,As)}}break;case 1:Sl(t,e),Cl(e),512&r&&null!==n&&ol(n,n.return);break;case 5:if(Sl(t,e),Cl(e),512&r&&null!==n&&ol(n,n.return),32&e.flags){var i=e.stateNode;try{de(i,"")}catch(As){zc(e,e.return,As)}}if(4&r&&null!=(i=e.stateNode)){var o=e.memoizedProps,s=null!==n?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,null!==c)try{"input"===l&&"radio"===o.type&&null!=o.name&&Q(i,o),ve(l,s);var u=ve(l,o);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];"style"===d?me(i,p):"dangerouslySetInnerHTML"===d?ue(i,p):"children"===d?de(i,p):x(i,d,p,u)}switch(l){case"input":Z(i,o);break;case"textarea":ae(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var f=o.value;null!=f?ne(i,!!o.multiple,f,!1):h!==!!o.multiple&&(null!=o.defaultValue?ne(i,!!o.multiple,o.defaultValue,!0):ne(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(As){zc(e,e.return,As)}}break;case 6:if(Sl(t,e),Cl(e),4&r){if(null===e.stateNode)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(As){zc(e,e.return,As)}}break;case 3:if(Sl(t,e),Cl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(As){zc(e,e.return,As)}break;case 4:default:Sl(t,e),Cl(e);break;case 13:Sl(t,e),Cl(e),8192&(i=e.child).flags&&(o=null!==i.memoizedState,i.stateNode.isHidden=o,!o||null!==i.alternate&&null!==i.alternate.memoizedState||(ql=Ke())),4&r&&kl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(rl=(u=rl)||d,Sl(t,e),rl=u):Sl(t,e),Cl(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!d&&0!==(1&e.mode))for(al=e,d=e.child;null!==d;){for(p=al=d;null!==al;){switch(f=(h=al).child,h.tag){case 0:case 11:case 14:case 15:cl(4,h,h.return);break;case 1:ol(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(As){zc(r,n,As)}}break;case 5:ol(h,h.return);break;case 22:if(null!==h.memoizedState){$l(p);continue}}null!==f?(f.return=h,al=f):$l(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{i=p.stateNode,u?"function"===typeof(o=i.style).setProperty?o.setProperty("display","none","important"):o.display="none":(l=p.stateNode,s=void 0!==(c=p.memoizedProps.style)&&null!==c&&c.hasOwnProperty("display")?c.display:null,l.style.display=fe("display",s))}catch(As){zc(e,e.return,As)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(As){zc(e,e.return,As)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Sl(t,e),Cl(e),4&r&&kl(e);case 21:}}function Cl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(fl(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(de(i,""),r.flags&=-33),yl(e,ml(e),i);break;case 3:case 4:var o=r.stateNode.containerInfo;gl(e,ml(e),o);break;default:throw Error(a(161))}}catch(Gs){zc(e,e.return,Gs)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Pl(e,t,n){al=e,jl(e,t,n)}function jl(e,t,n){for(var r=0!==(1&e.mode);null!==al;){var i=al,a=i.child;if(22===i.tag&&r){var o=null!==i.memoizedState||nl;if(!o){var s=i.alternate,l=null!==s&&null!==s.memoizedState||rl;s=nl;var c=rl;if(nl=o,(rl=l)&&!c)for(al=i;null!==al;)l=(o=al).child,22===o.tag&&null!==o.memoizedState?Ml(i):null!==l?(l.return=o,al=l):Ml(i);for(;null!==a;)al=a,jl(a,t,n),a=a.sibling;al=i,nl=s,rl=c}Tl(e)}else 0!==(8772&i.subtreeFlags)&&null!==a?(a.return=i,al=a):Tl(e)}}function Tl(e){for(;null!==al;){var t=al;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:rl||ul(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!rl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ts(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Ba(t,o,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ba(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var d=u.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Vt(p)}}}break;default:throw Error(a(163))}rl||512&t.flags&&pl(t)}catch(h){zc(t,t.return,h)}}if(t===e){al=null;break}if(null!==(n=t.sibling)){n.return=t.return,al=n;break}al=t.return}}function $l(e){for(;null!==al;){var t=al;if(t===e){al=null;break}var n=t.sibling;if(null!==n){n.return=t.return,al=n;break}al=t.return}}function Ml(e){for(;null!==al;){var t=al;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ul(4,t)}catch(Gs){zc(t,n,Gs)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(Gs){zc(t,i,Gs)}}var a=t.return;try{pl(t)}catch(Gs){zc(t,a,Gs)}break;case 5:var o=t.return;try{pl(t)}catch(Gs){zc(t,o,Gs)}}}catch(Gs){zc(t,t.return,Gs)}if(t===e){al=null;break}var s=t.sibling;if(null!==s){s.return=t.return,al=s;break}al=t.return}}var Al,zl=Math.ceil,Rl=b.ReactCurrentDispatcher,Nl=b.ReactCurrentOwner,Ll=b.ReactCurrentBatchConfig,Ol=0,Dl=null,Il=null,_l=0,Fl=0,Vl=Si(0),Bl=0,Ul=null,Wl=0,Hl=0,Yl=0,Xl=null,Gl=null,ql=0,Kl=1/0,Ql=null,Zl=!1,Jl=null,ec=null,tc=!1,nc=null,rc=0,ic=0,ac=null,oc=-1,sc=0;function lc(){return 0!==(6&Ol)?Ke():-1!==oc?oc:oc=Ke()}function cc(e){return 0===(1&e.mode)?1:0!==(2&Ol)&&0!==_l?_l&-_l:null!==fa.transition?(0===sc&&(sc=ft()),sc):0!==(e=vt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function uc(e,t,n,r){if(50<ic)throw ic=0,ac=null,Error(a(185));gt(e,n,r),0!==(2&Ol)&&e===Dl||(e===Dl&&(0===(2&Ol)&&(Hl|=n),4===Bl&&mc(e,_l)),dc(e,r),1===n&&0===Ol&&0===(1&t.mode)&&(Kl=Ke()+500,Ii&&Vi()))}function dc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-at(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=pt(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}(e,t);var r=dt(e,e===Dl?_l:0);if(0===r)null!==n&&Xe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Xe(n),1===t)0===e.tag?function(e){Ii=!0,Fi(e)}(gc.bind(null,e)):Fi(gc.bind(null,e)),ai(function(){0===(6&Ol)&&Vi()}),n=null;else{switch(xt(r)){case 1:n=Ze;break;case 4:n=Je;break;case 16:default:n=et;break;case 536870912:n=nt}n=Dc(n,pc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pc(e,t){if(oc=-1,sc=0,0!==(6&Ol))throw Error(a(327));var n=e.callbackNode;if(Mc()&&e.callbackNode!==n)return null;var r=dt(e,e===Dl?_l:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=Ec(e,r);else{t=r;var i=Ol;Ol|=2;var o=kc();for(Dl===e&&_l===t||(Ql=null,Kl=Ke()+500,bc(e,t));;)try{Pc();break}catch(Us){wc(e,Us)}Ca(),Rl.current=o,Ol=i,null!==Il?t=0:(Dl=null,_l=0,t=Bl)}if(0!==t){if(2===t&&(0!==(i=ht(e))&&(r=i,t=hc(e,i))),1===t)throw n=Ul,bc(e,0),mc(e,r),dc(e,Ke()),n;if(6===t)mc(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!or(a(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=Ec(e,r))&&(0!==(o=ht(e))&&(r=o,t=hc(e,o))),1===t))throw n=Ul,bc(e,0),mc(e,r),dc(e,Ke()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:case 5:$c(e,Gl,Ql);break;case 3:if(mc(e,r),(130023424&r)===r&&10<(t=ql+500-Ke())){if(0!==dt(e,0))break;if(((i=e.suspendedLanes)&r)!==r){lc(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ni($c.bind(null,e,Gl,Ql),t);break}$c(e,Gl,Ql);break;case 4:if(mc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);o=1<<s,(s=t[s])>i&&(i=s),r&=~o}if(r=i,10<(r=(120>(r=Ke()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zl(r/1960))-r)){e.timeoutHandle=ni($c.bind(null,e,Gl,Ql),r);break}$c(e,Gl,Ql);break;default:throw Error(a(329))}}}return dc(e,Ke()),e.callbackNode===n?pc.bind(null,e):null}function hc(e,t){var n=Xl;return e.current.memoizedState.isDehydrated&&(bc(e,t).flags|=256),2!==(e=Ec(e,t))&&(t=Gl,Gl=n,null!==t&&fc(t)),e}function fc(e){null===Gl?Gl=e:Gl.push.apply(Gl,e)}function mc(e,t){for(t&=~Yl,t&=~Hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function gc(e){if(0!==(6&Ol))throw Error(a(327));Mc();var t=dt(e,0);if(0===(1&t))return dc(e,Ke()),null;var n=Ec(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=hc(e,r))}if(1===n)throw n=Ul,bc(e,0),mc(e,t),dc(e,Ke()),n;if(6===n)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$c(e,Gl,Ql),dc(e,Ke()),null}function yc(e,t){var n=Ol;Ol|=1;try{return e(t)}finally{0===(Ol=n)&&(Kl=Ke()+500,Ii&&Vi())}}function vc(e){null!==nc&&0===nc.tag&&0===(6&Ol)&&Mc();var t=Ol;Ol|=1;var n=Ll.transition,r=vt;try{if(Ll.transition=null,vt=1,e)return e()}finally{vt=r,Ll.transition=n,0===(6&(Ol=t))&&Vi()}}function xc(){Fl=Vl.current,Ei(Vl)}function bc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ri(n)),null!==Il)for(n=Il.return;null!==n;){var r=n;switch(ea(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:qa(),Ei(Ti),Ei(ji),to();break;case 5:Qa(r);break;case 4:qa();break;case 13:case 19:Ei(Za);break;case 10:Pa(r.type._context);break;case 22:case 23:xc()}n=n.return}if(Dl=e,Il=e=Vc(e.current,null),_l=Fl=t,Bl=0,Ul=null,Yl=Hl=Wl=0,Gl=Xl=null,null!==Ma){for(t=0;t<Ma.length;t++)if(null!==(r=(n=Ma[t]).interleaved)){n.interleaved=null;var i=r.next,a=n.pending;if(null!==a){var o=a.next;a.next=i,r.next=o}n.pending=r}Ma=null}return e}function wc(e,t){for(;;){var n=Il;try{if(Ca(),no.current=Qo,lo){for(var r=ao.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}lo=!1}if(io=0,so=oo=ao=null,co=!1,uo=0,Nl.current=null,null===n||null===n.return){Bl=1,Ul=t,Il=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=_l,l.flags|=32768,null!==c&&"object"===typeof c&&"function"===typeof c.then){var u=c,d=l,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=ms(s);if(null!==f){f.flags&=-257,gs(f,s,l,0,t),1&f.mode&&fs(o,u,t),c=u;var m=(t=f).updateQueue;if(null===m){var g=new Set;g.add(c),t.updateQueue=g}else m.add(c);break e}if(0===(1&t)){fs(o,u,t),Sc();break e}c=Error(a(426))}else if(ra&&1&l.mode){var y=ms(s);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),gs(y,s,l,0,t),ha(ls(c,l));break e}}o=c=ls(c,l),4!==Bl&&(Bl=2),null===Xl?Xl=[o]:Xl.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Fa(o,ps(0,c,t));break e;case 1:l=c;var v=o.type,x=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===ec||!ec.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t,Fa(o,hs(o,l,t));break e}}o=o.return}while(null!==o)}Tc(n)}catch(b){t=b,Il===n&&null!==n&&(Il=n=n.return);continue}break}}function kc(){var e=Rl.current;return Rl.current=Qo,null===e?Qo:e}function Sc(){0!==Bl&&3!==Bl&&2!==Bl||(Bl=4),null===Dl||0===(268435455&Wl)&&0===(268435455&Hl)||mc(Dl,_l)}function Ec(e,t){var n=Ol;Ol|=2;var r=kc();for(Dl===e&&_l===t||(Ql=null,bc(e,t));;)try{Cc();break}catch(Ms){wc(e,Ms)}if(Ca(),Ol=n,Rl.current=r,null!==Il)throw Error(a(261));return Dl=null,_l=0,Bl}function Cc(){for(;null!==Il;)jc(Il)}function Pc(){for(;null!==Il&&!Ge();)jc(Il)}function jc(e){var t=Al(e.alternate,e,Fl);e.memoizedProps=e.pendingProps,null===t?Tc(e):Il=t,Nl.current=null}function Tc(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=el(n,t,Fl)))return void(Il=n)}else{if(null!==(n=tl(n,t)))return n.flags&=32767,void(Il=n);if(null===e)return Bl=6,void(Il=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Il=t);Il=t=e}while(null!==t);0===Bl&&(Bl=5)}function $c(e,t,n){var r=vt,i=Ll.transition;try{Ll.transition=null,vt=1,function(e,t,n,r){do{Mc()}while(null!==nc);if(0!==(6&Ol))throw Error(a(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}(e,o),e===Dl&&(Il=Dl=null,_l=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||tc||(tc=!0,Dc(et,function(){return Mc(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ll.transition,Ll.transition=null;var s=vt;vt=1;var l=Ol;Ol|=4,Nl.current=null,function(e,t){if(Jr=Ut,pr(e=dr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(dl){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var f;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==o||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(f=p.firstChild);)h=p,p=f;for(;;){if(p===e)break t;if(h===n&&++u===i&&(l=s),h===o&&++d===r&&(c=s),null!==(f=p.nextSibling))break;h=(p=h).parentNode}p=f}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ei={focusedElem:e,selectionRange:n},Ut=!1,al=t;null!==al;)if(e=(t=al).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,al=e;else for(;null!==al;){t=al;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:ts(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(a(163))}}catch(dl){zc(t,t.return,dl)}if(null!==(e=t.sibling)){e.return=t.return,al=e;break}al=t.return}m=ll,ll=!1}(e,n),El(n,e),hr(ei),Ut=!!Jr,ei=Jr=null,e.current=n,Pl(n,e,i),qe(),Ol=l,vt=s,Ll.transition=o}else e.current=n;if(tc&&(tc=!1,nc=e,rc=i),o=e.pendingLanes,0===o&&(ec=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(rt,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),dc(e,Ke()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zl)throw Zl=!1,e=Jl,Jl=null,e;0!==(1&rc)&&0!==e.tag&&Mc(),o=e.pendingLanes,0!==(1&o)?e===ac?ic++:(ic=0,ac=e):ic=0,Vi()}(e,t,n,r)}finally{Ll.transition=i,vt=r}return null}function Mc(){if(null!==nc){var e=xt(rc),t=Ll.transition,n=vt;try{if(Ll.transition=null,vt=16>e?16:e,null===nc)var r=!1;else{if(e=nc,nc=null,rc=0,0!==(6&Ol))throw Error(a(331));var i=Ol;for(Ol|=4,al=e.current;null!==al;){var o=al,s=o.child;if(0!==(16&al.flags)){var l=o.deletions;if(null!==l){for(var c=0;c<l.length;c++){var u=l[c];for(al=u;null!==al;){var d=al;switch(d.tag){case 0:case 11:case 15:cl(8,d,o)}var p=d.child;if(null!==p)p.return=d,al=p;else for(;null!==al;){var h=(d=al).sibling,f=d.return;if(hl(d),d===u){al=null;break}if(null!==h){h.return=f,al=h;break}al=f}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}al=o}}if(0!==(2064&o.subtreeFlags)&&null!==s)s.return=o,al=s;else e:for(;null!==al;){if(0!==(2048&(o=al).flags))switch(o.tag){case 0:case 11:case 15:cl(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,al=v;break e}al=o.return}}var x=e.current;for(al=x;null!==al;){var b=(s=al).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,al=b;else e:for(s=x;null!==al;){if(0!==(2048&(l=al).flags))try{switch(l.tag){case 0:case 11:case 15:ul(9,l)}}catch(k){zc(l,l.return,k)}if(l===s){al=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,al=w;break e}al=l.return}}if(Ol=i,Vi(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(rt,e)}catch(k){}r=!0}return r}finally{vt=n,Ll.transition=t}}return!1}function Ac(e,t,n){e=Ia(e,t=ps(0,t=ls(n,t),1),1),t=lc(),null!==e&&(gt(e,1,t),dc(e,t))}function zc(e,t,n){if(3===e.tag)Ac(e,e,n);else for(;null!==t;){if(3===t.tag){Ac(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ec||!ec.has(r))){t=Ia(t,e=hs(t,e=ls(n,e),1),1),e=lc(),null!==t&&(gt(t,1,e),dc(t,e));break}}t=t.return}}function Rc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=lc(),e.pingedLanes|=e.suspendedLanes&n,Dl===e&&(_l&n)===n&&(4===Bl||3===Bl&&(130023424&_l)===_l&&500>Ke()-ql?bc(e,0):Yl|=n),dc(e,t)}function Nc(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=lc();null!==(e=Ra(e,t))&&(gt(e,t,n),dc(e,n))}function Lc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Nc(e,n)}function Oc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}null!==r&&r.delete(t),Nc(e,n)}function Dc(e,t){return Ye(e,t)}function Ic(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _c(e,t,n,r){return new Ic(e,t,n,r)}function Fc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Vc(e,t){var n=e.alternate;return null===n?((n=_c(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bc(e,t,n,r,i,o){var s=2;if(r=e,"function"===typeof e)Fc(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case S:return Uc(n.children,i,o,t);case E:s=8,i|=8;break;case C:return(e=_c(12,n,t,2|i)).elementType=C,e.lanes=o,e;case $:return(e=_c(13,n,t,i)).elementType=$,e.lanes=o,e;case M:return(e=_c(19,n,t,i)).elementType=M,e.lanes=o,e;case R:return Wc(n,i,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case j:s=9;break e;case T:s=11;break e;case A:s=14;break e;case z:s=16,r=null;break e}throw Error(a(130,null==e?e:typeof e,""))}return(t=_c(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Uc(e,t,n,r){return(e=_c(7,e,r,t)).lanes=n,e}function Wc(e,t,n,r){return(e=_c(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Hc(e,t,n){return(e=_c(6,e,null,t)).lanes=n,e}function Yc(e,t,n){return(t=_c(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gc(e,t,n,r,i,a,o,s,l){return e=new Xc(e,t,n,s,l),1===t?(t=1,!0===a&&(t|=8)):t=0,a=_c(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},La(a),e}function qc(e){if(!e)return Pi;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ai(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(a(171))}if(1===e.tag){var n=e.type;if(Ai(n))return Ni(e,n,t)}return t}function Kc(e,t,n,r,i,a,o,s,l){return(e=Gc(n,r,!0,e,0,a,0,s,l)).context=qc(null),n=e.current,(a=Da(r=lc(),i=cc(n))).callback=void 0!==t&&null!==t?t:null,Ia(n,a,i),e.current.lanes=i,gt(e,i,r),dc(e,r),e}function Qc(e,t,n,r){var i=t.current,a=lc(),o=cc(i);return n=qc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Da(a,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ia(i,t,o))&&(uc(e,i,o,a),_a(e,i,o)),o}function Zc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Jc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function eu(e,t){Jc(e,t),(e=e.alternate)&&Jc(e,t)}Al=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Ti.current)vs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return vs=!1,function(e,t,n){switch(t.tag){case 3:Ts(t),pa();break;case 5:Ka(t);break;case 1:Ai(t.type)&&Li(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Ci(wa,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(Za,1&Za.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Bs(e,t,n):(Ci(Za,1&Za.current),null!==(e=Qs(e,t,n))?e.sibling:null);Ci(Za,1&Za.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return qs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ci(Za,Za.current),r)break;return null;case 22:case 23:return t.lanes=0,Ss(e,t,n)}return Qs(e,t,n)}(e,t,n);vs=0!==(131072&e.flags)}else vs=!1,ra&&0!==(1048576&t.flags)&&Zi(t,Hi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ks(e,t),e=t.pendingProps;var i=Mi(t,ji.current);Ta(t,n),i=mo(null,t,r,e,i,n);var o=go();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ai(r)?(o=!0,Li(t)):o=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,La(t),i.updater=rs,t.stateNode=i,i._reactInternals=t,ss(t,r,e,n),t=js(null,t,r,!0,o,n)):(t.tag=0,ra&&o&&Ji(t),xs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ks(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Fc(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===A)return 14}return 2}(r),e=ts(r,e),i){case 0:t=Cs(null,t,r,e,n);break e;case 1:t=Ps(null,t,r,e,n);break e;case 11:t=bs(null,t,r,e,n);break e;case 14:t=ws(null,t,r,ts(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Cs(e,t,r,i=t.elementType===r?i:ts(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ts(r,i),n);case 3:e:{if(Ts(t),null===e)throw Error(a(387));r=t.pendingProps,i=(o=t.memoizedState).element,Oa(e,t),Va(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=$s(e,t,r,n,i=ls(Error(a(423)),t));break e}if(r!==i){t=$s(e,t,r,n,i=ls(Error(a(424)),t));break e}for(na=li(t.stateNode.containerInfo.firstChild),ta=t,ra=!0,ia=null,n=ba(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pa(),r===i){t=Qs(e,t,n);break e}xs(e,t,r,n)}t=t.child}return t;case 5:return Ka(t),null===e&&la(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,ti(r,i)?s=null:null!==o&&ti(r,o)&&(t.flags|=32),Es(e,t),xs(e,t,s,n),t.child;case 6:return null===e&&la(t),null;case 13:return Bs(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xa(t,null,r,n):xs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,bs(e,t,r,i=t.elementType===r?i:ts(r,i),n);case 7:return xs(e,t,t.pendingProps,n),t.child;case 8:case 12:return xs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Ci(wa,r._currentValue),r._currentValue=s,null!==o)if(or(o.value,s)){if(o.children===i.children&&!Ti.current){t=Qs(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var l=o.dependencies;if(null!==l){s=o.child;for(var c=l.firstContext;null!==c;){if(c.context===r){if(1===o.tag){(c=Da(-1,n&-n)).tag=2;var u=o.updateQueue;if(null!==u){var d=(u=u.shared).pending;null===d?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,null!==(c=o.alternate)&&(c.lanes|=n),ja(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(10===o.tag)s=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),ja(s,n,t),s=o.sibling}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===t){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}xs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ta(t,n),r=r(i=$a(i)),t.flags|=1,xs(e,t,r,n),t.child;case 14:return i=ts(r=t.type,t.pendingProps),ws(e,t,r,i=ts(r.type,i),n);case 15:return ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ts(r,i),Ks(e,t),t.tag=1,Ai(r)?(e=!0,Li(t)):e=!1,Ta(t,n),as(t,r,i),ss(t,r,i,n),js(null,t,r,!0,e,n);case 19:return qs(e,t,n);case 22:return Ss(e,t,n)}throw Error(a(156,t.tag))};var tu="function"===typeof reportError?reportError:function(e){console.error(e)};function nu(e){this._internalRoot=e}function ru(e){this._internalRoot=e}function iu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function au(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function ou(){}function su(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if("function"===typeof i){var s=i;i=function(){var e=Zc(o);s.call(e)}}Qc(t,o,e,i)}else o=function(e,t,n,r,i){if(i){if("function"===typeof r){var a=r;r=function(){var e=Zc(o);a.call(e)}}var o=Kc(t,r,e,0,null,!1,0,"",ou);return e._reactRootContainer=o,e[hi]=o.current,Vr(8===e.nodeType?e.parentNode:e),vc(),o}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Zc(l);s.call(e)}}var l=Gc(e,0,!1,null,0,!1,0,"",ou);return e._reactRootContainer=l,e[hi]=l.current,Vr(8===e.nodeType?e.parentNode:e),vc(function(){Qc(t,l,n,r)}),l}(n,t,e,i,r);return Zc(o)}ru.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Qc(e,t,null,null)},ru.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;vc(function(){Qc(null,e,null,null)}),t[hi]=null}},ru.prototype.unstable_scheduleHydration=function(e){if(e){var t=St();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Ot(e)}},bt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ut(t.pendingLanes);0!==n&&(yt(t,1|n),dc(t,Ke()),0===(6&Ol)&&(Kl=Ke()+500,Vi()))}break;case 13:vc(function(){var t=Ra(e,1);if(null!==t){var n=lc();uc(t,e,1,n)}}),eu(e,1)}},wt=function(e){if(13===e.tag){var t=Ra(e,134217728);if(null!==t)uc(t,e,134217728,lc());eu(e,134217728)}},kt=function(e){if(13===e.tag){var t=cc(e),n=Ra(e,t);if(null!==n)uc(n,e,t,lc());eu(e,t)}},St=function(){return vt},Et=function(e,t){var n=vt;try{return vt=e,t()}finally{vt=n}},we=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bi(r);if(!i)throw Error(a(90));X(r),Z(r,i)}}}break;case"textarea":ae(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},je=yc,Te=vc;var lu={usingClientEntryPoint:!1,Events:[vi,xi,bi,Ce,Pe,yc]},cu={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uu={bundleType:cu.bundleType,version:cu.version,rendererPackageName:cu.rendererPackageName,rendererConfig:cu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:cu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{rt=du.inject(uu),it=du}catch(Rs){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lu,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!iu(t))throw Error(a(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!iu(e))throw Error(a(299));var n=!1,r="",i=tu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Gc(e,1,!1,null,0,n,0,r,i),e[hi]=t.current,Vr(8===e.nodeType?e.parentNode:e),new nu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return vc(e)},t.hydrate=function(e,t,n){if(!au(t))throw Error(a(200));return su(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(a(405));var r=null!=n&&n.hydratedSources||null,i=!1,o="",s=tu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Kc(t,null,e,1,null!=n?n:null,i,0,o,s),e[hi]=t.current,Vr(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ru(t)},t.render=function(e,t,n){if(!au(t))throw Error(a(200));return su(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!au(e))throw Error(a(40));return!!e._reactRootContainer&&(vc(function(){su(null,null,e,!1,function(){e._reactRootContainer=null,e[hi]=null})}),!0)},t.unstable_batchedUpdates=yc,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!au(n))throw Error(a(200));if(null==e||void 0===e._reactInternals)throw Error(a(38));return su(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},391(e,t,n){var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},950(e,t,n){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},153(e,t,n){var r=n(43),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:i,type:e,key:c,ref:u,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},202(e,t){var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}function v(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var b=x.prototype=new v;b.constructor=x,m(b,y.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,a={},o=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,i)&&!E.hasOwnProperty(i)&&(a[i]=t[i]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===a[i]&&(a[i]=l[i]);return{$$typeof:n,type:e,key:o,ref:s,props:a,_owner:S.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function $(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===a?"."+T(l,0):a,w(o)?(i="",null!=e&&(i=e.replace(j,"$&/")+"/"),$(o,t,i,"",function(e){return e})):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,i+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(l=0,a=""===a?".":a+":",w(e))for(var c=0;c<e.length;c++){var u=a+T(s=e[c],c);l+=$(s,t,i,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=$(s=s.value,t,i,u=a+T(s,c++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function M(e,t,n){if(null==e)return e;var r=[],i=0;return $(e,r,"","",function(e){return t.call(n,e,i++)}),r}function A(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},R={transition:null},N={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function L(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=i,t.Profiler=o,t.PureComponent=x,t.StrictMode=a,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.act=L,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),a=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=S.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k.call(t,c)&&!E.hasOwnProperty(c)&&(i[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:n,type:e.type,key:a,ref:o,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:A}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=L,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},43(e,t,n){e.exports=n(202)},579(e,t,n){e.exports=n(153)},234(e,t){function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,h=3,f=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function w(e){if(g=!1,b(e),!m)if(null!==r(c))m=!0,R(k);else{var t=r(u);null!==t&&N(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(P),P=-1),f=!0;var a=h;try{for(b(n),p=r(c);null!==p&&(!(p.expirationTime>n)||e&&!$());){var o=p.callback;if("function"===typeof o){p.callback=null,h=p.priorityLevel;var s=o(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?p.callback=s:p===r(c)&&i(c),b(n)}else i(c);p=r(c)}if(null!==p)var l=!0;else{var d=r(u);null!==d&&N(w,d.startTime-n),l=!1}return l}finally{p=null,h=a,f=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,E=!1,C=null,P=-1,j=5,T=-1;function $(){return!(t.unstable_now()-T<j)}function M(){if(null!==C){var e=t.unstable_now();T=e;var n=!0;try{n=C(!0,e)}finally{n?S():(E=!1,C=null)}}else E=!1}if("function"===typeof x)S=function(){x(M)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,z=A.port2;A.port1.onmessage=M,S=function(){z.postMessage(null)}}else S=function(){y(M,0)};function R(e){C=e,E||(E=!0,S())}function N(e,n){P=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||f||(m=!0,R(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(c)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(v(P),P=-1):g=!0,N(w,a-o))):(e.sortIndex=s,n(c,e),m||f||(m=!0,R(k))),e},t.unstable_shouldYield=$,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},853(e,t,n){e.exports=n(234)},330(e,t,n){var r=n(43);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=r.useState,o=r.useEffect,s=r.useLayoutEffect,l=r.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(r){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=a({inst:{value:n,getSnapshot:t}}),i=r[0].inst,u=r[1];return s(function(){i.value=n,i.getSnapshot=t,c(i)&&u({inst:i})},[e,n,t]),o(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:u},717(e,t,n){var r=n(43),i=n(461);var a="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},o=i.useSyncExternalStore,s=r.useRef,l=r.useEffect,c=r.useMemo,u=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var d=s(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;d=c(function(){function e(e){if(!l){if(l=!0,o=e,e=r(e),void 0!==i&&p.hasValue){var t=p.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var n=r(e);return void 0!==i&&i(t,n)?(o=e,t):(o=e,s=n)}var o,s,l=!1,c=void 0===n?null:n;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,n,r,i]);var h=o(e,d[0],d[1]);return l(function(){p.hasValue=!0,p.value=h},[h]),u(h),h}},461(e,t,n){e.exports=n(330)},443(e,t,n){e.exports=n(717)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var o={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;("object"==typeof s||"function"==typeof s)&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach(e=>o[e]=()=>r[e]);return o.default=()=>r,n.d(a,o),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var r,i=n(43),a=n.t(i,2),o=n(391),s=n(950),l=n.t(s,2);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));const u="popstate";function d(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function p(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(Ms){}}}function h(e,t){return{usr:e.state,key:e.key,idx:t}}function f(e,t,n,r){return void 0===n&&(n=null),c({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?g(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function m(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function g(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function y(e,t,n,i){void 0===i&&(i={});let{window:a=document.defaultView,v5Compat:o=!1}=i,s=a.history,l=r.Pop,p=null,g=y();function y(){return(s.state||{idx:null}).idx}function v(){l=r.Pop;let e=y(),t=null==e?null:e-g;g=e,p&&p({action:l,location:b.location,delta:t})}function x(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:m(e);return n=n.replace(/ $/,"%20"),d(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,s.replaceState(c({},s.state,{idx:g}),""));let b={get action(){return l},get location(){return e(a,s)},listen(e){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(u,v),p=e,()=>{a.removeEventListener(u,v),p=null}},createHref:e=>t(a,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){l=r.Push;let i=f(b.location,e,t);n&&n(i,e),g=y()+1;let c=h(i,g),u=b.createHref(i);try{s.pushState(c,"",u)}catch(d){if(d instanceof DOMException&&"DataCloneError"===d.name)throw d;a.location.assign(u)}o&&p&&p({action:l,location:b.location,delta:1})},replace:function(e,t){l=r.Replace;let i=f(b.location,e,t);n&&n(i,e),g=y();let a=h(i,g),c=b.createHref(i);s.replaceState(a,"",c),o&&p&&p({action:l,location:b.location,delta:0})},go:e=>s.go(e)};return b}var v;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(v||(v={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function x(e,t,n){return void 0===n&&(n="/"),b(e,t,n,!1)}function b(e,t,n,r){let i=N(("string"===typeof t?g(t):t).pathname||"/",n);if(null==i)return null;let a=w(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=R(i);o=A(a[s],e,r)}return o}function w(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let i=(e,i,a)=>{let o={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};o.relativePath.startsWith("/")&&(d(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(r.length));let s=B([r,o.relativePath]),l=n.concat(o);e.children&&e.children.length>0&&(d(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),w(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:M(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of k(e.path))i(e,t,r);else i(e,t)}),t}function k(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=k(r.join("/")),s=[];return s.push(...o.map(e=>""===e?a:[a,e].join("/"))),i&&s.push(...o),s.map(t=>e.startsWith("/")&&""===t?"/":t)}const S=/^:[\w-]+$/,E=3,C=2,P=1,j=10,T=-2,$=e=>"*"===e;function M(e,t){let n=e.split("/"),r=n.length;return n.some($)&&(r+=T),t&&(r+=C),n.filter(e=>!$(e)).reduce((e,t)=>e+(S.test(t)?E:""===t?P:j),r)}function A(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:B([a,u.pathname]),pathnameBase:U(B([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=B([a,u.pathnameBase]))}return o}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);p("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))");let a=new RegExp(i,t?void 0:"i");return[a,r]}(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1),l=r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{});return{params:l,pathname:a,pathnameBase:o,pattern:e}}function R(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return p(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}const L=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function O(e,t){void 0===t&&(t="/");let n,{pathname:r,search:i="",hash:a=""}="string"===typeof e?g(e):e;if(r)if(o=r,L.test(o))n=r;else{if(r.includes("//")){let e=r;r=r.replace(/\/\/+/g,"/"),p(!1,"Pathnames cannot have embedded double slashes - normalizing "+e+" -> "+r)}n=r.startsWith("/")?D(r.substring(1),"/"):D(r,t)}else n=t;var o;return{pathname:n,search:W(i),hash:H(a)}}function D(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}function I(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function _(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function F(e,t){let n=_(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function V(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=g(e):(i=c({},e),d(!i.pathname||!i.pathname.includes("?"),I("?","pathname","search",i)),d(!i.pathname||!i.pathname.includes("#"),I("#","pathname","hash",i)),d(!i.search||!i.search.includes("#"),I("#","search","hash",i)));let a,o=""===e||""===i.pathname,s=o?"/":i.pathname;if(null==s)a=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let l=O(i,a),u=s&&"/"!==s&&s.endsWith("/"),p=(o||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!p||(l.pathname+="/"),l}const B=e=>e.join("/").replace(/\/\/+/g,"/"),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),W=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",H=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function Y(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const X=["post","put","patch","delete"],G=(new Set(X),["get",...X]);new Set(G),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},q.apply(this,arguments)}const K=i.createContext(null);const Q=i.createContext(null);const Z=i.createContext(null);const J=i.createContext(null);const ee=i.createContext({outlet:null,matches:[],isDataRoute:!1});const te=i.createContext(null);function ne(){return null!=i.useContext(J)}function re(){return ne()||d(!1),i.useContext(J).location}function ie(e){i.useContext(Z).static||i.useLayoutEffect(e)}function ae(){let{isDataRoute:e}=i.useContext(ee);return e?function(){let{router:e}=fe(pe.UseNavigateStable),t=ge(he.UseNavigateStable),n=i.useRef(!1);ie(()=>{n.current=!0});let r=i.useCallback(function(r,i){void 0===i&&(i={}),n.current&&("number"===typeof r?e.navigate(r):e.navigate(r,q({fromRouteId:t},i)))},[e,t]);return r}():function(){ne()||d(!1);let e=i.useContext(K),{basename:t,future:n,navigator:r}=i.useContext(Z),{matches:a}=i.useContext(ee),{pathname:o}=re(),s=JSON.stringify(F(a,n.v7_relativeSplatPath)),l=i.useRef(!1);return ie(()=>{l.current=!0}),i.useCallback(function(n,i){if(void 0===i&&(i={}),!l.current)return;if("number"===typeof n)return void r.go(n);let a=V(n,JSON.parse(s),o,"path"===i.relative);null==e&&"/"!==t&&(a.pathname="/"===a.pathname?t:B([t,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)},[t,r,s,o,e])}()}function oe(e,t,n,a){ne()||d(!1);let{navigator:o}=i.useContext(Z),{matches:s}=i.useContext(ee),l=s[s.length-1],c=l?l.params:{},u=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let p,h=re();if(t){var f;let e="string"===typeof t?g(t):t;"/"===u||(null==(f=e.pathname)?void 0:f.startsWith(u))||d(!1),p=e}else p=h;let m=p.pathname||"/",y=m;if("/"!==u){let e=u.replace(/^\//,"").split("/");y="/"+m.replace(/^\//,"").split("/").slice(e.length).join("/")}let v=x(e,{pathname:y});let b=de(v&&v.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:B([u,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:B([u,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,n,a);return t&&b?i.createElement(J.Provider,{value:{location:q({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:r.Pop}},b):b}function se(){let e=function(){var e;let t=i.useContext(te),n=me(he.UseRouteError),r=ge(he.UseRouteError);if(void 0!==t)return t;return null==(e=n.errors)?void 0:e[r]}(),t=Y(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:r};return i.createElement(i.Fragment,null,i.createElement("h2",null,"Unexpected Application Error!"),i.createElement("h3",{style:{fontStyle:"italic"}},t),n?i.createElement("pre",{style:a},n):null,null)}const le=i.createElement(se,null);class ce extends i.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?i.createElement(ee.Provider,{value:this.props.routeContext},i.createElement(te.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ue(e){let{routeContext:t,match:n,children:r}=e,a=i.useContext(K);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),i.createElement(ee.Provider,{value:t},r)}function de(e,t,n,r){var a;if(void 0===t&&(t=[]),void 0===n&&(n=null),void 0===r&&(r=null),null==e){var o;if(!n)return null;if(n.errors)e=n.matches;else{if(!(null!=(o=r)&&o.v7_partialHydration&&0===t.length&&!n.initialized&&n.matches.length>0))return null;e=n.matches}}let s=e,l=null==(a=n)?void 0:a.errors;if(null!=l){let e=s.findIndex(e=>e.route.id&&void 0!==(null==l?void 0:l[e.route.id]));e>=0||d(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let i=0;i<s.length;i++){let e=s[i];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(u=i),e.route.id){let{loaderData:t,errors:r}=n,i=e.route.loader&&void 0===t[e.route.id]&&(!r||void 0===r[e.route.id]);if(e.route.lazy||i){c=!0,s=u>=0?s.slice(0,u+1):[s[0]];break}}}return s.reduceRight((e,r,a)=>{let o,d=!1,p=null,h=null;var f;n&&(o=l&&r.route.id?l[r.route.id]:void 0,p=r.route.errorElement||le,c&&(u<0&&0===a?(f="route-fallback",!1||ye[f]||(ye[f]=!0),d=!0,h=null):u===a&&(d=!0,h=r.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,a+1)),g=()=>{let t;return t=o?p:d?h:r.route.Component?i.createElement(r.route.Component,null):r.route.element?r.route.element:e,i.createElement(ue,{match:r,routeContext:{outlet:e,matches:m,isDataRoute:null!=n},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||0===a)?i.createElement(ce,{location:n.location,revalidation:n.revalidation,component:p,error:o,children:g(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):g()},null)}var pe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pe||{}),he=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(he||{});function fe(e){let t=i.useContext(K);return t||d(!1),t}function me(e){let t=i.useContext(Q);return t||d(!1),t}function ge(e){let t=function(){let e=i.useContext(ee);return e||d(!1),e}(),n=t.matches[t.matches.length-1];return n.route.id||d(!1),n.route.id}const ye={};function ve(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}a.startTransition;function xe(e){let{to:t,replace:n,state:r,relative:a}=e;ne()||d(!1);let{future:o,static:s}=i.useContext(Z),{matches:l}=i.useContext(ee),{pathname:c}=re(),u=ae(),p=V(t,F(l,o.v7_relativeSplatPath),c,"path"===a),h=JSON.stringify(p);return i.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:a}),[u,h,a,n,r]),null}function be(e){d(!1)}function we(e){let{basename:t="/",children:n=null,location:a,navigationType:o=r.Pop,navigator:s,static:l=!1,future:c}=e;ne()&&d(!1);let u=t.replace(/^\/*/,"/"),p=i.useMemo(()=>({basename:u,navigator:s,static:l,future:q({v7_relativeSplatPath:!1},c)}),[u,c,s,l]);"string"===typeof a&&(a=g(a));let{pathname:h="/",search:f="",hash:m="",state:y=null,key:v="default"}=a,x=i.useMemo(()=>{let e=N(h,u);return null==e?null:{location:{pathname:e,search:f,hash:m,state:y,key:v},navigationType:o}},[u,h,f,m,y,v,o]);return null==x?null:i.createElement(Z.Provider,{value:p},i.createElement(J.Provider,{children:n,value:x}))}function ke(e){let{children:t,location:n}=e;return oe(Se(t),n)}new Promise(()=>{});i.Component;function Se(e,t){void 0===t&&(t=[]);let n=[];return i.Children.forEach(e,(e,r)=>{if(!i.isValidElement(e))return;let a=[...t,r];if(e.type===i.Fragment)return void n.push.apply(n,Se(e.props.children,a));e.type!==be&&d(!1),e.props.index&&e.props.children&&d(!1);let o={id:e.props.id||a.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(o.children=Se(e.props.children,a)),n.push(o)}),n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(Ms){}new Map;const Ee=a.startTransition;l.flushSync,a.useId;function Ce(e){let{basename:t,children:n,future:r,window:a}=e,o=i.useRef();var s;null==o.current&&(o.current=(void 0===(s={window:a,v5Compat:!0})&&(s={}),y(function(e,t){let{pathname:n,search:r,hash:i}=e.location;return f("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:m(t)},null,s)));let l=o.current,[c,u]=i.useState({action:l.action,location:l.location}),{v7_startTransition:d}=r||{},p=i.useCallback(e=>{d&&Ee?Ee(()=>u(e)):u(e)},[u,d]);return i.useLayoutEffect(()=>l.listen(p),[l,p]),i.useEffect(()=>ve(r),[r]),i.createElement(we,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:r})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var Pe,je;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Pe||(Pe={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(je||(je={}));const Te=(0,i.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),$e=(0,i.createContext)({}),Me=(0,i.createContext)(null),Ae="undefined"!==typeof document,ze=Ae?i.useLayoutEffect:i.useEffect,Re=(0,i.createContext)({strict:!1}),Ne=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Le="data-"+Ne("framerAppearId");function Oe(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function De(e){return"string"===typeof e||Array.isArray(e)}function Ie(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const _e=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Fe=["initial",..._e];function Ve(e){return Ie(e.animate)||Fe.some(t=>De(e[t]))}function Be(e){return Boolean(Ve(e)||e.variants)}function Ue(e){const{initial:t,animate:n}=function(e,t){if(Ve(e)){const{initial:t,animate:n}=e;return{initial:!1===t||De(t)?t:void 0,animate:De(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,i.useContext)($e));return(0,i.useMemo)(()=>({initial:t,animate:n}),[We(t),We(n)])}function We(e){return Array.isArray(e)?e.join(" "):e}const He={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ye={};for(const Dg in He)Ye[Dg]={isEnabled:e=>He[Dg].some(t=>!!e[t])};const Xe=(0,i.createContext)({}),Ge=(0,i.createContext)({}),qe=Symbol.for("motionComponentSymbol");function Ke(e){let{preloadedFeatures:t,createVisualElement:n,useRender:r,useVisualState:a,Component:o}=e;t&&function(e){for(const t in e)Ye[t]={...Ye[t],...e[t]}}(t);const s=(0,i.forwardRef)(function(e,s){let l;const c={...(0,i.useContext)(Te),...e,layoutId:Qe(e)},{isStatic:u}=c,d=Ue(e),p=a(e,u);if(!u&&Ae){d.visualElement=function(e,t,n,r){const{visualElement:a}=(0,i.useContext)($e),o=(0,i.useContext)(Re),s=(0,i.useContext)(Me),l=(0,i.useContext)(Te).reducedMotion,c=(0,i.useRef)();r=r||o.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:a,props:n,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const u=c.current;(0,i.useInsertionEffect)(()=>{u&&u.update(n,s)});const d=(0,i.useRef)(Boolean(n[Le]&&!window.HandoffComplete));return ze(()=>{u&&(u.render(),d.current&&u.animationState&&u.animationState.animateChanges())}),(0,i.useEffect)(()=>{u&&(u.updateFeatures(),!d.current&&u.animationState&&u.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))}),u}(o,p,c,n);const e=(0,i.useContext)(Ge),r=(0,i.useContext)(Re).strict;d.visualElement&&(l=d.visualElement.loadFeatures(c,r,t,e))}return i.createElement($e.Provider,{value:d},l&&d.visualElement?i.createElement(l,{visualElement:d.visualElement,...c}):null,r(o,e,function(e,t,n){return(0,i.useCallback)(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&("function"===typeof n?n(r):Oe(n)&&(n.current=r))},[t])}(p,d.visualElement,s),p,u,d.visualElement))});return s[qe]=o,s}function Qe(e){let{layoutId:t}=e;const n=(0,i.useContext)(Xe).id;return n&&void 0!==t?n+"-"+t:t}function Ze(e){function t(t){return Ke(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const Je=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function et(e){return"string"===typeof e&&!e.includes("-")&&!!(Je.indexOf(e)>-1||/[A-Z]/.test(e))}const tt={};const nt=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],rt=new Set(nt);function it(e,t){let{layout:n,layoutId:r}=t;return rt.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!tt[e]||"opacity"===e)}const at=e=>Boolean(e&&e.getVelocity),ot={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},st=nt.length;const lt=e=>t=>"string"===typeof t&&t.startsWith(e),ct=lt("--"),ut=lt("var(--"),dt=(e,t)=>t&&"number"===typeof e?t.transform(e):e,pt=(e,t,n)=>Math.min(Math.max(n,e),t),ht={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},ft={...ht,transform:e=>pt(0,1,e)},mt={...ht,default:1},gt=e=>Math.round(1e5*e)/1e5,yt=/(-)?([\d]*\.?[\d])+/g,vt=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,xt=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bt(e){return"string"===typeof e}const wt=e=>({test:t=>bt(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),kt=wt("deg"),St=wt("%"),Et=wt("px"),Ct=wt("vh"),Pt=wt("vw"),jt={...St,parse:e=>St.parse(e)/100,transform:e=>St.transform(100*e)},Tt={...ht,transform:Math.round},$t={borderWidth:Et,borderTopWidth:Et,borderRightWidth:Et,borderBottomWidth:Et,borderLeftWidth:Et,borderRadius:Et,radius:Et,borderTopLeftRadius:Et,borderTopRightRadius:Et,borderBottomRightRadius:Et,borderBottomLeftRadius:Et,width:Et,maxWidth:Et,height:Et,maxHeight:Et,size:Et,top:Et,right:Et,bottom:Et,left:Et,padding:Et,paddingTop:Et,paddingRight:Et,paddingBottom:Et,paddingLeft:Et,margin:Et,marginTop:Et,marginRight:Et,marginBottom:Et,marginLeft:Et,rotate:kt,rotateX:kt,rotateY:kt,rotateZ:kt,scale:mt,scaleX:mt,scaleY:mt,scaleZ:mt,skew:kt,skewX:kt,skewY:kt,distance:Et,translateX:Et,translateY:Et,translateZ:Et,x:Et,y:Et,z:Et,perspective:Et,transformPerspective:Et,opacity:ft,originX:jt,originY:jt,originZ:Et,zIndex:Tt,fillOpacity:ft,strokeOpacity:ft,numOctaves:Tt};function Mt(e,t,n,r){const{style:i,vars:a,transform:o,transformOrigin:s}=e;let l=!1,c=!1,u=!0;for(const d in t){const e=t[d];if(ct(d)){a[d]=e;continue}const n=$t[d],r=dt(e,n);if(rt.has(d)){if(l=!0,o[d]=r,!u)continue;e!==(n.default||0)&&(u=!1)}else d.startsWith("origin")?(c=!0,s[d]=r):i[d]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:a=!0}=t,o="";for(let s=0;s<st;s++){const t=nt[s];void 0!==e[t]&&(o+=`${ot[t]||t}(${e[t]}) `)}return i&&!e.z&&(o+="translateZ(0)"),o=o.trim(),r?o=r(e,n?"":o):a&&n&&(o="none"),o}(e.transform,n,u,r):i.transform&&(i.transform="none")),c){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const At=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function zt(e,t,n){for(const r in t)at(t[r])||it(r,n)||(e[r]=t[r])}function Rt(e,t,n){const r={};return zt(r,e.style||{},e),Object.assign(r,function(e,t,n){let{transformTemplate:r}=e;return(0,i.useMemo)(()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return Mt(e,t,{enableHardwareAcceleration:!n},r),Object.assign({},e.vars,e.style)},[t])}(e,t,n)),e.transformValues?e.transformValues(r):r}function Nt(e,t,n){const r={},i=Rt(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Lt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ot(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Lt.has(e)}let Dt=e=>!Ot(e);try{(It=require("@emotion/is-prop-valid").default)&&(Dt=e=>e.startsWith("on")?!Ot(e):It(e))}catch(Og){}var It;function _t(e,t,n){return"string"===typeof e?e:Et.transform(t+n*e)}const Ft={offset:"stroke-dashoffset",array:"stroke-dasharray"},Vt={offset:"strokeDashoffset",array:"strokeDasharray"};function Bt(e,t,n,r,i){let{attrX:a,attrY:o,attrScale:s,originX:l,originY:c,pathLength:u,pathSpacing:d=1,pathOffset:p=0,...h}=t;if(Mt(e,h,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:m,dimensions:g}=e;f.transform&&(g&&(m.transform=f.transform),delete f.transform),g&&(void 0!==l||void 0!==c||m.transform)&&(m.transformOrigin=function(e,t,n){return`${_t(t,e.x,e.width)} ${_t(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==c?c:.5)),void 0!==a&&(f.x=a),void 0!==o&&(f.y=o),void 0!==s&&(f.scale=s),void 0!==u&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Ft:Vt;e[a.offset]=Et.transform(-r);const o=Et.transform(t),s=Et.transform(n);e[a.array]=`${o} ${s}`}(f,u,d,p,!1)}const Ut=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Wt=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Ht(e,t,n,r){const a=(0,i.useMemo)(()=>{const n={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Bt(n,t,{enableHardwareAcceleration:!1},Wt(r),e.transformTemplate),{...n.attrs,style:{...n.style}}},[t]);if(e.style){const t={};zt(t,e.style,e),a.style={...t,...a.style}}return a}function Yt(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(t,n,r,a,o)=>{let{latestValues:s}=a;const l=(et(t)?Ht:Nt)(n,s,o,t),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(Dt(i)||!0===n&&Ot(i)||!t&&!Ot(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(n,"string"===typeof t,e),u={...c,...l,ref:r},{children:d}=n,p=(0,i.useMemo)(()=>at(d)?d.get():d,[d]);return(0,i.createElement)(t,{...u,children:p})}}function Xt(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Gt=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function qt(e,t,n,r){Xt(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Gt.has(i)?i:Ne(i),t.attrs[i])}function Kt(e,t){const{style:n}=e,r={};for(const i in n)(at(n[i])||t.style&&at(t.style[i])||it(i,e))&&(r[i]=n[i]);return r}function Qt(e,t){const n=Kt(e,t);for(const r in e)if(at(e[r])||at(t[r])){n[-1!==nt.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function Zt(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}function Jt(e){const t=(0,i.useRef)(null);return null===t.current&&(t.current=e()),t.current}const en=e=>Array.isArray(e),tn=e=>en(e)?e[e.length-1]||0:e;function nn(e){const t=at(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const rn=e=>(t,n)=>{const r=(0,i.useContext)($e),a=(0,i.useContext)(Me),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onMount:o}=e;const s={latestValues:an(t,n,r,i),renderState:a()};return o&&(s.mount=e=>o(t,e,s)),s}(e,t,r,a);return n?o():Jt(o)};function an(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=nn(a[p]);let{initial:o,animate:s}=e;const l=Ve(e),c=Be(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!Ie(d)){(Array.isArray(d)?d:[d]).forEach(t=>{const n=Zt(e,t);if(!n)return;const{transitionEnd:r,transition:a,...o}=n;for(const e in o){let t=o[e];if(Array.isArray(t)){t=t[u?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]})}return i}const on=e=>e;class sn{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const ln=["prepare","read","update","preRender","render","postRender"];const{schedule:cn,cancel:un,state:dn,steps:pn}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=ln.reduce((e,t)=>(e[t]=function(e){let t=new sn,n=new sn,r=0,i=!1,a=!1;const o=new WeakSet,s={schedule:function(e){const a=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=a?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),s.add(e)&&a&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),o.delete(e)},process:l=>{if(i)a=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),o.has(r)&&(s.schedule(r),e())}i=!1,a&&(a=!1,s.process(l))}}};return s}(()=>n=!0),e),{}),o=e=>a[e].process(i),s=()=>{const a=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1),i.timestamp=a,i.isProcessing=!0,ln.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=ln.reduce((t,o)=>{const l=a[o];return t[o]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,a,o)},t},{});return{schedule:l,cancel:e=>ln.forEach(t=>a[t].cancel(e)),state:i,steps:a}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:on,!0),hn={useVisualState:rn({scrapeMotionValuesFromProps:Qt,createRenderState:Ut,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;cn.read(()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Ms){r.dimensions={x:0,y:0,width:0,height:0}}}),cn.render(()=>{Bt(r,i,{enableHardwareAcceleration:!1},Wt(t.tagName),e.transformTemplate),qt(t,r)})}})},fn={useVisualState:rn({scrapeMotionValuesFromProps:Kt,createRenderState:At})};function mn(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const gn=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function yn(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function vn(e,t,n,r){return mn(e,t,(e=>t=>gn(t)&&e(t,yn(t)))(n),r)}const xn=(e,t)=>n=>t(e(n)),bn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(xn)};function wn(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const kn=wn("dragHorizontal"),Sn=wn("dragVertical");function En(e){let t=!1;if("y"===e)t=Sn();else if("x"===e)t=kn();else{const e=kn(),n=Sn();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Cn(){const e=En(!0);return!e||(e(),!1)}class Pn{constructor(e){this.isMounted=!1,this.node=e}update(){}}function jn(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return vn(e.current,n,(n,i)=>{if("touch"===n.pointerType||Cn())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t),a[r]&&cn.update(()=>a[r](n,i))},{passive:!e.getProps()[r]})}const Tn=(e,t)=>!!t&&(e===t||Tn(e,t.parentElement));function $n(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,yn(n))}const Mn=new WeakMap,An=new WeakMap,zn=e=>{const t=Mn.get(e.target);t&&t(e)},Rn=e=>{e.forEach(zn)};function Nn(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;An.has(r)||An.set(r,{});const i=An.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Rn,{root:t,...n})),i[a]}(t);return Mn.set(e,n),r.observe(e),()=>{Mn.delete(e),r.unobserve(e)}}const Ln={some:0,all:1};const On={inView:{Feature:class extends Pn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Ln[r]};return Nn(this.node.current,a,e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends Pn{constructor(){super(...arguments),this.removeStartListeners=on,this.removeEndListeners=on,this.removeAccessibleListeners=on,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=vn(window,"pointerup",(e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();cn.update(()=>{i||Tn(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)})},{passive:!(n.onTap||n.onPointerUp)}),i=vn(window,"pointercancel",(e,t)=>this.cancelPress(e,t),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=bn(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=mn(this.node.current,"keydown",e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=mn(this.node.current,"keyup",e=>{"Enter"===e.key&&this.checkPressEnd()&&$n("up",(e,t)=>{const{onTap:n}=this.node.getProps();n&&cn.update(()=>n(e,t))})}),$n("down",(e,t)=>{this.startPress(e,t)})}),t=mn(this.node.current,"blur",()=>{this.isPressing&&$n("cancel",(e,t)=>this.cancelPress(e,t))});this.removeAccessibleListeners=bn(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&cn.update(()=>n(e,t))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Cn()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&cn.update(()=>n(e,t))}mount(){const e=this.node.getProps(),t=vn(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=mn(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=bn(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends Pn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Ms){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bn(mn(this.node.current,"focus",()=>this.onFocus()),mn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends Pn{mount(){this.unmount=bn(jn(this.node,!0),jn(this.node,!1))}unmount(){}}}};function Dn(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function In(e,t,n){const r=e.getProps();return Zt(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.get()),t}(e),function(e){const t={};return e.values.forEach((e,n)=>t[n]=e.getVelocity()),t}(e))}let _n=on,Fn=on;const Vn=e=>1e3*e,Bn=e=>e/1e3,Un=!1,Wn=e=>Array.isArray(e)&&"number"===typeof e[0];function Hn(e){return Boolean(!e||"string"===typeof e&&Xn[e]||Wn(e)||Array.isArray(e)&&e.every(Hn))}const Yn=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},Xn={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yn([0,.65,.55,1]),circOut:Yn([.55,0,1,.45]),backIn:Yn([.31,.01,.66,-.59]),backOut:Yn([.33,1.53,.69,.99])};function Gn(e){if(e)return Wn(e)?Yn(e):Array.isArray(e)?e.map(Gn):Xn[e]}const qn=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function Kn(e,t,n,r){if(e===t&&n===r)return on;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=qn(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:qn(i(e),t,r)}const Qn=Kn(.42,0,1,1),Zn=Kn(0,0,.58,1),Jn=Kn(.42,0,.58,1),er=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tr=e=>t=>1-e(1-t),nr=e=>1-Math.sin(Math.acos(e)),rr=tr(nr),ir=er(nr),ar=Kn(.33,1.53,.69,.99),or=tr(ar),sr=er(or),lr={linear:on,easeIn:Qn,easeInOut:Jn,easeOut:Zn,circIn:nr,circInOut:ir,circOut:rr,backIn:or,backInOut:sr,backOut:ar,anticipate:e=>(e*=2)<1?.5*or(e):.5*(2-Math.pow(2,-10*(e-1)))},cr=e=>{if(Array.isArray(e)){Fn(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return Kn(t,n,r,i)}return"string"===typeof e?(Fn(void 0!==lr[e],`Invalid easing type '${e}'`),lr[e]):e},ur=(e,t)=>n=>Boolean(bt(n)&&xt.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),dr=(e,t,n)=>r=>{if(!bt(r))return r;const[i,a,o,s]=r.match(yt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},pr={...ht,transform:e=>Math.round((e=>pt(0,255,e))(e))},hr={test:ur("rgb","red"),parse:dr("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+pr.transform(t)+", "+pr.transform(n)+", "+pr.transform(r)+", "+gt(ft.transform(i))+")"}};const fr={test:ur("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:hr.transform},mr={test:ur("hsl","hue"),parse:dr("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+St.transform(gt(n))+", "+St.transform(gt(r))+", "+gt(ft.transform(i))+")"}},gr={test:e=>hr.test(e)||fr.test(e)||mr.test(e),parse:e=>hr.test(e)?hr.parse(e):mr.test(e)?mr.parse(e):fr.parse(e),transform:e=>bt(e)?e:e.hasOwnProperty("red")?hr.transform(e):mr.transform(e)},yr=(e,t,n)=>-n*e+n*t+e;function vr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const xr=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},br=[fr,hr,mr];function wr(e){const t=(e=>br.find(t=>t.test(e)))(e);Fn(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===mr&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=vr(i,e,t+1/3),o=vr(i,e,t),s=vr(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const kr=(e,t)=>{const n=wr(e),r=wr(t),i={...n};return e=>(i.red=xr(n.red,r.red,e),i.green=xr(n.green,r.green,e),i.blue=xr(n.blue,r.blue,e),i.alpha=yr(n.alpha,r.alpha,e),hr.transform(i))};const Sr={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:on},Er={regex:vt,countKey:"Colors",token:"${c}",parse:gr.parse},Cr={regex:yt,countKey:"Numbers",token:"${n}",parse:ht.parse};function Pr(e,t){let{regex:n,countKey:r,token:i,parse:a}=t;const o=e.tokenised.match(n);o&&(e["num"+r]=o.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...o.map(a)))}function jr(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Pr(n,Sr),Pr(n,Er),Pr(n,Cr),n}function Tr(e){return jr(e).values}function $r(e){const{values:t,numColors:n,numVars:r,tokenised:i}=jr(e),a=t.length;return e=>{let t=i;for(let i=0;i<a;i++)t=i<r?t.replace(Sr.token,e[i]):i<r+n?t.replace(Er.token,gr.transform(e[i])):t.replace(Cr.token,gt(e[i]));return t}}const Mr=e=>"number"===typeof e?0:e;const Ar={test:function(e){var t,n;return isNaN(e)&&bt(e)&&((null===(t=e.match(yt))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(vt))||void 0===n?void 0:n.length)||0)>0},parse:Tr,createTransformer:$r,getAnimatableNone:function(e){const t=Tr(e);return $r(e)(t.map(Mr))}},zr=(e,t)=>n=>`${n>0?t:e}`;function Rr(e,t){return"number"===typeof e?n=>yr(e,t,n):gr.test(e)?kr(e,t):e.startsWith("var(")?zr(e,t):Or(e,t)}const Nr=(e,t)=>{const n=[...e],r=n.length,i=e.map((e,n)=>Rr(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},Lr=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=Rr(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},Or=(e,t)=>{const n=Ar.createTransformer(t),r=jr(e),i=jr(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?bn(Nr(r.values,i.values),n):(_n(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),zr(e,t))},Dr=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},Ir=(e,t)=>n=>yr(e,t,n);function _r(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?Ir:"string"===typeof e?gr.test(e)?kr:Or:Array.isArray(e)?Nr:"object"===typeof e?Lr:Ir}(e[0]),a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||on:t;n=bn(e,n)}r.push(n)}return r}function Fr(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(Fn(a===t.length,"Both input and output ranges must be the same length"),1===a)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=_r(t,r,i),s=o.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=Dr(e[n],e[n+1],t);return o[n](r)};return n?t=>l(pt(e[0],e[a-1],t)):l}function Vr(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Dr(0,t,r);e.push(yr(n,1,i))}}(t,e.length-1),t}function Br(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(cr):cr(i),o={done:!1,value:n[0]},s=function(e,t){return e.map(e=>e*t)}(r&&r.length===n.length?r:Vr(n),t),l=Fr(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map(()=>u||Jn).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}function Ur(e,t){return t?e*(1e3/t):0}function Wr(e,t,n){const r=Math.max(t-5,0);return Ur(n-e(r),t-r)}const Hr=.001;function Yr(e){let t,n,{duration:r=800,bounce:i=.25,velocity:a=0,mass:o=1}=e;_n(r<=Vn(10),"Spring duration must be 10 seconds or less");let s=1-i;s=pt(.05,1,s),r=pt(.01,10,Bn(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=Gr(e,s),l=Math.exp(-n);return Hr-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=Gr(Math.pow(e,2),s);return(-t(e)+Hr>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<Xr;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Vn(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const Xr=12;function Gr(e,t){return e*Math.sqrt(1-t*t)}const qr=["duration","bounce"],Kr=["stiffness","damping","mass"];function Qr(e,t){return t.some(t=>void 0!==e[t])}function Zr(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const a=t[0],o=t[t.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Qr(e,Kr)&&Qr(e,qr)){const n=Yr(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-Bn(i.velocity||0)}),f=p||0,m=c/(2*Math.sqrt(l*u)),g=o-a,y=Bn(Math.sqrt(l/u)),v=Math.abs(g)<5;let x;if(r||(r=v?.01:2),n||(n=v?.005:.5),m<1){const e=Gr(y,m);x=t=>{const n=Math.exp(-m*y*t);return o-n*((f+m*y*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>o-Math.exp(-y*e)*(g+(f+y*g)*e);else{const e=y*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*y*t),r=Math.min(e*t,300);return o-n*((f+m*y*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let i=f;0!==e&&(i=m<1?Wr(x,e,t):0);const a=Math.abs(i)<=r,l=Math.abs(o-t)<=n;s.done=a&&l}return s.value=s.done?o:t,s}}}function Jr(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],h={done:!1,value:p},f=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,y=void 0===s?g:s(g);y!==g&&(m=y-p);const v=e=>-m*Math.exp(-e/i),x=e=>y+v(e),b=e=>{const t=v(e),n=x(e);h.done=Math.abs(t)<=u,h.value=h.done?y:n};let w,k;const S=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(h.value)&&(w=e,k=Zr({keyframes:[h.value,f(h.value)],velocity:Wr(x,e,h.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return S(0),{calculatedDuration:null,next:e=>{let t=!1;return k||void 0!==w||(t=!0,b(e),S(e)),void 0!==w&&e>w?k.next(e-w):(!t&&b(e),h)}}}const ei=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>cn.update(t,!0),stop:()=>un(t),now:()=>dn.isProcessing?dn.timestamp:performance.now()}};function ti(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const ni={decay:Jr,inertia:Jr,tween:Br,keyframes:Br,spring:Zr};function ri(e){let t,n,{autoplay:r=!0,delay:i=0,driver:a=ei,keyframes:o,type:s="keyframes",repeat:l=0,repeatDelay:c=0,repeatType:u="loop",onPlay:d,onStop:p,onComplete:h,onUpdate:f,...m}=e,g=1,y=!1;const v=()=>{n=new Promise(e=>{t=e})};let x;v();const b=ni[s]||Br;let w;b!==Br&&"number"!==typeof o[0]&&(w=Fr([0,100],o,{clamp:!1}),o=[0,100]);const k=b({...m,keyframes:o});let S;"mirror"===u&&(S=b({...m,keyframes:[...o].reverse(),velocity:-(m.velocity||0)}));let E="idle",C=null,P=null,j=null;null===k.calculatedDuration&&l&&(k.calculatedDuration=ti(k));const{calculatedDuration:T}=k;let $=1/0,M=1/0;null!==T&&($=T+c,M=$*(l+1)-c);let A=0;const z=e=>{if(null===P)return;g>0&&(P=Math.min(P,e)),g<0&&(P=Math.min(e-M/g,P)),A=null!==C?C:Math.round(e-P)*g;const t=A-i*(g>=0?1:-1),n=g>=0?t<0:t>M;A=Math.max(t,0),"finished"===E&&null===C&&(A=M);let r=A,a=k;if(l){const e=Math.min(A,M)/$;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===u?(n=1-n,c&&(n-=c/$)):"mirror"===u&&(a=S)),r=pt(0,1,n)*$}const s=n?{done:!1,value:o[0]}:a.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===T||(d=g>=0?A>=M:A<=0);const p=null===C&&("finished"===E||"running"===E&&d);return f&&f(s.value),p&&L(),s},R=()=>{x&&x.stop(),x=void 0},N=()=>{E="idle",R(),t(),v(),P=j=null},L=()=>{E="finished",h&&h(),R(),t()},O=()=>{if(y)return;x||(x=a(z));const e=x.now();d&&d(),null!==C?P=e-C:P&&"finished"!==E||(P=e),"finished"===E&&v(),j=P,C=null,E="running",x.start()};r&&O();const D={then:(e,t)=>n.then(e,t),get time(){return Bn(A)},set time(e){e=Vn(e),A=e,null===C&&x&&0!==g?P=x.now()-e/g:C=e},get duration(){const e=null===k.calculatedDuration?ti(k):k.calculatedDuration;return Bn(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,D.time=Bn(A))},get state(){return E},play:O,pause:()=>{E="paused",C=A},stop:()=>{y=!0,"idle"!==E&&(E="idle",p&&p(),N())},cancel:()=>{null!==j&&z(j),N()},complete:()=>{E="finished"},sample:e=>(P=0,z(e))};return D}const ii=function(e){let t;return()=>(void 0===t&&(t=e()),t)}(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ai=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function oi(e,t,n){let{onUpdate:r,onComplete:i,...a}=n;if(!(ii()&&ai.has(t)&&!a.repeatDelay&&"mirror"!==a.repeatType&&0!==a.damping&&"inertia"!==a.type))return!1;let o,s,l=!1,c=!1;const u=()=>{s=new Promise(e=>{o=e})};u();let{keyframes:d,duration:p=300,ease:h,times:f}=a;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!Hn(t.ease))(t,a)){const e=ri({...a,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;f=void 0,d=n,p=r-10,h="linear"}const m=function(e,t,n){let{delay:r=0,duration:i,repeat:a=0,repeatType:o="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const c={[t]:n};l&&(c.offset=l);const u=Gn(s);return Array.isArray(u)&&(c.easing=u),e.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal"})}(e.owner.current,t,d,{...a,duration:p,ease:h,times:f}),g=()=>{c=!1,m.cancel()},y=()=>{c=!0,cn.update(g),o(),u()};m.onfinish=()=>{c||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,a)),i&&i(),y())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,on),get time(){return Bn(m.currentTime||0)},set time(e){m.currentTime=Vn(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return Bn(p)},play:()=>{l||(m.play(),un(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=ri({...a,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}y()},complete:()=>{c||m.finish()},cancel:y}}const si={type:"spring",stiffness:500,damping:25,restSpeed:10},li={type:"keyframes",duration:.8},ci={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ui=(e,t)=>{let{keyframes:n}=t;return n.length>2?li:rt.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:si:ci},di=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!Ar.test(t)&&"0"!==t||t.startsWith("url("))),pi=new Set(["brightness","contrast","saturate","opacity"]);function hi(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(yt)||[];if(!r)return e;const i=n.replace(r,"");let a=pi.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const fi=/([a-z-]*)\(.*?\)/g,mi={...Ar,getAnimatableNone:e=>{const t=e.match(fi);return t?t.map(hi).join(" "):e}},gi={...$t,color:gr,backgroundColor:gr,outlineColor:gr,fill:gr,stroke:gr,borderColor:gr,borderTopColor:gr,borderRightColor:gr,borderBottomColor:gr,borderLeftColor:gr,filter:mi,WebkitFilter:mi},yi=e=>gi[e];function vi(e,t){let n=yi(e);return n!==mi&&(n=Ar),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const xi=e=>/^0[^.\s]+$/.test(e);function bi(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||xi(e):void 0}function wi(e,t){return e[t]||e.default||e}const ki=!1,Si=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const a=wi(r,e)||{},o=a.delay||r.delay||0;let{elapsed:s=0}=r;s-=Vn(o);const l=function(e,t,n,r){const i=di(t,n);let a;a=Array.isArray(n)?[...n]:[null,n];const o=void 0!==r.from?r.from:e.get();let s;const l=[];for(let c=0;c<a.length;c++)null===a[c]&&(a[c]=0===c?o:a[c-1]),bi(a[c])&&l.push(c),"string"===typeof a[c]&&"none"!==a[c]&&"0"!==a[c]&&(s=a[c]);if(i&&l.length&&s)for(let c=0;c<l.length;c++)a[l[c]]=vi(t,s);return a}(t,e,n,a),c=l[0],u=l[l.length-1],d=di(e,c),p=di(e,u);_n(d===p,`You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-s,onUpdate:e=>{t.set(e),a.onUpdate&&a.onUpdate(e)},onComplete:()=>{i(),a.onComplete&&a.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length}(a)||(h={...h,...ui(e,h)}),h.duration&&(h.duration=Vn(h.duration)),h.repeatDelay&&(h.repeatDelay=Vn(h.repeatDelay)),!d||!p||Un||!1===a.type||ki)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const a=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:on,pause:on,stop:on,then:e=>(e(),Promise.resolve()),cancel:on,complete:on});return n?ri({keyframes:[0,1],duration:0,delay:n,onComplete:a}):a()}(Un?{...h,delay:0}:h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=oi(t,e,h);if(n)return n}return ri(h)}};function Ei(e){return Boolean(at(e)&&e.add)}const Ci=e=>/^\-?\d*\.?\d+$/.test(e);function Pi(e,t){-1===e.indexOf(t)&&e.push(t)}function ji(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ti{constructor(){this.subscriptions=[]}add(e){return Pi(this.subscriptions,e),()=>ji(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $i={current:void 0};class Mi{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=dn;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,cn.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>cn.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ti);const n=this.events[e].add(t);return"change"===e?()=>{n(),cn.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return $i.current&&$i.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ur(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ai(e,t){return new Mi(e,t)}const zi=e=>t=>t.test(e),Ri=[ht,Et,St,kt,Pt,Ct,{test:e=>"auto"===e,parse:e=>e}],Ni=e=>Ri.find(zi(e)),Li=[...Ri,gr,Ar],Oi=e=>Li.find(zi(e));function Di(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Ai(n))}function Ii(e,t){const n=In(e,t);let{transitionEnd:r={},transition:i={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const o in a){Di(e,o,tn(a[o]))}}function _i(e,t){if(!t)return;return(t[e]||t.default||t).from}function Fi(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Vi(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function Bi(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(a=r);const c=[],u=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||u&&Fi(u,d))continue;const i={delay:n,elapsed:0,...wi(a||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[Le];if(n){const e=window.HandoffAppearAnimations(n,d,t,cn);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let o=!i.isHandoff&&!Vi(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(o=!1),t.animation&&(o=!1),o)continue;t.start(Si(d,t,r,e.shouldReduceMotion&&rt.has(d)?{type:!1}:i));const p=t.animation;Ei(l)&&(l.add(d),p.then(()=>l.remove(d))),c.push(p)}return o&&Promise.all(c).then(()=>{o&&Ii(e,o)}),c}function Ui(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=In(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Bi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Wi).forEach((e,r)=>{e.notify("AnimationStart",t),o.push(Ui(e,t,{...a,delay:n+l(r)}).then(()=>e.notify("AnimationComplete",t)))}),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then(()=>t())}return Promise.all([a(),o(n.delay)])}function Wi(e,t){return e.sortNodePosition(t)}const Hi=[..._e].reverse(),Yi=_e.length;function Xi(e){return t=>Promise.all(t.map(t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map(t=>Ui(e,t,r));n=Promise.all(i)}else if("string"===typeof t)n=Ui(e,t,r);else{const i="function"===typeof t?In(e,t,r.custom):t;n=Promise.all(Bi(e,i,r))}return n.then(()=>e.notify("AnimationComplete",t))}(e,n,r)}))}function Gi(e){let t=Xi(e);const n={animate:Ki(!0),whileInView:Ki(),whileHover:Ki(),whileTap:Ki(),whileDrag:Ki(),whileFocus:Ki(),exit:Ki()};let r=!0;const i=(t,n)=>{const r=In(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function a(a,o){const s=e.getProps(),l=e.getVariantContext(!0)||{},c=[],u=new Set;let d={},p=1/0;for(let t=0;t<Yi;t++){const h=Hi[t],f=n[h],m=void 0!==s[h]?s[h]:l[h],g=De(m),y=h===o?f.isActive:null;!1===y&&(p=t);let v=m===l[h]&&m!==s[h]&&g;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),f.protectedKeys={...d},!f.isActive&&null===y||!m&&!f.prevProp||Ie(m)||"boolean"===typeof m)continue;let x=qi(f.prevProp,m)||h===o&&f.isActive&&!v&&g||t>p&&g,b=!1;const w=Array.isArray(m)?m:[m];let k=w.reduce(i,{});!1===y&&(k={});const{prevResolvedValues:S={}}=f,E={...S,...k},C=e=>{x=!0,u.has(e)&&(b=!0,u.delete(e)),f.needsAnimating[e]=!0};for(const e in E){const t=k[e],n=S[e];if(d.hasOwnProperty(e))continue;let r=!1;r=en(t)&&en(n)?!Dn(t,n):t!==n,r?void 0!==t?C(e):u.add(e):void 0!==t&&u.has(e)?C(e):f.protectedKeys[e]=!0}f.prevProp=m,f.prevResolvedValues=k,f.isActive&&(d={...d,...k}),r&&e.blockInitialAnimation&&(x=!1),!x||v&&!b||c.push(...w.map(e=>({animation:e,options:{type:h,...a}})))}if(u.size){const t={};u.forEach(n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)}),c.push({animation:t})}let h=Boolean(c.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(c):Promise.resolve()}return{animateChanges:a,setActive:function(t,r,i){var o;if(n[t].isActive===r)return Promise.resolve();null===(o=e.variantChildren)||void 0===o||o.forEach(e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)}),n[t].isActive=r;const s=a(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function qi(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Dn(t,e)}function Ki(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Qi=0;const Zi={animation:{Feature:class extends Pn{constructor(e){super(e),e.animationState||(e.animationState=Gi(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Ie(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends Pn{constructor(){super(...arguments),this.id=Qi++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Ji=(e,t)=>Math.abs(e-t);class ea{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=ra(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ji(e.x,t.x),r=Ji(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=dn;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=ta(t,this.transformPagePoint),cn.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=ra("pointercancel"===e.type?this.lastMoveEventInfo:ta(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!gn(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=ta(yn(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=dn;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,ra(a,this.history)),this.removeListeners=bn(vn(this.contextWindow,"pointermove",this.handlePointerMove),vn(this.contextWindow,"pointerup",this.handlePointerUp),vn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),un(this.updatePoint)}}function ta(e,t){return t?{point:t(e.point)}:e}function na(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ra(e,t){let{point:n}=e;return{point:n,delta:na(n,aa(t)),offset:na(n,ia(t)),velocity:oa(t,.1)}}function ia(e){return e[0]}function aa(e){return e[e.length-1]}function oa(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=aa(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Vn(t)));)n--;if(!r)return{x:0,y:0};const a=Bn(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function sa(e){return e.max-e.min}function la(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function ca(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=yr(t.min,t.max,e.origin),e.scale=sa(n)/sa(t),(la(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=yr(n.min,n.max,e.origin)-e.originPoint,(la(e.translate)||isNaN(e.translate))&&(e.translate=0)}function ua(e,t,n,r){ca(e.x,t.x,n.x,r?r.originX:void 0),ca(e.y,t.y,n.y,r?r.originY:void 0)}function da(e,t,n){e.min=n.min+t.min,e.max=e.min+sa(t)}function pa(e,t,n){e.min=t.min-n.min,e.max=e.min+sa(t)}function ha(e,t,n){pa(e.x,t.x,n.x),pa(e.y,t.y,n.y)}function fa(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function ma(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const ga=.35;function ya(e,t,n){return{min:va(e,t),max:va(e,n)}}function va(e,t){return"number"===typeof e?e:e[t]||0}const xa=()=>({x:{min:0,max:0},y:{min:0,max:0}});function ba(e){return[e("x"),e("y")]}function wa(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function ka(e){return void 0===e||1===e}function Sa(e){let{scale:t,scaleX:n,scaleY:r}=e;return!ka(t)||!ka(n)||!ka(r)}function Ea(e){return Sa(e)||Ca(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ca(e){return Pa(e.x)||Pa(e.y)}function Pa(e){return e&&"0%"!==e}function ja(e,t,n){return n+t*(e-n)}function Ta(e,t,n,r,i){return void 0!==i&&(e=ja(e,i,r)),ja(e,n,r)+t}function $a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Ta(e.min,t,n,r,i),e.max=Ta(e.max,t,n,r,i)}function Ma(e,t){let{x:n,y:r}=t;$a(e.x,n.translate,n.scale,n.originPoint),$a(e.y,r.translate,r.scale,r.originPoint)}function Aa(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function za(e,t){e.min=e.min+t,e.max=e.max+t}function Ra(e,t,n){let[r,i,a]=n;const o=void 0!==t[a]?t[a]:.5,s=yr(e.min,e.max,o);$a(e,t[r],t[i],s,t.scale)}const Na=["x","scaleX","originX"],La=["y","scaleY","originY"];function Oa(e,t){Ra(e.x,t,Na),Ra(e.y,t,La)}function Da(e,t){return wa(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const Ia=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},_a=new WeakMap;class Fa{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new ea(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(yn(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=En(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ba(e=>{let t=this.getAxisMotionValue(e).get()||0;if(St.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=sa(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t}),i&&cn.update(()=>i(e,t),!1,!0);const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>ba(e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:Ia(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&cn.update(()=>i(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!Va(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?yr(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?yr(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&Oe(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:fa(e.x,r,a),y:fa(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga;return!1===e?e=0:!0===e&&(e=ga),{x:ya(e,"left","right"),y:ya(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ba(e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Oe(e))return!1;const n=e.current;Fn(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Da(e,n),{scroll:i}=t;return i&&(za(r.x,i.offset.x),za(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:ma(e.x,t.x),y:ma(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=wa(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=ba(o=>{if(!Va(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)});return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Si(e,n,0,t))}stopAnimation(){ba(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ba(e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()})}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){ba(t=>{const{drag:n}=this.getProps();if(!Va(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-yr(n,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Oe(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};ba(e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=sa(e),i=sa(t);return i>r?n=Dr(t.min,t.max-r,e.min):r>i&&(n=Dr(e.min,e.max-i,t.min)),pt(0,1,n)}({min:n,max:n},this.constraints[e])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ba(t=>{if(!Va(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(yr(i,a,r[t]))})}addListeners(){if(!this.visualElement.current)return;_a.set(this.visualElement,this);const e=vn(this.visualElement.current,"pointerdown",e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)}),t=()=>{const{dragConstraints:e}=this.getProps();Oe(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=mn(window,"resize",()=>this.scalePositionWithinConstraints()),a=n.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(ba(e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))}),this.visualElement.render())});return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=ga,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function Va(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const Ba=e=>(t,n)=>{e&&cn.update(()=>e(t,n))};const Ua={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wa(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ha={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Et.test(e))return e;e=parseFloat(e)}return`${Wa(e,t.target.x)}% ${Wa(e,t.target.y)}%`}},Ya={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=Ar.parse(e);if(a.length>5)return i;const o=Ar.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=yr(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}};class Xa extends i.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var a;a=qa,Object.assign(tt,a),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),Ua.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||cn.postRender(()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()})),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Ga(e){const[t,n]=function(){const e=(0,i.useContext)(Me);if(null===e)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,a=(0,i.useId)();return(0,i.useEffect)(()=>r(a),[]),!t&&n?[!1,()=>n&&n(a)]:[!0]}(),r=(0,i.useContext)(Xe);return i.createElement(Xa,{...e,layoutGroup:r,switchLayoutGroup:(0,i.useContext)(Ge),isPresent:t,safeToRemove:n})}const qa={borderRadius:{...Ha,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ha,borderTopRightRadius:Ha,borderBottomLeftRadius:Ha,borderBottomRightRadius:Ha,boxShadow:Ya},Ka=["TopLeft","TopRight","BottomLeft","BottomRight"],Qa=Ka.length,Za=e=>"string"===typeof e?parseFloat(e):e,Ja=e=>"number"===typeof e||Et.test(e);function eo(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const to=ro(0,.5,rr),no=ro(.5,.95,on);function ro(e,t,n){return r=>r<e?0:r>t?1:n(Dr(e,t,r))}function io(e,t){e.min=t.min,e.max=t.max}function ao(e,t){io(e.x,t.x),io(e.y,t.y)}function oo(e,t,n,r,i){return e=ja(e-=t,1/n,r),void 0!==i&&(e=ja(e,1/i,r)),e}function so(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;St.test(t)&&(t=parseFloat(t),t=yr(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=yr(a.min,a.max,r);e===a&&(s-=t),e.min=oo(e.min,t,n,s,i),e.max=oo(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const lo=["x","scaleX","originX"],co=["y","scaleY","originY"];function uo(e,t,n,r){so(e.x,t,lo,n?n.x:void 0,r?r.x:void 0),so(e.y,t,co,n?n.y:void 0,r?r.y:void 0)}function po(e){return 0===e.translate&&1===e.scale}function ho(e){return po(e.x)&&po(e.y)}function fo(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function mo(e){return sa(e.x)/sa(e.y)}class go{constructor(){this.members=[]}add(e){Pi(this.members,e),e.scheduleRender()}remove(e){if(ji(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex(t=>e===t);if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yo(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y;if((i||a)&&(r=`translate3d(${i}px, ${a}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const o=e.x.scale*t.x,s=e.y.scale*t.y;return 1===o&&1===s||(r+=`scale(${o}, ${s})`),r||"none"}const vo=(e,t)=>e.depth-t.depth;class xo{constructor(){this.children=[],this.isDirty=!1}add(e){Pi(this.children,e),this.isDirty=!0}remove(e){ji(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(vo),this.isDirty=!1,this.children.forEach(e)}}const bo=["","X","Y","Z"],wo={visibility:"hidden"};let ko=0;const So={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Eo(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=ko++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,So.totalNodes=So.resolvedTargetDeltas=So.recalculatedProjection=0,this.nodes.forEach(jo),this.nodes.forEach(No),this.nodes.forEach(Lo),this.nodes.forEach(To),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(So)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new xo)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ti),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(un(r),e(o-t))};return cn.read(r,!0),()=>un(r)}(r,250),Ua.hasAnimatedSinceResize&&(Ua.hasAnimatedSinceResize=!1,this.nodes.forEach(Ro))})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||Vo,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!fo(this.targetLayout,i)||r,u=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...wi(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||Ro(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,un(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Oo),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Mo);this.isUpdating||this.nodes.forEach(Ao),this.isUpdating=!1,this.nodes.forEach(zo),this.nodes.forEach(Co),this.nodes.forEach(Po),this.clearAllSnapshots();const e=performance.now();dn.delta=pt(0,1e3/60,e-dn.timestamp),dn.timestamp=e,dn.isProcessing=!0,pn.update.process(dn),pn.preRender.process(dn),pn.render.process(dn),dn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach($o),this.sharedNodes.forEach(Do)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,cn.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){cn.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!ho(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Ea(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),Wo((r=n).x),Wo(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(za(t.x,n.offset.x),za(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};ao(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;if(r!==this.root&&i&&a.layoutScroll){if(i.isRoot){ao(t,e);const{scroll:n}=this.root;n&&(za(t.x,-n.offset.x),za(t.y,-n.offset.y))}za(t.x,i.offset.x),za(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};ao(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Oa(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Ea(e.latestValues)&&Oa(n,e.latestValues)}return Ea(this.latestValues)&&Oa(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};ao(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Ea(e.latestValues))continue;Sa(e.latestValues)&&e.updateSnapshot();const r=xa();ao(r,e.measurePageBox()),uo(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Ea(this.latestValues)&&uo(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==dn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:a}=this.options;if(this.layout&&(i||a)){if(this.resolvedRelativeTargetAt=dn.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ha(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),ao(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var o,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),o=this.target,s=this.relativeTarget,l=this.relativeParent.target,da(o.x,s.x,l.x),da(o.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):ao(this.target,this.layout.layoutBox),Ma(this.target,this.targetDelta)):ao(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},ha(this.relativeTargetOrigin,this.target,e.target),ao(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}So.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Sa(this.parent.latestValues)&&!Ca(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===dn.timestamp&&(r=!1),r)return;const{layout:i,layoutId:a}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!a)return;ao(this.layoutCorrected,this.layout.layoutBox);const o=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const i=a.instance;i&&i.style&&"contents"===i.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Oa(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ma(e,o)),r&&Ea(a.latestValues)&&Oa(e,a.latestValues))}t.x=Aa(t.x),t.y=Aa(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const c=this.projectionTransform;ua(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=yo(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===o&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),So.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(Fo));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;Io(a.x,e.x,n),Io(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ha(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){_o(e.x,t.x,n.x,r),_o(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),ao(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=yr(0,void 0!==n.opacity?n.opacity:1,to(r)),e.opacityExit=yr(void 0!==t.opacity?t.opacity:1,0,no(r))):a&&(e.opacity=yr(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let o=0;o<Qa;o++){const i=`border${Ka[o]}Radius`;let a=eo(t,i),s=eo(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Ja(a)===Ja(s)?(e[i]=Math.max(yr(Za(a),Za(s),r),0),(St.test(s)||St.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=yr(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(un(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=cn.update(()=>{Ua.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=at(e)?e:Ai(e);return r.start(Si("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&Ho(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=sa(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=sa(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}ao(t,n),Oa(t,i),ua(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new go);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<bo.length;i++){const t="rotate"+bo[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return wo;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=nn(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const a=this.getLead();if(!this.projectionDelta||!this.layout||!a.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=nn(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Ea(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const o=a.animationValues||a.latestValues;this.applyTransformsToTarget(),r.transform=yo(this.projectionDeltaWithTransform,this.treeScale,o),i&&(r.transform=i(o,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,a.animationValues?r.opacity=a===this?null!==(n=null!==(t=o.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:r.opacity=a===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const c in tt){if(void 0===o[c])continue;const{correct:e,applyTo:t}=tt[c],n="none"===r.transform?o[c]:e(o[c],a);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[c]=n}return this.options.layoutId&&(r.pointerEvents=a===this?nn(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()}),this.root.nodes.forEach(Mo),this.root.sharedNodes.clear()}}}function Co(e){e.updateLayout()}function Po(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,a=n.source!==e.layout.source;"size"===i?ba(e=>{const r=a?n.measuredBox[e]:n.layoutBox[e],i=sa(r);r.min=t[e].min,r.max=r.min+i}):Ho(i,n.layoutBox,t)&&ba(r=>{const i=a?n.measuredBox[r]:n.layoutBox[r],o=sa(t[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};ua(o,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?ua(s,e.applyTransform(r,!0),n.measuredBox):ua(s,t,n.layoutBox);const l=!ho(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};ha(o,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};ha(s,t,a.layoutBox),fo(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function jo(e){So.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function To(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function $o(e){e.clearSnapshot()}function Mo(e){e.clearMeasurements()}function Ao(e){e.isLayoutDirty=!1}function zo(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ro(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function No(e){e.resolveTargetDelta()}function Lo(e){e.calcProjection()}function Oo(e){e.resetRotation()}function Do(e){e.removeLeadSnapshot()}function Io(e,t,n){e.translate=yr(t.translate,0,n),e.scale=yr(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function _o(e,t,n,r){e.min=yr(t.min,n.min,r),e.max=yr(t.max,n.max,r)}function Fo(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const Vo={duration:.45,ease:[.4,0,.1,1]},Bo=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),Uo=Bo("applewebkit/")&&!Bo("chrome/")?Math.round:on;function Wo(e){e.min=Uo(e.min),e.max=Uo(e.max)}function Ho(e,t,n){return"position"===e||"preserve-aspect"===e&&!la(mo(t),mo(n),.2)}const Yo=Eo({attachResizeListener:(e,t)=>mn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xo={current:void 0},Go=Eo({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xo.current){const e=new Yo({});e.mount(window),e.setOptions({layoutScroll:!0}),Xo.current=e}return Xo.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),qo={pan:{Feature:class extends Pn{constructor(){super(...arguments),this.removePointerDownListener=on}onPointerDown(e){this.session=new ea(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ia(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ba(e),onStart:Ba(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&cn.update(()=>r(e,t))}}}mount(){this.removePointerDownListener=vn(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends Pn{constructor(e){super(e),this.removeGroupControls=on,this.removeListeners=on,this.controls=new Fa(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||on}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Go,MeasureLayout:Ga}},Ko=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function Qo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Fn(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=Ko.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return Ci(e)?parseFloat(e):e}return ut(i)?Qo(i,t,n+1):i}const Zo=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Jo=e=>Zo.has(e),es=e=>e===ht||e===Et,ts=(e,t)=>parseFloat(e.split(", ")[t]),ns=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const a=i.match(/^matrix3d\((.+)\)$/);if(a)return ts(a[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?ts(t[1],e):0}},rs=new Set(["x","y","z"]),is=nt.filter(e=>!rs.has(e));const as={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:ns(4,13),y:ns(5,14)};as.translateX=as.x,as.translateY=as.y;const os=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(Jo);let a=[],o=!1;const s=[];if(i.forEach(i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let c=n[i],u=Ni(c);const d=t[i];let p;if(en(d)){const e=d.length,t=null===d[0]?1:0;c=d[t],u=Ni(c);for(let n=t;n<e&&null!==d[n];n++)p?Fn(Ni(d[n])===p,"All keyframes must be of the same type"):(p=Ni(d[n]),Fn(p===u||es(u)&&es(p),"Keyframes must be of the same dimension as the current value"))}else p=Ni(d);if(u!==p)if(es(u)&&es(p)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[i]=parseFloat(d):Array.isArray(d)&&p===Et&&(t[i]=d.map(parseFloat))}else(null===u||void 0===u?void 0:u.transform)&&(null===p||void 0===p?void 0:p.transform)&&(0===c||0===d)?0===c?l.set(p.transform(c)):t[i]=u.transform(d):(o||(a=function(e){const t=[];return is.forEach(n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}(e),o=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(d))}),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,a=getComputedStyle(i),{display:o}=a,s={};"none"===o&&t.setStaticValue("display",e.display||"block"),n.forEach(e=>{s[e]=as[e](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=as[n](l,a)}),e})(t,e,s);return a.length&&a.forEach(t=>{let[n,r]=t;e.getValue(n).set(r)}),e.render(),Ae&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function ss(e,t,n,r){return(e=>Object.keys(e).some(Jo))(t)?os(e,t,n,r):{target:t,transitionEnd:r}}const ls=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach(e=>{const t=e.get();if(!ut(t))return;const n=Qo(t,i);n&&e.set(n)});for(const a in r){const e=r[a];if(!ut(e))continue;const t=Qo(e,i);t&&(r[a]=t,n||(n={}),void 0===n[a]&&(n[a]=e))}return{target:r,transitionEnd:n}}(e,t,r);return ss(e,t=i.target,n,r=i.transitionEnd)},cs={current:null},us={current:!1};const ds=new WeakMap,ps=Object.keys(Ye),hs=ps.length,fs=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],ms=Fe.length;class gs{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:a}=e,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>cn.render(this.render,!1,!0);const{latestValues:s,renderState:l}=a;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Ve(n),this.isVariantNode=Be(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:c,...u}=this.scrapeMotionValuesFromProps(n,{});for(const d in u){const e=u[d];void 0!==s[d]&&at(e)&&(e.set(s[d],!1),Ei(c)&&c.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,ds.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),us.current||function(){if(us.current=!0,Ae)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>cs.current=e.matches;e.addListener(t),t()}else cs.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||cs.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){ds.delete(this.current),this.projection&&this.projection.unmount(),un(this.notifyUpdate),un(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=rt.has(e),r=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&cn.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),i()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,a,{children:o,...s}=e;for(let l=0;l<hs;l++){const e=ps[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:o}=Ye[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),o&&(a=o))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:a,layoutScroll:o,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||a&&Oe(a),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:o,layoutRoot:l})}return a}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<fs.length;n++){const t=fs[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const a=t[i],o=n[i];if(at(a))e.addValue(i,a),Ei(r)&&r.add(i);else if(at(o))e.addValue(i,Ai(a,{owner:e})),Ei(r)&&r.remove(i);else if(o!==a)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(a)}else{const t=e.getStaticValue(i);e.addValue(i,Ai(void 0!==t?t:a,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<ms;t++){const n=Fe[t],r=this.props[n];(De(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=Ai(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=Zt(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||at(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new Ti),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class ys extends gs{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...a}=e,{transformValues:o}=t,s=function(e,t,n){const r={};for(const i in e){const e=_i(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(a,r||{},this);if(o&&(i&&(i=o(i)),a&&(a=o(a)),s&&(s=o(s))),n){!function(e,t,n){var r,i;const a=Object.keys(t).filter(t=>!e.hasValue(t)),o=a.length;if(o)for(let s=0;s<o;s++){const o=a[s],l=t[o];let c=null;Array.isArray(l)&&(c=l[0]),null===c&&(c=null!==(i=null!==(r=n[o])&&void 0!==r?r:e.readValue(o))&&void 0!==i?i:t[o]),void 0!==c&&null!==c&&("string"===typeof c&&(Ci(c)||xi(c))?c=parseFloat(c):!Oi(c)&&Ar.test(l)&&(c=vi(o,l)),e.addValue(o,Ai(c,{owner:e})),void 0===n[o]&&(n[o]=c),null!==c&&e.setBaseTarget(o,c))}}(this,a,s);const e=ls(this,a,s,i);i=e.transitionEnd,a=e.target}return{transition:r,transitionEnd:i,...a}}}class vs extends ys{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(rt.has(t)){const e=yi(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(ct(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Da(e,n)}build(e,t,n,r){Mt(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return Kt(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;at(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}renderInstance(e,t,n,r){Xt(e,t,n,r)}}class xs extends ys{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(rt.has(t)){const e=yi(t);return e&&e.default||0}return t=Gt.has(t)?t:Ne(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return Qt(e,t)}build(e,t,n,r){Bt(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){qt(e,t,0,r)}mount(e){this.isSVGTag=Wt(e.tagName),super.mount(e)}}const bs=(e,t)=>et(e)?new xs(t,{enableHardwareAcceleration:!1}):new vs(t,{enableHardwareAcceleration:!0});const ws={...Zi,...On,...qo,...{layout:{ProjectionNode:Go,MeasureLayout:Ga}}},ks=Ze((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...et(e)?hn:fn,preloadedFeatures:n,useRender:Yt(i),createVisualElement:r,Component:e}}(e,t,ws,bs));function Ss(){const e=(0,i.useRef)(!1);return ze(()=>(e.current=!0,()=>{e.current=!1}),[]),e}class Es extends i.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Cs(e){let{children:t,isPresent:n}=e;const r=(0,i.useId)(),a=(0,i.useRef)(null),o=(0,i.useRef)({width:0,height:0,top:0,left:0});return(0,i.useInsertionEffect)(()=>{const{width:e,height:t,top:i,left:s}=o.current;if(n||!a.current||!e||!t)return;a.current.dataset.motionPopId=r;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${i}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}},[n]),i.createElement(Es,{isPresent:n,childRef:a,sizeRef:o},i.cloneElement(t,{ref:a}))}const Ps=e=>{let{children:t,initial:n,isPresent:r,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l}=e;const c=Jt(js),u=(0,i.useId)(),d=(0,i.useMemo)(()=>({id:u,initial:n,isPresent:r,custom:o,onExitComplete:e=>{c.set(e,!0);for(const t of c.values())if(!t)return;a&&a()},register:e=>(c.set(e,!1),()=>c.delete(e))}),s?void 0:[r]);return(0,i.useMemo)(()=>{c.forEach((e,t)=>c.set(t,!1))},[r]),i.useEffect(()=>{!r&&!c.size&&a&&a()},[r]),"popLayout"===l&&(t=i.createElement(Cs,{isPresent:r},t)),i.createElement(Me.Provider,{value:d},t)};function js(){return new Map}const Ts=e=>e.key||"";const $s=e=>{let{children:t,custom:n,initial:r=!0,onExitComplete:a,exitBeforeEnter:o,presenceAffectsLayout:s=!0,mode:l="sync"}=e;Fn(!o,"Replace exitBeforeEnter with mode='wait'");const c=(0,i.useContext)(Xe).forceRender||function(){const e=Ss(),[t,n]=(0,i.useState)(0),r=(0,i.useCallback)(()=>{e.current&&n(t+1)},[t]);return[(0,i.useCallback)(()=>cn.postRender(r),[r]),t]}()[0],u=Ss(),d=function(e){const t=[];return i.Children.forEach(e,e=>{(0,i.isValidElement)(e)&&t.push(e)}),t}(t);let p=d;const h=(0,i.useRef)(new Map).current,f=(0,i.useRef)(p),m=(0,i.useRef)(new Map).current,g=(0,i.useRef)(!0);var y;if(ze(()=>{g.current=!1,function(e,t){e.forEach(e=>{const n=Ts(e);t.set(n,e)})}(d,m),f.current=p}),y=()=>{g.current=!0,m.clear(),h.clear()},(0,i.useEffect)(()=>()=>y(),[]),g.current)return i.createElement(i.Fragment,null,p.map(e=>i.createElement(Ps,{key:Ts(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:s,mode:l},e)));p=[...p];const v=f.current.map(Ts),x=d.map(Ts),b=v.length;for(let i=0;i<b;i++){const e=v[i];-1!==x.indexOf(e)||h.has(e)||h.set(e,void 0)}return"wait"===l&&h.size&&(p=[]),h.forEach((e,t)=>{if(-1!==x.indexOf(t))return;const r=m.get(t);if(!r)return;const o=v.indexOf(t);let g=e;if(!g){const e=()=>{h.delete(t);const e=Array.from(m.keys()).filter(e=>!x.includes(e));if(e.forEach(e=>m.delete(e)),f.current=d.filter(n=>{const r=Ts(n);return r===t||e.includes(r)}),!h.size){if(!1===u.current)return;c(),a&&a()}};g=i.createElement(Ps,{key:Ts(r),isPresent:!1,onExitComplete:e,custom:n,presenceAffectsLayout:s,mode:l},r),h.set(t,g)}p.splice(o,0,g)}),p=p.map(e=>{const t=e.key;return h.has(t)?e:i.createElement(Ps,{key:Ts(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)}),i.createElement(i.Fragment,null,h.size?p:p.map(e=>(0,i.cloneElement)(e)))};let Ms={data:""},As=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||Ms},zs=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Rs=/\/\*[^]*?\*\/|  +/g,Ns=/\n+/g,Ls=(e,t)=>{let n="",r="",i="";for(let a in e){let o=e[a];"@"==a[0]?"i"==a[1]?n=a+" "+o+";":r+="f"==a[1]?Ls(o,a):a+"{"+Ls(o,"k"==a[1]?"":t)+"}":"object"==typeof o?r+=Ls(o,t?t.replace(/([^,])+/g,e=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):a):null!=o&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Ls.p?Ls.p(a,o):a+":"+o+";")}return n+(t&&i?t+"{"+i+"}":i)+r},Os={},Ds=e=>{if("object"==typeof e){let t="";for(let n in e)t+=n+Ds(e[n]);return t}return e},Is=(e,t,n,r,i)=>{let a=Ds(e),o=Os[a]||(Os[a]=(e=>{let t=0,n=11;for(;t<e.length;)n=101*n+e.charCodeAt(t++)>>>0;return"go"+n})(a));if(!Os[o]){let t=a!==e?e:(e=>{let t,n,r=[{}];for(;t=zs.exec(e.replace(Rs,""));)t[4]?r.shift():t[3]?(n=t[3].replace(Ns," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][t[1]]=t[2].replace(Ns," ").trim();return r[0]})(e);Os[o]=Ls(i?{["@keyframes "+o]:t}:t,n?"":"."+o)}let s=n&&Os.g?Os.g:null;return n&&(Os.g=Os[o]),((e,t,n,r)=>{r?t.data=t.data.replace(r,e):-1===t.data.indexOf(e)&&(t.data=n?e+t.data:t.data+e)})(Os[o],t,r,s),o};function _s(e){let t=this||{},n=e.call?e(t.p):e;return Is(n.unshift?n.raw?((e,t,n)=>e.reduce((e,r,i)=>{let a=t[i];if(a&&a.call){let e=a(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;a=t?"."+t:e&&"object"==typeof e?e.props?"":Ls(e,""):!1===e?"":e}return e+r+(null==a?"":a)},""))(n,[].slice.call(arguments,1),t.p):n.reduce((e,n)=>Object.assign(e,n&&n.call?n(t.p):n),{}):n,As(t.target),t.g,t.o,t.k)}_s.bind({g:1});let Fs,Vs,Bs,Us=_s.bind({k:1});function Ws(e,t){let n=this||{};return function(){let r=arguments;function i(a,o){let s=Object.assign({},a),l=s.className||i.className;n.p=Object.assign({theme:Vs&&Vs()},s),n.o=/ *go\d+/.test(l),s.className=_s.apply(n,r)+(l?" "+l:""),t&&(s.ref=o);let c=e;return e[0]&&(c=s.as||e,delete s.as),Bs&&c[0]&&Bs(s),Fs(c,s)}return t?t(i):i}}var Hs=(e,t)=>(e=>"function"==typeof e)(e)?e(t):e,Ys=(()=>{let e=0;return()=>(++e).toString()})(),Xs=(()=>{let e;return()=>{if(void 0===e&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Gs="default",qs=(e,t)=>{let{toastLimit:n}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,n)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return qs(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=t;return{...e,toasts:e.toasts.map(e=>e.id===i||void 0===i?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},Ks=[],Qs={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},Zs={},Js=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gs;Zs[t]=qs(Zs[t]||Qs,e),Ks.forEach(e=>{let[n,r]=e;n===t&&r(Zs[t])})},el=e=>Object.keys(Zs).forEach(t=>Js(e,t)),tl=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gs;return t=>{Js(t,e)}},nl={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},rl=e=>(t,n)=>{let r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return{createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(null==n?void 0:n.id)||Ys()}}(t,e,n);return tl(r.toasterId||(e=>Object.keys(Zs).find(t=>Zs[t].toasts.some(t=>t.id===e)))(r.id))({type:2,toast:r}),r.id},il=(e,t)=>rl("blank")(e,t);il.error=rl("error"),il.success=rl("success"),il.loading=rl("loading"),il.custom=rl("custom"),il.dismiss=(e,t)=>{let n={type:3,toastId:e};t?tl(t)(n):el(n)},il.dismissAll=e=>il.dismiss(void 0,e),il.remove=(e,t)=>{let n={type:4,toastId:e};t?tl(t)(n):el(n)},il.removeAll=e=>il.remove(void 0,e),il.promise=(e,t,n)=>{let r=il.loading(t.loading,{...n,...null==n?void 0:n.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let i=t.success?Hs(t.success,e):void 0;return i?il.success(i,{id:r,...n,...null==n?void 0:n.success}):il.dismiss(r),e}).catch(e=>{let i=t.error?Hs(t.error,e):void 0;i?il.error(i,{id:r,...n,...null==n?void 0:n.error}):il.dismiss(r)}),e};var al=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",{toasts:n,pausedAt:r}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Gs,[n,r]=(0,i.useState)(Zs[t]||Qs),a=(0,i.useRef)(Zs[t]);(0,i.useEffect)(()=>(a.current!==Zs[t]&&r(Zs[t]),Ks.push([t,r]),()=>{let e=Ks.findIndex(e=>{let[n]=e;return n===t});e>-1&&Ks.splice(e,1)}),[t]);let o=n.toasts.map(t=>{var n,r,i;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(n=e[t.type])?void 0:n.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||nl[t.type],style:{...e.style,...null==(i=e[t.type])?void 0:i.style,...t.style}}});return{...n,toasts:o}}(e,t),a=(0,i.useRef)(new Map).current,o=(0,i.useCallback)(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;if(a.has(e))return;let n=setTimeout(()=>{a.delete(e),s({type:4,toastId:e})},t);a.set(e,n)},[]);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),i=n.map(n=>{if(n.duration===1/0)return;let r=(n.duration||0)+n.pauseDuration-(e-n.createdAt);if(!(r<0))return setTimeout(()=>il.dismiss(n.id,t),r);n.visible&&il.dismiss(n.id)});return()=>{i.forEach(e=>e&&clearTimeout(e))}},[n,r,t]);let s=(0,i.useCallback)(tl(t),[t]),l=(0,i.useCallback)(()=>{s({type:5,time:Date.now()})},[s]),c=(0,i.useCallback)((e,t)=>{s({type:1,toast:{id:e,height:t}})},[s]),u=(0,i.useCallback)(()=>{r&&s({type:6,time:Date.now()})},[r,s]),d=(0,i.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:i=8,defaultPosition:a}=t||{},o=n.filter(t=>(t.position||a)===(e.position||a)&&t.height),s=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<s&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+i,0)},[n]);return(0,i.useEffect)(()=>{n.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[n,o]),{toasts:n,handlers:{updateHeight:c,startPause:l,endPause:u,calculateOffset:d}}},ol=Us`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,sl=Us`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ll=Us`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,cl=Ws("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ol} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${sl} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ll} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,ul=Us`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,dl=Ws("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ul} 1s linear infinite;
`,pl=Us`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,hl=Us`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,fl=Ws("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pl} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${hl} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,ml=Ws("div")`
  position: absolute;
`,gl=Ws("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,yl=Us`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,vl=Ws("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${yl} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,xl=e=>{let{toast:t}=e,{icon:n,type:r,iconTheme:a}=t;return void 0!==n?"string"==typeof n?i.createElement(vl,null,n):n:"blank"===r?null:i.createElement(gl,null,i.createElement(dl,{...a}),"loading"!==r&&i.createElement(ml,null,"error"===r?i.createElement(cl,{...a}):i.createElement(fl,{...a})))},bl=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,wl=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,kl=Ws("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Sl=Ws("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,El=i.memo(e=>{let{toast:t,position:n,style:r,children:a}=e,o=t.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=Xs()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[bl(n),wl(n)];return{animation:t?`${Us(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Us(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(t.position||n||"top-center",t.visible):{opacity:0},s=i.createElement(xl,{toast:t}),l=i.createElement(Sl,{...t.ariaProps},Hs(t.message,t));return i.createElement(kl,{className:t.className,style:{...o,...r,...t.style}},"function"==typeof a?a({icon:s,message:l}):i.createElement(i.Fragment,null,s,l))});!function(e,t,n,r){Ls.p=t,Fs=e,Vs=n,Bs=r}(i.createElement);var Cl=e=>{let{id:t,className:n,style:r,onHeightUpdate:a,children:o}=e,s=i.useCallback(e=>{if(e){let n=()=>{let n=e.getBoundingClientRect().height;a(t,n)};n(),new MutationObserver(n).observe(e,{subtree:!0,childList:!0,characterData:!0})}},[t,a]);return i.createElement("div",{ref:s,className:n,style:r},o)},Pl=_s`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,jl=e=>{let{reverseOrder:t,position:n="top-center",toastOptions:r,gutter:a,children:o,toasterId:s,containerStyle:l,containerClassName:c}=e,{toasts:u,handlers:d}=al(r,s);return i.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},u.map(e=>{let r=e.position||n,s=((e,t)=>{let n=e.includes("top"),r=n?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Xs()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...r,...i}})(r,d.calculateOffset(e,{reverseOrder:t,gutter:a,defaultPosition:n}));return i.createElement(Cl,{id:e.id,key:e.id,onHeightUpdate:d.updateHeight,className:e.visible?Pl:"",style:s},"custom"===e.type?Hs(e.message,e):o?o(e):i.createElement(El,{toast:e,position:r}))}))},Tl=il,$l="-ms-",Ml="-moz-",Al="-webkit-",zl="comm",Rl="rule",Nl="decl",Ll="@keyframes",Ol=Math.abs,Dl=String.fromCharCode,Il=Object.assign;function _l(e){return e.trim()}function Fl(e,t){return(e=t.exec(e))?e[0]:e}function Vl(e,t,n){return e.replace(t,n)}function Bl(e,t,n){return e.indexOf(t,n)}function Ul(e,t){return 0|e.charCodeAt(t)}function Wl(e,t,n){return e.slice(t,n)}function Hl(e){return e.length}function Yl(e){return e.length}function Xl(e,t){return t.push(e),e}function Gl(e,t){return e.filter(function(e){return!Fl(e,t)})}var ql,Kl,Ql=1,Zl=1,Jl=0,ec=0,tc=0,nc="";function rc(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Ql,column:Zl,length:o,return:"",siblings:s}}function ic(e,t){return Il(rc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ac(e){for(;e.root;)e=ic(e.root,{children:[e]});Xl(e,e.siblings)}function oc(){return tc=ec>0?Ul(nc,--ec):0,Zl--,10===tc&&(Zl=1,Ql--),tc}function sc(){return tc=ec<Jl?Ul(nc,ec++):0,Zl++,10===tc&&(Zl=1,Ql++),tc}function lc(){return Ul(nc,ec)}function cc(){return ec}function uc(e,t){return Wl(nc,e,t)}function dc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pc(e){return Ql=Zl=1,Jl=Hl(nc=e),ec=0,[]}function hc(e){return nc="",e}function fc(e){return _l(uc(ec-1,yc(91===e?e+2:40===e?e+1:e)))}function mc(e){for(;(tc=lc())&&tc<33;)sc();return dc(e)>2||dc(tc)>3?"":" "}function gc(e,t){for(;--t&&sc()&&!(tc<48||tc>102||tc>57&&tc<65||tc>70&&tc<97););return uc(e,cc()+(t<6&&32==lc()&&32==sc()))}function yc(e){for(;sc();)switch(tc){case e:return ec;case 34:case 39:34!==e&&39!==e&&yc(tc);break;case 40:41===e&&yc(e);break;case 92:sc()}return ec}function vc(e,t){for(;sc()&&e+tc!==57&&(e+tc!==84||47!==lc()););return"/*"+uc(t,ec-1)+"*"+Dl(47===e?e:sc())}function xc(e){for(;!dc(lc());)sc();return uc(e,ec)}function bc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function wc(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case Nl:return e.return=e.return||e.value;case zl:return"";case Ll:return e.return=e.value+"{"+bc(e.children,r)+"}";case Rl:if(!Hl(e.value=e.props.join(",")))return""}return Hl(n=bc(e.children,r))?e.return=e.value+"{"+n+"}":""}function kc(e,t,n){switch(function(e,t){return 45^Ul(e,0)?(((t<<2^Ul(e,0))<<2^Ul(e,1))<<2^Ul(e,2))<<2^Ul(e,3):0}(e,t)){case 5103:return Al+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Al+e+e;case 4855:return Al+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ml+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Al+e+Ml+e+$l+e+e;case 5936:switch(Ul(e,t+11)){case 114:return Al+e+$l+Vl(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Al+e+$l+Vl(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Al+e+$l+Vl(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Al+e+$l+e+e;case 6165:return Al+e+$l+"flex-"+e+e;case 5187:return Al+e+Vl(e,/(\w+).+(:[^]+)/,Al+"box-$1$2"+$l+"flex-$1$2")+e;case 5443:return Al+e+$l+"flex-item-"+Vl(e,/flex-|-self/g,"")+(Fl(e,/flex-|baseline/)?"":$l+"grid-row-"+Vl(e,/flex-|-self/g,""))+e;case 4675:return Al+e+$l+"flex-line-pack"+Vl(e,/align-content|flex-|-self/g,"")+e;case 5548:return Al+e+$l+Vl(e,"shrink","negative")+e;case 5292:return Al+e+$l+Vl(e,"basis","preferred-size")+e;case 6060:return Al+"box-"+Vl(e,"-grow","")+Al+e+$l+Vl(e,"grow","positive")+e;case 4554:return Al+Vl(e,/([^-])(transform)/g,"$1"+Al+"$2")+e;case 6187:return Vl(Vl(Vl(e,/(zoom-|grab)/,Al+"$1"),/(image-set)/,Al+"$1"),e,"")+e;case 5495:case 3959:return Vl(e,/(image-set\([^]*)/,Al+"$1$`$1");case 4968:return Vl(Vl(e,/(.+:)(flex-)?(.*)/,Al+"box-pack:$3"+$l+"flex-pack:$3"),/space-between/,"justify")+Al+e+e;case 4200:if(!Fl(e,/flex-|baseline/))return $l+"grid-column-align"+Wl(e,t)+e;break;case 2592:case 3360:return $l+Vl(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Fl(e.props,/grid-\w+-end/)})?~Bl(e+(n=n[t].value),"span",0)?e:$l+Vl(e,"-start","")+e+$l+"grid-row-span:"+(~Bl(n,"span",0)?Fl(n,/\d+/):+Fl(n,/\d+/)-+Fl(e,/\d+/))+";":$l+Vl(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Fl(e.props,/grid-\w+-start/)})?e:$l+Vl(Vl(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Vl(e,/(.+)-inline(.+)/,Al+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Hl(e)-1-t>6)switch(Ul(e,t+1)){case 109:if(45!==Ul(e,t+4))break;case 102:return Vl(e,/(.+:)(.+)-([^]+)/,"$1"+Al+"$2-$3$1"+Ml+(108==Ul(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Bl(e,"stretch",0)?kc(Vl(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Vl(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return $l+n+":"+r+s+(i?$l+n+"-span:"+(a?o:+o-+r)+s:"")+e});case 4949:if(121===Ul(e,t+6))return Vl(e,":",":"+Al)+e;break;case 6444:switch(Ul(e,45===Ul(e,14)?18:11)){case 120:return Vl(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Al+(45===Ul(e,14)?"inline-":"")+"box$3$1"+Al+"$2$3$1"+$l+"$2box$3")+e;case 100:return Vl(e,":",":"+$l)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Vl(e,"scroll-","scroll-snap-")+e}return e}function Sc(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Nl:return void(e.return=kc(e.value,e.length,n));case Ll:return bc([ic(e,{value:Vl(e.value,"@","@"+Al)})],r);case Rl:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Fl(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ac(ic(e,{props:[Vl(t,/:(read-\w+)/,":-moz-$1")]})),ac(ic(e,{props:[t]})),Il(e,{props:Gl(n,r)});break;case"::placeholder":ac(ic(e,{props:[Vl(t,/:(plac\w+)/,":"+Al+"input-$1")]})),ac(ic(e,{props:[Vl(t,/:(plac\w+)/,":-moz-$1")]})),ac(ic(e,{props:[Vl(t,/:(plac\w+)/,$l+"input-$1")]})),ac(ic(e,{props:[t]})),Il(e,{props:Gl(n,r)})}return""})}}function Ec(e){return hc(Cc("",null,null,null,[""],e=pc(e),0,[0],e))}function Cc(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,h=0,f=0,m=1,g=1,y=1,v=0,x="",b=i,w=a,k=r,S=x;g;)switch(f=v,v=sc()){case 40:if(108!=f&&58==Ul(S,d-1)){-1!=Bl(S+=Vl(fc(v),"&","&\f"),"&\f",Ol(c?s[c-1]:0))&&(y=-1);break}case 34:case 39:case 91:S+=fc(v);break;case 9:case 10:case 13:case 32:S+=mc(f);break;case 92:S+=gc(cc()-1,7);continue;case 47:switch(lc()){case 42:case 47:Xl(jc(vc(sc(),cc()),t,n,l),l),5!=dc(f||1)&&5!=dc(lc()||1)||!Hl(S)||" "===Wl(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*m:s[c++]=Hl(S)*y;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==y&&(S=Vl(S,/\f/g,"")),h>0&&(Hl(S)-d||0===m&&47===f)&&Xl(h>32?Tc(S+";",r,n,d-1,l):Tc(Vl(S," ","")+";",r,n,d-2,l),l);break;case 59:S+=";";default:if(Xl(k=Pc(S,t,n,c,u,i,s,x,b=[],w=[],d,a),a),123===v)if(0===u)Cc(S,t,k,k,b,a,d,s,w);else{switch(p){case 99:if(110===Ul(S,3))break;case 108:if(97===Ul(S,2))break;default:u=0;case 100:case 109:case 115:}u?Cc(e,k,k,r&&Xl(Pc(e,k,k,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w):Cc(S,k,k,k,[""],w,0,s,w)}}c=u=h=0,m=y=1,x=S="",d=o;break;case 58:d=1+Hl(S),h=f;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==oc())continue;switch(S+=Dl(v),v*m){case 38:y=u>0?1:(S+="\f",-1);break;case 44:s[c++]=(Hl(S)-1)*y,y=1;break;case 64:45===lc()&&(S+=fc(sc())),p=lc(),u=d=Hl(x=S+=xc(cc())),v++;break;case 45:45===f&&2==Hl(S)&&(m=0)}}return a}function Pc(e,t,n,r,i,a,o,s,l,c,u,d){for(var p=i-1,h=0===i?a:[""],f=Yl(h),m=0,g=0,y=0;m<r;++m)for(var v=0,x=Wl(e,p+1,p=Ol(g=o[m])),b=e;v<f;++v)(b=_l(g>0?h[v]+" "+x:Vl(x,/&\f/g,h[v])))&&(l[y++]=b);return rc(e,t,n,0===i?Rl:s,l,c,u,d)}function jc(e,t,n,r){return rc(e,t,n,zl,Dl(tc),Wl(e,2,-2),0,r)}function Tc(e,t,n,r,i){return rc(e,t,n,Nl,Wl(e,0,r),Wl(e,r+1,-1),r,i)}const $c="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Mc="active",Ac="data-styled-version",zc="6.4.1",Rc="/*!sc*/\n",Nc="undefined"!=typeof window&&"undefined"!=typeof document;function Lc(e){if("undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}){const t={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}[e];if(void 0!==t&&""!==t)return"false"!==t}}const Oc=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!==(Kl=null!==(ql=Lc("REACT_APP_SC_DISABLE_SPEEDY"))&&void 0!==ql?ql:Lc("SC_DISABLE_SPEEDY"))&&void 0!==Kl?Kl:"undefined"==typeof process||void 0==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}||!1),Dc="sc-keyframes-";function Ic(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${n.length>0?` Args: ${n.join(", ")}`:""}`)}let _c=new Map,Fc=new Map,Vc=1;const Bc=e=>{if(_c.has(e))return _c.get(e);for(;Fc.has(Vc);)Vc++;const t=Vc++;return _c.set(e,t),Fc.set(t,e),t},Uc=e=>Fc.get(e),Wc=(e,t)=>{Vc=t+1,_c.set(e,t),Fc.set(t,e)},Hc=(new Set,Object.freeze([])),Yc=Object.freeze({});function Xc(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Yc;return e.theme!==n.theme&&e.theme||t||n.theme}const Gc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qc=/(^-|-$)/g;function Kc(e){return e.replace(Gc,"-").replace(qc,"")}const Qc=/(a)(d)/gi,Zc=e=>String.fromCharCode(e+(e>25?39:97));function Jc(e){let t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zc(t%52)+n;return(Zc(t%52)+n).replace(Qc,"$1-$2")}const eu=5381,tu=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},nu=e=>tu(eu,e);function ru(e){return Jc(nu(e)>>>0)}function iu(e){return e.displayName||e.name||"Component"}function au(e){return"string"==typeof e&&!0}function ou(e){return au(e)?`styled.${e}`:`Styled(${iu(e)})`}const su=Symbol.for("react.memo"),lu=Symbol.for("react.forward_ref"),cu={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},uu={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},du={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},pu={[lu]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[su]:du};function hu(e){return("type"in(t=e)&&t.type.$$typeof)===su?du:"$$typeof"in e?pu[e.$$typeof]:cu;var t}const fu=Object.defineProperty,mu=Object.getOwnPropertyNames,gu=Object.getOwnPropertySymbols,yu=Object.getOwnPropertyDescriptor,vu=Object.getPrototypeOf,xu=Object.prototype;function bu(e,t,n){if("string"!=typeof t){const r=vu(t);r&&r!==xu&&bu(e,r,n);const i=mu(t).concat(gu(t)),a=hu(e),o=hu(t);for(let s=0;s<i.length;++s){const r=i[s];if(!(r in uu||n&&n[r]||o&&r in o||a&&r in a)){const n=yu(t,r);try{fu(e,r,n)}catch(e){}}}}return e}function wu(e){return"function"==typeof e}function ku(e){return"object"==typeof e&&"styledComponentId"in e}function Su(e,t){return e&&t?e+" "+t:e||t||""}function Eu(e,t){return e.join(t||"")}function Cu(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Pu(e,t){if(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&!Cu(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Pu(e[n],t[n]);else if(Cu(t))for(const n in t)e[n]=Pu(e[n],t[n]);return e}function ju(e,t){Object.defineProperty(e,"toString",{value:t})}const Tu=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){const t=this.groupSizes,n=t.length;let r=n;for(;e>=r;)if(r<<=1,r<0)throw Ic(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){const t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;const n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let a=r;a<i;a++)t+=this.tag.getRule(a)+Rc;return t}},$u=`style[${$c}][${Ac}="${zc}"]`,Mu=new RegExp(`^${$c}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Au=e=>"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,zu=e=>{if(!e)return document;if(Au(e))return e;if("getRootNode"in e){const t=e.getRootNode();if(Au(t))return t}return document},Ru=(e,t,n)=>{const r=n.split(",");let i;for(let a=0,o=r.length;a<o;a++)(i=r[a])&&e.registerName(t,i)},Nu=(e,t)=>{var n;const r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Rc),i=[];for(let a=0,o=r.length;a<o;a++){const t=r[a].trim();if(!t)continue;const n=t.match(Mu);if(n){const t=0|parseInt(n[1],10),r=n[2];0!==t&&(Wc(r,t),Ru(e,r,n[3]),e.getTag().insertRules(t,i)),i.length=0}else i.push(t)}},Lu=e=>{const t=zu(e.options.target).querySelectorAll($u);for(let n=0,r=t.length;n<r;n++){const r=t[n];r&&r.getAttribute($c)!==Mc&&(Nu(e,r),r.parentNode&&r.parentNode.removeChild(r))}};let Ou=!1;function Du(){if(!1!==Ou)return Ou;if("undefined"!=typeof document){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Ou=e.nonce||e.getAttribute("content")||void 0;const t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return Ou=t.getAttribute("content")||void 0}return Ou=n.nc}const Iu=(e,t)=>{const n=document.head,r=e||n,i=document.createElement("style"),a=(e=>{const t=Array.from(e.querySelectorAll(`style[${$c}]`));return t[t.length-1]})(r),o=void 0!==a?a.nextSibling:null;i.setAttribute($c,Mc),i.setAttribute(Ac,zc);const s=t||Du();return s&&i.setAttribute("nonce",s),r.insertBefore(i,o),i},_u=class{constructor(e,t){this.element=Iu(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;const n=null!==(t=e.getRootNode().styleSheets)&&void 0!==t?t:document.styleSheets;for(let r=0,i=n.length;r<i;r++){const t=n[r];if(t.ownerNode===e)return t}throw Ic(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Fu=class{constructor(e,t){this.element=Iu(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){const n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Vu=Nc;const Bu={isServer:!Nc,useCSSOMInjection:!Oc};class Uu{static registerId(e){return Bc(e)}constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yc,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;this.options=Object.assign(Object.assign({},Bu),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Nc&&Vu&&(Vu=!1,Lu(this)),ju(this,()=>(e=>{const t=e.getTag(),{length:n}=t;let r="";for(let i=0;i<n;i++){const n=Uc(i);if(void 0===n)continue;const a=e.names.get(n);if(void 0===a||!a.size)continue;const o=t.getGroup(i);if(0===o.length)continue;const s=$c+".g"+i+'[id="'+n+'"]';let l="";for(const e of a)e.length>0&&(l+=e+",");r+=o+s+'{content:"'+l+'"}'+Rc}return r})(this))}rehydrate(){!this.server&&Nc&&Lu(this)}reconstructWithOptions(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=new Uu(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return n.keyframeIds=new Set(this.keyframeIds),!this.server&&Nc&&e.target!==this.options.target&&zu(this.options.target)!==zu(e.target)&&Lu(n),n}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=(e=(e=>{let{useCSSOMInjection:t,target:n,nonce:r}=e;return t?new _u(n,r):new Fu(n,r)})(this.options),new Tu(e)));var e}hasNameForId(e,t){var n,r;return null!==(r=null===(n=this.names.get(e))||void 0===n?void 0:n.has(t))&&void 0!==r&&r}registerName(e,t){Bc(e),e.startsWith(Dc)&&this.keyframeIds.add(e);const n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Bc(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Bc(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}const Wu=new WeakSet,Hu={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yu(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Hu||e.startsWith("--")?String(t).trim():t+"px"}const Xu=47;function Gu(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[n]}return t.startsWith("ms-")?"-"+t:t}const qu=Symbol.for("sc-keyframes");function Ku(e){return wu(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Qu=e=>null==e||!1===e||""===e,Zu=Symbol.for("react.client.reference");function Ju(e){return e.$$typeof===Zu}function ed(e,t){for(const n in e){const r=e[n];e.hasOwnProperty(n)&&!Qu(r)&&(Array.isArray(r)&&Wu.has(r)||wu(r)?t.push(Gu(n)+":",r,";"):Cu(r)?(t.push(n+" {"),ed(r,t),t.push("}")):t.push(Gu(n)+": "+Yu(n,r)+";"))}}function td(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];if(Qu(e))return i;const a=typeof e;if("string"===a)return i.push(e),i;if("function"===a){if(Ju(e))return i;if(Ku(e)&&t){return td(e(t),t,n,r,i)}return i.push(e),i}if(Array.isArray(e)){for(let a=0;a<e.length;a++)td(e[a],t,n,r,i);return i}return ku(e)?(i.push(`.${e.styledComponentId}`),i):function(e){return"object"==typeof e&&null!==e&&qu in e}(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):Ju(e)?i:Cu(e)?(ed(e,i),i):(i.push(e.toString()),i)}const nd=nu(zc);class rd{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=tu(nd,t),this.baseStyle=n,Uu.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";{let i="";for(let r=0;r<this.rules.length;r++){const a=this.rules[r];if("string"==typeof a)i+=a;else if(a)if(Ku(a)){const r=a(e);"string"==typeof r?i+=r:null!=r&&!1!==r&&(i+=Eu(td(r,e,t,n)))}else i+=Eu(td(a,e,t,n))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);const e=n.hash?n.hash+i:i;let a=this.dynamicNameCache.get(e);if(!a){if(a=Jc(tu(tu(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){const e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){const e=n(i,"."+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Su(r,a)}}return r}}const id=/&/g;function ad(e,t){let n=0;for(;--t>=0&&92===e.charCodeAt(t);)n++;return!(1&~n)}function od(e){const t=e.length;let n="",r=0,i=0,a=0,o=!1,s=!1;for(let l=0;l<t;l++){const c=e.charCodeAt(l);if(0!==a||o||c!==Xu||42!==e.charCodeAt(l+1))if(o)42===c&&e.charCodeAt(l+1)===Xu&&(o=!1,l++);else if(34!==c&&39!==c||ad(e,l)){if(0===a)if(123===c)i++;else if(125===c){if(i--,i<0){s=!0;let n=l+1;for(;n<t;){const t=e.charCodeAt(n);if(59===t||10===t)break;n++}n<t&&59===e.charCodeAt(n)&&n++,i=0,l=n-1,r=n;continue}0===i&&(n+=e.substring(r,l+1),r=l+1)}else 59===c&&0===i&&(n+=e.substring(r,l+1),r=l+1)}else 0===a?a=c:a===c&&(a=0);else o=!0,l++}return s||0!==i||0!==a?(r<t&&0===i&&0===a&&(n+=e.substring(r)),n):e}function sd(e,t){const n=t+" ",r=","+n;for(let i=0;i<e.length;i++){const a=e[i];if("rule"===a.type){a.value=(n+a.value).replaceAll(",",r);const e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&"@keyframes"!==a.type&&sd(a.children,t)}return e}function ld(){let e,t,n,{options:r=Yc,plugins:i=Hc}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Yc;const a=(n,r,i)=>i.startsWith(t)&&i.endsWith(t)&&i.replaceAll(t,"").length>0?`.${e}`:n,o=i.slice();o.push(e=>{e.type===Rl&&e.value.includes("&")&&(n||(n=new RegExp(`\\${t}\\b`,"g")),e.props[0]=e.props[0].replace(id,t).replace(n,a))}),r.prefix&&o.push(Sc),o.push(wc);let s=[];const l=function(e){var t=Yl(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(o.concat((d=e=>s.push(e),function(e){e.root||(e=e.return)&&d(e)}))),c=function(i){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&",t=a,n=void 0;const c=function(e){const t=-1!==e.indexOf("//"),n=-1!==e.indexOf("}");if(!t&&!n)return e;if(!t)return od(e);const r=e.length;let i="",a=0,o=0,s=0,l=0,c=0,u=!1;for(;o<r;){const t=e.charCodeAt(o);if(34!==t&&39!==t||ad(e,o))if(0===s)if(t===Xu&&o+1<r&&42===e.charCodeAt(o+1)){for(o+=2;o+1<r&&(42!==e.charCodeAt(o)||e.charCodeAt(o+1)!==Xu);)o++;o+=2}else if(40!==t)if(41!==t)if(l>0)o++;else if(42===t&&o+1<r&&e.charCodeAt(o+1)===Xu)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Xu&&o+1<r&&e.charCodeAt(o+1)===Xu){for(i+=e.substring(a,o);o<r&&10!==e.charCodeAt(o);)o++;a=o,u=!0}else 123===t?c++:125===t&&c--,o++;else l>0&&l--,o++;else l++,o++;else o++;else 0===s?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),0===c?i:od(i)):0===c?e:od(e)}(i);let u=Ec(o||a?o+" "+a+" { "+c+" }":c);return r.namespace&&(u=sd(u,r.namespace)),s=[],bc(u,l),s},u=r;var d;let p=eu;for(let h=0;h<i.length;h++)i[h].name||Ic(15),p=tu(p,i[h].name);return(null==u?void 0:u.namespace)&&(p=tu(p,u.namespace)),(null==u?void 0:u.prefix)&&(p=tu(p,"p")),c.hash=p!==eu?p.toString():"",c}const cd=new Uu,ud=ld(),dd=i.createContext({shouldForwardProp:void 0,styleSheet:cd,stylis:ud,stylisPlugins:void 0});dd.Consumer;function pd(){return i.useContext(dd)}const hd=i.createContext(void 0);hd.Consumer;function fd(e){const t=i.useContext(hd),n=i.useMemo(()=>function(e,t){if(!e)throw Ic(14);if(wu(e)){return e(t)}if(Array.isArray(e)||"object"!=typeof e)throw Ic(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?i.createElement(hd.Provider,{value:n},e.children):null}const md=Object.prototype.hasOwnProperty,gd={};function yd(e,t){const n="string"!=typeof e?"sc":Kc(e);gd[n]=(gd[n]||0)+1;const r=n+"-"+ru(zc+n+gd[n]);return t?t+"-"+r:r}function vd(e,t,n){const r=ku(e),a=e,o=!au(e),{attrs:s=Hc,componentId:l=yd(t.displayName,t.parentComponentId),displayName:c=ou(e)}=t,u=t.displayName&&t.componentId?Kc(t.displayName)+"-"+t.componentId:t.componentId||l,d=r&&a.attrs?a.attrs.concat(s).filter(Boolean):s;let{shouldForwardProp:p}=t;if(r&&a.shouldForwardProp){const e=a.shouldForwardProp;if(t.shouldForwardProp){const n=t.shouldForwardProp;p=(t,r)=>e(t,r)&&n(t,r)}else p=e}const h=new rd(n,u,r?a.componentStyle:void 0);function f(e,t){return function(e,t,n){const{attrs:r,componentStyle:a,defaultProps:o,foldedComponentIds:s,styledComponentId:l,target:c}=e,u=i.useContext(hd),d=pd(),p=e.shouldForwardProp||d.shouldForwardProp,h=Xc(t,u,o)||Yc;let f,m;{const e=i.useRef(null),n=e.current;if(null!==n&&n[1]===h&&n[2]===d.styleSheet&&n[3]===d.stylis&&n[7]===a&&function(e,t,n){const r=e,i=t;let a=0;for(const o in i)if(md.call(i,o)&&(a++,r[o]!==i[o]))return!1;return a===n}(n[0],t,n[4]))f=n[5],m=n[6];else{f=function(e,t,n){const r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let a=0;a<e.length;a++){const n=e[a],o=wu(n)?n(i?Object.assign({},r):r):n;for(const e in o)"className"===e?r.className=Su(r.className,o[e]):"style"===e?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&void 0===t[e]||(r[e]=o[e])}return"className"in t&&"string"==typeof t.className&&(r.className=Su(r.className,t.className)),r}(r,t,h),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(a,f,d.styleSheet,d.stylis);let n=0;for(const e in t)md.call(t,e)&&n++;e.current=[t,h,d.styleSheet,d.stylis,n,f,m,a]}}const g=f.as||c,y=function(e,t,n,r){const i={};for(const a in e)void 0===e[a]||"$"===a[0]||"as"===a||"theme"===a&&e.theme===n||("forwardedAs"===a?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(f,g,h,p);let v=Su(s,l);return m&&(v+=" "+m),f.className&&(v+=" "+f.className),y[au(g)&&g.includes("-")?"class":"className"]=v,n&&(y.ref=n),(0,i.createElement)(g,y)}(m,e,t)}f.displayName=c;let m=i.forwardRef(f);return m.attrs=d,m.componentStyle=h,m.displayName=c,m.shouldForwardProp=p,m.foldedComponentIds=r?Su(a.foldedComponentIds,a.styledComponentId):"",m.styledComponentId=u,m.target=r?a.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const i of n)Pu(e,i,!0);return e}({},a.defaultProps,e):e}}),ju(m,()=>`.${m.styledComponentId}`),o&&bu(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var xd=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function bd(e,t){const n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}const wd=e=>(Wu.add(e),e);function kd(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(wu(e)||Cu(e))return wd(td(bd(Hc,[e,...n])));const i=e;return 0===n.length&&1===i.length&&"string"==typeof i[0]?td(i):wd(td(bd(i,n)))}function Sd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Yc;if(!t)throw Ic(1,t);const r=function(r){for(var i=arguments.length,a=new Array(i>1?i-1:0),o=1;o<i;o++)a[o-1]=arguments[o];return e(t,n,kd(r,...a))};return r.attrs=r=>Sd(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Sd(e,t,Object.assign(Object.assign({},n),r)),r}const Ed=e=>Sd(vd,e),Cd=Ed;xd.forEach(e=>{Cd[e]=Ed(e)});var Pd;class jd{constructor(e,t){var n=this;this[Pd]=!0,this.inject=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ud;const r=n.getName(t);if(!e.hasNameForId(n.id,r)){const i=t(n.rules,r,"@keyframes");e.insertRules(n.id,r,i)}},this.name=e,this.id=Dc+e,this.rules=t,Bc(this.id),ju(this,()=>{throw Ic(12,String(this.name))})}getName(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ud;return e.hash?this.name+Jc(+e.hash>>>0):this.name}}function Td(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];const i=Eu(kd(e,...n)),a=ru(i);return new jd(a,i)}Pd=qu;var $d=n(579);const Md=Cd.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.15;
  pointer-events: none;
`,Ad=()=>{const e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{const t=e.current;if(!t)return;const n=t.getContext("2d"),r=()=>{t.width=window.innerWidth,t.height=window.innerHeight};r(),window.addEventListener("resize",r);const i="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?~`\u30a2\u30a4\u30a6\u30a8\u30aa\u30ab\u30ad\u30af\u30b1\u30b3\u30b5\u30b7\u30b9\u30bb\u30bd\u30bf\u30c1\u30c4\u30c6\u30c8\u30ca\u30cb\u30cc\u30cd\u30ce\u30cf\u30d2\u30d5\u30d8\u30db\u30de\u30df\u30e0\u30e1\u30e2\u30e4\u30e6\u30e8\u30e9\u30ea\u30eb\u30ec\u30ed\u30ef\u30f2\u30f3".split(""),a=Math.floor(t.width/14),o=[],s=[],l=[];for(let e=0;e<a;e++)o[e]=-100*Math.random(),s[e]=2*Math.random()+1,l[e]=Math.floor(15*Math.random())+5;let c,u=0;const d=()=>{if(u++,u%2===0){n.fillStyle="rgba(5, 5, 5, 0.05)",n.fillRect(0,0,t.width,t.height),n.font="14px 'JetBrains Mono'";for(let e=0;e<o.length;e++){const r=i[Math.floor(Math.random()*i.length)];for(let i=0;i<l[e];i++){const a=14*(o[e]-i);a<0||a>t.height||(0===i?(n.fillStyle="#00ff41",n.globalAlpha=1):i<3?(n.fillStyle="#00cc33",n.globalAlpha=.8-.2*i):(n.fillStyle="#008f11",n.globalAlpha=Math.max(.1,.5-.05*i)),n.fillText(r,14*e,a))}n.globalAlpha=1,o[e]+=.5*s[e],14*o[e]>t.height&&Math.random()>.975&&(o[e]=-l[e],s[e]=2*Math.random()+1,l[e]=Math.floor(15*Math.random())+5)}c=requestAnimationFrame(d)}else c=requestAnimationFrame(d)};return d(),()=>{window.removeEventListener("resize",r),cancelAnimationFrame(c)}},[]),(0,$d.jsx)(Md,{ref:e})},zd=Cd.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;class Rd{constructor(e,t){this.canvas=e,this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=2*Math.random()+.5,this.speedX=.5*(Math.random()-.5),this.speedY=.5*(Math.random()-.5),this.life=100*Math.random()+50,this.maxLife=this.life,this.theme=t;const n=[t.primary,t.accent,t.gold,t.warning];this.color=n[Math.floor(Math.random()*n.length)]}update(){this.x+=this.speedX,this.y+=this.speedY,this.life--,this.x<0&&(this.x=this.canvas.width),this.x>this.canvas.width&&(this.x=0),this.y<0&&(this.y=this.canvas.height),this.y>this.canvas.height&&(this.y=0)}draw(e){const t=this.life/this.maxLife;e.globalAlpha=.6*t,e.fillStyle=this.color,e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fill(),e.globalAlpha=1}}class Nd{constructor(e,t,n){this.p1=e,this.p2=t,this.theme=n,this.distance=Math.hypot(e.x-t.x,e.y-t.y)}draw(e){if(this.distance>150)return;const t=.3*(1-this.distance/150);e.globalAlpha=t,e.strokeStyle=this.theme.primary,e.lineWidth=.5,e.beginPath(),e.moveTo(this.p1.x,this.p1.y),e.lineTo(this.p2.x,this.p2.y),e.stroke(),e.globalAlpha=1}}const Ld=()=>{const e=(0,i.useRef)(null),t=(0,i.useRef)([]),n=(0,i.useRef)({x:0,y:0});return(0,i.useEffect)(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d"),a=()=>{r.width=window.innerWidth,r.height=window.innerHeight};a(),window.addEventListener("resize",a);const o=Math.min(50,Math.floor(r.width*r.height/25e3)),s={primary:"#00ff41",accent:"#ff00ff",gold:"#ffd700",warning:"#ffaa00"};t.current=[];for(let e=0;e<o;e++)t.current.push(new Rd(r,s));const l=e=>{n.current={x:e.clientX,y:e.clientY}};let c;window.addEventListener("mousemove",l);let u=0;const d=()=>{if(u++,u%2!==0)return void(c=requestAnimationFrame(d));i.clearRect(0,0,r.width,r.height);const e=t.current;e.forEach(e=>{e.update(),e.draw(i),e.life<=0&&(e.x=Math.random()*r.width,e.y=Math.random()*r.height,e.life=e.maxLife)});for(let t=0;t<e.length;t++){for(let n=t+1;n<e.length;n++){new Nd(e[t],e[n],s).draw(i)}const r=n.current.x-e[t].x,a=n.current.y-e[t].y,o=Math.hypot(r,a);if(o<200){const l=.5*(1-o/200);i.globalAlpha=l,i.strokeStyle=s.accent,i.lineWidth=1,i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(n.current.x,n.current.y),i.stroke(),i.globalAlpha=1,e[t].x+=.01*r,e[t].y+=.01*a}}c=requestAnimationFrame(d)};return d(),()=>{window.removeEventListener("resize",a),window.removeEventListener("mousemove",l),cancelAnimationFrame(c)}},[]),(0,$d.jsx)(zd,{ref:e})},Od=e=>{let t;const n=new Set,r=(e,r)=>{const i="function"===typeof e?e(t):e;if(!Object.is(i,t)){const e=t;t=(null!=r?r:"object"!==typeof i||null===i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},o=t=e(r,i,a);return a},Dd=e=>e?Od(e):Od;var Id=n(443);const{useDebugValue:_d}=i,{useSyncExternalStoreWithSelector:Fd}=Id;let Vd=!1;const Bd=e=>e;const Ud=e=>{"function"!==typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"===typeof e?Dd(e):e,n=(e,n)=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Bd,n=arguments.length>2?arguments[2]:void 0;n&&!Vd&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Vd=!0);const r=Fd(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return _d(r),r}(t,e,n);return Object.assign(n,t),n},Wd=e=>e?Ud(e):Ud;function Hd(e,t){let n;try{n=e()}catch(Wu){return}const r={getItem:e=>{var r;const i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(r=n.getItem(e))?r:null;return a instanceof Promise?a.then(i):i(a)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)};return r}const Yd=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>Yd(e)(n),catch(e){return this}}}catch(Ms){return{then(e){return this},catch:t=>Yd(t)(Ms)}}},Xd=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(n,r,i)=>{let a={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1;const s=new Set,l=new Set;let c;try{c=a.getStorage()}catch(Wu){}if(!c)return e(function(){console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...arguments)},r,i);const u=Yd(a.serialize),d=()=>{const e=a.partialize({...r()});let t;const n=u({state:e,version:a.version}).then(e=>c.setItem(a.name,e)).catch(e=>{t=e});if(t)throw t;return n},p=i.setState;i.setState=(e,t)=>{p(e,t),d()};const h=e(function(){n(...arguments),d()},r,i);let f;const m=()=>{var e;if(!c)return;o=!1,s.forEach(e=>e(r()));const t=(null==(e=a.onRehydrateStorage)?void 0:e.call(a,r()))||void 0;return Yd(c.getItem.bind(c))(a.name).then(e=>{if(e)return a.deserialize(e)}).then(e=>{if(e){if("number"!==typeof e.version||e.version===a.version)return e.state;if(a.migrate)return a.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return f=a.merge(e,null!=(t=r())?t:h),n(f,!0),d()}).then(()=>{null==t||t(f,void 0),o=!0,l.forEach(e=>e(f))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{a={...a,...e},e.getStorage&&(c=e.getStorage())},clearStorage:()=>{null==c||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>m(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},m(),f||h})(e,t)):((e,t)=>(n,r,i)=>{let a={storage:Hd(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},o=!1;const s=new Set,l=new Set;let c=a.storage;if(!c)return e(function(){console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),n(...arguments)},r,i);const u=()=>{const e=a.partialize({...r()});return c.setItem(a.name,{state:e,version:a.version})},d=i.setState;i.setState=(e,t)=>{d(e,t),u()};const p=e(function(){n(...arguments),u()},r,i);let h;i.getInitialState=()=>p;const f=()=>{var e,t;if(!c)return;o=!1,s.forEach(e=>{var t;return e(null!=(t=r())?t:p)});const i=(null==(t=a.onRehydrateStorage)?void 0:t.call(a,null!=(e=r())?e:p))||void 0;return Yd(c.getItem.bind(c))(a.name).then(e=>{if(e){if("number"!==typeof e.version||e.version===a.version)return[!1,e.state];if(a.migrate)return[!0,a.migrate(e.state,e.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(e=>{var t;const[i,o]=e;if(h=a.merge(o,null!=(t=r())?t:p),n(h,!0),i)return u()}).then(()=>{null==i||i(h,void 0),h=r(),o=!0,l.forEach(e=>e(h))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{a={...a,...e},e.storage&&(c=e.storage)},clearStorage:()=>{null==c||c.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>f(),hasHydrated:()=>o,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},a.skipHydration||f(),h||p})(e,t),Gd=Wd(Xd((e,t)=>({user:null,isAuthenticated:!1,isLoading:!1,currentPhase:1,totalPhases:3,xp:0,level:1,streak:0,badges:[],puzzleData:null,attempts:0,hintsUsed:0,timer:0,isTimerRunning:!1,terminalOpen:!1,terminalHistory:[],soundEnabled:!0,matrixEnabled:!0,particlesEnabled:!0,theme:"cyber",leaderboard:[],eliteLeaderboard:[],guild:null,guilds:[],onlineUsers:0,notifications:[],showCutscene:!1,currentCutscene:null,raceMode:!1,raceType:null,setUser:t=>e({user:t,isAuthenticated:!!t}),setLoading:t=>e({isLoading:t}),setPhase:t=>e({currentPhase:t}),advancePhase:()=>e(e=>({currentPhase:Math.min(e.currentPhase+1,e.totalPhases)})),addXP:t=>e(e=>{const n=e.xp+t;return{xp:n,level:Math.floor(n/1e3)+1}}),addBadge:t=>e(e=>({badges:[...new Set([...e.badges,t])]})),setPuzzleData:t=>e({puzzleData:t}),incrementAttempts:()=>e(e=>({attempts:e.attempts+1})),incrementHints:()=>e(e=>({hintsUsed:e.hintsUsed+1})),startTimer:()=>e({isTimerRunning:!0,timer:0}),stopTimer:()=>e({isTimerRunning:!1}),tickTimer:()=>e(e=>({timer:e.isTimerRunning?e.timer+1:e.timer})),toggleTerminal:()=>e(e=>({terminalOpen:!e.terminalOpen})),addTerminalLine:t=>e(e=>({terminalHistory:[...e.terminalHistory.slice(-50),t]})),clearTerminal:()=>e({terminalHistory:[]}),toggleSound:()=>e(e=>({soundEnabled:!e.soundEnabled})),toggleMatrix:()=>e(e=>({matrixEnabled:!e.matrixEnabled})),toggleParticles:()=>e(e=>({particlesEnabled:!e.particlesEnabled})),setTheme:t=>e({theme:t}),setLeaderboard:t=>e({leaderboard:t}),setEliteLeaderboard:t=>e({eliteLeaderboard:t}),setOnlineUsers:t=>e({onlineUsers:t}),addNotification:t=>e(e=>({notifications:[t,...e.notifications.slice(0,9)]})),clearNotifications:()=>e({notifications:[]}),playCutscene:t=>e({showCutscene:!0,currentCutscene:t}),hideCutscene:()=>e({showCutscene:!1,currentCutscene:null}),startRace:t=>e({raceMode:!0,raceType:t}),endRace:()=>e({raceMode:!1,raceType:null}),logout:()=>e({user:null,isAuthenticated:!1,currentPhase:1,xp:0,level:1,badges:[],puzzleData:null,attempts:0,hintsUsed:0,timer:0,isTimerRunning:!1,terminalHistory:[],notifications:[]}),resetProgress:()=>e({currentPhase:1,xp:0,level:1,badges:[],puzzleData:null,attempts:0,hintsUsed:0,timer:0})}),{name:"locked-storage",partialize:e=>({user:e.user,isAuthenticated:e.isAuthenticated,soundEnabled:e.soundEnabled,theme:e.theme,matrixEnabled:e.matrixEnabled,particlesEnabled:e.particlesEnabled})})),qd=Td`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`,Kd=Cd(ks.div)`
  position: fixed;
  bottom: ${e=>e.isOpen?"0":"-100%"};
  left: 0;
  width: 100%;
  height: ${e=>e.height||"400px"};
  background: ${e=>e.theme.surface};
  border-top: 2px solid ${e=>e.theme.primary};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 -10px 40px ${e=>e.theme.primary}20;
`,Qd=Cd.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background: ${e=>e.theme.background};
  border-bottom: 1px solid ${e=>e.theme.border};
`,Zd=Cd.div`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.primary};
  display: flex;
  align-items: center;
  gap: 8px;
`,Jd=Cd.div`
  display: flex;
  gap: 8px;
`,ep=Cd.button`
  background: transparent;
  border: 1px solid ${e=>e.theme.border};
  color: ${e=>e.theme.textMuted};
  padding: 4px 12px;
  font-size: 11px;
  cursor: pointer;
  font-family: ${e=>e.theme.font};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.2s;
  
  &:hover {
    border-color: ${e=>e.theme.primary};
    color: ${e=>e.theme.primary};
    background: ${e=>e.theme.primary}10;
  }
`,tp=Cd.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  font-family: ${e=>e.theme.font};
  font-size: 13px;
  line-height: 1.6;
`,np=Cd.div`
  white-space: pre-wrap;
  word-wrap: break-word;
`,rp=Cd.div`
  margin-bottom: 4px;
  color: ${e=>{switch(e.type){case"error":return e.theme.danger;case"success":return e.theme.primary;case"warning":return e.theme.warning;case"info":return e.theme.accent;case"system":return e.theme.textMuted;default:return e.theme.text}}};
  
  ${e=>"command"===e.type&&`\n    &::before {\n      content: '> ';\n      color: ${e.theme.primary};\n    }\n  `}
  
  ${e=>"input"===e.type&&`\n    color: ${e.theme.primary};\n  `}
`,ip=Cd.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`,ap=Cd.span`
  color: ${e=>e.theme.primary};
  font-weight: 600;
  white-space: nowrap;
`,op=Cd.input`
  flex: 1;
  background: transparent;
  border: none;
  color: ${e=>e.theme.text};
  font-family: ${e=>e.theme.font};
  font-size: 13px;
  outline: none;
  padding: 0;
  margin: 0;
`,sp=Cd.span`
  display: inline-block;
  width: 8px;
  height: 16px;
  background: ${e=>e.theme.primary};
  animation: ${qd} 1s infinite;
  margin-left: 2px;
`,lp=Cd(ks.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: ${e=>e.theme.surface};
  border: 2px solid ${e=>e.theme.primary};
  color: ${e=>e.theme.primary};
  font-size: 20px;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
  
  &:hover {
    background: ${e=>e.theme.primary};
    color: ${e=>e.theme.background};
    box-shadow: 0 0 20px ${e=>e.theme.primary}40;
  }
`,cp=()=>{const{terminalOpen:e,toggleTerminal:t,terminalHistory:n,addTerminalLine:r,clearTerminal:a,user:o,xp:s,level:l,badges:c,currentPhase:u,theme:d}=Gd(),[p,h]=(0,i.useState)(""),[f,m]=(0,i.useState)([]),[g,y]=(0,i.useState)(-1),v=(0,i.useRef)(null),x=(0,i.useRef)(null);(0,i.useEffect)(()=>{e&&v.current&&v.current.focus()},[e]),(0,i.useEffect)(()=>{x.current&&(x.current.scrollTop=x.current.scrollHeight)},[n]),(0,i.useEffect)(()=>{0===n.length&&r({type:"system",content:'LOCKED Terminal v3.0 - Type "help" for commands'})},[]);const b={help:()=>({type:"system",content:"\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551  LOCKED TERMINAL v3.0 - SITE COMMAND INTERFACE \u2551\n\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n  NAVIGATION:\n    hub      - Go to main hub\n    race     - Start multiplayer race  \n    practice - Practice puzzles\n    lb       - View leaderboard\n    profile  - View your profile\n    guilds   - View guild system\n    \n  SYSTEM:\n    whoami   - Show current identity\n    status   - Show system status\n    xp       - Show XP and level\n    badges   - Show earned badges\n    phases   - Show puzzle progress\n    \n  CUSTOMIZATION:\n    theme    - List/set themes\n    matrix   - Toggle matrix rain\n    particles- Toggle particle effects\n    sound    - Toggle sound effects\n    \n  UTILITIES:\n    clear    - Clear terminal\n    echo     - Echo a message\n    date     - Show current time\n    calc     - Calculator (calc 2+2)\n    uuid     - Generate UUID\n    fortune  - Random fortune\n    \n  DANGER ZONE:\n    reset    - Reset ALL progress\n    logout   - Log out of system\n    hack     - ??? (requires ELITE)\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n  Press the \u25bc button in bottom-right to toggle terminal"}),clear:()=>(a(),null),whoami:()=>({type:"info",content:o?`User: ${o.username}\nID: ${o.id}`:"Not authenticated"}),status:()=>({type:"success",content:`System Status:\n  Online Users: ${Math.floor(100*Math.random())+50}\n  Server Load: ${(20*Math.random()+10).toFixed(1)}%\n  Uptime: ${Math.floor(24*Math.random())}h ${Math.floor(60*Math.random())}m\n  Version: 3.0.1-ULTIMATE`}),xp:()=>({type:"info",content:`XP: ${s} / ${1e3*l}\nLevel: ${l}\nProgress: ${(s%1e3/10).toFixed(1)}% to next level`}),badges:()=>({type:"success",content:c.length>0?`Earned Badges:\n${c.map(e=>`  \u2022 ${e}`).join("\n")}`:"No badges earned yet. Complete puzzles to earn them!"}),theme:()=>({type:"info",content:"Available themes:\n  \u2022 cyber   - Default cyberpunk green\n  \u2022 matrix  - Classic Matrix green\n  \u2022 amber   - Retro amber terminal\n  \u2022 minimal - Clean minimal design\n\nUse: theme [name] to change"}),matrix:()=>{const{toggleMatrix:e,matrixEnabled:t}=Gd.getState();return e(),{type:"success",content:"Matrix rain "+(t?"DISABLED":"ENABLED")}},particles:()=>{const{toggleParticles:e,particlesEnabled:t}=Gd.getState();return e(),{type:"success",content:"Particles "+(t?"DISABLED":"ENABLED")}},logout:()=>{const{logout:e}=Gd.getState();return e(),{type:"warning",content:"Logging out..."}},echo:e=>({type:"info",content:e.join(" ")}),date:()=>({type:"info",content:(new Date).toString()}),calc:e=>{try{const t=e.join("");if(!/^[\d+\-*/().\s]+$/.test(t))throw new Error("Invalid characters");return{type:"success",content:`${t} = ${Function('"use strict"; return ('+t+")")()}`}}catch(Ms){return{type:"error",content:"Invalid expression. Usage: calc 2+2"}}},uuid:()=>({type:"info",content:crypto.randomUUID()}),fortune:()=>{const e=["The system favors those who persist.","Look backwards to move forwards.","Your name holds the key.","Every error is a lesson.","The best hackers think differently.","Patience is a virtue in cracking.","Sometimes the answer is right in front of you.","Trust your instincts, verify with logic.","The terminal knows all secrets.","Keep calm and keep hacking."];return{type:"info",content:e[Math.floor(Math.random()*e.length)]}},hub:()=>(window.location.href="/unlocked",{type:"success",content:"Navigating to Hub..."}),race:()=>(window.location.href="/race",{type:"success",content:"\ud83c\udfc1 Opening Race Lobby..."}),practice:()=>(window.location.href="/practice",{type:"success",content:"\ud83c\udfaf Opening Practice Mode..."}),lb:()=>(window.location.href="/leaderboard",{type:"success",content:"\ud83d\udcca Opening Leaderboard..."}),leaderboard:()=>(window.location.href="/leaderboard",{type:"success",content:"\ud83d\udcca Opening Leaderboard..."}),profile:()=>(window.location.href="/profile",{type:"success",content:"\ud83d\udc64 Opening Profile..."}),guilds:()=>(window.location.href="/guilds",{type:"success",content:"\u2694\ufe0f Opening Guild System..."}),phases:()=>({type:"info",content:`\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551  PUZZLE PROGRESS                  \u2551\n\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n  Phase 1: The Mirror    [${u>=1?"\u2713":"\u25cb"}] COMPLETE\n  Phase 2: Hex Decoder   [${u>=2?"\u2713":"\u25cb"}] ${u>=2?"COMPLETE":"LOCKED"}\n  Phase 3: The Final Lock[${u>=3?"\u2713":"\u25cb"}] ${u>=3?"COMPLETE":"LOCKED"}\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d\n  Current Phase: ${u} of 3`}),sound:()=>{const{toggleSound:e,soundEnabled:t}=Gd.getState();return e(),{type:"success",content:"Sound effects "+(t?"DISABLED":"ENABLED")}},term:()=>{const{toggleTerminal:e}=Gd.getState();return e(),null},terminal:()=>{const{toggleTerminal:e}=Gd.getState();return e(),null},reset:()=>({type:"error",content:"\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551  \u26a0\ufe0f DANGER: PROGRESS RESET \u26a0\ufe0f           \u2551\n\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563\n  This will reset ALL your progress:\n    - XP and Level\n    - All badges\n    - Puzzle completions\n    - Leaderboard rankings\n  \n  To proceed, use: reset confirm\n  \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n  Or go to Profile > Settings to reset"}),"reset confirm":()=>{const{resetProgress:e}=Gd.getState();return e(),window.location.href="/",{type:"warning",content:"Resetting all progress..."}},hack:()=>({type:"error",content:`\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557\n\u2551  \ud83d\udd12 ACCESS DENIED - ELITE ONLY \ud83d\udd12       \u2551\n\u2551                                         \u2551\n\u2551  Complete Phase 3 to unlock the hack      \u2551\n\u2551  command and hidden features.           \u2551\n\u2551                                         \u2551\n\u2551  Current Level: ${l}                          \u2551\n\u2551  Required: ELITE status (Phase 3)       \u2551\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255d`}),easter:()=>({type:"success",content:"\ud83c\udf89 You found an easter egg!\n      \nTry these hidden commands:\n  \u2022 konami    - Classic cheat code\n  \u2022 rick      - Never gonna give you up\n  \u2022 matrix    - Red pill or blue pill\n  \u2022 coffee    - Developer fuel\n  \u2022 sudo      - Make me a sandwich"}),konami:()=>({type:"success",content:"\ud83c\udfae \u2191\u2191\u2193\u2193\u2190\u2192\u2190\u2192BA - Cheat code activated! +100 XP"}),coffee:()=>({type:"info",content:"\u2615 Brewing coffee... Caffeine levels optimal. Ready to code!"}),sudo:()=>({type:"error",content:"\ud83d\ude0f Nice try. This is not a Linux system."})};return(0,$d.jsxs)($d.Fragment,{children:[(0,$d.jsx)($s,{children:e&&(0,$d.jsxs)(Kd,{isOpen:e,initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",damping:30,stiffness:300},children:[(0,$d.jsxs)(Qd,{children:[(0,$d.jsxs)(Zd,{children:[(0,$d.jsx)("span",{children:"\ud83d\udd12"}),(0,$d.jsx)("span",{children:"TERMINAL // ROOT ACCESS"})]}),(0,$d.jsxs)(Jd,{children:[(0,$d.jsx)(ep,{onClick:()=>a(),children:"Clear"}),(0,$d.jsx)(ep,{onClick:()=>t(),children:"Close"})]})]}),(0,$d.jsxs)(tp,{ref:x,children:[(0,$d.jsx)(np,{children:n.map((e,t)=>(0,$d.jsx)(rp,{type:e.type,children:e.content},t))}),(0,$d.jsx)("form",{onSubmit:e=>{if(e.preventDefault(),!p.trim())return;r({type:"command",content:p}),m([...f,p]),y(-1);const t=p.trim().split(/\s+/),n=t[0].toLowerCase(),i=t.slice(1);if(b[n]){const e=b[n](i);e&&r(e)}else if(n.startsWith("theme ")){const e=n.split(" ")[1];["cyber","matrix","amber","minimal"].includes(e)?(Gd.getState().setTheme(e),r({type:"success",content:`Theme changed to: ${e}`})):r({type:"error",content:`Unknown theme: ${e}`})}else r({type:"error",content:`Command not found: ${n}. Type "help" for available commands.`});h("")},children:(0,$d.jsxs)(ip,{children:[(0,$d.jsx)(ap,{children:"root@locked:~$"}),(0,$d.jsx)(op,{ref:v,type:"text",value:p,onChange:e=>h(e.target.value),onKeyDown:e=>{if("ArrowUp"===e.key){if(e.preventDefault(),g<f.length-1){const e=g+1;y(e),h(f[f.length-1-e])}}else if("ArrowDown"===e.key)if(e.preventDefault(),g>0){const e=g-1;y(e),h(f[f.length-1-e])}else 0===g&&(y(-1),h(""));else if("Tab"===e.key){e.preventDefault();const t=Object.keys(b).filter(e=>e.startsWith(p.toLowerCase()));1===t.length&&h(t[0])}},autoComplete:"off",spellCheck:"false"}),(0,$d.jsx)(sp,{})]})})]})]})}),(0,$d.jsx)(lp,{onClick:()=>t(),whileHover:{scale:1.1},whileTap:{scale:.95},children:e?"\u25bc":"\u25b2"})]})},up=Cd(ks.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: ${e=>e.theme.surface}80;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${e=>e.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  z-index: 100;
`,dp=Cd.div`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: ${e=>e.theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    text-shadow: 0 0 20px ${e=>e.theme.primary};
  }
`,pp=Cd.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    display: none;
  }
`,hp=Cd(ks.a)`
  padding: 8px 16px;
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>e.active?e.theme.primary:e.theme.textMuted};
  text-decoration: none;
  border: 1px solid ${e=>e.active?e.theme.primary:"transparent"};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${e=>e.theme.primary}20;
    transition: left 0.3s ease;
  }
  
  &:hover::before {
    left: 0;
  }
  
  &:hover {
    color: ${e=>e.theme.primary};
    border-color: ${e=>e.theme.primary}40;
  }
`,fp=Cd.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,mp=Cd.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  font-size: 11px;
  
  span {
    color: ${e=>e.theme.gold};
    font-weight: 700;
  }
`,gp=Cd.div`
  width: 100px;
  height: 4px;
  background: ${e=>e.theme.border};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.percent}%;
    background: ${e=>e.theme.primary};
    box-shadow: 0 0 10px ${e=>e.theme.primary};
  }
`,yp=Cd.button`
  display: none;
  background: transparent;
  border: none;
  color: ${e=>e.theme.primary};
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`,vp=Cd(ks.div)`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background: ${e=>e.theme.surface};
  border-bottom: 1px solid ${e=>e.theme.border};
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 99;
`,xp=Cd.button`
  background: transparent;
  border: 1px solid ${e=>e.theme.danger};
  color: ${e=>e.theme.danger};
  padding: 6px 12px;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  font-family: ${e=>e.theme.font};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.theme.danger};
    color: ${e=>e.theme.background};
  }
`,bp=()=>{const{user:e,isAuthenticated:t,logout:n,level:r,xp:a,currentPhase:o,toggleTerminal:s}=Gd(),[l,c]=(0,i.useState)(!1),u=a%1e3/1e3*100,d=[{path:"/unlocked",label:"Hub",show:t},{path:"/race",label:"\u26a1 Race",show:t},{path:"/practice",label:"Practice",show:t},{path:"/phase2",label:"Phase 2",show:t&&o>=2},{path:"/phase3",label:"Phase 3",show:t&&o>=3},{path:"/leaderboard",label:"Elite",show:!0},{path:"/guilds",label:"Guilds",show:!0}],p=()=>{n(),window.location.href="/"};return(0,$d.jsxs)($d.Fragment,{children:[(0,$d.jsxs)(up,{initial:{y:-60},animate:{y:0},transition:{duration:.5,ease:"easeOut"},children:[(0,$d.jsx)(dp,{as:"a",href:t?"/unlocked":"/",children:"\ud83d\udd12 LOCKED"}),(0,$d.jsx)(pp,{children:d.map(e=>e.show&&(0,$d.jsx)(hp,{href:e.path,active:window.location.pathname===e.path,whileHover:{scale:1.05},whileTap:{scale:.95},children:e.label},e.path))}),(0,$d.jsx)(fp,{children:t&&(0,$d.jsxs)($d.Fragment,{children:[(0,$d.jsxs)(mp,{children:[(0,$d.jsxs)("span",{children:["LV.",r]}),(0,$d.jsx)(gp,{percent:u})]}),(0,$d.jsx)(hp,{as:"button",onClick:()=>s(),style:{border:"1px dashed"},children:"TERM"}),(0,$d.jsx)(xp,{onClick:p,children:"Logout"})]})}),(0,$d.jsx)(yp,{onClick:()=>c(!l),children:l?"\u2715":"\u2630"})]}),(0,$d.jsx)($s,{children:l&&(0,$d.jsxs)(vp,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[d.map(e=>e.show&&(0,$d.jsx)(hp,{href:e.path,onClick:()=>c(!1),active:window.location.pathname===e.path,children:e.label},e.path)),t&&(0,$d.jsx)(xp,{onClick:p,children:"Logout"})]})})]})},wp=Cd.div`
  position: fixed;
  top: 80px;
  right: 20px;
  width: 320px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
  pointer-events: none;
`,kp=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>{switch(e.type){case"achievement":return e.theme.gold;case"record":return e.theme.accent;case"error":return e.theme.danger;case"warning":return e.theme.warning;default:return e.theme.border}}};
  border-left: 4px solid ${e=>{switch(e.type){case"achievement":return e.theme.gold;case"record":return e.theme.accent;case"error":return e.theme.danger;case"warning":return e.theme.warning;default:return e.theme.primary}}};
  padding: 12px 16px;
  pointer-events: auto;
  cursor: pointer;
  backdrop-filter: blur(10px);
`,Sp=Cd.div`
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>{switch(e.type){case"achievement":return e.theme.gold;case"record":return e.theme.accent;case"error":return e.theme.danger;case"warning":return e.theme.warning;default:return e.theme.primary}}};
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
`,Ep=Cd.div`
  font-size: 13px;
  color: ${e=>e.theme.text};
  line-height: 1.4;
`,Cp=Cd.div`
  font-size: 10px;
  color: ${e=>e.theme.textMuted};
  margin-top: 4px;
`,Pp=(Cd.button`
  position: absolute;
  top: 4px;
  right: 4px;
  background: transparent;
  border: none;
  color: ${e=>e.theme.textMuted};
  font-size: 14px;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
  
  &:hover {
    color: ${e=>e.theme.text};
  }
`,e=>{switch(e){case"achievement":return"\ud83c\udfc6";case"record":return"\ud83d\udcca";case"error":return"\u26a0\ufe0f";case"warning":return"\ud83d\udd14";case"system":return"\ud83d\udd12";default:return"\ud83d\udce2"}}),jp=e=>{switch(e){case"achievement":return"Achievement Unlocked";case"record":return"New Record";case"error":return"Error";case"warning":return"Warning";case"system":return"System";default:return"Notification"}},Tp=()=>{const{notifications:e,clearNotifications:t}=Gd();return(0,$d.jsx)(wp,{children:(0,$d.jsx)($s,{children:e.map(e=>(0,$d.jsxs)(kp,{type:e.type,initial:{opacity:0,x:100,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:100,scale:.8},transition:{duration:.3},layout:!0,children:[(0,$d.jsxs)(Sp,{type:e.type,children:[(0,$d.jsx)("span",{children:Pp(e.type)}),(0,$d.jsx)("span",{children:jp(e.type)})]}),(0,$d.jsx)(Ep,{children:e.message}),(0,$d.jsx)(Cp,{children:new Date(e.timestamp).toLocaleTimeString()})]},e.id))})})},$p=Td`
  0%, 100% { opacity: 1; }
  41.99% { opacity: 1; }
  42% { opacity: 0; }
  43% { opacity: 0; }
  43.01% { opacity: 1; }
  47.99% { opacity: 1; }
  48% { opacity: 0; }
  49% { opacity: 0; }
  49.01% { opacity: 1; }
`,Mp=Td`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`,Ap=Td`
  from { width: 0; }
  to { width: 100%; }
`,zp=Td`
  0%, 100% { border-color: transparent; }
  50% { border-color: #00ff41; }
`,Rp=Cd(ks.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.bg||"#000"};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Np=Cd.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 255, 65, 0.03) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  animation: ${$p} 4s infinite;
`,Lp=Cd.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 255, 65, 0.1),
    transparent
  );
  animation: ${Mp} 4s linear infinite;
  pointer-events: none;
`,Op=Cd.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    ellipse at center,
    transparent 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  pointer-events: none;
`,Dp=Cd.div`
  text-align: center;
  max-width: 800px;
  padding: 40px;
  z-index: 10;
`,Ip=Cd(ks.h1)`
  font-family: 'Orbitron', monospace;
  font-size: clamp(40px, 10vw, 80px);
  font-weight: 900;
  letter-spacing: 0.2em;
  color: ${e=>e.color||"#00ff41"};
  text-transform: uppercase;
  text-shadow: 
    2px 2px 0px #ff00ff,
    -2px -2px 0px #00ffff;
  margin-bottom: 30px;
  position: relative;
  
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  &::before {
    animation: ${$p} 2s infinite linear alternate-reverse;
    color: #ff00ff;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
    transform: translate(-3px, -2px);
  }
  
  &::after {
    animation: ${$p} 3s infinite linear alternate-reverse;
    color: #00ffff;
    z-index: -2;
    clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
    transform: translate(3px, 2px);
  }
`,_p=Cd.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  color: #00ff41;
  line-height: 1.8;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00ff41;
  animation: 
    ${Ap} 2s steps(40, end),
    ${zp} 0.75s step-end infinite;
  margin: 20px auto;
  max-width: fit-content;
`,Fp=Cd.div`
  width: 300px;
  height: 4px;
  background: #1a1a1a;
  margin: 30px auto;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${e=>e.progress}%;
    background: #00ff41;
    box-shadow: 0 0 10px #00ff41;
    transition: width 0.3s ease;
  }
`,Vp=Cd.button`
  position: absolute;
  bottom: 40px;
  right: 40px;
  background: transparent;
  border: 1px solid #333;
  color: #666;
  padding: 8px 16px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00ff41;
    color: #00ff41;
  }
`,Bp=Cd(ks.div)`
  font-family: 'Orbitron', monospace;
  font-size: 24px;
  color: #ffd700;
  letter-spacing: 0.3em;
`,Up=Cd(ks.span)`
  display: inline-block;
  margin: 0 4px;
`,Wp={login:{bg:"#000",scenes:[{text:"INITIALIZING SECURE CONNECTION...",duration:2e3},{text:"HANDSHAKE COMPLETE",duration:1500},{text:"ENCRYPTION: AES-256-GCM",duration:1500},{text:"AWAITING IDENTITY VERIFICATION",duration:2e3}]},phase2_unlock:{bg:"#0a0a0a",title:"PHASE 2",subtitle:"HEX DECODER",color:"#00ff41",unlockCode:"57 45 4C 43 4F 4D 45",scenes:[{text:"\ud83d\udd13 ACCESS GRANTED",duration:1500},{text:"Loading Phase 2 protocols...",duration:2e3},{text:"Hex decoding systems online",duration:1500},{text:"New challenge awaiting...",duration:2e3}]},phase3_unlock:{bg:"#0f0a00",title:"PHASE 3",subtitle:"THE FINAL LOCK",color:"#ffd700",unlockCode:"ELITE",scenes:[{text:"\u2b50 ELITE ACCESS GRANTED",duration:1500},{text:"Loading cipher chain...",duration:2e3},{text:"Binary \u2192 Base64 \u2192 ROT13",duration:1500},{text:"Ultimate challenge awaits",duration:2e3}]},completion:{bg:"#001a00",title:"SYSTEM",subtitle:"BREACHED",color:"#00ff41",scenes:[{text:"\ud83c\udfc6 ALL PHASES COMPLETE",duration:2e3},{text:"Achievements unlocked...",duration:2e3},{text:"You are now ELITE",duration:2e3},{text:"Welcome to the inner circle",duration:2500}]},race_start:{bg:"#1a0000",title:"RACE",subtitle:"INITIATED",color:"#ff0040",scenes:[{text:"\u26a1 MULTIPLAYER RACE STARTING",duration:1500},{text:"Synchronizing with opponents...",duration:2e3},{text:"3...",duration:800},{text:"2...",duration:800},{text:"1...",duration:800},{text:"GO!",duration:1e3}]}},Hp=e=>{let{type:t,onComplete:n,skipEnabled:r=!0}=e;const[a,o]=(0,i.useState)(!0),[s,l]=(0,i.useState)(0),[c,u]=(0,i.useState)(0),[d,p]=(0,i.useState)(!0),h=Wp[t]||Wp.login,f=h.scenes||[];(0,i.useEffect)(()=>{let e,t=[];return(async()=>{let r=0;f.forEach(e=>r+=e.duration);let i=0;e=setInterval(()=>{i+=100,u(i/r*100)},100);for(let e=0;e<f.length;e++)l(e),await new Promise(n=>{const r=setTimeout(n,f[e].duration);t.push(r)});clearInterval(e),u(100),await new Promise(e=>{const r=setTimeout(()=>{o(!1),null===n||void 0===n||n()},500);t.push(r)})})(),()=>{t.forEach(e=>clearTimeout(e)),clearInterval(e)}},[t,n,f]);const m=(0,i.useCallback)(()=>{o(!1),null===n||void 0===n||n()},[n]);if(!a)return null;const g=f[s]||{};return(0,$d.jsxs)(Rp,{bg:h.bg,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[(0,$d.jsx)(Np,{}),(0,$d.jsx)(Lp,{}),(0,$d.jsx)(Op,{}),(0,$d.jsxs)(Dp,{children:[h.title&&(0,$d.jsx)(Ip,{color:h.color,"data-text":h.title,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},transition:{duration:.5},children:h.title}),h.subtitle&&(0,$d.jsx)(ks.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},style:{fontFamily:"Orbitron, monospace",fontSize:"18px",letterSpacing:"0.5em",color:h.color,marginBottom:"40px",textTransform:"uppercase"},children:h.subtitle}),(0,$d.jsx)($s,{mode:"wait",children:(0,$d.jsx)(ks.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:h.unlockCode&&0===s?(0,$d.jsx)(Bp,{children:h.unlockCode.split("").map((e,t)=>(0,$d.jsx)(Up,{initial:{opacity:0,rotateX:-90},animate:{opacity:1,rotateX:0},transition:{delay:.1*t},children:e},t))}):(0,$d.jsx)(_p,{children:g.text},s)},s)}),(0,$d.jsx)(Fp,{progress:c})]}),r&&(0,$d.jsx)(Vp,{onClick:m,children:"Press ESC to skip"})]})};var Yp={};!function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o="function"===typeof Path2D&&"function"===typeof DOMMatrix,s=function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext("2d");n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,"no-repeat")}catch(Ms){return!1}return!0}();function l(){}function c(e){var r=n.exports.Promise,i=void 0!==r?r:t.Promise;return"function"===typeof i?new i(e):(e(l,l),null)}var u,d,p,h=(u=s,d=new Map,{transform:function(e){if(u)return e;if(d.has(e))return d.get(e);var t=new OffscreenCanvas(e.width,e.height);return t.getContext("2d").drawImage(e,0,0),d.set(e,t),t},clear:function(){d.clear()}}),f=function(){var e,t,n=Math.floor(1e3/60),r={},i=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return r[t]=requestAnimationFrame(function a(o){i===o||i+n-1<o?(i=o,delete r[t],e()):r[t]=requestAnimationFrame(a)}),t},t=function(e){r[e]&&cancelAnimationFrame(r[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),m=function(){var t,n,i={};return function(){if(t)return t;if(!r&&a){var o=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([o])))}catch(Ms){return"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",Ms),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=c(function(a){function l(t){t.data.callback===s&&(delete i[s],e.removeEventListener("message",l),n=null,h.clear(),o(),a())}e.addEventListener("message",l),t(r,s),i[s]=l.bind(null,{data:{callback:s}})})},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}(t)}return t}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(r=e[t])&&void 0!==r)?e[t]:g[t],n);var r}function v(e){return e<0?0:Math.floor(e)}function x(e,t){return Math.floor(Math.random()*(t-e))+e}function b(e){return parseInt(e,16)}function w(e){return e.map(k)}function k(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:b(t.substring(0,2)),g:b(t.substring(2,4)),b:b(t.substring(4,6))}}function S(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function E(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function C(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function P(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),o&&"path"===t.shape.type&&"string"===typeof t.shape.path&&Array.isArray(t.shape.matrix))e.fill(function(e,t,n,r,i,a,o){var s=new Path2D(e),l=new Path2D;l.addPath(s,new DOMMatrix(t));var c=new Path2D;return c.addPath(l,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),c}(t.shape.path,t.shape.matrix,t.x,t.y,.1*Math.abs(a-r),.1*Math.abs(s-i),Math.PI/10*t.wobble));else if("bitmap"===t.shape.type){var l=Math.PI/10*t.wobble,c=.1*Math.abs(a-r),u=.1*Math.abs(s-i),d=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,f=new DOMMatrix([Math.cos(l)*c,Math.sin(l)*c,-Math.sin(l)*u,Math.cos(l)*u,t.x,t.y]);f.multiplySelf(new DOMMatrix(t.shape.matrix));var m=e.createPattern(h.transform(t.shape.bitmap),"no-repeat");m.setTransform(f),e.globalAlpha=1-n,e.fillStyle=m,e.fillRect(t.x-d/2,t.y-p/2,d,p),e.globalAlpha=1}else if("circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,r,i,a,o,s,l){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,l),e.restore()}(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var g=Math.PI/2*3,y=4*t.scalar,v=8*t.scalar,x=t.x,b=t.y,w=5,k=Math.PI/w;w--;)x=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(x,b),g+=k,x=t.x+Math.cos(g)*y,b=t.y+Math.sin(g)*y,e.lineTo(x,b),g+=k;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function j(e,n){var o,s=!e,l=!!y(n||{},"resize"),u=!1,d=y(n,"disableForReducedMotion",Boolean),p=a&&!!y(n||{},"useWorker")?m():null,g=s?S:E,b=!(!e||!p)&&!!e.__confetti_initialized,k="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function j(t,n,a){for(var s=y(t,"particleCount",v),l=y(t,"angle",Number),u=y(t,"spread",Number),d=y(t,"startVelocity",Number),p=y(t,"decay",Number),m=y(t,"gravity",Number),b=y(t,"drift",Number),k=y(t,"colors",w),S=y(t,"ticks",Number),E=y(t,"shapes"),j=y(t,"scalar"),T=!!y(t,"flat"),$=function(e){var t=y(e,"origin",Object);return t.x=y(t,"x",Number),t.y=y(t,"y",Number),t}(t),M=s,A=[],z=e.width*$.x,R=e.height*$.y;M--;)A.push(C({x:z,y:R,angle:l,spread:u,startVelocity:d,color:k[M%k.length],shape:E[x(0,E.length)],ticks:S,decay:p,gravity:m,drift:b,scalar:j,flat:T}));return o?o.addFettis(A):(o=function(e,t,n,a,o){var s,l,u=t.slice(),d=e.getContext("2d"),p=c(function(t){function c(){s=l=null,d.clearRect(0,0,a.width,a.height),h.clear(),o(),t()}s=f.frame(function t(){!r||a.width===i.width&&a.height===i.height||(a.width=e.width=i.width,a.height=e.height=i.height),a.width||a.height||(n(e),a.width=e.width,a.height=e.height),d.clearRect(0,0,a.width,a.height),(u=u.filter(function(e){return P(d,e)})).length?s=f.frame(t):c()}),l=c});return{addFettis:function(e){return u=u.concat(e),p},canvas:e,promise:p,reset:function(){s&&f.cancel(s),l&&l()}}}(e,A,g,n,a),o.promise)}function T(n){var r=d||y(n,"disableForReducedMotion",Boolean),i=y(n,"zIndex",Number);if(r&&k)return c(function(e){e()});s&&o?e=o.canvas:s&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(i),document.body.appendChild(e)),l&&!b&&g(e);var a={width:e.width,height:e.height};function h(){if(p){var t={getBoundingClientRect:function(){if(!s)return e.getBoundingClientRect()}};return g(t),void p.postMessage({resize:{width:t.width,height:t.height}})}a.width=a.height=null}function f(){o=null,l&&(u=!1,t.removeEventListener("resize",h)),s&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,b=!1)}return p&&!b&&p.init(e),b=!0,p&&(e.__confetti_initialized=!0),l&&!u&&(u=!0,t.addEventListener("resize",h,!1)),p?p.fire(n,a,f):j(n,a,f)}return T.reset=function(){p&&p.reset(),o&&o.reset()},T}function T(){return p||(p=j(null,{useWorker:!0,resize:!0})),p}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=j,n.exports.shapeFromPath=function(e){if(!o)throw new Error("path confetti are not supported in this browser");var t,n;"string"===typeof e?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement("canvas").getContext("2d");if(!n){for(var a,s,l=1e3,c=l,u=l,d=0,p=0,h=0;h<l;h+=2)for(var f=0;f<l;f+=2)i.isPointInPath(r,h,f,"nonzero")&&(c=Math.min(c,h),u=Math.min(u,f),d=Math.max(d,h),p=Math.max(p,f));a=d-c,s=p-u;var m=Math.min(10/a,10/s);n=[m,0,0,m,-Math.round(a/2+c)*m,-Math.round(s/2+u)*m]}return{type:"path",path:t,matrix:n}},n.exports.shapeFromText=function(e){var t,n=1,r="#000000",i='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';"string"===typeof e?t=e:(t=e.text,n="scalar"in e?e.scalar:n,i="fontFamily"in e?e.fontFamily:i,r="color"in e?e.color:r);var a=10*n,o=a+"px "+i,s=new OffscreenCanvas(a,a),l=s.getContext("2d");l.font=o;var c=l.measureText(t),u=Math.ceil(c.actualBoundingBoxRight+c.actualBoundingBoxLeft),d=Math.ceil(c.actualBoundingBoxAscent+c.actualBoundingBoxDescent),p=c.actualBoundingBoxLeft+2,h=c.actualBoundingBoxAscent+2;u+=4,d+=4,(l=(s=new OffscreenCanvas(u,d)).getContext("2d")).font=o,l.fillStyle=r,l.fillText(t,p,h);var f=1/n;return{type:"bitmap",bitmap:s.transferToImageBitmap(),matrix:[f,0,0,f,-u*f/2,-d*f/2]}}}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),Yp,!1);const Xp=Yp.exports;Yp.exports.create;const Gp=Td`
  0% { left: -100%; }
  100% { left: 200%; }
`,qp=Td`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`,Kp=Cd(ks.button)`
  position: relative;
  padding: ${e=>"large"===e.size?"16px 48px":"small"===e.size?"8px 24px":"12px 32px"};
  font-family: ${e=>e.theme.font};
  font-size: ${e=>"large"===e.size?"16px":"small"===e.size?"12px":"14px"};
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${e=>"primary"===e.variant?e.theme.background:e.theme.primary};
  background: ${e=>"primary"===e.variant?e.theme.primary:"transparent"};
  border: 2px solid ${e=>e.theme.primary};
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  clip-path: polygon(
    0 0,
    calc(100% - 10px) 0,
    100% 10px,
    100% 100%,
    10px 100%,
    0 calc(100% - 10px)
  );

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    filter: grayscale(1);
  }

  ${e=>e.glitch&&kd`
    &:hover:not(:disabled) {
      animation: ${qp} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }
  `}

  /* Scanline effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: none;
  }

  &:hover:not(:disabled)::before {
    animation: ${Gp} 0.75s ease;
  }

  /* Corner accents */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    clip-path: polygon(
      0 0, 10px 0, 0 10px,
      0 calc(100% - 10px), 0 100%, 10px 100%,
      calc(100% - 10px) 100%, 100% calc(100% - 10px),
      100% 10px, calc(100% - 10px) 0
    );
    transition: all 0.3s ease;
  }

  &:hover:not(:disabled) {
    color: ${e=>e.theme.background};
    background: ${e=>e.theme.primary};
    box-shadow: 
      0 0 20px ${e=>e.theme.primary}40,
      0 0 40px ${e=>e.theme.primary}20;
    
    &::after {
      border-color: ${e=>e.theme.accent};
    }
  }

  /* Loading state */
  ${e=>e.loading&&kd`
    color: transparent !important;
    pointer-events: none;
    
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      top: 50%;
      left: 50%;
      margin: -10px 0 0 -10px;
      border: 2px solid transparent;
      border-top-color: ${e.theme.primary};
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  `}
`,Qp=(Td`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Cd.span`
  display: inline-flex;
  margin-right: ${e=>"left"===e.iconPosition?"8px":"0"};
  margin-left: ${e=>"right"===e.iconPosition?"8px":"0"};
`),Zp=e=>{let{children:t,variant:n="primary",size:r="medium",glitch:i=!0,loading:a=!1,disabled:o=!1,icon:s,iconPosition:l="left",onClick:c,...u}=e;return(0,$d.jsxs)(Kp,{variant:n,size:r,glitch:i,loading:a,disabled:o||a,onClick:c,whileHover:{scale:o?1:1.02},whileTap:{scale:o?1:.98},...u,children:[s&&"left"===l&&(0,$d.jsx)(Qp,{iconPosition:"left",children:s}),t,s&&"right"===l&&(0,$d.jsx)(Qp,{iconPosition:"right",children:s})]})},Jp=Td`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.98); }
`,eh=Cd(ks.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.background};
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 20px;
`,th=Cd.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  margin-bottom: 20px;
`,nh=Cd.h2`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  .live {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #ff0040;
    border-radius: 50%;
    animation: ${Jp} 1s infinite;
  }
`,rh=Cd.div`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 36px;
  font-weight: 700;
  color: ${e=>e.theme.primary};
  text-align: center;
`,ih=Cd.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  flex: 1;
  overflow: hidden;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,ah=Cd.div`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 30px;
  overflow-y: auto;
`,oh=Cd.div`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  @media (max-width: 900px) {
    display: none;
  }
`,sh=Cd.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.isPlayer?e.theme.primary:e.theme.border};
  
  .avatar {
    width: 40px;
    height: 40px;
    background: ${e=>e.theme.border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  
  .info {
    flex: 1;
    
    .name {
      font-weight: 600;
      font-size: 14px;
    }
    
    .progress {
      font-size: 11px;
      color: ${e=>e.theme.textMuted};
    }
  }
  
  .rank {
    font-family: ${e=>e.theme.fontDisplay};
    font-size: 20px;
    font-weight: 700;
    color: ${e=>1===e.rank?"#ffd700":2===e.rank?"#c0c0c0":3===e.rank?"#cd7f32":e.theme.textMuted};
  }
`,lh=Cd.div`
  width: 100%;
  height: 6px;
  background: ${e=>e.theme.background};
  margin-top: 8px;
  
  .fill {
    height: 100%;
    width: ${e=>e.percent}%;
    background: ${e=>e.color||e.theme.primary};
    transition: width 0.5s ease;
  }
`,ch=Cd.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid ${e=>e.theme.border};
`,uh=Cd.div`
  height: 150px;
  overflow-y: auto;
  font-size: 12px;
  margin-bottom: 10px;
  
  .message {
    padding: 4px 0;
    
    .name {
      color: ${e=>e.theme.primary};
      font-weight: 600;
    }
    
    .text {
      color: ${e=>e.theme.textMuted};
    }
  }
`,dh=Cd.div`
  display: flex;
  gap: 8px;
  
  input {
    flex: 1;
    padding: 8px;
    background: ${e=>e.theme.background};
    border: 1px solid ${e=>e.theme.border};
    color: ${e=>e.theme.text};
    font-size: 12px;
    
    &:focus {
      outline: none;
      border-color: ${e=>e.theme.primary};
    }
  }
`,ph=Cd(ks.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.background}ee;
  backdrop-filter: blur(10px);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
`,hh=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 2px solid ${e=>e.winner?"#ffd700":e.theme.border};
  padding: 40px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  
  .trophy {
    font-size: 80px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-family: ${e=>e.theme.fontDisplay};
    font-size: 32px;
    margin-bottom: 20px;
    color: ${e=>e.winner?"#ffd700":e.theme.text};
  }
  
  .stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 30px 0;
    
    .stat {
      .value {
        font-size: 28px;
        font-weight: 700;
        color: ${e=>e.theme.primary};
      }
      
      .label {
        font-size: 11px;
        color: ${e=>e.theme.textMuted};
        text-transform: uppercase;
        letter-spacing: 0.1em;
      }
    }
  }
`,fh=Cd.div`
  margin: 20px 0;
  
  .row {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px;
    font-size: 13px;
    
    &.you {
      background: ${e=>e.theme.primary}20;
      border-left: 3px solid ${e=>e.theme.primary};
    }
    
    .pos {
      width: 30px;
      font-weight: 700;
    }
    
    .name {
      flex: 1;
    }
    
    .time {
      color: ${e=>e.theme.textMuted};
    }
  }
`,mh=[{id:"1",name:"CyberNinja",avatar:"\ud83e\udd77",level:12},{id:"2",name:"CodeBreaker",avatar:"\ud83d\udcbb",level:15},{id:"3",name:"MatrixMind",avatar:"\ud83e\udde0",level:10},{id:"4",name:"GlitchHunter",avatar:"\ud83d\udc7e",level:18}],gh=e=>{let{puzzleType:t,onClose:n,onComplete:r}=e;const{user:a,addXP:o}=Gd(),[s,l]=(0,i.useState)("waiting"),[c,u]=(0,i.useState)(0),[d,p]=(0,i.useState)([]),[h,f]=(0,i.useState)(0),[m,g]=(0,i.useState)(!1),[y,v]=(0,i.useState)(null),[x,b]=(0,i.useState)([]),[w,k]=(0,i.useState)(""),[S,E]=(0,i.useState)(null),C=(0,i.useRef)(null);(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=mh.map(e=>({...e,progress:0,finished:!1,finishTime:null}));return p(e),P(),setTimeout(()=>{l("racing"),j(),T()},3e3),()=>{C.current&&clearInterval(C.current)}},[]);const P=()=>{const e={hex:()=>{const e="RACE"+Math.floor(999*Math.random());return{type:"hex",data:e.split("").map(e=>e.charCodeAt(0).toString(16).toUpperCase()).join(" "),answer:e}},math:()=>{const e=Math.floor(50*Math.random())+10,t=Math.floor(50*Math.random())+10,n=Math.random()>.5?"+":"*";return{type:"math",data:`${e} ${n} ${t} = ?`,answer:("+"===n?e+t:e*t).toString()}},binary:()=>{const e=Math.floor(255*Math.random());return{type:"binary",data:e.toString(2).padStart(8,"0"),answer:e.toString()}}};E((e[t]||e.hex)())},j=()=>{C.current=setInterval(()=>{u(e=>e+1)},1e3)},T=()=>{const e=setInterval(()=>{p(e=>{const t=e.map(e=>{if(e.finished)return e;const t=15*Math.random(),n=Math.min(e.progress+t,100);return n>=100&&!e.finished?{...e,progress:100,finished:!0,finishTime:c+Math.floor(5*Math.random())}:{...e,progress:n}}),n=t.every(e=>e.finished)&&m;return n&&"racing"===s&&setTimeout(()=>$(t),1e3),t})},1e3);return()=>clearInterval(e)},$=e=>{C.current&&clearInterval(C.current),l("finished");const t=e.filter(e=>e.finished).length,n=m?t+1:t+2;v(n);o(1===n?500:2===n?350:3===n?250:150),1===n&&Xp({particleCount:200,spread:120,origin:{y:.6},colors:["#ffd700","#ffaa00","#ffffff"]})},M=(e,t)=>{b(n=>[...n.slice(-19),{name:e,text:t,time:Date.now()}])},A=e=>`${Math.floor(e/60)}:${(e%60).toString().padStart(2,"0")}`,z=[...d.filter(e=>e.finished).map(e=>({...e,isPlayer:!1})),...m?[{id:"player",name:null===a||void 0===a?void 0:a.username,finishTime:c,isPlayer:!0,progress:100,finished:!0}]:[]].sort((e,t)=>(e.finishTime||999)-(t.finishTime||999));return(0,$d.jsxs)(eh,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},children:[(0,$d.jsxs)(th,{children:[(0,$d.jsxs)(nh,{children:[(0,$d.jsx)("span",{className:"live"}),"LIVE RACE"]}),(0,$d.jsx)(rh,{children:A(c)}),(0,$d.jsx)(Zp,{size:"small",onClick:n,children:"Leave Race"})]}),(0,$d.jsxs)(ih,{children:[(0,$d.jsx)(ah,{children:"waiting"===s?(0,$d.jsxs)("div",{style:{textAlign:"center",padding:"60px"},children:[(0,$d.jsx)(ks.div,{animate:{scale:[1,1.1,1]},transition:{repeat:1/0,duration:1},style:{fontSize:"60px",marginBottom:"20px"},children:"\ud83c\udfc1"}),(0,$d.jsx)("h3",{style:{fontSize:"24px",marginBottom:"10px"},children:"Race Starting Soon..."}),(0,$d.jsx)("p",{style:{color:"#666"},children:"Get ready to solve!"})]}):S?(0,$d.jsxs)("div",{children:[(0,$d.jsxs)("h3",{style:{fontSize:"14px",color:"#666",marginBottom:"20px",textTransform:"uppercase",letterSpacing:"0.2em"},children:["Solve this ",S.type," puzzle:"]}),(0,$d.jsx)("div",{style:{background:"#0a0a0a",border:"1px solid #00ff41",padding:"40px",textAlign:"center",fontSize:"28px",fontFamily:"JetBrains Mono, monospace",color:"#00ff41",marginBottom:"30px"},children:S.data}),(0,$d.jsxs)("form",{onSubmit:e=>{var t;e.preventDefault(),t=e.target.answer.value,S&&!m&&t.toUpperCase()===S.answer.toUpperCase()&&(g(!0),f(100),M("System",`${null===a||void 0===a?void 0:a.username} solved the puzzle!`))},children:[(0,$d.jsx)("input",{name:"answer",type:"text",placeholder:"Enter answer...",disabled:m,style:{width:"100%",padding:"16px",background:"#0a0a0a",border:"1px solid #333",color:"#fff",fontSize:"18px",fontFamily:"JetBrains Mono, monospace",marginBottom:"16px"},autoComplete:"off"}),(0,$d.jsx)(Zp,{type:"submit",disabled:m,style:{width:"100%"},children:m?"\u2713 SOLVED!":"Submit Answer"})]}),m&&(0,$d.jsxs)(ks.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},style:{marginTop:"20px",padding:"20px",background:"#00ff4120",border:"1px solid #00ff41",textAlign:"center"},children:[(0,$d.jsx)("div",{style:{fontSize:"24px",marginBottom:"8px"},children:"\ud83c\udf89"}),(0,$d.jsx)("div",{style:{color:"#00ff41",fontWeight:600},children:"Correct! Waiting for others..."})]})]}):null}),(0,$d.jsxs)(oh,{children:[(0,$d.jsx)("h3",{style:{fontSize:"12px",color:"#666",textTransform:"uppercase",letterSpacing:"0.2em"},children:"Live Standings"}),z.map((e,t)=>(0,$d.jsxs)(sh,{isPlayer:e.isPlayer,rank:t+1,children:[(0,$d.jsx)("div",{className:"avatar",children:e.isPlayer?"\ud83d\udc64":e.avatar}),(0,$d.jsxs)("div",{className:"info",children:[(0,$d.jsxs)("div",{className:"name",children:[e.name," ",e.isPlayer&&"(You)"]}),(0,$d.jsx)("div",{className:"progress",children:e.finished?`Finished in ${A(e.finishTime)}`:"Racing..."}),(0,$d.jsx)(lh,{percent:e.progress||0,color:e.isPlayer?"#00ff41":"#666"})]}),(0,$d.jsxs)("div",{className:"rank",children:["#",t+1]})]},e.id)),d.filter(e=>!e.finished&&!m).map((e,t)=>(0,$d.jsxs)(sh,{rank:z.length+t+1,children:[(0,$d.jsx)("div",{className:"avatar",children:e.avatar}),(0,$d.jsxs)("div",{className:"info",children:[(0,$d.jsx)("div",{className:"name",children:e.name}),(0,$d.jsx)("div",{className:"progress",children:"Racing..."}),(0,$d.jsx)(lh,{percent:e.progress,color:"#666"})]})]},e.id)),(0,$d.jsxs)(ch,{children:[(0,$d.jsx)("h4",{style:{fontSize:"11px",color:"#666",marginBottom:"10px",textTransform:"uppercase"},children:"Race Chat"}),(0,$d.jsx)(uh,{children:x.map((e,t)=>(0,$d.jsxs)("div",{className:"message",children:[(0,$d.jsxs)("span",{className:"name",children:[e.name,":"]})," ",(0,$d.jsx)("span",{className:"text",children:e.text})]},t))}),(0,$d.jsx)("form",{onSubmit:e=>{e.preventDefault(),w.trim()&&(M(null===a||void 0===a?void 0:a.username,w),k(""),setTimeout(()=>{const e=["Nice try!","Too slow!","I'm almost done...","This is tough!","Good luck!"],t=d[Math.floor(Math.random()*d.length)];t&&Math.random()>.7&&M(t.name,e[Math.floor(Math.random()*e.length)])},1500))},children:(0,$d.jsxs)(dh,{children:[(0,$d.jsx)("input",{type:"text",value:w,onChange:e=>k(e.target.value),placeholder:"Send message...",maxLength:50}),(0,$d.jsx)(Zp,{type:"submit",size:"small",children:"Send"})]})})]})]})]}),(0,$d.jsx)($s,{children:"finished"===s&&(0,$d.jsx)(ph,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,$d.jsxs)(hh,{winner:1===y,initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},children:[(0,$d.jsx)("div",{className:"trophy",children:1===y?"\ud83c\udfc6":2===y?"\ud83e\udd48":3===y?"\ud83e\udd49":"\ud83c\udfc1"}),(0,$d.jsx)("h2",{children:1===y?"VICTORY!":`Rank #${y}`}),(0,$d.jsx)(fh,{children:z.slice(0,5).map((e,t)=>(0,$d.jsxs)("div",{className:"row "+(e.isPlayer?"you":""),children:[(0,$d.jsxs)("div",{className:"pos",children:["#",t+1]}),(0,$d.jsxs)("div",{className:"name",children:[e.name," ",e.isPlayer&&"(You)"]}),(0,$d.jsx)("div",{className:"time",children:A(e.finishTime)})]},e.id))}),(0,$d.jsxs)("div",{className:"stats",children:[(0,$d.jsxs)("div",{className:"stat",children:[(0,$d.jsxs)("div",{className:"value",children:["#",y]}),(0,$d.jsx)("div",{className:"label",children:"Rank"})]}),(0,$d.jsxs)("div",{className:"stat",children:[(0,$d.jsx)("div",{className:"value",children:A(c)}),(0,$d.jsx)("div",{className:"label",children:"Time"})]}),(0,$d.jsxs)("div",{className:"stat",children:[(0,$d.jsxs)("div",{className:"value",children:["+",1===y?500:2===y?350:3===y?250:150]}),(0,$d.jsx)("div",{className:"label",children:"XP"})]})]}),(0,$d.jsx)(Zp,{size:"large",onClick:n,children:"Continue"})]})})})]})};function yh(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{l(r.next(e))}catch(e){a(e)}}function s(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}l((r=r.apply(e,t||[])).next())})}function vh(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function xh(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function bh(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)o.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return o}function wh(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function kh(e,t,n,r,i){for(var a=[],o=5;o<arguments.length;o++)a[o-5]=arguments[o];return yh(this,void 0,void 0,function(){var o,s,l,c,u,d;return vh(this,function(p){switch(p.label){case 0:p.trys.push([0,12,13,14]),o=xh(a),s=o.next(),p.label=1;case 1:if(s.done)return[3,11];switch(typeof(l=s.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,Sh(e,t,l,n,r,i)];case 3:return p.sent(),[3,10];case 4:return[4,Eh(l)];case 5:return p.sent(),[3,10];case 6:return[4,l.apply(void 0,wh([e,t,n,r,i],bh(a),!1))];case 7:return p.sent(),[3,10];case 8:return[4,l];case 9:p.sent(),p.label=10;case 10:return s=o.next(),[3,1];case 11:return[3,14];case 12:return c=p.sent(),u={error:c},[3,14];case 13:try{s&&!s.done&&(d=o.return)&&d.call(o)}finally{if(u)throw u.error}return[7];case 14:return[2]}})})}function Sh(e,t,n,r,i,a){return yh(this,void 0,void 0,function(){var o,s;return vh(this,function(l){switch(l.label){case 0:return o=e.textContent||"",s=function(e,t){var n=bh(t).slice(0);return wh(wh([],bh(e),!1),[NaN],!1).findIndex(function(e,t){return n[t]!==e})}(o,n),[4,Ch(e,wh(wh([],bh(jh(o,t,s)),!1),bh(Ph(n,t,s)),!1),r,i,a)];case 1:return l.sent(),[2]}})})}function Eh(e){return yh(this,void 0,void 0,function(){return vh(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}function Ch(e,t,n,r,i){return yh(this,void 0,void 0,function(){var a,o,s,l,c,u,d,p,h,f,m,g,y;return vh(this,function(v){switch(v.label){case 0:if(a=t,i){for(o=0,s=1;s<t.length;s++)if(l=bh([t[s-1],t[s]],2),c=l[0],(u=l[1]).length>c.length||""===u){o=s;break}a=t.slice(o,t.length)}v.label=1;case 1:v.trys.push([1,6,7,8]),d=xh(function(e){var t,n,r,i,a,o,s;return vh(this,function(l){switch(l.label){case 0:t=function(e){return vh(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var n=t.textContent||"";return""===e||n.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},l.label=1;case 1:l.trys.push([1,6,7,8]),n=xh(e),r=n.next(),l.label=2;case 2:return r.done?[3,5]:(i=r.value,[5,t(i)]);case 3:l.sent(),l.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return a=l.sent(),o={error:a},[3,8];case 7:try{r&&!r.done&&(s=n.return)&&s.call(n)}finally{if(o)throw o.error}return[7];case 8:return[2]}})}(a)),p=d.next(),v.label=2;case 2:return p.done?[3,5]:(h=p.value,f="WRITING"===h.opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),h.op(e),[4,Eh(f)]);case 3:v.sent(),v.label=4;case 4:return p=d.next(),[3,2];case 5:return[3,8];case 6:return m=v.sent(),g={error:m},[3,8];case 7:try{p&&!p.done&&(y=d.return)&&y.call(d)}finally{if(g)throw g.error}return[7];case 8:return[2]}})})}function Ph(e,t,n){var r,i;return void 0===n&&(n=0),vh(this,function(a){switch(a.label){case 0:r=t(e),i=r.length,a.label=1;case 1:return n<i?[4,r.slice(0,++n).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}function jh(e,t,n){var r,i;return void 0===n&&(n=0),vh(this,function(a){switch(a.label){case 0:r=t(e),i=r.length,a.label=1;case 1:return i>n?[4,r.slice(0,--i).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var Th=(0,i.memo)((0,i.forwardRef)(function(e,t){var n=e.sequence,r=e.repeat,a=e.className,o=e.speed,s=void 0===o?40:o,l=e.deletionSpeed,c=e.omitDeletionAnimation,u=void 0!==c&&c,d=e.preRenderFirstString,p=void 0!==d&&d,h=e.wrapper,f=void 0===h?"span":h,m=e.splitter,g=void 0===m?function(e){return wh([],bh(e),!1)}:m,y=e.cursor,v=void 0===y||y,x=e.style,b=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),w=b["aria-label"],k=b["aria-hidden"],S=b.role;l||(l=s);var E=new Array(2).fill(40);[s,l].forEach(function(e,t){switch(typeof e){case"number":E[t]=Math.abs(e-100);break;case"object":var n=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===n&&(E[t]=r)}});var C,P,j,T,$,M,A=E[0],z=E[1],R=function(e,t){void 0===t&&(t=null);var n=(0,i.useRef)(t);return(0,i.useEffect)(function(){e&&("function"==typeof e?e(n.current):e.current=n.current)},[e]),n}(t),N="index-module_type__E-SaG";C=a?"".concat(v?N+" ":"").concat(a):v?N:"",P=(0,i.useRef)(function(){var e,t=n;r===1/0?e=kh:"number"==typeof r&&(t=Array(1+r).fill(n).flat());var i=e?wh(wh([],bh(t),!1),[e],!1):wh([],bh(t),!1);return kh.apply(void 0,wh([R.current,g,A,z,u],bh(i),!1)),function(){R.current}}),j=(0,i.useRef)(),T=(0,i.useRef)(!1),$=(0,i.useRef)(!1),M=bh((0,i.useState)(0),2)[1],T.current&&($.current=!0),(0,i.useEffect)(function(){return T.current||(j.current=P.current(),T.current=!0),M(function(e){return e+1}),function(){$.current&&j.current&&j.current()}},[]);var L=f,O=p?n.find(function(e){return"string"==typeof e})||"":null;return i.createElement(L,{"aria-hidden":k,"aria-label":w,role:S,style:x,className:C,children:w?i.createElement("span",{"aria-hidden":"true",ref:R,children:O}):O,ref:w?void 0:R})}),function(e,t){return!0});const $h=Td`
  0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
  20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
  40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
  80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
  100% { clip-path: inset(30% 0 50% 0); transform: translate(1px, -1px); }
`,Mh=Td`
  0% { clip-path: inset(15% 0 85% 0); transform: translate(2px, -1px); }
  20% { clip-path: inset(65% 0 25% 0); transform: translate(-2px, 1px); }
  40% { clip-path: inset(45% 0 45% 0); transform: translate(2px, -2px); }
  60% { clip-path: inset(85% 0 10% 0); transform: translate(-2px, 2px); }
  80% { clip-path: inset(5% 0 75% 0); transform: translate(1px, -1px); }
  100% { clip-path: inset(35% 0 55% 0); transform: translate(-1px, 1px); }
`,Ah=Td`
  0% { top: 0%; }
  100% { top: 100%; }
`,zh=Cd.span`
  position: relative;
  display: inline-block;
  color: ${e=>e.theme.text};
  font-family: ${e=>e.theme.fontDisplay};
  font-weight: ${e=>e.weight||"700"};
  font-size: ${e=>e.size||"inherit"};
  letter-spacing: ${e=>e.spacing||"0.1em"};
  text-transform: ${e=>e.uppercase?"uppercase":"none"};
  
  ${e=>e.hovered&&kd`
    animation: ${$h} 0.3s infinite linear alternate-reverse;
  `}
`,Rh=Cd.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${e=>e.theme.danger};
  opacity: 0.8;
  animation: ${$h} 2s infinite linear alternate-reverse;
  display: ${e=>e.active?"block":"none"};
`,Nh=Cd.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${e=>e.theme.accent};
  opacity: 0.8;
  animation: ${Mh} 2s infinite linear alternate-reverse;
  display: ${e=>e.active?"block":"none"};
`,Lh=Cd.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: ${e=>e.theme.primary};
  opacity: 0.5;
  animation: ${Ah} 3s linear infinite;
  display: ${e=>e.active?"block":"none"};
`,Oh=e=>{let{children:t,size:n,weight:r="700",spacing:a="0.1em",uppercase:o=!0,glitchOnHover:s=!1,alwaysGlitch:l=!1,intensity:c="normal"}=e;const[u,d]=i.useState(!1),[p,h]=i.useState(l);i.useEffect(()=>{if(l)return;const e=setInterval(()=>{Math.random()<.1&&(h(!0),setTimeout(()=>h(!1),200))},3e3);return()=>clearInterval(e)},[l]);return(0,$d.jsxs)(zh,{size:n,weight:r,spacing:a,uppercase:o,hovered:u,onMouseEnter:()=>{s&&(d(!0),h(!0))},onMouseLeave:()=>{s&&(d(!1),h(!1))},children:[t,(0,$d.jsx)(Rh,{active:p,"aria-hidden":"true",children:t}),(0,$d.jsx)(Nh,{active:p,"aria-hidden":"true",children:t}),(0,$d.jsx)(Lh,{active:p})]})},Dh=Cd.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
`,Ih=Cd.div`
  font-size: clamp(60px, 15vw, 120px);
  margin-bottom: 20px;
  text-align: center;
  user-select: none;
`,_h=Cd.div`
  font-family: ${e=>e.theme.font};
  font-size: 14px;
  color: ${e=>e.theme.textMuted};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 40px;
  text-align: center;
`,Fh=Cd(ks.div)`
  width: 100%;
  max-width: 500px;
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 20px;
    right: 20px;
    height: 1px;
    background: ${e=>e.theme.primary};
    box-shadow: 0 0 10px ${e=>e.theme.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 20px;
    right: 20px;
    height: 1px;
    background: ${e=>e.theme.primary};
    box-shadow: 0 0 10px ${e=>e.theme.primary};
  }
`,Vh=Cd.div`
  margin-bottom: 24px;
  position: relative;
`,Bh=Cd.label`
  display: block;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.primary};
  margin-bottom: 8px;
  font-weight: 600;
`,Uh=Cd.input`
  width: 100%;
  padding: 16px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  color: ${e=>e.theme.text};
  font-family: ${e=>e.theme.font};
  font-size: 16px;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
    box-shadow: 
      inset 0 0 10px ${e=>e.theme.primary}20,
      0 0 20px ${e=>e.theme.primary}20;
  }
  
  &::placeholder {
    color: ${e=>e.theme.textMuted};
    opacity: 0.5;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Wh=Cd.div`
  margin-top: 20px;
  padding: 16px;
  background: ${e=>e.theme.background}40;
  border-left: 2px solid ${e=>e.theme.warning};
  font-size: 12px;
  color: ${e=>e.theme.textMuted};
  line-height: 1.6;
`,Hh=Cd.div`
  text-align: center;
  margin-top: 16px;
  font-size: 12px;
  color: ${e=>e.theme.textMuted};
  letter-spacing: 0.1em;
`,Yh=Cd(ks.div)`
  color: ${e=>e.theme.danger};
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
  padding: 12px;
  background: ${e=>e.theme.danger}10;
  border: 1px solid ${e=>e.theme.danger}40;
`,Xh=Cd(ks.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${e=>e.theme.background};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px;
  z-index: 1000;
  font-family: ${e=>e.theme.font};
  font-size: 14px;
  line-height: 1.8;
  overflow: hidden;
`,Gh=Cd.div`
  color: ${e=>e.success?e.theme.primary:e.error?e.theme.danger:e.theme.textMuted};
  opacity: 0;
  animation: fadeIn 0.1s forwards;
  animation-delay: ${e=>e.delay}ms;
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
`,qh=()=>{const[e,t]=(0,i.useState)(""),[n,r]=(0,i.useState)(""),[a,o]=(0,i.useState)(!1),[s,l]=(0,i.useState)(""),[c,u]=(0,i.useState)(0),[d,p]=(0,i.useState)(!0),[h,f]=(0,i.useState)(!1),{setUser:m,setLoading:g,theme:y}=Gd(),v=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=setTimeout(()=>{f(!0),setTimeout(()=>p(!1),500)},2500);return()=>clearTimeout(e)},[]),(0,i.useEffect)(()=>{!d&&v.current&&v.current.focus()},[d]);const x=()=>0===c?null:1===c?"\ud83d\udca1 The key is related to your identity...":2===c?"\ud83d\udca1 Try reversing your perspective...":c>=3?"\ud83d\udca1 Your password is your username spelled backwards":null;return(0,$d.jsxs)($d.Fragment,{children:[(0,$d.jsx)($s,{children:d&&(0,$d.jsxs)(Xh,{initial:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[[{text:"> INITIALIZING LOCKED PROTOCOL v3.0...",delay:0},{text:"> Loading encryption modules...",delay:200,success:!0},{text:"> Establishing secure connection...",delay:400,success:!0},{text:"> Verifying system integrity...",delay:600,success:!0},{text:"> WARNING: Unauthorized access will be logged",delay:1e3,error:!0},{text:"> SYSTEM READY",delay:1500,success:!0},{text:"> AWAITING AUTHENTICATION...",delay:1800}].map((e,t)=>(0,$d.jsx)(Gh,{delay:e.delay,success:e.success,error:e.error,children:e.text},t)),(0,$d.jsx)(Gh,{delay:2200,children:"_"})]})}),(0,$d.jsxs)(Dh,{children:[(0,$d.jsx)(Ih,{children:(0,$d.jsx)(Oh,{size:"clamp(60px, 15vw, 120px)",weight:"900",alwaysGlitch:!0,intensity:"extreme",children:"\ud83d\udd12"})}),(0,$d.jsx)(_h,{children:(0,$d.jsx)(Th,{sequence:["THE ULTIMATE PUZZLE",2e3,"PROVE YOUR WORTH",2e3,"UNLOCK THE SYSTEM",2e3],wrapper:"span",speed:50,repeat:1/0})}),(0,$d.jsxs)(Fh,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},children:[(0,$d.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),l(""),o(!0),g(!0);try{const t=await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:n})}),r=await t.json();if(t.ok&&r.success){Tl.success("\ud83d\udd13 ACCESS GRANTED",{icon:"\ud83d\udd13",style:{background:"#00ff41",color:"#000",fontWeight:"bold"}}),m(r.user);const e=new Audio("/sounds/unlock.mp3");e.volume=.5,e.play().catch(()=>{})}else{u(r.attemptCount||c+1),l(r.message||r.error||"ACCESS DENIED");const e=new Audio("/sounds/error.mp3");e.volume=.3,e.play().catch(()=>{})}}catch(r){l("CONNECTION ERROR - SYSTEM UNREACHABLE")}finally{o(!1),g(!1)}},children:[(0,$d.jsxs)(Vh,{children:[(0,$d.jsx)(Bh,{children:"Identity"}),(0,$d.jsx)(Uh,{ref:v,type:"text",value:e,onChange:e=>t(e.target.value.toLowerCase()),placeholder:"Enter your codename...",disabled:a,autoComplete:"off",spellCheck:"false"})]}),(0,$d.jsxs)(Vh,{children:[(0,$d.jsx)(Bh,{children:"Key"}),(0,$d.jsx)(Uh,{type:"password",value:n,onChange:e=>r(e.target.value),placeholder:"What's your secret?...",disabled:a,autoComplete:"off"})]}),(0,$d.jsx)(Zp,{type:"submit",variant:"primary",size:"large",loading:a,disabled:!e||!n,style:{width:"100%"},children:a?"VERIFYING...":"INITIATE SEQUENCE"})]}),(0,$d.jsx)($s,{children:s&&(0,$d.jsxs)(Yh,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:["\u26a0 ",s]})}),x()&&(0,$d.jsx)(Wh,{children:x()}),c>0&&(0,$d.jsxs)(Hh,{children:["Attempt ",c," \u2022 Keep trying..."]})]})]})]})},Kh=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
`,Qh=Cd.div`
  text-align: center;
  margin-bottom: 40px;
`,Zh=Cd.div`
  display: inline-block;
  padding: 8px 24px;
  border: 1px solid ${e=>e.theme.primary};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${e=>e.theme.primary};
  margin-bottom: 20px;
`,Jh=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: 12px;
`,ef=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,tf=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 40px;
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, 
      ${e=>e.theme.primary}, 
      ${e=>e.theme.accent},
      ${e=>e.theme.primary}
    );
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`,nf=Cd.div`
  font-family: ${e=>e.theme.font};
  font-size: 24px;
  letter-spacing: 0.2em;
  color: ${e=>e.theme.primary};
  text-align: center;
  padding: 40px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  margin-bottom: 24px;
  user-select: all;
  cursor: text;
  
  span {
    display: inline-block;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.6; }
    }
  }
`,rf=Cd.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`,af=Cd.input`
  flex: 1;
  padding: 16px 20px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  color: ${e=>e.theme.text};
  font-family: ${e=>e.theme.font};
  font-size: 16px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
    box-shadow: 0 0 20px ${e=>e.theme.primary}20;
  }
`,of=Cd(ks.div)`
  padding: 16px 20px;
  background: ${e=>e.theme.warning}10;
  border-left: 3px solid ${e=>e.theme.warning};
  margin-bottom: 24px;
  font-size: 14px;
  color: ${e=>e.theme.text};
`,sf=Cd.div`
  text-align: center;
  font-size: 12px;
  color: ${e=>e.theme.textMuted};
  letter-spacing: 0.1em;
  margin-top: 16px;
`,lf=Cd.div`
  margin-top: 40px;
  padding: 24px;
  background: ${e=>e.theme.background};
  border: 1px dashed ${e=>e.theme.border};
`,cf=Cd.h3`
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.textMuted};
  margin-bottom: 16px;
`,uf=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
  gap: 8px;
  font-size: 11px;
  
  div {
    padding: 8px;
    background: ${e=>e.theme.surface};
    text-align: center;
    
    span {
      display: block;
      color: ${e=>e.theme.primary};
      font-weight: 600;
      margin-bottom: 2px;
    }
    
    small {
      color: ${e=>e.theme.textMuted};
    }
  }
`,df=()=>{const e=ae(),{user:t,setPhase:n,addXP:r,addBadge:a,incrementAttempts:o,attempts:s,startTimer:l,stopTimer:c,timer:u}=Gd(),[d,p]=(0,i.useState)(""),[h,f]=(0,i.useState)(""),[m,g]=(0,i.useState)(!1),[y,v]=(0,i.useState)(""),[x,b]=(0,i.useState)(null),[w,k]=(0,i.useState)(0);(0,i.useEffect)(()=>(l(),S(),()=>c()),[]);const S=async()=>{try{const e=await fetch("/api/puzzle2");if(e.ok){const t=await e.json();p(t.data)}}catch(e){v("Failed to load puzzle data")}},E=[];for(let i=65;i<=90;i++)E.push({char:String.fromCharCode(i),hex:i.toString(16).toUpperCase()});for(let i=48;i<=57;i++)E.push({char:String.fromCharCode(i),hex:i.toString(16).toUpperCase()});return E.push({char:"_",hex:"5F"}),(0,$d.jsxs)(Kh,{children:[(0,$d.jsxs)(Qh,{children:[(0,$d.jsx)(Zh,{children:"Phase 2 of 3"}),(0,$d.jsx)(Jh,{children:(0,$d.jsx)(Oh,{children:"Hex Decoder"})}),(0,$d.jsx)(ef,{children:"The System speaks in hexadecimal. Convert the transmission data to ASCII characters to prove your worth."})]}),(0,$d.jsxs)(tf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,$d.jsx)("h3",{style:{fontSize:"12px",letterSpacing:"0.2em",textTransform:"uppercase",color:"#666",marginBottom:"16px"},children:"\ud83d\udce1 Incoming Transmission"}),(0,$d.jsx)(nf,{children:d||"Loading..."}),(0,$d.jsx)("form",{onSubmit:async t=>{t.preventDefault(),g(!0),v("");try{const t=await fetch("/api/puzzle2/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:h})}),i=await t.json();if(t.ok&&i.success){c(),Xp({particleCount:100,spread:70,origin:{y:.6},colors:["#00ff41","#ff00ff","#ffd700"]});const t=Math.max(500-2*u,100);r(t),u<30&&a("\u26a1 Speed Demon"),s>=5&&a("\ud83c\udfaf Persistence"),Tl.success(`\u2713 Phase 2 Complete! +${t} XP`,{icon:"\ud83c\udf89",duration:5e3}),n(3),setTimeout(()=>{e("/unlocked")},2e3)}else o(),v(i.error||"Incorrect. Study the hex values."),s>=2&&w<1?(b("\ud83d\udca1 Each pair of hex digits represents one ASCII character"),k(1)):s>=4&&w<2&&(b("\ud83d\udca1 41 in hex = A, 42 = B, 43 = C... The message starts with WELCOME_"),k(2))}catch(i){v("Connection error. Please try again.")}finally{g(!1)}},children:(0,$d.jsxs)(rf,{children:[(0,$d.jsx)(af,{type:"text",value:h,onChange:e=>f(e.target.value.toUpperCase()),placeholder:"Enter decoded message...",disabled:m}),(0,$d.jsx)(Zp,{type:"submit",loading:m,disabled:!h,children:m?"Verifying...":"Transmit"})]})}),(0,$d.jsx)($s,{children:x&&(0,$d.jsx)(of,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:x})}),y&&(0,$d.jsxs)(ks.div,{initial:{opacity:0},animate:{opacity:1},style:{color:"#ff0040",textAlign:"center",marginTop:"16px"},children:["\u26a0 ",y]}),(0,$d.jsxs)(sf,{children:["Attempt ",s+1," \u2022 Time: ",Math.floor(u/60),":",(u%60).toString().padStart(2,"0")]})]}),(0,$d.jsxs)(lf,{children:[(0,$d.jsx)(cf,{children:"ASCII Reference Table"}),(0,$d.jsx)(uf,{children:E.map(e=>{let{char:t,hex:n}=e;return(0,$d.jsxs)("div",{children:[(0,$d.jsx)("span",{children:n}),(0,$d.jsx)("small",{children:t})]},n)})})]})]})},pf=(e,t,n,r)=>{e.style.transition=`${t} ${n}ms ${r}`},hf=(e,t,n)=>Math.min(Math.max(e,t),n);class ff{constructor(e,t){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=e=>{const{width:t,height:n}=e,r=Math.sqrt(t**2+n**2);return{width:r,height:r}},this.setSize=e=>{const t=this.calculateGlareSize(e);this.glareEl.style.width=`${t.width}px`,this.glareEl.style.height=`${t.height}px`},this.update=(e,t,n,r)=>{this.updateAngle(e,t.glareReverse),this.updateOpacity(e,t,n,r)},this.updateAngle=(e,t)=>{const{xPercentage:n,yPercentage:r}=e,i=180/Math.PI,a=n?Math.atan2(r,-n)*i:0;this.glareAngle=a-(t?180:0)},this.updateOpacity=(e,t,n,r)=>{const{xPercentage:i,yPercentage:a}=e,{glarePosition:o,glareReverse:s,glareMaxOpacity:l}=t,c=n?-1:1,u=r?-1:1,d=s?-1:1;let p=0;switch(o){case"top":p=-i*c*d;break;case"right":p=a*u*d;break;case"bottom":case void 0:p=i*c*d;break;case"left":p=-a*u*d;break;case"all":p=Math.hypot(i,a)}const h=hf(p,0,100);this.glareOpacity=h*l/100},this.render=e=>{const{glareColor:t}=e;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${t} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:t,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(e),i={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,i)}}class mf{constructor(){this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,t)=>{this.updateTilt(e,t),this.updateTiltManualInput(e,t),this.updateTiltReverse(t),this.updateTiltLimits(t)},this.updateTilt=(e,t)=>{const{xPercentage:n,yPercentage:r}=e,{tiltMaxAngleX:i,tiltMaxAngleY:a}=t;this.tiltAngleX=n*i/100,this.tiltAngleY=r*a/100*-1},this.updateTiltManualInput=(e,t)=>{const{tiltAngleXManual:n,tiltAngleYManual:r,tiltMaxAngleX:i,tiltMaxAngleY:a}=t;(null!==n||null!==r)&&(this.tiltAngleX=null!==n?n:0,this.tiltAngleY=null!==r?r:0,e.xPercentage=100*this.tiltAngleX/i,e.yPercentage=100*this.tiltAngleY/a)},this.updateTiltReverse=e=>{const t=e.tiltReverse?-1:1;this.tiltAngleX=t*this.tiltAngleX,this.tiltAngleY=t*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:t}=e;this.tiltAngleX=hf(this.tiltAngleX,-90,90),this.tiltAngleY=hf(this.tiltAngleY,-90,90),t&&(this.tiltAngleX="x"===t?this.tiltAngleX:0,this.tiltAngleY="y"===t?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:t,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/t*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const gf={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class yf extends i.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;("function"!=typeof e||"granted"===await e())&&window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:t}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),t&&t({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:t}=this.props;if(this.setTransitions(),t&&t({event:e}),this.props.reset){const e=new CustomEvent("autoreset");this.onMove(e)}},this.processInput=e=>{const{scale:t}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=t;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=t;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=t;break;case"autoreset":{const{tiltAngleXInitial:e,tiltAngleYInitial:t,tiltMaxAngleX:n,tiltMaxAngleY:r}=this.props,i=t/r*100;this.wrapperEl.clientPosition.xPercentage=hf(e/n*100,-100,100),this.wrapperEl.clientPosition.yPercentage=hf(i,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:t,tiltMaxAngleY:n}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/t*100,this.wrapperEl.clientPosition.yPercentage=r/n*100,this.wrapperEl.clientPosition.xPercentage=hf(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=hf(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:t,flipVertically:n,flipHorizontally:r}=this.props;"autoreset"!==e&&"deviceorientation"!==e&&"propChange"!==e&&this.updateClientInput(),t&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,r)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let t,n;if(e){const{x:e,y:r}=this.wrapperEl.clientPosition;t=r/window.innerHeight*200-100,n=e/window.innerWidth*200-100}else{const{size:{width:e,height:r,left:i,top:a},clientPosition:{x:o,y:s}}=this.wrapperEl;t=(s-a)/r*200-100,n=(o-i)/e*200-100}this.wrapperEl.clientPosition.xPercentage=hf(t,-100,100),this.wrapperEl.clientPosition.yPercentage=hf(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:t}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),t&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new mf,this.initGlare(),this.setSize(),this.addEventListeners(),"undefined"==typeof CustomEvent)return;const e=new CustomEvent("autoreset");this.mainLoop(e);const t=new CustomEvent("initial");this.emitOnMove(t)}componentWillUnmount(){null!==this.wrapperEl.updateAnimationId&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),t&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:t}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),t&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:t}=this.props;e&&(this.glare=new ff(this.wrapperEl.size,t),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:t}=this.props;if(!t)return;let n=0,r=0;this.glare&&(n=this.glare.glareAngle,r=this.glare.glareOpacity),t({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:r,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:t}=this.props;pf(this.wrapperEl.node,"all",e,t),this.glare&&pf(this.glare.glareEl,"opacity",e,t)}render(){const{children:e,className:t,style:n}=this.props;return(0,$d.jsx)("div",{ref:e=>{this.wrapperEl.node=e},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:t,style:n,children:e})}}yf.defaultProps=gf;const vf=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
`,xf=Cd.div`
  text-align: center;
  margin-bottom: 40px;
`,bf=Cd.div`
  display: inline-block;
  padding: 8px 24px;
  background: ${e=>e.theme.gold}20;
  border: 1px solid ${e=>e.theme.gold};
  font-size: 12px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${e=>e.theme.gold};
  margin-bottom: 20px;
`,wf=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: 12px;
  color: ${e=>e.theme.gold};
`,kf=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`,Sf=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`,Ef=Cd(yf)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.active?e.theme.gold:e.theme.border};
  padding: 24px;
  text-align: center;
  
  ${e=>e.active&&`\n    box-shadow: 0 0 30px ${e.theme.gold}30;\n  `}
`,Cf=Cd.div`
  font-size: 48px;
  margin-bottom: 16px;
`,Pf=Cd.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.active?e.theme.gold:e.theme.textMuted};
  margin-bottom: 8px;
`,jf=Cd.p`
  font-size: 12px;
  color: ${e=>e.theme.textMuted};
`,Tf=Cd.div`
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.gold}40;
  padding: 30px;
  margin-bottom: 30px;
  font-family: ${e=>e.theme.font};
  font-size: 16px;
  line-height: 1.8;
  color: ${e=>e.theme.gold};
  text-align: center;
  overflow-x: auto;
  position: relative;
  
  &::before {
    content: '01001000 01000101 01010010 01000101';
    position: absolute;
    top: 8px;
    left: 16px;
    font-size: 10px;
    color: ${e=>e.theme.textMuted};
    opacity: 0.5;
  }
`,$f=Cd.div`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 30px;
  margin-bottom: 30px;
`,Mf=Cd.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.textMuted};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Af=Cd.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,zf=Cd.div`
  label {
    display: block;
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${e=>e.theme.textMuted};
    margin-bottom: 8px;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px;
    background: ${e=>e.theme.background};
    border: 1px solid ${e=>e.theme.border};
    color: ${e=>e.theme.text};
    font-family: ${e=>e.theme.font};
    font-size: 13px;
    resize: vertical;
    
    &:focus {
      outline: none;
      border-color: ${e=>e.theme.gold};
    }
  }
`,Rf=Cd.div`
  text-align: center;
  color: ${e=>e.theme.gold};
  font-size: 24px;
  margin: 10px 0;
`,Nf=Cd.div`
  margin-top: 30px;
  
  input {
    width: 100%;
    padding: 20px;
    background: ${e=>e.theme.background};
    border: 2px solid ${e=>e.theme.gold}40;
    color: ${e=>e.theme.gold};
    font-family: ${e=>e.theme.font};
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    
    &::placeholder {
      color: ${e=>e.theme.textMuted};
    }
    
    &:focus {
      outline: none;
      border-color: ${e=>e.theme.gold};
      box-shadow: 0 0 30px ${e=>e.theme.gold}30;
    }
  }
`,Lf=Cd(ks.div)`
  background: ${e=>e.theme.warning}10;
  border-left: 4px solid ${e=>e.theme.warning};
  padding: 20px;
  margin-bottom: 30px;
  
  h4 {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.warning};
    margin-bottom: 12px;
  }
  
  ul {
    list-style: none;
    font-size: 13px;
    color: ${e=>e.theme.text};
    line-height: 1.8;
    
    li {
      margin-bottom: 8px;
      
      &::before {
        content: '→ ';
        color: ${e=>e.theme.warning};
      }
    }
  }
`,Of=Cd.div`
  position: fixed;
  top: 80px;
  right: 24px;
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.gold};
  padding: 12px 20px;
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 18px;
  color: ${e=>e.theme.gold};
  z-index: 50;
`,Df=()=>{const e=ae(),{user:t,setPhase:n,addXP:r,addBadge:a,incrementAttempts:o,attempts:s,startTimer:l,stopTimer:c,timer:u}=Gd(),[d,p]=(0,i.useState)(null),[h,f]=(0,i.useState)(""),[m,g]=(0,i.useState)(""),[y,v]=(0,i.useState)(""),[x,b]=(0,i.useState)(""),[w,k]=(0,i.useState)(!1),[S,E]=(0,i.useState)(""),[C,P]=(0,i.useState)(!1);(0,i.useEffect)(()=>(l(),j(),()=>c()),[]);const j=async()=>{try{const e=await fetch("/api/puzzle3");if(e.ok){const t=await e.json();p(t),f(t.binary)}}catch(e){E("Failed to load puzzle")}};(0,i.useEffect)(()=>{if(h){const e=h.replace(/[^01\s]/g,"");try{const t=e.split(" ").map(e=>{const t=parseInt(e,2);return String.fromCharCode(t)}).join("");g(t);const n=(e=>{try{return atob(e)}catch{return""}})(t);v(n)}catch{}}},[h]);return(0,$d.jsxs)(vf,{children:[(0,$d.jsxs)(Of,{children:["\u23f1 ",($=u,`${Math.floor($/60)}:${($%60).toString().padStart(2,"0")}`)]}),(0,$d.jsxs)(xf,{children:[(0,$d.jsx)(bf,{children:"Final Phase // Elite Only"}),(0,$d.jsx)(wf,{children:(0,$d.jsx)(Oh,{children:"The Final Lock"})}),(0,$d.jsx)(kf,{children:"A three-layer cipher chain guards the ultimate secret. Reverse the encoding: Binary \u2192 Base64 \u2192 ROT13"})]}),(0,$d.jsxs)(Sf,{children:[(0,$d.jsxs)(Ef,{active:!0,glareEnable:!0,tiltEnable:!0,children:[(0,$d.jsx)(Cf,{children:"0\ufe0f\u20e31\ufe0f\u20e3"}),(0,$d.jsx)(Pf,{active:!0,children:"Binary"}),(0,$d.jsx)(jf,{children:"8-bit binary encoding"})]}),(0,$d.jsxs)(Ef,{glareEnable:!0,tiltEnable:!0,children:[(0,$d.jsx)(Cf,{children:"\ud83d\udd22"}),(0,$d.jsx)(Pf,{children:"Base64"}),(0,$d.jsx)(jf,{children:"64-character encoding"})]}),(0,$d.jsxs)(Ef,{glareEnable:!0,tiltEnable:!0,children:[(0,$d.jsx)(Cf,{children:"\ud83d\udd20"}),(0,$d.jsx)(Pf,{children:"ROT13"}),(0,$d.jsx)(jf,{children:"Letter substitution cipher"})]})]}),d&&(0,$d.jsx)(Tf,{children:d.binary}),(0,$d.jsxs)($f,{children:[(0,$d.jsx)(Mf,{children:"\ud83d\udd13 Cipher Decoder Tool"}),(0,$d.jsxs)(Af,{children:[(0,$d.jsxs)(zf,{children:[(0,$d.jsx)("label",{children:"1. Binary Input"}),(0,$d.jsx)("textarea",{rows:"4",value:h,onChange:e=>f(e.target.value),placeholder:"Paste binary here..."})]}),(0,$d.jsxs)(zf,{children:[(0,$d.jsx)("label",{children:"2. Base64 Result"}),(0,$d.jsx)("textarea",{rows:"4",value:m,readOnly:!0,placeholder:"Base64 decoded..."})]}),(0,$d.jsxs)(zf,{children:[(0,$d.jsx)("label",{children:"3. ROT13 Result"}),(0,$d.jsx)("textarea",{rows:"4",value:(T=y,T.replace(/[a-zA-Z]/g,function(e){var t=e<="Z"?65:97;return String.fromCharCode(t+(e.charCodeAt(0)-t+13)%26)})),readOnly:!0,placeholder:"Final decoded message..."})]})]}),(0,$d.jsx)(Rf,{children:"\u2b07"}),(0,$d.jsxs)(Nf,{children:[(0,$d.jsx)("label",{style:{display:"block",fontSize:"12px",letterSpacing:"0.2em",textTransform:"uppercase",color:"#666",marginBottom:"12px",textAlign:"center"},children:"Final Answer"}),(0,$d.jsx)("input",{type:"text",value:x,onChange:e=>b(e.target.value.toUpperCase()),placeholder:"PHASE3_COMPLETE_..."})]}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"30px"},children:(0,$d.jsx)(Zp,{size:"large",onClick:async t=>{t.preventDefault(),k(!0),E("");try{const t=await fetch("/api/puzzle3/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:x,timeTaken:u})}),l=await t.json();if(t.ok&&l.success){var i;c();const t=Date.now()+5e3,o=["#ffd700","#00ff41","#ff00ff"];!function e(){Xp({particleCount:5,angle:60,spread:55,origin:{x:0},colors:o}),Xp({particleCount:5,angle:120,spread:55,origin:{x:1},colors:o}),Date.now()<t&&requestAnimationFrame(e)}(),r(l.xp||1e3),null===(i=l.badges)||void 0===i||i.forEach(e=>a(e)),n(3),Tl.success("\ud83c\udfc6 PHASE 3 COMPLETE - YOU ARE ELITE!",{icon:"\ud83c\udf89",duration:6e3}),setTimeout(()=>{e("/unlocked")},3e3)}else o(),E(l.error||"The cipher remains locked."),s>=3&&P(!0)}catch(l){E("System error. Please retry.")}finally{k(!1)}},loading:w,disabled:!x,children:w?"Verifying...":"\ud83d\udd13 UNLOCK FINAL PHASE"})}),S&&(0,$d.jsxs)(ks.div,{initial:{opacity:0},animate:{opacity:1},style:{color:"#ff0040",textAlign:"center",marginTop:"20px"},children:["\u26a0 ",S]})]}),(0,$d.jsx)($s,{children:C&&(0,$d.jsxs)(Lf,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[(0,$d.jsx)("h4",{children:"\ud83d\udd11 Decoding Hints"}),(0,$d.jsxs)("ul",{children:[(0,$d.jsx)("li",{children:"Each 8-bit binary sequence = 1 ASCII character"}),(0,$d.jsx)("li",{children:"Combine all characters to form Base64 string"}),(0,$d.jsx)("li",{children:"Decode Base64 to get ROT13 encoded text"}),(0,$d.jsx)("li",{children:"ROT13: A\u2192N, B\u2192O, C\u2192P... (shift by 13)"}),(0,$d.jsx)("li",{children:"Answer format: PHASE3_COMPLETE_[USERNAME]_THE_END"})]})]})}),(0,$d.jsxs)("div",{style:{textAlign:"center",color:"#666",fontSize:"12px",marginTop:"40px"},children:["Attempt ",s+1," \u2022 Only the worthy shall pass"]})]});var T,$};var If=function(e,t){return If=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},If(e,t)};function _f(e){var t=e.className,n=e.counterClockwise,r=e.dashRatio,a=e.pathRadius,o=e.strokeWidth,s=e.style;return(0,i.createElement)("path",{className:t,style:Object.assign({},s,Vf({pathRadius:a,dashRatio:r,counterClockwise:n})),d:Ff({pathRadius:a,counterClockwise:n}),strokeWidth:o,fillOpacity:0})}function Ff(e){var t=e.pathRadius,n=e.counterClockwise?1:0;return"\n      M 50,50\n      m 0,-"+t+"\n      a "+t+","+t+" "+n+" 1 1 0,"+2*t+"\n      a "+t+","+t+" "+n+" 1 1 0,-"+2*t+"\n    "}function Vf(e){var t=e.counterClockwise,n=e.dashRatio,r=e.pathRadius,i=2*Math.PI*r,a=(1-n)*i;return{strokeDasharray:i+"px "+i+"px",strokeDashoffset:(t?-a:a)+"px"}}var Bf=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return function(e,t){function n(){this.constructor=e}If(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},t.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},t.prototype.getPathRatio=function(){var e=this.props,t=e.value,n=e.minValue,r=e.maxValue;return(Math.min(Math.max(t,n),r)-n)/(r-n)},t.prototype.render=function(){var e=this.props,t=e.circleRatio,n=e.className,r=e.classes,a=e.counterClockwise,o=e.styles,s=e.strokeWidth,l=e.text,c=this.getPathRadius(),u=this.getPathRatio();return(0,i.createElement)("svg",{className:r.root+" "+n,style:o.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,i.createElement)("circle",{className:r.background,style:o.background,cx:50,cy:50,r:50}):null,(0,i.createElement)(_f,{className:r.trail,counterClockwise:a,dashRatio:t,pathRadius:c,strokeWidth:s,style:o.trail}),(0,i.createElement)(_f,{className:r.path,counterClockwise:a,dashRatio:u*t,pathRadius:c,strokeWidth:s,style:o.path}),l?(0,i.createElement)("text",{className:r.text,style:o.text,x:50,y:50},l):null)},t.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},t}(i.Component);function Uf(e){var t=e.rotation,n=e.strokeLinecap,r=e.textColor,i=e.textSize,a=e.pathColor,o=e.pathTransition,s=e.pathTransitionDuration,l=e.trailColor,c=e.backgroundColor,u=null==t?void 0:"rotate("+t+"turn)",d=null==t?void 0:"center center";return{root:{},path:Wf({stroke:a,strokeLinecap:n,transform:u,transformOrigin:d,transition:o,transitionDuration:null==s?void 0:s+"s"}),trail:Wf({stroke:l,strokeLinecap:n,transform:u,transformOrigin:d}),text:Wf({fill:r,fontSize:i}),background:Wf({fill:c})}}function Wf(e){return Object.keys(e).forEach(function(t){null==e[t]&&delete e[t]}),e}const Hf=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1400px;
  margin: 0 auto;
`,Yf=Cd.div`
  text-align: center;
  margin-bottom: 60px;
`,Xf=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(32px, 8vw, 56px);
  margin-bottom: 16px;
  
  span {
    color: ${e=>e.theme.primary};
  }
`,Gf=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
  letter-spacing: 0.1em;
`,qf=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`,Kf=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 24px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${e=>e.accent||e.theme.primary};
    box-shadow: 0 0 20px ${e=>e.accent||e.theme.primary};
  }
  
  h3 {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.textMuted};
    margin-bottom: 16px;
  }
`,Qf=Cd.div`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: ${e=>e.size||"36px"};
  font-weight: 700;
  color: ${e=>e.color||e.theme.primary};
  display: flex;
  align-items: baseline;
  gap: 8px;
  
  span {
    font-size: 14px;
    color: ${e=>e.theme.textMuted};
    font-weight: 400;
  }
`,Zf=Cd.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`,Jf=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`,em=Cd(yf)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.locked?e.theme.border:e.theme.primary};
  padding: 32px;
  cursor: ${e=>e.locked?"not-allowed":"pointer"};
  opacity: ${e=>e.locked?.6:1};
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${e=>e.locked?e.theme.border:e.theme.accent};
    box-shadow: ${e=>e.locked?"none":`0 0 30px ${e.theme.primary}20`};
  }
`,tm=Cd.div`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 48px;
  font-weight: 900;
  color: ${e=>e.locked?e.theme.textMuted:e.theme.primary};
  margin-bottom: 16px;
`,nm=Cd.h2`
  font-size: 20px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,rm=Cd.p`
  font-size: 14px;
  color: ${e=>e.theme.textMuted};
  line-height: 1.6;
  margin-bottom: 16px;
`,im=Cd.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${e=>e.completed?e.theme.primary:e.locked?e.theme.textMuted:e.theme.warning};
`,am=Cd.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`,om=Cd(ks.div)`
  padding: 8px 16px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    border-color: ${e=>e.theme.gold};
  }
`,sm=Cd.div`
  background: ${e=>e.theme.background};
  border: 1px dashed ${e=>e.theme.border};
  padding: 16px;
  font-size: 12px;
  font-family: ${e=>e.theme.font};
  color: ${e=>e.theme.textMuted};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  
  code {
    color: ${e=>e.theme.primary};
    font-size: 11px;
  }
  
  button {
    background: ${e=>e.theme.surface};
    border: 1px solid ${e=>e.theme.border};
    color: ${e=>e.theme.text};
    padding: 6px 12px;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      border-color: ${e=>e.theme.primary};
      color: ${e=>e.theme.primary};
    }
  }
`,lm=()=>{const e=ae(),{user:t,currentPhase:n,totalPhases:r,xp:a,level:o,streak:s,badges:l,setPhase:c}=Gd(),[u,d]=(0,i.useState)("");(0,i.useEffect)(()=>{const e=Date.now()+3e3,t={startVelocity:30,spread:360,ticks:60,zIndex:0},n=(e,t)=>Math.random()*(t-e)+e,r=setInterval(function(){const i=e-Date.now();if(i<=0)return clearInterval(r);const a=i/3e3*50;Xp({...t,particleCount:a,origin:{x:n(.1,.3),y:Math.random()-.2}}),Xp({...t,particleCount:a,origin:{x:n(.7,.9),y:Math.random()-.2}})},250);return()=>clearInterval(r)},[]),(0,i.useEffect)(()=>{t&&d(`${window.location.origin}/challenge/${t.username}`)},[t]);const p=[{number:1,title:"The Mirror",desc:"Your password is your identity reversed. Look backwards to move forwards.",completed:!0,locked:!1},{number:2,title:"Hex Decoder",desc:"The System speaks in hexadecimal. Convert the transmission to ASCII.",completed:n>=2,locked:!1},{number:3,title:"The Final Lock",desc:"Binary cipher chain: ROT13 \u2192 Base64 \u2192 Binary. Only the worthy shall pass.",completed:n>=3,locked:n<2}];return(0,$d.jsxs)(Hf,{children:[(0,$d.jsxs)(Yf,{children:[(0,$d.jsxs)(Xf,{children:["WELCOME, ",(0,$d.jsx)(Oh,{size:"inherit",children:null===t||void 0===t?void 0:t.username})]}),(0,$d.jsx)(Gf,{children:"You have proven worthy of the system."})]}),(0,$d.jsxs)(qf,{children:[(0,$d.jsxs)(Kf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,$d.jsx)("h3",{children:"Experience Points"}),(0,$d.jsxs)(Qf,{color:"#ffd700",children:[a,(0,$d.jsx)("span",{children:"XP"})]})]}),(0,$d.jsxs)(Kf,{accent:"#00ff41",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,$d.jsx)("h3",{children:"Current Level"}),(0,$d.jsxs)(Qf,{children:[o,(0,$d.jsx)("span",{children:"LV"})]})]}),(0,$d.jsxs)(Kf,{accent:"#ff00ff",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,$d.jsx)("h3",{children:"Login Streak"}),(0,$d.jsxs)(Qf,{color:"#ff00ff",children:[s,(0,$d.jsx)("span",{children:"days"})]})]}),(0,$d.jsxs)(Kf,{accent:"#00aaff",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,$d.jsx)("h3",{children:"Overall Progress"}),(0,$d.jsx)(Zf,{children:(0,$d.jsx)(Bf,{value:n/r*100,text:`${n}/${r}`,styles:Uf({textColor:"#00ff41",pathColor:"#00ff41",trailColor:"#1a1a1a",textSize:"24px"})})})]})]}),(0,$d.jsx)(Jf,{children:p.map((t,n)=>(0,$d.jsxs)(em,{locked:t.locked,onClick:()=>(t=>{t.locked||(2===t.number&&e("/phase2"),3===t.number&&e("/phase3"))})(t),initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2+.1*n},glareEnable:!t.locked,tiltEnable:!t.locked,tiltMaxAngleX:10,tiltMaxAngleY:10,children:[(0,$d.jsx)(tm,{locked:t.locked,children:t.locked?"\ud83d\udd12":t.completed?"\u2713":`0${t.number}`}),(0,$d.jsx)(nm,{children:t.title}),(0,$d.jsx)(rm,{children:t.desc}),(0,$d.jsxs)(im,{completed:t.completed,locked:t.locked,children:[t.locked&&"\ud83d\udd12 LOCKED",t.completed&&"\u2713 COMPLETED",!t.locked&&!t.completed&&"\u25ba AVAILABLE"]})]},t.number))}),(0,$d.jsxs)(qf,{children:[(0,$d.jsxs)(Kf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.6},children:[(0,$d.jsx)("h3",{children:"\ud83c\udfc6 Achievement Badges"}),(0,$d.jsx)(am,{children:l.length>0?l.map((e,t)=>(0,$d.jsx)(om,{initial:{scale:0},animate:{scale:1},transition:{delay:.7+.1*t},children:e},t)):(0,$d.jsx)("p",{style:{color:"#666",fontSize:"14px"},children:"No badges yet. Complete puzzles to earn them!"})})]}),(0,$d.jsxs)(Kf,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.7},children:[(0,$d.jsx)("h3",{children:"\ud83d\udd17 Challenge Link"}),(0,$d.jsx)("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"},children:"Share this link with friends to challenge them with your exact puzzles."}),(0,$d.jsxs)(sm,{children:[(0,$d.jsx)("code",{children:u}),(0,$d.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(u)},children:"Copy"})]})]})]}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:(0,$d.jsx)(Zp,{size:"large",onClick:()=>e("/leaderboard"),icon:"\ud83c\udfc6",children:"View Leaderboard"})})]})},cm=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
`,um=Cd.div`
  text-align: center;
  margin-bottom: 60px;
`,dm=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(36px, 8vw, 64px);
  margin-bottom: 16px;
  
  span {
    color: ${e=>e.theme.gold};
  }
`,pm=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
  letter-spacing: 0.1em;
`,hm=Cd.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`,fm=Cd.div`
  text-align: center;
  
  .value {
    font-family: ${e=>e.theme.fontDisplay};
    font-size: 36px;
    font-weight: 700;
    color: ${e=>e.theme.primary};
  }
  
  .label {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.textMuted};
    margin-top: 4px;
  }
`,mm=Cd.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
`,gm=Cd.button`
  padding: 12px 32px;
  background: ${e=>e.active?e.theme.primary:"transparent"};
  border: 1px solid ${e=>e.theme.primary};
  color: ${e=>e.active?e.theme.background:e.theme.primary};
  font-family: ${e=>e.theme.font};
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>(e.active,e.theme.primary)}20;
  }
`,ym=Cd.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 60px;
  height: 300px;
`,vm=Cd(yf)`
  width: 200px;
  background: ${e=>{switch(e.rank){case 1:return"linear-gradient(180deg, #ffd70020, #ffd70005)";case 2:return"linear-gradient(180deg, #c0c0c020, #c0c0c005)";case 3:return"linear-gradient(180deg, #cd7f3220, #cd7f3205)";default:return e.theme.surface}}};
  border: 2px solid ${e=>{switch(e.rank){case 1:return"#ffd700";case 2:return"#c0c0c0";case 3:return"#cd7f32";default:return e.theme.border}}};
  padding: 24px;
  text-align: center;
  height: ${e=>{switch(e.rank){case 1:return"100%";case 2:return"85%";case 3:return"70%";default:return"60%"}}};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,xm=Cd.div`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 48px;
  font-weight: 900;
  color: ${e=>{switch(e.rank){case 1:return"#ffd700";case 2:return"#c0c0c0";case 3:return"#cd7f32";default:return e.theme.textMuted}}};
`,bm=Cd.div`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>e.theme.text};
  word-break: break-word;
`,wm=Cd.div`
  font-size: 12px;
  color: ${e=>e.theme.textMuted};
  
  .level {
    color: ${e=>e.theme.gold};
    font-weight: 600;
  }
`,km=Cd.div`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
`,Sm=Cd.div`
  display: grid;
  grid-template-columns: 80px 1fr 100px 100px;
  padding: 16px 24px;
  background: ${e=>e.theme.background};
  border-bottom: 1px solid ${e=>e.theme.border};
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.textMuted};
  
  @media (max-width: 600px) {
    grid-template-columns: 60px 1fr 80px;
    
    span:last-child {
      display: none;
    }
  }
`,Em=Cd(ks.div)`
  display: grid;
  grid-template-columns: 80px 1fr 100px 100px;
  padding: 16px 24px;
  border-bottom: 1px solid ${e=>e.theme.border};
  font-size: 14px;
  align-items: center;
  transition: background 0.2s;
  
  &:hover {
    background: ${e=>e.theme.background}40;
  }
  
  .rank {
    font-family: ${e=>e.theme.fontDisplay};
    font-weight: 700;
    color: ${e=>e.rank<=3?e.theme.gold:e.theme.textMuted};
  }
  
  .name {
    font-weight: 600;
  }
  
  .level {
    color: ${e=>e.theme.primary};
  }
  
  .time {
    color: ${e=>e.theme.textMuted};
    font-size: 12px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 60px 1fr 80px;
    
    .time {
      display: none;
    }
  }
`,Cm=Cd.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`,Pm=Cd.span`
  font-size: 10px;
  padding: 2px 6px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
`,jm=()=>{const[e,t]=(0,i.useState)("elite"),[n,r]=(0,i.useState)([]),[a,o]=(0,i.useState)([]),[s,l]=(0,i.useState)(!0);(0,i.useEffect)(()=>{c()},[]);const c=async()=>{try{const e=await fetch("/api/leaderboard/full");if(e.ok){const t=await e.json();r(t.elite||[]),o(t.phase2||[])}}catch(e){console.error("Failed to load leaderboard")}finally{l(!1)}},u="elite"===e?n:a,d=u.slice(0,3),p=u.slice(3);return(0,$d.jsxs)(cm,{children:[(0,$d.jsxs)(um,{children:[(0,$d.jsxs)(dm,{children:[(0,$d.jsx)(Oh,{alwaysGlitch:!0,children:"\ud83c\udfc6 ELITE"})," RANKINGS"]}),(0,$d.jsx)(pm,{children:"The fastest minds. The highest achievers."})]}),(0,$d.jsxs)(hm,{children:[(0,$d.jsxs)(fm,{children:[(0,$d.jsx)("div",{className:"value",children:n.length}),(0,$d.jsx)("div",{className:"label",children:"Elite Solvers"})]}),(0,$d.jsxs)(fm,{children:[(0,$d.jsx)("div",{className:"value",children:a.length}),(0,$d.jsx)("div",{className:"label",children:"Phase 2 Cleared"})]}),(0,$d.jsxs)(fm,{children:[(0,$d.jsx)("div",{className:"value",children:u.length>0?u.length:"-"}),(0,$d.jsx)("div",{className:"label",children:"Total Ranked"})]})]}),(0,$d.jsxs)(mm,{children:[(0,$d.jsx)(gm,{active:"elite"===e,onClick:()=>t("elite"),children:"\ud83c\udfc6 Elite (Phase 3)"}),(0,$d.jsx)(gm,{active:"phase2"===e,onClick:()=>t("phase2"),children:"\ud83d\udcca Phase 2"})]}),s?(0,$d.jsx)("div",{style:{textAlign:"center",padding:"60px",color:"#666"},children:"Loading rankings..."}):(0,$d.jsxs)($d.Fragment,{children:[d.length>0&&(0,$d.jsx)(ym,{children:d.map((t,n)=>(0,$d.jsx)(vm,{rank:n+1,glareEnable:!0,tiltEnable:!0,children:(0,$d.jsxs)("div",{children:[(0,$d.jsx)(xm,{rank:n+1,children:n+1===1?"\ud83d\udc51":n+1}),(0,$d.jsx)(bm,{children:t.username}),(0,$d.jsxs)(wm,{children:[(0,$d.jsxs)("span",{className:"level",children:["LV.",t.level||1]})," \u2022 ",t.xp||0," XP"]}),"elite"===e&&t.badges&&(0,$d.jsx)(Cm,{children:t.badges.slice(0,3).map((e,t)=>(0,$d.jsx)(Pm,{children:e.split(" ")[0]},t))})]})},t.id||n))}),(0,$d.jsxs)(km,{children:[(0,$d.jsxs)(Sm,{children:[(0,$d.jsx)("span",{children:"Rank"}),(0,$d.jsx)("span",{children:"Identity"}),(0,$d.jsx)("span",{children:"elite"===e?"Level":"Time"}),(0,$d.jsx)("span",{children:"XP"})]}),(0,$d.jsx)($s,{children:p.map((t,n)=>(0,$d.jsxs)(Em,{rank:n+4,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.05*n},children:[(0,$d.jsxs)("span",{className:"rank",children:["#",n+4]}),(0,$d.jsx)("span",{className:"name",children:t.username}),(0,$d.jsx)("span",{className:"level",children:"elite"===e?`Lv.${t.level||1}`:`${t.time_taken||0}s`}),(0,$d.jsxs)("span",{className:"time",children:[t.xp||0," XP"]})]},t.id||n))}),0===p.length&&0===d.length&&(0,$d.jsx)("div",{style:{textAlign:"center",padding:"40px",color:"#666"},children:"No completions yet. Be the first to rank!"})]})]}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:(0,$d.jsx)(Zp,{onClick:()=>window.location.reload(),children:"\ud83d\udd04 Refresh Rankings"})})]})},Tm=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
`,$m=Cd.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`,Mm=Cd.div`
  width: 120px;
  height: 120px;
  background: ${e=>e.theme.surface};
  border: 2px solid ${e=>e.theme.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  box-shadow: 0 0 30px ${e=>e.theme.primary}30;
`,Am=Cd.div`
  flex: 1;
`,zm=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: 36px;
  margin-bottom: 8px;
`,Rm=Cd.div`
  font-size: 12px;
  color: ${e=>e.theme.textMuted};
  letter-spacing: 0.1em;
  font-family: ${e=>e.theme.font};
`,Nm=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`,Lm=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 24px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${e=>e.accent||e.theme.primary};
  }
  
  h3 {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.textMuted};
    margin-bottom: 16px;
  }
`,Om=Cd.div`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: ${e=>e.size||"32px"};
  font-weight: 700;
  color: ${e=>e.color||e.theme.text};
  
  span {
    font-size: 14px;
    color: ${e=>e.theme.textMuted};
    margin-left: 8px;
  }
`,Dm=Cd.div`
  width: 140px;
  height: 140px;
  margin: 0 auto 20px;
`,Im=Cd.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`,_m=Cd(yf)`
  padding: 10px 16px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: default;
  
  &:hover {
    border-color: ${e=>e.theme.gold};
  }
`,Fm=Cd.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .name {
    font-size: 13px;
    font-weight: 600;
  }
  
  .status {
    font-size: 11px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${e=>e.completed?e.theme.primary:e.theme.textMuted};
  }
  
  .bar {
    height: 8px;
    background: ${e=>e.theme.background};
    overflow: hidden;
    
    .fill {
      height: 100%;
      width: ${e=>e.percent};
      background: ${e=>e.completed?e.theme.primary:e.theme.warning};
      transition: width 0.5s ease;
    }
  }
`,Vm=Cd.div`
  max-height: 300px;
  overflow-y: auto;
`,Bm=Cd.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid ${e=>e.theme.border};
  font-size: 13px;
  
  &:last-child {
    border-bottom: none;
  }
  
  .icon {
    font-size: 20px;
  }
  
  .content {
    flex: 1;
  }
  
  .time {
    font-size: 11px;
    color: ${e=>e.theme.textMuted};
  }
`,Um=()=>{var e,t,n;const{user:r,xp:a,level:o,streak:s,badges:l,currentPhase:c}=Gd(),[u,d]=(0,i.useState)(null);(0,i.useEffect)(()=>{p()},[]);const p=async()=>{try{const e=await fetch("/api/profile");if(e.ok){const t=await e.json();d(t)}}catch(e){console.error("Failed to load profile")}},h=a%1e3/1e3*100,f=1e3*o-a,m=[{name:"Phase 1: The Mirror",completed:!0,percent:"100%"},{name:"Phase 2: Hex Decoder",completed:c>=2,percent:c>=2?"100%":"0%"},{name:"Phase 3: The Final Lock",completed:c>=3,percent:c>=3?"100%":"0%"}],g=[{icon:"\ud83d\udd13",text:"Solved Phase 1",time:"2 days ago"},{icon:"\ud83c\udfc6",text:"Earned Persistence badge",time:"2 days ago"},...c>=2?[{icon:"\ud83d\udd13",text:"Solved Phase 2",time:"1 day ago"}]:[],...c>=3?[{icon:"\ud83d\udc51",text:"Became ELITE - Phase 3 Complete!",time:"Today"}]:[]];return(0,$d.jsxs)(Tm,{children:[(0,$d.jsxs)($m,{children:[(0,$d.jsx)(Mm,{children:(null===r||void 0===r||null===(e=r.username)||void 0===e||null===(t=e[0])||void 0===t?void 0:t.toUpperCase())||"?"}),(0,$d.jsxs)(Am,{children:[(0,$d.jsx)(zm,{children:(0,$d.jsx)(Oh,{size:"36px",children:null===r||void 0===r?void 0:r.username})}),(0,$d.jsxs)(Rm,{children:["ID: ",null===r||void 0===r||null===(n=r.id)||void 0===n?void 0:n.slice(0,16),"...",(0,$d.jsx)("button",{onClick:()=>{null!==r&&void 0!==r&&r.id&&navigator.clipboard.writeText(r.id)},style:{background:"none",border:"none",color:"#00ff41",cursor:"pointer",marginLeft:"8px"},children:"[copy]"})]})]})]}),(0,$d.jsxs)(Nm,{children:[(0,$d.jsxs)(Lm,{accent:"#00ff41",initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,$d.jsx)("h3",{children:"Experience"}),(0,$d.jsx)(Dm,{children:(0,$d.jsx)(Bf,{value:h,text:`Lv.${o}`,styles:Uf({textColor:"#00ff41",pathColor:"#00ff41",trailColor:"#1a1a1a",textSize:"20px"})})}),(0,$d.jsxs)(Om,{color:"#00ff41",children:[a,(0,$d.jsxs)("span",{children:["/ ",1e3*o," XP"]})]}),(0,$d.jsxs)("div",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:[f," XP to next level"]})]}),(0,$d.jsxs)(Lm,{accent:"#ff00ff",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1},children:[(0,$d.jsx)("h3",{children:"\ud83d\udd25 Login Streak"}),(0,$d.jsxs)(Om,{color:"#ff00ff",size:"48px",children:[s,(0,$d.jsx)("span",{children:"days"})]}),(0,$d.jsx)("div",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:"Keep logging in daily to maintain your streak!"})]}),(0,$d.jsxs)(Lm,{accent:"#ffd700",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:[(0,$d.jsx)("h3",{children:"\ud83c\udfc6 Badges Earned"}),(0,$d.jsx)(Om,{color:"#ffd700",size:"48px",children:l.length}),(0,$d.jsx)(Im,{style:{marginTop:"16px"},children:l.map((e,t)=>(0,$d.jsx)(_m,{glareEnable:!0,tiltEnable:!0,children:e},t))})]})]}),(0,$d.jsxs)(Nm,{children:[(0,$d.jsxs)(Lm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:[(0,$d.jsx)("h3",{children:"\ud83c\udfaf Puzzle Progress"}),m.map((e,t)=>(0,$d.jsxs)(Fm,{completed:e.completed,percent:e.percent,children:[(0,$d.jsxs)("div",{className:"header",children:[(0,$d.jsx)("span",{className:"name",children:e.name}),(0,$d.jsx)("span",{className:"status",children:e.completed?"\u2713 Complete":"\u25cb Locked"})]}),(0,$d.jsx)("div",{className:"bar",children:(0,$d.jsx)("div",{className:"fill"})})]},t))]}),(0,$d.jsxs)(Lm,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:[(0,$d.jsx)("h3",{children:"\ud83d\udcca Recent Activity"}),(0,$d.jsxs)(Vm,{children:[g.map((e,t)=>(0,$d.jsxs)(Bm,{children:[(0,$d.jsx)("span",{className:"icon",children:e.icon}),(0,$d.jsx)("div",{className:"content",children:e.text}),(0,$d.jsx)("div",{className:"time",children:e.time})]},t)),0===g.length&&(0,$d.jsx)("div",{style:{color:"#666",fontSize:"13px",padding:"20px 0"},children:"No activity yet. Start solving puzzles!"})]})]})]}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:(0,$d.jsx)(Zp,{onClick:()=>window.location.href="/unlocked",children:"\u2190 Back to Hub"})})]})},Wm=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
`,Hm=Cd.div`
  text-align: center;
  margin-bottom: 60px;
`,Ym=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(36px, 8vw, 64px);
  margin-bottom: 16px;
`,Xm=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,Gm=Cd(ks.div)`
  text-align: center;
  padding: 80px 40px;
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: 'COMING SOON';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-15deg);
    font-size: 80px;
    font-weight: 900;
    color: ${e=>e.theme.text};
    opacity: 0.03;
    pointer-events: none;
    white-space: nowrap;
  }
`,qm=Cd.div`
  font-size: 80px;
  margin-bottom: 24px;
`,Km=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-top: 60px;
`,Qm=Cd(yf)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 30px;
  text-align: center;
  
  &:hover {
    border-color: ${e=>e.theme.primary}40;
  }
  
  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  h3 {
    font-size: 14px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.text};
    margin-bottom: 12px;
  }
  
  p {
    font-size: 13px;
    color: ${e=>e.theme.textMuted};
    line-height: 1.6;
  }
`,Zm=Cd.div`
  margin-top: 40px;
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 30px;
`,Jm=Cd.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.textMuted};
  margin-bottom: 24px;
  text-align: center;
`,eg=Cd.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: ${e=>e.theme.background};
  margin-bottom: 12px;
  opacity: 0.6;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .rank {
    font-size: 24px;
    font-weight: 700;
    color: ${e=>e.theme.gold};
    width: 40px;
  }
  
  .icon {
    font-size: 32px;
  }
  
  .info {
    flex: 1;
    
    .name {
      font-weight: 600;
      margin-bottom: 4px;
    }
    
    .members {
      font-size: 12px;
      color: ${e=>e.theme.textMuted};
    }
  }
  
  .score {
    font-family: ${e=>e.theme.fontDisplay};
    font-size: 20px;
    color: ${e=>e.theme.primary};
  }
`,tg=()=>{const[e,t]=(0,i.useState)("browse");return(0,$d.jsxs)(Wm,{children:[(0,$d.jsxs)(Hm,{children:[(0,$d.jsxs)(Ym,{children:[(0,$d.jsx)(Oh,{alwaysGlitch:!0,children:"\u2694\ufe0f"})," Guilds"]}),(0,$d.jsx)(Xm,{children:"Join forces with other elite solvers. Form guilds, compete together, and dominate the leaderboards as a team."})]}),(0,$d.jsxs)(Gm,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:[(0,$d.jsx)(qm,{children:"\ud83d\udea7"}),(0,$d.jsx)("h2",{style:{fontSize:"28px",marginBottom:"16px"},children:(0,$d.jsx)(Oh,{children:"Under Construction"})}),(0,$d.jsx)("p",{style:{color:"#666",maxWidth:"500px",margin:"0 auto",lineHeight:1.6},children:"The Guild System is being built. Soon you'll be able to create or join elite teams of puzzle solvers. Stay tuned for the ultimate collaborative puzzle experience!"}),(0,$d.jsx)("div",{style:{marginTop:"30px"},children:(0,$d.jsx)(Zp,{disabled:!0,children:"Coming in v3.1"})})]}),(0,$d.jsx)(Km,{children:[{icon:"\ud83c\udff0",title:"Create Guilds",desc:"Form your own elite team of puzzle solvers"},{icon:"\ud83e\udd1d",title:"Team Challenges",desc:"Solve puzzles together and share rewards"},{icon:"\ud83c\udfc6",title:"Guild Rankings",desc:"Compete against other guilds for supremacy"},{icon:"\ud83d\udc8e",title:"Shared Rewards",desc:"Unlock exclusive guild-only achievements"}].map((e,t)=>(0,$d.jsxs)(Qm,{glareEnable:!0,tiltEnable:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2+.1*t},children:[(0,$d.jsx)("div",{className:"icon",children:e.icon}),(0,$d.jsx)("h3",{children:e.title}),(0,$d.jsx)("p",{children:e.desc})]},t))}),(0,$d.jsxs)(Zm,{children:[(0,$d.jsx)(Jm,{children:"Preview: Top Guilds"}),[{rank:1,icon:"\ud83d\udd25",name:"CodeBreakers",members:42,score:15420},{rank:2,icon:"\u26a1",name:"BinaryBandits",members:38,score:12890},{rank:3,icon:"\ud83c\udfaf",name:"CipherSquad",members:35,score:11500},{rank:4,icon:"\ud83d\ude80",name:"HackElite",members:29,score:9870},{rank:5,icon:"\ud83d\udc80",name:"DarkNet",members:31,score:9230}].map(e=>(0,$d.jsxs)(eg,{children:[(0,$d.jsxs)("div",{className:"rank",children:["#",e.rank]}),(0,$d.jsx)("div",{className:"icon",children:e.icon}),(0,$d.jsxs)("div",{className:"info",children:[(0,$d.jsx)("div",{className:"name",children:e.name}),(0,$d.jsxs)("div",{className:"members",children:[e.members," members"]})]}),(0,$d.jsxs)("div",{className:"score",children:[e.score.toLocaleString()," XP"]})]},e.rank))]}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:(0,$d.jsx)(Zp,{onClick:()=>window.location.href="/unlocked",children:"\u2190 Back to Hub"})})]})},ng=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1200px;
  margin: 0 auto;
`,rg=Cd.div`
  text-align: center;
  margin-bottom: 60px;
`,ig=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(36px, 8vw, 64px);
  margin-bottom: 16px;
  
  span {
    color: ${e=>e.theme.primary};
  }
`,ag=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,og=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`,sg=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  ${e=>e.active&&`\n    box-shadow: 0 0 30px ${e.theme.primary}30;\n  `}
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${e=>e.active?e.theme.primary:"transparent"};
    box-shadow: ${e=>e.active?`0 0 10px ${e.theme.primary}`:"none"};
  }
  
  &:hover {
    border-color: ${e=>e.theme.primary}60;
  }
  
  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  .name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .difficulty {
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${e=>e.theme.textMuted};
    margin-bottom: 16px;
  }
  
  .players {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: ${e=>e.theme.textMuted};
  }
`,lg=Cd.div`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 24px;
  margin-bottom: 40px;
`,cg=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`,ug=Cd.div`
  text-align: center;
  
  .value {
    font-family: ${e=>e.theme.fontDisplay};
    font-size: 32px;
    font-weight: 700;
    color: ${e=>e.theme.primary};
  }
  
  .label {
    font-size: 11px;
    color: ${e=>e.theme.textMuted};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-top: 4px;
  }
`,dg=Cd.div`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 30px;
  margin-top: 40px;
`,pg=Cd.h3`
  font-size: 14px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${e=>e.theme.textMuted};
  margin-bottom: 20px;
  text-align: center;
`,hg=Cd.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`,fg=Cd.div`
  text-align: center;
  
  .number {
    width: 40px;
    height: 40px;
    background: ${e=>e.theme.background};
    border: 1px solid ${e=>e.theme.border};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${e=>e.theme.fontDisplay};
    font-size: 18px;
    font-weight: 700;
    color: ${e=>e.theme.primary};
    margin: 0 auto 12px;
  }
  
  .text {
    font-size: 13px;
    color: ${e=>e.theme.text};
  }
`,mg=Cd.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: ${e=>e.theme.primary};
  margin-bottom: 20px;
  
  .dot {
    width: 8px;
    height: 8px;
    background: ${e=>e.theme.primary};
    border-radius: 50%;
    animation: pulse 1s infinite;
    
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }
  }
`,gg=()=>{const e=ae(),{startRace:t,user:n}=Gd(),[r,a]=(0,i.useState)(null),[o,s]=(0,i.useState)({racesPlayed:0,wins:0,top3:0,bestTime:null});(0,i.useEffect)(()=>{const e=localStorage.getItem("locked-race-stats");e&&s(JSON.parse(e))},[]);return(0,$d.jsxs)(ng,{children:[(0,$d.jsxs)(rg,{children:[(0,$d.jsxs)(mg,{children:[(0,$d.jsx)("span",{className:"dot"}),(0,$d.jsx)("span",{children:"LIVE MULTIPLAYER"})]}),(0,$d.jsxs)(ig,{children:[(0,$d.jsx)(Oh,{alwaysGlitch:!0,children:"RACE"})," MODE"]}),(0,$d.jsx)(ag,{children:"Compete against other hackers in real-time puzzle races. First to solve wins XP and glory!"})]}),(0,$d.jsx)(lg,{children:(0,$d.jsxs)(cg,{children:[(0,$d.jsxs)(ug,{children:[(0,$d.jsx)("div",{className:"value",children:o.racesPlayed}),(0,$d.jsx)("div",{className:"label",children:"Races Played"})]}),(0,$d.jsxs)(ug,{children:[(0,$d.jsx)("div",{className:"value",children:o.wins}),(0,$d.jsx)("div",{className:"label",children:"Wins"})]}),(0,$d.jsxs)(ug,{children:[(0,$d.jsx)("div",{className:"value",children:o.top3}),(0,$d.jsx)("div",{className:"label",children:"Top 3 Finishes"})]}),(0,$d.jsxs)(ug,{children:[(0,$d.jsx)("div",{className:"value",children:o.bestTime?`${o.bestTime}s`:"-"}),(0,$d.jsx)("div",{className:"label",children:"Best Time"})]})]})}),(0,$d.jsx)(og,{children:[{id:"quick",icon:"\u26a1",name:"Quick Race",difficulty:"Easy",maxPlayers:4,description:"Fast puzzles, perfect for beginners"},{id:"standard",icon:"\ud83c\udfc1",name:"Standard Race",difficulty:"Medium",maxPlayers:6,description:"Balanced difficulty for all skill levels"},{id:"elite",icon:"\ud83d\udc51",name:"Elite Race",difficulty:"Hard",maxPlayers:4,description:"For Phase 3 completers only"}].map((e,t)=>(0,$d.jsxs)(sg,{active:r===e.id,onClick:()=>a(e.id),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,$d.jsx)("div",{className:"icon",children:e.icon}),(0,$d.jsx)("div",{className:"name",children:e.name}),(0,$d.jsxs)("div",{className:"difficulty",children:[e.difficulty," \u2022 Max ",e.maxPlayers," players"]}),(0,$d.jsxs)("div",{className:"players",children:[(0,$d.jsx)("span",{children:"\u25cf"}),(0,$d.jsxs)("span",{children:["0 / ",e.maxPlayers," players waiting"]})]})]},e.id))}),(0,$d.jsx)("div",{style:{textAlign:"center"},children:(0,$d.jsx)(Zp,{size:"large",onClick:()=>{r&&t(r)},disabled:!r,children:r?"\ud83c\udfc1 START RACE":"SELECT A RACE TYPE"})}),(0,$d.jsxs)(dg,{children:[(0,$d.jsx)(pg,{children:"How Racing Works"}),(0,$d.jsxs)(hg,{children:[(0,$d.jsxs)(fg,{children:[(0,$d.jsx)("div",{className:"number",children:"1"}),(0,$d.jsx)("div",{className:"text",children:"Join a race room with other players"})]}),(0,$d.jsxs)(fg,{children:[(0,$d.jsx)("div",{className:"number",children:"2"}),(0,$d.jsx)("div",{className:"text",children:"Race starts when room is full or timer expires"})]}),(0,$d.jsxs)(fg,{children:[(0,$d.jsx)("div",{className:"number",children:"3"}),(0,$d.jsx)("div",{className:"text",children:"Solve the puzzle as fast as possible"})]}),(0,$d.jsxs)(fg,{children:[(0,$d.jsx)("div",{className:"number",children:"4"}),(0,$d.jsx)("div",{className:"text",children:"Earn XP based on your rank and time"})]})]})]}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"40px"},children:(0,$d.jsx)(Zp,{onClick:()=>e("/unlocked"),children:"\u2190 Back to Hub"})})]})},yg=Cd.div`
  min-height: 100vh;
  padding: 100px 24px 40px;
  max-width: 1000px;
  margin: 0 auto;
`,vg=Cd.div`
  text-align: center;
  margin-bottom: 40px;
`,xg=Cd.h1`
  font-family: ${e=>e.theme.fontDisplay};
  font-size: clamp(32px, 6vw, 48px);
  margin-bottom: 12px;
`,bg=Cd.p`
  font-size: 16px;
  color: ${e=>e.theme.textMuted};
`,wg=Cd.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-bottom: 40px;
`,kg=Cd.button`
  padding: 12px 24px;
  background: ${e=>e.active?e.theme.primary:"transparent"};
  border: 1px solid ${e=>e.theme.primary};
  color: ${e=>e.active?e.theme.background:e.theme.primary};
  font-family: ${e=>e.theme.font};
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>(e.active,e.theme.primary)}20;
  }
`,Sg=Cd(ks.div)`
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.border};
  padding: 40px;
  margin-bottom: 24px;
`,Eg=Cd.div`
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.primary}40;
  padding: 30px;
  text-align: center;
  font-family: ${e=>e.theme.font};
  font-size: ${e=>e.size||"20px"};
  color: ${e=>e.theme.primary};
  margin-bottom: 24px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,Cg=Cd.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`,Pg=Cd.input`
  flex: 1;
  padding: 16px;
  background: ${e=>e.theme.background};
  border: 1px solid ${e=>e.theme.border};
  color: ${e=>e.theme.text};
  font-family: ${e=>e.theme.font};
  font-size: 16px;
  text-transform: uppercase;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,jg=Cd(ks.div)`
  background: ${e=>e.theme.warning}10;
  border-left: 3px solid ${e=>e.theme.warning};
  padding: 16px;
  margin-bottom: 20px;
  font-size: 13px;
`,Tg=Cd.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid ${e=>e.theme.border};
  font-size: 14px;
  
  &:last-child {
    border-bottom: none;
  }
  
  .label {
    color: ${e=>e.theme.textMuted};
  }
  
  .value {
    color: ${e=>e.theme.primary};
    font-weight: 600;
  }
`,$g=()=>{const{addXP:e}=Gd(),[t,n]=(0,i.useState)([]),[r,a]=(0,i.useState)("hex"),[o,s]=(0,i.useState)(null),[l,c]=(0,i.useState)(""),[u,d]=(0,i.useState)(!1),[p,h]=(0,i.useState)({attempted:0,correct:0,streak:0}),[f,m]=(0,i.useState)(!1);(0,i.useEffect)(()=>{g(),y("hex")},[]);const g=async()=>{try{const e=await fetch("/api/v2/puzzle-types");if(e.ok){const t=await e.json();n(t.types)}}catch(e){n([{type:"hex",difficulty:2,hint:"Hex to ASCII conversion"},{type:"math",difficulty:2,hint:"Basic arithmetic"},{type:"sequence",difficulty:2,hint:"Pattern recognition"},{type:"binary",difficulty:3,hint:"Binary decoding"}])}},y=async e=>{m(!0),c(""),d(!1);try{const e=await fetch("/api/v2/practice",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({difficulty:2})});if(e.ok){const t=await e.json();s(t.puzzle)}}catch(t){const n=v(e);s(n)}finally{m(!1)}},v=e=>{const t={hex:()=>{const e="PRACTICE";return{type:"hex",data:e.split("").map(e=>e.charCodeAt(0).toString(16).toUpperCase()).join(" "),hint:"Convert hex to ASCII characters",answer:e}},math:()=>{const e=Math.floor(20*Math.random())+10,t=Math.floor(10*Math.random())+5;return{type:"math",data:`${e} + ${t} = ?`,hint:"Simple addition",answer:(e+t).toString()}},sequence:()=>{const e=[{seq:"2, 4, 8, 16, ?",answer:"32"},{seq:"1, 4, 9, 16, ?",answer:"25"}],t=e[Math.floor(Math.random()*e.length)];return{type:"sequence",data:t.seq,hint:"Look for the pattern",answer:t.answer}},binary:()=>{const e=Math.floor(255*Math.random());return{type:"binary",data:`Binary: ${e.toString(2).padStart(8,"0")}`,hint:"Convert binary to decimal",answer:e.toString()}}};return(t[e]||t.hex)()};return(0,$d.jsxs)(yg,{children:[(0,$d.jsxs)(vg,{children:[(0,$d.jsxs)(xg,{children:[(0,$d.jsx)(Oh,{children:"Practice"})," Mode"]}),(0,$d.jsx)(bg,{children:"Unlimited puzzles to sharpen your skills. No pressure, just practice."})]}),(0,$d.jsxs)("div",{style:{background:"#0a0a0a",border:"1px solid #1a1a1a",padding:"20px",marginBottom:"30px"},children:[(0,$d.jsxs)(Tg,{children:[(0,$d.jsx)("span",{className:"label",children:"Puzzles Attempted"}),(0,$d.jsx)("span",{className:"value",children:p.attempted})]}),(0,$d.jsxs)(Tg,{children:[(0,$d.jsx)("span",{className:"label",children:"Correct Answers"}),(0,$d.jsx)("span",{className:"value",children:p.correct})]}),(0,$d.jsxs)(Tg,{children:[(0,$d.jsx)("span",{className:"label",children:"Accuracy"}),(0,$d.jsxs)("span",{className:"value",children:[p.attempted>0?Math.round(p.correct/p.attempted*100):0,"%"]})]}),(0,$d.jsxs)(Tg,{children:[(0,$d.jsx)("span",{className:"label",children:"Current Streak"}),(0,$d.jsxs)("span",{className:"value",style:{color:p.streak>2?"#00ff41":void 0},children:[p.streak," \ud83d\udd25"]})]})]}),(0,$d.jsx)(wg,{children:["hex","math","sequence","binary","pattern","reverse"].map(e=>(0,$d.jsx)(kg,{active:r===e,onClick:()=>(e=>{a(e),y(e)})(e),children:e.toUpperCase()},e))}),o&&(0,$d.jsxs)(Sg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},children:[(0,$d.jsxs)(Eg,{size:"hex"===o.type?"18px":"24px",children:[(0,$d.jsx)("div",{children:o.data}),o.preview&&(0,$d.jsx)("div",{style:{width:"40px",height:"40px",background:o.preview,marginTop:"10px",border:"1px solid #333"}})]}),(0,$d.jsx)("form",{onSubmit:async t=>{if(t.preventDefault(),l&&o)try{const t=await fetch("/api/v2/practice/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:l})});if(t.ok){const n=await t.json();n.correct?(Tl.success("\u2713 Correct! (+10 XP)"),e(10),h(e=>({attempted:e.attempted+1,correct:e.correct+1,streak:e.streak+1})),y(r)):(Tl.error(`\u2717 Incorrect. Answer was: ${n.answer}`),h(e=>({attempted:e.attempted+1,correct:e.correct,streak:0})))}else{l.toUpperCase().trim()===o.answer.toUpperCase().trim()?(Tl.success("\u2713 Correct! (+10 XP)"),e(10),h(e=>({attempted:e.attempted+1,correct:e.correct+1,streak:e.streak+1})),y(r)):(Tl.error(`\u2717 Incorrect. Answer was: ${o.answer}`),h(e=>({attempted:e.attempted+1,correct:e.correct,streak:0})))}}catch(n){l.toUpperCase().trim()===o.answer.toUpperCase().trim()?(Tl.success("\u2713 Correct! (+10 XP)"),e(10),y(r)):Tl.error(`\u2717 Incorrect. Answer was: ${o.answer}`),c("")}},children:(0,$d.jsxs)(Cg,{children:[(0,$d.jsx)(Pg,{type:"text",value:l,onChange:e=>c(e.target.value),placeholder:"Enter your answer...",disabled:f}),(0,$d.jsx)(Zp,{type:"submit",disabled:!l||f,children:"Submit"}),(0,$d.jsx)(Zp,{type:"button",variant:"secondary",onClick:()=>{y(r),h(e=>({...e,streak:0}))},children:"Skip"})]})}),(0,$d.jsx)($s,{children:u&&(0,$d.jsxs)(jg,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:["\ud83d\udca1 ",o.hint]})}),(0,$d.jsx)("div",{style:{textAlign:"center",marginTop:"16px"},children:(0,$d.jsx)("button",{onClick:()=>d(!u),style:{background:"transparent",border:"none",color:"#666",fontSize:"12px",cursor:"pointer",textDecoration:"underline"},children:u?"Hide Hint":"Show Hint"})})]},o.data)]})},Mg={cyber:{primary:"#00ff41",secondary:"#008f11",accent:"#ff00ff",warning:"#ffaa00",danger:"#ff0040",gold:"#ffd700",background:"#050505",surface:"#0a0a0a",surfaceHover:"#111111",border:"#1a1a1a",text:"#e0e0e0",textMuted:"#666666",font:"'JetBrains Mono', monospace",fontDisplay:"'Orbitron', sans-serif"},matrix:{primary:"#00ff00",secondary:"#003300",accent:"#00ff41",warning:"#ffff00",danger:"#ff0000",gold:"#00ff00",background:"#000000",surface:"#001100",surfaceHover:"#002200",border:"#003300",text:"#00ff00",textMuted:"#008800",font:"'Share Tech Mono', monospace",fontDisplay:"'Share Tech Mono', monospace"},amber:{primary:"#ffb000",secondary:"#804600",accent:"#ffcc00",warning:"#ff8800",danger:"#ff4400",gold:"#ffb000",background:"#1a0f00",surface:"#2a1a00",surfaceHover:"#3a2a00",border:"#4a3a00",text:"#ffb000",textMuted:"#996600",font:"'JetBrains Mono', monospace",fontDisplay:"'Orbitron', sans-serif"},minimal:{primary:"#ffffff",secondary:"#666666",accent:"#cccccc",warning:"#ffaa00",danger:"#ff4444",gold:"#ffcc00",background:"#0a0a0a",surface:"#141414",surfaceHover:"#1e1e1e",border:"#2a2a2a",text:"#ffffff",textMuted:"#888888",font:"'JetBrains Mono', monospace",fontDisplay:"'JetBrains Mono', monospace"}},Ag=Cd.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: ${e=>e.theme.background};
    color: ${e=>e.theme.text};
    font-family: ${e=>e.theme.font};
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${e=>e.theme.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${e=>e.theme.primary};
    border-radius: 3px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${e=>e.theme.accent};
  }

  ::selection {
    background: ${e=>e.theme.primary};
    color: ${e=>e.theme.background};
  }

  .glitch-text {
    position: relative;
    
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -2px 0 ${e=>e.theme.danger};
      clip: rect(24px, 550px, 90px, 0);
      animation: glitch-anim-1 2s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: -2px 0 ${e=>e.theme.accent};
      clip: rect(85px, 550px, 140px, 0);
      animation: glitch-anim-2 2s infinite linear alternate-reverse;
    }
  }

  @keyframes glitch-anim-1 {
    0% { clip: rect(20px, 9999px, 50px, 0); }
    20% { clip: rect(80px, 9999px, 120px, 0); }
    40% { clip: rect(10px, 9999px, 60px, 0); }
    60% { clip: rect(70px, 9999px, 100px, 0); }
    80% { clip: rect(30px, 9999px, 80px, 0); }
    100% { clip: rect(90px, 9999px, 130px, 0); }
  }

  @keyframes glitch-anim-2 {
    0% { clip: rect(60px, 9999px, 90px, 0); }
    20% { clip: rect(10px, 9999px, 40px, 0); }
    40% { clip: rect(50px, 9999px, 80px, 0); }
    60% { clip: rect(20px, 9999px, 70px, 0); }
    80% { clip: rect(100px, 9999px, 130px, 0); }
    100% { clip: rect(40px, 9999px, 60px, 0); }
  }

  .scanline {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.3;
  }

  .crt-flicker {
    animation: flicker 0.15s infinite;
  }

  @keyframes flicker {
    0% { opacity: 0.97; }
    50% { opacity: 1; }
    100% { opacity: 0.98; }
  }
`,zg=Cd.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`,Rg=Cd.main`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 10;
  overflow-y: auto;
  overflow-x: hidden;
`,Ng=Cd(ks.div)`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: ${e=>e.theme.surface};
  border: 1px solid ${e=>e.theme.primary};
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 12px;
  color: ${e=>e.theme.text};
  max-width: 280px;
  z-index: 1000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 20px ${e=>e.theme.primary}40;
  
  .key {
    background: ${e=>e.theme.primary};
    color: ${e=>e.theme.background};
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 10px;
  }
  
  code {
    color: ${e=>e.theme.primary};
    background: ${e=>e.theme.background};
    padding: 2px 6px;
    border-radius: 3px;
    font-family: ${e=>e.theme.font};
  }
  
  &:hover {
    border-color: ${e=>e.theme.accent};
    box-shadow: 0 0 30px ${e=>e.theme.accent}50;
  }
`;const Lg=function(){const{theme:e,isAuthenticated:t,matrixEnabled:n,particlesEnabled:r,user:a,addNotification:o,toggleTerminal:s,showCutscene:l,currentCutscene:c,hideCutscene:u,raceMode:d,raceType:p,endRace:h}=Gd(),[f,m]=(0,i.useState)(!1),g=Mg[e]||Mg.cyber;return(()=>{const e=(0,i.useRef)(null),{setOnlineUsers:t,addNotification:n}=Gd();(0,i.useEffect)(()=>{const r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_WS_URL||window.location.origin.replace(/^http/,"ws");try{const i=new WebSocket(r);e.current=i,i.onopen=()=>{console.log("\ud83d\udd0c WebSocket connected"),i.send(JSON.stringify({type:"subscribe",channel:"global"}))},i.onmessage=e=>{try{const r=JSON.parse(e.data);switch(r.type){case"online_users":t(r.count);break;case"user_solved":n({id:Date.now(),type:"achievement",message:`${r.username} solved Phase ${r.phase}!`,timestamp:Date.now()});break;case"new_record":n({id:Date.now(),type:"record",message:`New record: ${r.username} - ${r.time}s`,timestamp:Date.now()});break;case"system_message":n({id:Date.now(),type:"system",message:r.message,timestamp:Date.now()})}}catch(r){console.error("WebSocket message error:",r)}},i.onerror=e=>{console.log("WebSocket error (expected if no WS server):",e)},i.onclose=()=>{console.log("WebSocket disconnected"),setTimeout(()=>{var t;null===(t=e.current)||void 0===t||t.readyState,WebSocket.CLOSED},5e3)};const a=setInterval(()=>{i.readyState===WebSocket.OPEN&&i.send(JSON.stringify({type:"ping"}))},3e4);return()=>{clearInterval(a),i.close()}}catch(i){console.log("WebSocket not available - running in fallback mode")}},[t,n]),e.current})(),(()=>{const{soundEnabled:e}=Gd(),t=(0,i.useRef)({}),n=(0,i.useRef)(null);(0,i.useEffect)(()=>{const n=()=>{const n=new(window.AudioContext||window.webkitAudioContext),r=function(t,r){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"sine";if(!e)return;const a=n.createOscillator(),o=n.createGain();a.connect(o),o.connect(n.destination),a.frequency.value=t,a.type=i,o.gain.setValueAtTime(.1,n.currentTime),o.gain.exponentialRampToValueAtTime(.01,n.currentTime+r),a.start(n.currentTime),a.stop(n.currentTime+r)};t.current={click:()=>r(800,.1),success:()=>{r(523.25,.1),setTimeout(()=>r(659.25,.1),100),setTimeout(()=>r(783.99,.2),200)},error:()=>{r(200,.3,"sawtooth")},unlock:()=>{r(440,.1),setTimeout(()=>r(554.37,.1),100),setTimeout(()=>r(659.25,.1),200),setTimeout(()=>r(880,.4),300)},keypress:()=>r(600+200*Math.random(),.05)}};return document.addEventListener("click",n,{once:!0}),()=>{document.removeEventListener("click",n)}},[e]),(0,i.useCallback)(n=>{e&&t.current[n]&&t.current[n]()},[e]),(0,i.useCallback)(()=>{if(!e)return;const t=new(window.AudioContext||window.webkitAudioContext),r=t.createOscillator(),i=t.createGain();return r.connect(i),i.connect(t.destination),r.frequency.value=50,r.type="sine",i.gain.setValueAtTime(.02,t.currentTime),r.start(),n.current={oscillator:r,gainNode:i,context:t},()=>{r.stop(),t.close()}},[e]),(0,i.useCallback)(()=>{n.current&&(n.current.oscillator.stop(),n.current.context.close(),n.current=null)},[])})(),(0,i.useEffect)(()=>{const e=setInterval(()=>{Gd.getState().tickTimer()},1e3);return()=>clearInterval(e)},[]),(0,i.useEffect)(()=>{localStorage.getItem("locked-visited")||(o({id:Date.now(),type:"system",message:"\ud83d\udd12 WELCOME TO LOCKED ULTIMATE",timestamp:Date.now()}),localStorage.setItem("locked-visited","true"),setTimeout(()=>{m(!0),setTimeout(()=>m(!1),8e3)},5e3))},[o]),(0,$d.jsxs)(fd,{theme:g,children:[(0,$d.jsx)(Ag,{}),(0,$d.jsxs)(zg,{children:[n&&(0,$d.jsx)(Ad,{}),r&&(0,$d.jsx)(Ld,{}),(0,$d.jsx)("div",{className:"scanline"}),(0,$d.jsxs)(Ce,{children:[(0,$d.jsx)(bp,{}),(0,$d.jsx)(Rg,{children:(0,$d.jsx)($s,{mode:"wait",children:(0,$d.jsxs)(ke,{children:[(0,$d.jsx)(be,{path:"/",element:t?(0,$d.jsx)(xe,{to:"/unlocked"}):(0,$d.jsx)(qh,{})}),(0,$d.jsx)(be,{path:"/phase2",element:t?(0,$d.jsx)(df,{}):(0,$d.jsx)(xe,{to:"/"})}),(0,$d.jsx)(be,{path:"/phase3",element:t?(0,$d.jsx)(Df,{}):(0,$d.jsx)(xe,{to:"/"})}),(0,$d.jsx)(be,{path:"/unlocked",element:t?(0,$d.jsx)(lm,{}):(0,$d.jsx)(xe,{to:"/"})}),(0,$d.jsx)(be,{path:"/leaderboard",element:(0,$d.jsx)(jm,{})}),(0,$d.jsx)(be,{path:"/profile",element:t?(0,$d.jsx)(Um,{}):(0,$d.jsx)(xe,{to:"/"})}),(0,$d.jsx)(be,{path:"/guilds",element:(0,$d.jsx)(tg,{})}),(0,$d.jsx)(be,{path:"/race",element:t?(0,$d.jsx)(gg,{}):(0,$d.jsx)(xe,{to:"/"})}),(0,$d.jsx)(be,{path:"/practice",element:t?(0,$d.jsx)($g,{}):(0,$d.jsx)(xe,{to:"/"})}),(0,$d.jsx)(be,{path:"*",element:(0,$d.jsx)(xe,{to:"/"})})]})})}),(0,$d.jsx)(cp,{}),(0,$d.jsx)(Tp,{}),f&&(0,$d.jsxs)(Ng,{onClick:()=>{s(),m(!1)},children:[(0,$d.jsx)("span",{className:"key",children:"\u25bc"}),(0,$d.jsxs)("span",{children:["Press the terminal button or type ",(0,$d.jsx)("code",{children:"term"})," to open the command interface!"]})]}),l&&c&&(0,$d.jsx)(Hp,{type:c,onComplete:u}),d&&(0,$d.jsx)(gh,{puzzleType:p,onClose:h,onComplete:e=>{h()}})]}),(0,$d.jsx)(jl,{position:"top-right",toastOptions:{style:{background:g.surface,color:g.text,border:`1px solid ${g.primary}`,fontFamily:g.font}}})]})]})};o.createRoot(document.getElementById("root")).render((0,$d.jsx)(i.StrictMode,{children:(0,$d.jsx)(Lg,{})}))})();
//# sourceMappingURL=main.de2ce3e9.js.map