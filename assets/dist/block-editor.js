!function(){"use strict";var t={n:function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},d:function(e,r){for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},e=window.wp.plugins,r=window.wp.data;function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,o,s=[],u=!0,h=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(s.push(n.value),s.length!==e);u=!0);}catch(t){h=!0,a=t}finally{try{if(!u&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(h)throw a}}return s}}(t,e)||function(t,e){if(t){if("string"==typeof t)return n(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,r.select)("core/edit-post")&&(0,r.select)("core/edit-post").__experimentalGetPreviewDeviceType&&(0,e.registerPlugin)("generatepress-responsive-classes",{render:function(){var t=(0,r.useSelect)((function(){var t=(0,r.select)("core/edit-post").__experimentalGetPreviewDeviceType;return t?{deviceType:t()}:{deviceType:null}}),[]).deviceType;return document.querySelector("body").classList.remove("gp-is-device-desktop","gp-is-device-tablet","gp-is-device-mobile"),document.querySelector("body").classList.add("gp-is-device-"+t.toLowerCase()),null}});var i=window.wp.element,o=window.wp.domReady,s=t.n(o);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}(0,e.registerPlugin)("generatepress-content-width",{render:function(){var t,e=a((0,i.useState)(generatepressBlockEditor.sidebarLayout),2),r=e[0],n=e[1],o=a((0,i.useState)(generatepressBlockEditor.contentAreaType),2),u=o[0],h=o[1],f=null===(t=document.querySelector(".editor-styles-wrapper"))||void 0===t?void 0:t.style;return(0,i.useEffect)((function(){var t,e=document.querySelector(".editor-styles-wrapper");null==e||null===(t=e.style)||void 0===t||t.setProperty("--content-width",function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r="",n="px",a=generatepressBlockEditor.customContentWidth?parseInt(generatepressBlockEditor.customContentWidth):generatepressBlockEditor.containerWidth,i=generatepressBlockEditor.leftSidebarWidth,o=generatepressBlockEditor.rightSidebarWidth;if(r="left-sidebar"===t?a*((100-i)/100):"right-sidebar"===t?a*((100-o)/100):"no-sidebar"===t?a:a*((100-(Number(i)+Number(o)))/100),""===e){var s=parseInt(generatepressBlockEditor.contentPaddingRight)+parseInt(generatepressBlockEditor.contentPaddingLeft);r=Number(r)-s}return"true"!==e||generatepressBlockEditor.customContentWidth||(r=100,n="%"),r+n}(r,u))}),[r,u,JSON.stringify(f)]),s()((function(){var t=document.getElementById("generate-sidebar-layout"),e=document.getElementById("_generate-full-width-content");t&&(t.onchange=function(t){n(t.target.value||generatepressBlockEditor.globalSidebarLayout)}),e&&(e.onchange=function(t){h(t.target.value||generatepressBlockEditor.contentAreaType)})})),null}});var h=/^\s+/,f=/\s+$/;function l(t,e){if(e=e||{},(t=t||"")instanceof l)return t;if(!(this instanceof l))return new l(t,e);var r=function(t){var e,r,n,a={r:0,g:0,b:0},i=1,o=null,s=null,l=null,c=!1,d=!1;return"string"==typeof t&&(t=function(t){t=t.replace(h,"").replace(f,"").toLowerCase();var e,r=!1;if(H[t])t=H[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=z.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=z.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=z.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=z.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=z.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=z.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=z.hex8.exec(t))?{r:P(e[1]),g:P(e[2]),b:P(e[3]),a:T(e[4]),format:r?"name":"hex8"}:(e=z.hex6.exec(t))?{r:P(e[1]),g:P(e[2]),b:P(e[3]),format:r?"name":"hex"}:(e=z.hex4.exec(t))?{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),a:T(e[4]+""+e[4]),format:r?"name":"hex8"}:!!(e=z.hex3.exec(t))&&{r:P(e[1]+""+e[1]),g:P(e[2]+""+e[2]),b:P(e[3]+""+e[3]),format:r?"name":"hex"}}(t)),"object"==u(t)&&(W(t.r)&&W(t.g)&&W(t.b)?(e=t.r,r=t.g,n=t.b,a={r:255*C(e,255),g:255*C(r,255),b:255*C(n,255)},c=!0,d="%"===String(t.r).substr(-1)?"prgb":"rgb"):W(t.h)&&W(t.s)&&W(t.v)?(o=L(t.s),s=L(t.v),a=function(t,e,r){t=6*C(t,360),e=C(e,100),r=C(r,100);var n=Math.floor(t),a=t-n,i=r*(1-e),o=r*(1-a*e),s=r*(1-(1-a)*e),u=n%6;return{r:255*[r,o,i,i,s,r][u],g:255*[s,r,r,o,i,i][u],b:255*[i,i,s,r,r,o][u]}}(t.h,o,s),c=!0,d="hsv"):W(t.h)&&W(t.s)&&W(t.l)&&(o=L(t.s),l=L(t.l),a=function(t,e,r){var n,a,i;function o(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=C(t,360),e=C(e,100),r=C(r,100),0===e)n=a=i=r;else{var s=r<.5?r*(1+e):r+e-r*e,u=2*r-s;n=o(u,s,t+1/3),a=o(u,s,t),i=o(u,s,t-1/3)}return{r:255*n,g:255*a,b:255*i}}(t.h,o,l),c=!0,d="hsl"),t.hasOwnProperty("a")&&(i=t.a)),i=F(i),{ok:c,format:t.format||d,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:i}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function c(t,e,r){t=C(t,255),e=C(e,255),r=C(r,255);var n,a,i=Math.max(t,e,r),o=Math.min(t,e,r),s=(i+o)/2;if(i==o)n=a=0;else{var u=i-o;switch(a=s>.5?u/(2-i-o):u/(i+o),i){case t:n=(e-r)/u+(e<r?6:0);break;case e:n=(r-t)/u+2;break;case r:n=(t-e)/u+4}n/=6}return{h:n,s:a,l:s}}function d(t,e,r){t=C(t,255),e=C(e,255),r=C(r,255);var n,a,i=Math.max(t,e,r),o=Math.min(t,e,r),s=i,u=i-o;if(a=0===i?0:u/i,i==o)n=0;else{switch(i){case t:n=(e-r)/u+(e<r?6:0);break;case e:n=(r-t)/u+2;break;case r:n=(t-e)/u+4}n/=6}return{h:n,s:a,v:s}}function g(t,e,r,n){var a=[I(Math.round(t).toString(16)),I(Math.round(e).toString(16)),I(Math.round(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function b(t,e,r,n){return[I(q(n)),I(Math.round(t).toString(16)),I(Math.round(e).toString(16)),I(Math.round(r).toString(16))].join("")}function p(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s-=e/100,r.s=B(r.s),l(r)}function m(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.s+=e/100,r.s=B(r.s),l(r)}function v(t){return l(t).desaturate(100)}function y(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l+=e/100,r.l=B(r.l),l(r)}function _(t,e){e=0===e?0:e||10;var r=l(t).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-e/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-e/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-e/100*255))),l(r)}function M(t,e){e=0===e?0:e||10;var r=l(t).toHsl();return r.l-=e/100,r.l=B(r.l),l(r)}function A(t,e){var r=l(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,l(r)}function x(t){var e=l(t).toHsl();return e.h=(e.h+180)%360,l(e)}function w(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var r=l(t).toHsl(),n=[l(t)],a=360/e,i=1;i<e;i++)n.push(l({h:(r.h+i*a)%360,s:r.s,l:r.l}));return n}function k(t){var e=l(t).toHsl(),r=e.h;return[l(t),l({h:(r+72)%360,s:e.s,l:e.l}),l({h:(r+216)%360,s:e.s,l:e.l})]}function S(t,e,r){e=e||6,r=r||30;var n=l(t).toHsl(),a=360/r,i=[l(t)];for(n.h=(n.h-(a*e>>1)+720)%360;--e;)n.h=(n.h+a)%360,i.push(l(n));return i}function R(t,e){e=e||6;for(var r=l(t).toHsv(),n=r.h,a=r.s,i=r.v,o=[],s=1/e;e--;)o.push(l({h:n,s:a,v:i})),i=(i+s)%1;return o}l.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,n=this.toRgb();return t=n.r/255,e=n.g/255,r=n.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=F(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=d(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),n=Math.round(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=c(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=c(this._r,this._g,this._b),e=Math.round(360*t.h),r=Math.round(100*t.s),n=Math.round(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return g(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,a){var i=[I(Math.round(t).toString(16)),I(Math.round(e).toString(16)),I(Math.round(r).toString(16)),I(q(n))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*C(this._r,255))+"%",g:Math.round(100*C(this._g,255))+"%",b:Math.round(100*C(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*C(this._r,255))+"%, "+Math.round(100*C(this._g,255))+"%, "+Math.round(100*C(this._b,255))+"%)":"rgba("+Math.round(100*C(this._r,255))+"%, "+Math.round(100*C(this._g,255))+"%, "+Math.round(100*C(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(E[g(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+b(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var a=l(t);r="#"+b(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return l(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(y,arguments)},brighten:function(){return this._applyModification(_,arguments)},darken:function(){return this._applyModification(M,arguments)},desaturate:function(){return this._applyModification(p,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(v,arguments)},spin:function(){return this._applyModification(A,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(S,arguments)},complement:function(){return this._applyCombination(x,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(w,[3])},tetrad:function(){return this._applyCombination(w,[4])}},l.fromRatio=function(t,e){if("object"==u(t)){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:L(t[n]));t=r}return l(t,e)},l.equals=function(t,e){return!(!t||!e)&&l(t).toRgbString()==l(e).toRgbString()},l.random=function(){return l.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},l.mix=function(t,e,r){r=0===r?0:r||50;var n=l(t).toRgb(),a=l(e).toRgb(),i=r/100;return l({r:(a.r-n.r)*i+n.r,g:(a.g-n.g)*i+n.g,b:(a.b-n.b)*i+n.b,a:(a.a-n.a)*i+n.a})},l.readability=function(t,e){var r=l(t),n=l(e);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)},l.isReadable=function(t,e,r){var n,a,i,o,s,u=l.readability(t,e);switch(a=!1,(i=r,"AA"!==(o=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==o&&(o="AA"),"small"!==(s=(i.size||"small").toLowerCase())&&"large"!==s&&(s="small"),n={level:o,size:s}).level+n.size){case"AAsmall":case"AAAlarge":a=u>=4.5;break;case"AAlarge":a=u>=3;break;case"AAAsmall":a=u>=7}return a},l.mostReadable=function(t,e,r){var n,a,i,o,s=null,u=0;a=(r=r||{}).includeFallbackColors,i=r.level,o=r.size;for(var h=0;h<e.length;h++)(n=l.readability(t,e[h]))>u&&(u=n,s=l(e[h]));return l.isReadable(t,s,{level:i,size:o})||!a?s:(r.includeFallbackColors=!1,l.mostReadable(t,["#fff","#000"],r))};var H=l.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},E=l.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(H);function F(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function C(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function B(t){return Math.min(1,Math.max(0,t))}function P(t){return parseInt(t,16)}function I(t){return 1==t.length?"0"+t:""+t}function L(t){return t<=1&&(t=100*t+"%"),t}function q(t){return Math.round(255*parseFloat(t)).toString(16)}function T(t){return P(t)/255}var N,O,j,z=(O="[\\s|\\(]+("+(N="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",j="[\\s|\\(]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")[,|\\s]+("+N+")\\s*\\)?",{CSS_UNIT:new RegExp(N),rgb:new RegExp("rgb"+O),rgba:new RegExp("rgba"+j),hsl:new RegExp("hsl"+O),hsla:new RegExp("hsla"+j),hsv:new RegExp("hsv"+O),hsva:new RegExp("hsva"+j),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function W(t){return!!z.CSS_UNIT.exec(t)}(0,e.registerPlugin)("generatepress-is-dark-theme",{render:function(){return(0,i.useEffect)((function(){if(generatepressBlockEditor.show_editor_styles){var t=generatepressBlockEditor.text_color;if(String(t).startsWith("var(")){var e=t.match(/\(([^)]+)\)/);if(e){var r=document.querySelector(".editor-styles-wrapper");if(r){var n,a=null===(n=getComputedStyle(r))||void 0===n?void 0:n.getPropertyValue(e[1]);a&&(t=a)}}}t=l(t).toHex8(),l(t).isDark()?document.body.classList.remove("is-dark-theme"):document.body.classList.add("is-dark-theme")}}),[]),null}})}();