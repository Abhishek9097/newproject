// source --> http://demo2.themelexus.com/worldlife/wp-content/plugins/give/assets/dist/js/give.js?ver=2.5.2 
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=144)}({11:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},110:function(e,t,n){var r;
/*!
 * Float Labels
 * @version: 3.3.8
 * @author: Paul Ryley (http://geminilabs.io)
 * @url: https://pryley.github.io/float-labels.js
 * @license: MIT
 */!function(n,i,o){"use strict";var a=function(e,t){this.el_=this.isString_(e)?i.querySelectorAll(e):[e],this.config_=[],this.options_=t,this.selectors_=[],this.init_(),this.destroy=function(){this.loop_(function(e){e.removeEventListener("reset",this.events.reset),this.removeClasses_(e)},function(e){this.reset_(e)})},this.rebuild=function(){this.loop_(null,function(e){this.floatLabel_(e,!0)})}};a.prototype={defaults_:{customEvent:null,customLabel:null,customPlaceholder:null,exclude:".no-label",inputRegex:/email|number|password|search|tel|text|url/,prefix:"fl-",prioritize:"label",requiredClass:"required",style:0,transform:"input,select,textarea"},init_:function(){var e=this;e.initEvents_(),e.loop_(function(t,n){var r=e.config_[n].style;t.addEventListener("reset",e.events.reset),t.classList.add(e.prefixed_("form")),r&&t.classList.add(e.prefixed_("style-"+r))},function(t){e.floatLabel_(t)})},initEvents_:function(){this.events={blur:this.onBlur_.bind(this),change:this.onInput_.bind(this),focus:this.onFocus_.bind(this),input:this.onInput_.bind(this),reset:this.onReset_.bind(this)}},addRemove_:function(e){return e?"add":"remove"},build_:function(e){var t=this.getLabel_(e);t&&(e.classList.add(this.prefixed_(e.tagName.toLowerCase())),this.setLabel_(t,e),this.setPlaceholder_(t,e),this.wrapLabel_(t,e),this.handleEvents_(e,"add"),"function"==typeof this.config_[this.current_].customEvent&&this.config_[this.current_].customEvent.call(this,e))},createEl_:function(e,t){var n="string"==typeof e?i.createElement(e):e;for(var r in t=t||{})t.hasOwnProperty(r)&&n.setAttribute(r,t[r]);return n},extend_:function(){var e=[].slice.call(arguments),t=e[0],n=e.slice(1);return Object.keys(n).forEach(function(e){for(var r in n[e])n[e].hasOwnProperty(r)&&(t[r]=n[e][r])}),t},floatLabel_:function(e,t){if(this.isValidField_(e)){if(this.hasParent_(e)){if(!0!==t)return;this.reset_(e)}this.build_(e)}},getLabel_:function(e){var t='label[for="'+e.getAttribute("id")+'"]',n=this.el_[this.current_].querySelectorAll(t);return n.length>1&&(n=e.parentNode.querySelectorAll(t)),1===n.length&&n[0]},getLabelText_:function(e,t){var n=e.textContent.replace("*","").trim(),r=t.getAttribute("placeholder");return(!n||n&&r&&"placeholder"===this.config_[this.current_].prioritize)&&(n=r),n},handleEvents_:function(e,t){var n=this.events;["blur","input","focus"].forEach(function(r){"input"!==r||"file"!==e.type&&"SELECT"!==e.nodeName||(r="change"),e[t+"EventListener"](r,n[r])})},hasParent_:function(e){return e.parentNode.classList.contains(this.prefixed_("wrap"))},isString_:function(e){return"[object String]"===Object.prototype.toString.call(e)},isValidField_:function(e){var t="INPUT"===e.tagName&&!this.config_[this.current_].inputRegex.test(e.getAttribute("type")),n="SELECT"===e.tagName&&null!==e.getAttribute("multiple");return e.getAttribute("id")&&!t&&!n},loop_:function(e,t){for(var n=0;n<this.el_.length;++n){if(void 0===this.selectors_[n]){var r=this.extend_({},this.defaults_,this.options_,this.el_[n].getAttribute("data-options")),i=":not("+r.exclude.split(/[\s,]+/).join("):not(")+")";this.selectors_[n]=r.transform.replace(/,/g,i+",")+i,this.config_[n]=r}var o=this.el_[n].querySelectorAll(this.selectors_[n]);this.current_=n,"function"==typeof e&&e.call(this,this.el_[n],n);for(var a=0;a<o.length;++a)"function"==typeof t&&t.call(this,o[a],n)}},onBlur_:function(e){e.target.parentNode.classList.remove(this.prefixed_("has-focus"))},onInput_:function(e){e.target.parentNode.classList[this.addRemove_(e.target.value.length)](this.prefixed_("is-active"))},onFocus_:function(e){e.target.parentNode.classList.add(this.prefixed_("has-focus"))},onReset_:function(){setTimeout(this.resetFields_.bind(this))},prefixed_:function(e){return this.config_[this.current_].prefix+e},removeClasses_:function(e){var t=this.config_[this.current_].prefix,n=e.className.split(" ").filter(function(e){return 0!==e.lastIndexOf(t,0)});e.className=n.join(" ").trim()},reset_:function(e){var t=e.parentNode;if(this.hasParent_(e)){for(var n=i.createDocumentFragment();t.firstElementChild;){var r=t.firstElementChild;this.removeClasses_(r),n.appendChild(r)}t.parentNode.replaceChild(n,t),this.resetPlaceholder_(e),this.handleEvents_(e,"remove")}},resetFields_:function(){for(var e=this.el_[this.current_].querySelectorAll(this.selectors_[this.current_]),t=0;t<e.length;++t)e[t].parentNode.classList[this.addRemove_("SELECT"===e[t].tagName&&""!==e[t].value)](this.prefixed_("is-active"))},resetPlaceholder_:function(e){var t=e.getAttribute("data-placeholder");null!==t&&(e.removeAttribute("data-placeholder"),e.setAttribute("placeholder",t))},setLabel_:function(e,t){e.classList.add(this.prefixed_("label")),e.textContent=this.getLabelText_(e,t),"function"==typeof this.config_[this.current_].customLabel&&(e.textContent=this.config_[this.current_].customLabel.call(this,e,t))},setPlaceholder_:function(e,t){var n=t.getAttribute("placeholder");"label"!==this.config_[this.current_].prioritize&&n||(n&&t.setAttribute("data-placeholder",n),n=this.getLabelText_(e,t)),"function"==typeof this.config_[this.current_].customPlaceholder&&(n=this.config_[this.current_].customPlaceholder.call(this,n,t,e)),"SELECT"===t.tagName?this.setSelectPlaceholder_(t,n):t.setAttribute("placeholder",n)},setSelectPlaceholder_:function(e,t){var n=e.firstElementChild;n.hasAttribute("value")&&n.value?(e.insertBefore(new Option(t,""),n),!1===e.options[e.selectedIndex].defaultSelected&&(e.selectedIndex=0)):n.setAttribute("value",""),""===n.textContent&&(n.textContent=t)},wrapLabel_:function(e,t){var n=this.createEl_("div",{class:this.prefixed_("wrap")+" "+this.prefixed_("wrap-"+t.tagName.toLowerCase())});void 0!==t.value&&t.value.length&&n.classList.add(this.prefixed_("is-active")),(null!==t.getAttribute("required")||t.classList.contains(this.config_[this.current_].requiredClass))&&n.classList.add(this.prefixed_("is-required")),t.parentNode.insertBefore(n,t),n.appendChild(e),n.appendChild(t)}},void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}(window,document)},144:function(e,t,n){n(145),e.exports=n(355)},145:function(e,t,n){},146:function(e,t){(function(){var e,t,n,r,i,o,a,s,l,c,u,f,d,p,m,v,g,h,y,b,_,w,C,x,k=[].slice,I=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};(e=window.jQuery||window.Zepto||window.$).payment={},e.payment.fn={},e.fn.payment=function(){var t,n;return n=arguments[0],t=2<=arguments.length?k.call(arguments,1):[],e.payment.fn[n].apply(this,t)},i=/(\d{1,4})/g,e.payment.cards=r=[{type:"maestro",patterns:[5018,502,503,506,56,58,639,6220,67],format:i,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:!0},{type:"forbrugsforeningen",patterns:[600],format:i,length:[16],cvcLength:[3],luhn:!0},{type:"dankort",patterns:[5019],format:i,length:[16],cvcLength:[3],luhn:!0},{type:"visa",patterns:[4],format:i,length:[13,16],cvcLength:[3],luhn:!0},{type:"mastercard",patterns:[51,52,53,54,55,22,23,24,25,26,27],format:i,length:[16],cvcLength:[3],luhn:!0},{type:"amex",patterns:[34,37],format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:!0},{type:"dinersclub",patterns:[30,36,38,39],format:/(\d{1,4})(\d{1,6})?(\d{1,4})?/,length:[14],cvcLength:[3],luhn:!0},{type:"discover",patterns:[60,64,65,622],format:i,length:[16],cvcLength:[3],luhn:!0},{type:"unionpay",patterns:[62,88],format:i,length:[16,17,18,19],cvcLength:[3],luhn:!1},{type:"jcb",patterns:[35],format:i,length:[16],cvcLength:[3],luhn:!0}],t=function(e){var t,n,i,o,a,s,l;for(e=(e+"").replace(/\D/g,""),i=0,a=r.length;i<a;i++)for(o=0,s=(l=(t=r[i]).patterns).length;o<s;o++)if(n=l[o]+"",e.substr(0,n.length)===n)return t},n=function(e){var t,n,i;for(n=0,i=r.length;n<i;n++)if((t=r[n]).type===e)return t},d=function(e){var t,n,r,i,o,a;for(r=!0,i=0,o=0,a=(n=(e+"").split("").reverse()).length;o<a;o++)t=n[o],t=parseInt(t,10),(r=!r)&&(t*=2),t>9&&(t-=9),i+=t;return i%10==0},f=function(e){var t;return null!=e.prop("selectionStart")&&e.prop("selectionStart")!==e.prop("selectionEnd")||!(null==("undefined"!=typeof document&&null!==document&&null!=(t=document.selection)?t.createRange:void 0)||!document.selection.createRange().text)},C=function(e,t){var n,r,i,o,a;try{r=t.prop("selectionStart")}catch(e){e,r=null}if(o=t.val(),t.val(e),null!==r&&t.is(":focus"))return r===o.length&&(r=e.length),o!==e&&(a=o.slice(r-1,+r+1||9e9),n=e.slice(r-1,+r+1||9e9),i=e[r],/\d/.test(i)&&a===i+" "&&n===" "+i&&(r+=1)),t.prop("selectionStart",r),t.prop("selectionEnd",r)},h=function(e){var t,n,r,i,o,a;for(null==e&&(e=""),"０１２３４５６７８９","0123456789",i="",o=0,a=(t=e.split("")).length;o<a;o++)n=t[o],(r="０１２３４５６７８９".indexOf(n))>-1&&(n="0123456789"[r]),i+=n;return i},g=function(t){var n;return n=e(t.currentTarget),setTimeout(function(){var e;return e=n.val(),e=(e=h(e)).replace(/\D/g,""),C(e,n)})},m=function(t){var n;return n=e(t.currentTarget),setTimeout(function(){var t;return t=n.val(),t=h(t),t=e.payment.formatCardNumber(t),C(t,n)})},s=function(n){var r,i,o,a,s,l,c;if(o=String.fromCharCode(n.which),/^\d+$/.test(o)&&(r=e(n.currentTarget),c=r.val(),i=t(c+o),a=(c.replace(/\D/g,"")+o).length,l=16,i&&(l=i.length[i.length.length-1]),!(a>=l||null!=r.prop("selectionStart")&&r.prop("selectionStart")!==c.length)))return(s=i&&"amex"===i.type?/^(\d{4}|\d{4}\s\d{6})$/:/(?:^|\s)(\d{4})$/).test(c)?(n.preventDefault(),setTimeout(function(){return r.val(c+" "+o)})):s.test(c+o)?(n.preventDefault(),setTimeout(function(){return r.val(c+o+" ")})):void 0},o=function(t){var n,r;if(n=e(t.currentTarget),r=n.val(),8===t.which&&(null==n.prop("selectionStart")||n.prop("selectionStart")===r.length))return/\d\s$/.test(r)?(t.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s$/,""))})):/\s\d?$/.test(r)?(t.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d$/,""))})):void 0},v=function(t){var n;return n=e(t.currentTarget),setTimeout(function(){var t;return t=n.val(),t=h(t),t=e.payment.formatExpiry(t),C(t,n)})},l=function(t){var n,r,i;if(r=String.fromCharCode(t.which),/^\d+$/.test(r))return n=e(t.currentTarget),i=n.val()+r,/^\d$/.test(i)&&"0"!==i&&"1"!==i?(t.preventDefault(),setTimeout(function(){return n.val("0"+i+" / ")})):/^\d\d$/.test(i)?(t.preventDefault(),setTimeout(function(){var e,t;return e=parseInt(i[0],10),(t=parseInt(i[1],10))>2&&0!==e?n.val("0"+e+" / "+t):n.val(i+" / ")})):void 0},c=function(t){var n,r,i;if(r=String.fromCharCode(t.which),/^\d+$/.test(r))return i=(n=e(t.currentTarget)).val(),/^\d\d$/.test(i)?n.val(i+" / "):void 0},u=function(t){var n,r,i;if("/"===(i=String.fromCharCode(t.which))||" "===i)return r=(n=e(t.currentTarget)).val(),/^\d$/.test(r)&&"0"!==r?n.val("0"+r+" / "):void 0},a=function(t){var n,r;if(n=e(t.currentTarget),r=n.val(),8===t.which&&(null==n.prop("selectionStart")||n.prop("selectionStart")===r.length))return/\d\s\/\s$/.test(r)?(t.preventDefault(),setTimeout(function(){return n.val(r.replace(/\d\s\/\s$/,""))})):void 0},p=function(t){var n;return n=e(t.currentTarget),setTimeout(function(){var e;return e=n.val(),e=(e=h(e)).replace(/\D/g,"").slice(0,4),C(e,n)})},w=function(e){var t;return!(!e.metaKey&&!e.ctrlKey)||32!==e.which&&(0===e.which||(e.which<33||(t=String.fromCharCode(e.which),!!/[\d\s]/.test(t))))},b=function(n){var r,i,o,a;if(r=e(n.currentTarget),o=String.fromCharCode(n.which),/^\d+$/.test(o)&&!f(r))return a=(r.val()+o).replace(/\D/g,""),(i=t(a))?a.length<=i.length[i.length.length-1]:a.length<=16},_=function(t){var n,r;if(n=e(t.currentTarget),r=String.fromCharCode(t.which),/^\d+$/.test(r)&&!f(n))return!((n.val()+r).replace(/\D/g,"").length>6)&&void 0},y=function(t){var n,r;if(n=e(t.currentTarget),r=String.fromCharCode(t.which),/^\d+$/.test(r)&&!f(n))return(n.val()+r).length<=4},x=function(t){var n,i,o,a,s;if(s=(n=e(t.currentTarget)).val(),a=e.payment.cardType(s)||"unknown",!n.hasClass(a))return i=function(){var e,t,n;for(n=[],e=0,t=r.length;e<t;e++)o=r[e],n.push(o.type);return n}(),n.removeClass("unknown"),n.removeClass(i.join(" ")),n.addClass(a),n.toggleClass("identified","unknown"!==a),n.trigger("payment.cardType",a)},e.payment.fn.formatCardCVC=function(){return this.on("keypress",w),this.on("keypress",y),this.on("paste",p),this.on("change",p),this.on("input",p),this},e.payment.fn.formatCardExpiry=function(){return this.on("keypress",w),this.on("keypress",_),this.on("keypress",l),this.on("keypress",u),this.on("keypress",c),this.on("keydown",a),this.on("change",v),this.on("input",v),this},e.payment.fn.formatCardNumber=function(){return this.on("keypress",w),this.on("keypress",b),this.on("keypress",s),this.on("keydown",o),this.on("keyup",x),this.on("paste",m),this.on("change",m),this.on("input",m),this.on("input",x),this},e.payment.fn.restrictNumeric=function(){return this.on("keypress",w),this.on("paste",g),this.on("change",g),this.on("input",g),this},e.payment.fn.cardExpiryVal=function(){return e.payment.cardExpiryVal(e(this).val())},e.payment.cardExpiryVal=function(e){var t,n,r;return t=(r=e.split(/[\s\/]+/,2))[0],2===(null!=(n=r[1])?n.length:void 0)&&/^\d+$/.test(n)&&(n=(new Date).getFullYear().toString().slice(0,2)+n),{month:t=parseInt(t,10),year:n=parseInt(n,10)}},e.payment.validateCardNumber=function(e){var n,r;return e=(e+"").replace(/\s+|-/g,""),!!/^\d+$/.test(e)&&(!!(n=t(e))&&(r=e.length,I.call(n.length,r)>=0&&(!1===n.luhn||d(e))))},e.payment.validateCardExpiry=function(t,n){var r,i,o;return"object"==typeof t&&"month"in t&&(t=(o=t).month,n=o.year),!(!t||!n)&&(t=e.trim(t),n=e.trim(n),!!/^\d+$/.test(t)&&(!!/^\d+$/.test(n)&&(1<=t&&t<=12&&(2===n.length&&(n=n<70?"20"+n:"19"+n),4===n.length&&(i=new Date(n,t),r=new Date,i.setMonth(i.getMonth()-1),i.setMonth(i.getMonth()+1,1),i>r)))))},e.payment.validateCardCVC=function(t,r){var i,o;return t=e.trim(t),!!/^\d+$/.test(t)&&(null!=(i=n(r))?(o=t.length,I.call(i.cvcLength,o)>=0):t.length>=3&&t.length<=4)},e.payment.cardType=function(e){var n;return e&&(null!=(n=t(e))?n.type:void 0)||null},e.payment.formatCardNumber=function(n){var r,i,o,a;return n=n.replace(/\D/g,""),(r=t(n))?(o=r.length[r.length.length-1],n=n.slice(0,o),r.format.global?null!=(a=n.match(r.format))?a.join(" "):void 0:null!=(i=r.format.exec(n))?(i.shift(),(i=e.grep(i,function(e){return e})).join(" ")):void 0):n},e.payment.formatExpiry=function(e){var t,n,r,i;return(n=e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))?(t=n[1]||"",r=n[2]||"",(i=n[3]||"").length>0?r=" / ":" /"===r?(t=t.substring(0,1),r=""):2===t.length||r.length>0?r=" / ":1===t.length&&"0"!==t&&"1"!==t&&(t="0"+t,r=" / "),t+r+i):""}}).call(this)},147:function(e,t,n){var r=n(39);n(148);var i=n(150),o={transitionDelay:250,blockWith:function(e){var t=r.Deferred(),n=this,a=i(arguments).rest(),s=i(a).first();return s&&s.preventDefault&&s.preventDefault(),r.blockUI({message:null}),setTimeout(function(){var o=e.apply(n,a);i(o).isObject()&&i(o.always).isFunction()?o.always(function(){r.unblockUI()}).then(t.resolve,t.reject):r.unblockUI()},o.transitionDelay),t.promise()},makeBlocked:function(e){return i.wrap(e,o.blockWith)}};e.exports=o},148:function(e,t,n){var r,i,o;
/*!
 * jQuery blockUI plugin
 * Version 2.70.0-2014.11.23
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */!function(){"use strict";function a(e){e.fn._fadeIn=e.fn.fadeIn;var t=e.noop||function(){},n=/MSIE/.test(navigator.userAgent),r=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),i=(document.documentMode,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){s(window,e)},e.unblockUI=function(e){l(window,e)},e.growlUI=function(t,n,r,i){var o=e('<div class="growlUI"></div>');t&&o.append("<h1>"+t+"</h1>"),n&&o.append("<h2>"+n+"</h2>"),void 0===r&&(r=3e3);var a=function(t){t=t||{},e.blockUI({message:o,fadeIn:void 0!==t.fadeIn?t.fadeIn:700,fadeOut:void 0!==t.fadeOut?t.fadeOut:1e3,timeout:void 0!==t.timeout?t.timeout:r,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};a();o.css("opacity");o.mouseover(function(){a({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(t){if(this[0]===window)return e.blockUI(t),this;var n=e.extend({},e.blockUI.defaults,t||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,s(this,t)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){l(this,t)})},e.blockUI.version=2.7,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var o=null,a=[];function s(s,c){var f,m,v=s==window,g=c&&void 0!==c.message?c.message:void 0;if(!(c=e.extend({},e.blockUI.defaults,c||{})).ignoreIfBlocked||!e(s).data("blockUI.isBlocked")){if(c.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,c.overlayCSS||{}),f=e.extend({},e.blockUI.defaults.css,c.css||{}),c.onOverlayClick&&(c.overlayCSS.cursor="pointer"),m=e.extend({},e.blockUI.defaults.themedCSS,c.themedCSS||{}),g=void 0===g?c.message:g,v&&o&&l(window,{fadeOut:0}),g&&"string"!=typeof g&&(g.parentNode||g.jquery)){var h=g.jquery?g[0]:g,y={};e(s).data("blockUI.history",y),y.el=h,y.parent=h.parentNode,y.display=h.style.display,y.position=h.style.position,y.parent&&y.parent.removeChild(h)}e(s).data("blockUI.onUnblock",c.onUnblock);var b,_,w,C,x=c.baseZ;b=n||c.forceIframe?e('<iframe class="blockUI" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+c.iframeSrc+'"></iframe>'):e('<div class="blockUI" style="display:none"></div>'),_=c.theme?e('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x+++';display:none"></div>'):e('<div class="blockUI blockOverlay" style="z-index:'+x+++';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),c.theme&&v?(C='<div class="blockUI '+c.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',c.title&&(C+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),C+='<div class="ui-widget-content ui-dialog-content"></div>',C+="</div>"):c.theme?(C='<div class="blockUI '+c.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',c.title&&(C+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(c.title||"&nbsp;")+"</div>"),C+='<div class="ui-widget-content ui-dialog-content"></div>',C+="</div>"):C=v?'<div class="blockUI '+c.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+c.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(C),g&&(c.theme?(w.css(m),w.addClass("ui-widget-content")):w.css(f)),c.theme||_.css(c.overlayCSS),_.css("position",v?"fixed":"absolute"),(n||c.forceIframe)&&b.css("opacity",0);var k=[b,_,w],I=e(v?"body":s);e.each(k,function(){this.appendTo(I)}),c.theme&&c.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var j=i&&(!e.support.boxModel||e("object,embed",v?null:s).length>0);if(r||j){if(v&&c.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(r||!e.support.boxModel)&&!v)var S=p(s,"borderTopWidth"),E=p(s,"borderLeftWidth"),O=S?"(0 - "+S+")":0,A=E?"(0 - "+E+")":0;e.each(k,function(e,t){var n=t[0].style;if(n.position="absolute",e<2)v?n.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+c.quirksmodeOffsetHack+') + "px"'):n.setExpression("height",'this.parentNode.offsetHeight + "px"'),v?n.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):n.setExpression("width",'this.parentNode.offsetWidth + "px"'),A&&n.setExpression("left",A),O&&n.setExpression("top",O);else if(c.centerY)v&&n.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),n.marginTop=0;else if(!c.centerY&&v){var r="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(c.css&&c.css.top?parseInt(c.css.top,10):0)+') + "px"';n.setExpression("top",r)}})}if(g&&(c.theme?w.find(".ui-widget-content").append(g):w.append(g),(g.jquery||g.nodeType)&&e(g).show()),(n||c.forceIframe)&&c.showOverlay&&b.show(),c.fadeIn){var T=c.onBlock?c.onBlock:t,G=c.showOverlay&&!g?T:t,M=g?T:t;c.showOverlay&&_._fadeIn(c.fadeIn,G),g&&w._fadeIn(c.fadeIn,M)}else c.showOverlay&&_.show(),g&&w.show(),c.onBlock&&c.onBlock.bind(w)();if(u(1,s,c),v?(o=w[0],a=e(c.focusableElements,o),c.focusInput&&setTimeout(d,20)):function(e,t,n){var r=e.parentNode,i=e.style,o=(r.offsetWidth-e.offsetWidth)/2-p(r,"borderLeftWidth"),a=(r.offsetHeight-e.offsetHeight)/2-p(r,"borderTopWidth");t&&(i.left=o>0?o+"px":"0");n&&(i.top=a>0?a+"px":"0")}(w[0],c.centerX,c.centerY),c.timeout){var P=setTimeout(function(){v?e.unblockUI(c):e(s).unblock(c)},c.timeout);e(s).data("blockUI.timeout",P)}}}function l(t,n){var r,i,s=t==window,l=e(t),f=l.data("blockUI.history"),d=l.data("blockUI.timeout");d&&(clearTimeout(d),l.removeData("blockUI.timeout")),n=e.extend({},e.blockUI.defaults,n||{}),u(0,t,n),null===n.onUnblock&&(n.onUnblock=l.data("blockUI.onUnblock"),l.removeData("blockUI.onUnblock")),i=s?e("body").children().filter(".blockUI").add("body > .blockUI"):l.find(">.blockUI"),n.cursorReset&&(i.length>1&&(i[1].style.cursor=n.cursorReset),i.length>2&&(i[2].style.cursor=n.cursorReset)),s&&(o=a=null),n.fadeOut?(r=i.length,i.stop().fadeOut(n.fadeOut,function(){0==--r&&c(i,f,n,t)})):c(i,f,n,t)}function c(t,n,r,i){var o=e(i);if(!o.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),n&&n.el&&(n.el.style.display=n.display,n.el.style.position=n.position,n.el.style.cursor="default",n.parent&&n.parent.appendChild(n.el),o.removeData("blockUI.history")),o.data("blockUI.static")&&o.css("position","static"),"function"==typeof r.onUnblock&&r.onUnblock(i,r);var a=e(document.body),s=a.width(),l=a[0].style.width;a.width(s-1).width(s),a[0].style.width=l}}function u(t,n,r){var i=n==window,a=e(n);if((t||(!i||o)&&(i||a.data("blockUI.isBlocked")))&&(a.data("blockUI.isBlocked",t),i&&r.bindEvents&&(!t||r.showOverlay))){var s="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(s,r,f):e(document).unbind(s,f)}}function f(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&o&&t.data.constrainTabKey){var n=a,r=!t.shiftKey&&t.target===n[n.length-1],i=t.shiftKey&&t.target===n[0];if(r||i)return setTimeout(function(){d(i)},10),!1}var s=t.data,l=e(t.target);return l.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(t),l.parents("div."+s.blockMsgClass).length>0||0===l.parents().children().filter("div.blockUI").length}function d(e){if(a){var t=a[!0===e?a.length-1:0];t&&t.focus()}}function p(t,n){return parseInt(e.css(t,n),10)||0}}n(149).jQuery?(i=[n(39)],void 0===(o="function"==typeof(r=a)?r.apply(t,i):r)||(e.exports=o)):a(jQuery)}()},149:function(e,t){(function(t){e.exports=t}).call(this,{})},150:function(e,t,n){(function(e,n){var r;!function(){var i="object"==typeof self&&self.self===self&&self||"object"==typeof e&&e.global===e&&e||this||{},o=i._,a=Array.prototype,s=Object.prototype,l="undefined"!=typeof Symbol?Symbol.prototype:null,c=a.push,u=a.slice,f=s.toString,d=s.hasOwnProperty,p=Array.isArray,m=Object.keys,v=Object.create,g=function(){},h=function(e){return e instanceof h?e:this instanceof h?void(this._wrapped=e):new h(e)};t.nodeType?i._=h:(!n.nodeType&&n.exports&&(t=n.exports=h),t._=h),h.VERSION="1.9.1";var y,b=function(e,t,n){if(void 0===t)return e;switch(null==n?3:n){case 1:return function(n){return e.call(t,n)};case 3:return function(n,r,i){return e.call(t,n,r,i)};case 4:return function(n,r,i,o){return e.call(t,n,r,i,o)}}return function(){return e.apply(t,arguments)}},_=function(e,t,n){return h.iteratee!==y?h.iteratee(e,t):null==e?h.identity:h.isFunction(e)?b(e,t,n):h.isObject(e)&&!h.isArray(e)?h.matcher(e):h.property(e)};h.iteratee=y=function(e,t){return _(e,t,1/0)};var w=function(e,t){return t=null==t?e.length-1:+t,function(){for(var n=Math.max(arguments.length-t,0),r=Array(n),i=0;i<n;i++)r[i]=arguments[i+t];switch(t){case 0:return e.call(this,r);case 1:return e.call(this,arguments[0],r);case 2:return e.call(this,arguments[0],arguments[1],r)}var o=Array(t+1);for(i=0;i<t;i++)o[i]=arguments[i];return o[t]=r,e.apply(this,o)}},C=function(e){if(!h.isObject(e))return{};if(v)return v(e);g.prototype=e;var t=new g;return g.prototype=null,t},x=function(e){return function(t){return null==t?void 0:t[e]}},k=function(e,t){return null!=e&&d.call(e,t)},I=function(e,t){for(var n=t.length,r=0;r<n;r++){if(null==e)return;e=e[t[r]]}return n?e:void 0},j=Math.pow(2,53)-1,S=x("length"),E=function(e){var t=S(e);return"number"==typeof t&&t>=0&&t<=j};h.each=h.forEach=function(e,t,n){var r,i;if(t=b(t,n),E(e))for(r=0,i=e.length;r<i;r++)t(e[r],r,e);else{var o=h.keys(e);for(r=0,i=o.length;r<i;r++)t(e[o[r]],o[r],e)}return e},h.map=h.collect=function(e,t,n){t=_(t,n);for(var r=!E(e)&&h.keys(e),i=(r||e).length,o=Array(i),a=0;a<i;a++){var s=r?r[a]:a;o[a]=t(e[s],s,e)}return o};var O=function(e){return function(t,n,r,i){var o=arguments.length>=3;return function(t,n,r,i){var o=!E(t)&&h.keys(t),a=(o||t).length,s=e>0?0:a-1;for(i||(r=t[o?o[s]:s],s+=e);s>=0&&s<a;s+=e){var l=o?o[s]:s;r=n(r,t[l],l,t)}return r}(t,b(n,i,4),r,o)}};h.reduce=h.foldl=h.inject=O(1),h.reduceRight=h.foldr=O(-1),h.find=h.detect=function(e,t,n){var r=(E(e)?h.findIndex:h.findKey)(e,t,n);if(void 0!==r&&-1!==r)return e[r]},h.filter=h.select=function(e,t,n){var r=[];return t=_(t,n),h.each(e,function(e,n,i){t(e,n,i)&&r.push(e)}),r},h.reject=function(e,t,n){return h.filter(e,h.negate(_(t)),n)},h.every=h.all=function(e,t,n){t=_(t,n);for(var r=!E(e)&&h.keys(e),i=(r||e).length,o=0;o<i;o++){var a=r?r[o]:o;if(!t(e[a],a,e))return!1}return!0},h.some=h.any=function(e,t,n){t=_(t,n);for(var r=!E(e)&&h.keys(e),i=(r||e).length,o=0;o<i;o++){var a=r?r[o]:o;if(t(e[a],a,e))return!0}return!1},h.contains=h.includes=h.include=function(e,t,n,r){return E(e)||(e=h.values(e)),("number"!=typeof n||r)&&(n=0),h.indexOf(e,t,n)>=0},h.invoke=w(function(e,t,n){var r,i;return h.isFunction(t)?i=t:h.isArray(t)&&(r=t.slice(0,-1),t=t[t.length-1]),h.map(e,function(e){var o=i;if(!o){if(r&&r.length&&(e=I(e,r)),null==e)return;o=e[t]}return null==o?o:o.apply(e,n)})}),h.pluck=function(e,t){return h.map(e,h.property(t))},h.where=function(e,t){return h.filter(e,h.matcher(t))},h.findWhere=function(e,t){return h.find(e,h.matcher(t))},h.max=function(e,t,n){var r,i,o=-1/0,a=-1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e)for(var s=0,l=(e=E(e)?e:h.values(e)).length;s<l;s++)null!=(r=e[s])&&r>o&&(o=r);else t=_(t,n),h.each(e,function(e,n,r){((i=t(e,n,r))>a||i===-1/0&&o===-1/0)&&(o=e,a=i)});return o},h.min=function(e,t,n){var r,i,o=1/0,a=1/0;if(null==t||"number"==typeof t&&"object"!=typeof e[0]&&null!=e)for(var s=0,l=(e=E(e)?e:h.values(e)).length;s<l;s++)null!=(r=e[s])&&r<o&&(o=r);else t=_(t,n),h.each(e,function(e,n,r){((i=t(e,n,r))<a||i===1/0&&o===1/0)&&(o=e,a=i)});return o},h.shuffle=function(e){return h.sample(e,1/0)},h.sample=function(e,t,n){if(null==t||n)return E(e)||(e=h.values(e)),e[h.random(e.length-1)];var r=E(e)?h.clone(e):h.values(e),i=S(r);t=Math.max(Math.min(t,i),0);for(var o=i-1,a=0;a<t;a++){var s=h.random(a,o),l=r[a];r[a]=r[s],r[s]=l}return r.slice(0,t)},h.sortBy=function(e,t,n){var r=0;return t=_(t,n),h.pluck(h.map(e,function(e,n,i){return{value:e,index:r++,criteria:t(e,n,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||void 0===n)return 1;if(n<r||void 0===r)return-1}return e.index-t.index}),"value")};var A=function(e,t){return function(n,r,i){var o=t?[[],[]]:{};return r=_(r,i),h.each(n,function(t,i){var a=r(t,i,n);e(o,t,a)}),o}};h.groupBy=A(function(e,t,n){k(e,n)?e[n].push(t):e[n]=[t]}),h.indexBy=A(function(e,t,n){e[n]=t}),h.countBy=A(function(e,t,n){k(e,n)?e[n]++:e[n]=1});var T=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;h.toArray=function(e){return e?h.isArray(e)?u.call(e):h.isString(e)?e.match(T):E(e)?h.map(e,h.identity):h.values(e):[]},h.size=function(e){return null==e?0:E(e)?e.length:h.keys(e).length},h.partition=A(function(e,t,n){e[n?0:1].push(t)},!0),h.first=h.head=h.take=function(e,t,n){return null==e||e.length<1?null==t?void 0:[]:null==t||n?e[0]:h.initial(e,e.length-t)},h.initial=function(e,t,n){return u.call(e,0,Math.max(0,e.length-(null==t||n?1:t)))},h.last=function(e,t,n){return null==e||e.length<1?null==t?void 0:[]:null==t||n?e[e.length-1]:h.rest(e,Math.max(0,e.length-t))},h.rest=h.tail=h.drop=function(e,t,n){return u.call(e,null==t||n?1:t)},h.compact=function(e){return h.filter(e,Boolean)};var G=function(e,t,n,r){for(var i=(r=r||[]).length,o=0,a=S(e);o<a;o++){var s=e[o];if(E(s)&&(h.isArray(s)||h.isArguments(s)))if(t)for(var l=0,c=s.length;l<c;)r[i++]=s[l++];else G(s,t,n,r),i=r.length;else n||(r[i++]=s)}return r};h.flatten=function(e,t){return G(e,t,!1)},h.without=w(function(e,t){return h.difference(e,t)}),h.uniq=h.unique=function(e,t,n,r){h.isBoolean(t)||(r=n,n=t,t=!1),null!=n&&(n=_(n,r));for(var i=[],o=[],a=0,s=S(e);a<s;a++){var l=e[a],c=n?n(l,a,e):l;t&&!n?(a&&o===c||i.push(l),o=c):n?h.contains(o,c)||(o.push(c),i.push(l)):h.contains(i,l)||i.push(l)}return i},h.union=w(function(e){return h.uniq(G(e,!0,!0))}),h.intersection=function(e){for(var t=[],n=arguments.length,r=0,i=S(e);r<i;r++){var o=e[r];if(!h.contains(t,o)){var a;for(a=1;a<n&&h.contains(arguments[a],o);a++);a===n&&t.push(o)}}return t},h.difference=w(function(e,t){return t=G(t,!0,!0),h.filter(e,function(e){return!h.contains(t,e)})}),h.unzip=function(e){for(var t=e&&h.max(e,S).length||0,n=Array(t),r=0;r<t;r++)n[r]=h.pluck(e,r);return n},h.zip=w(h.unzip),h.object=function(e,t){for(var n={},r=0,i=S(e);r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n};var M=function(e){return function(t,n,r){n=_(n,r);for(var i=S(t),o=e>0?0:i-1;o>=0&&o<i;o+=e)if(n(t[o],o,t))return o;return-1}};h.findIndex=M(1),h.findLastIndex=M(-1),h.sortedIndex=function(e,t,n,r){for(var i=(n=_(n,r,1))(t),o=0,a=S(e);o<a;){var s=Math.floor((o+a)/2);n(e[s])<i?o=s+1:a=s}return o};var P=function(e,t,n){return function(r,i,o){var a=0,s=S(r);if("number"==typeof o)e>0?a=o>=0?o:Math.max(o+s,a):s=o>=0?Math.min(o+1,s):o+s+1;else if(n&&o&&s)return r[o=n(r,i)]===i?o:-1;if(i!=i)return(o=t(u.call(r,a,s),h.isNaN))>=0?o+a:-1;for(o=e>0?a:s-1;o>=0&&o<s;o+=e)if(r[o]===i)return o;return-1}};h.indexOf=P(1,h.findIndex,h.sortedIndex),h.lastIndexOf=P(-1,h.findLastIndex),h.range=function(e,t,n){null==t&&(t=e||0,e=0),n||(n=t<e?-1:1);for(var r=Math.max(Math.ceil((t-e)/n),0),i=Array(r),o=0;o<r;o++,e+=n)i[o]=e;return i},h.chunk=function(e,t){if(null==t||t<1)return[];for(var n=[],r=0,i=e.length;r<i;)n.push(u.call(e,r,r+=t));return n};var L=function(e,t,n,r,i){if(!(r instanceof t))return e.apply(n,i);var o=C(e.prototype),a=e.apply(o,i);return h.isObject(a)?a:o};h.bind=w(function(e,t,n){if(!h.isFunction(e))throw new TypeError("Bind must be called on a function");var r=w(function(i){return L(e,r,t,this,n.concat(i))});return r}),h.partial=w(function(e,t){var n=h.partial.placeholder,r=function(){for(var i=0,o=t.length,a=Array(o),s=0;s<o;s++)a[s]=t[s]===n?arguments[i++]:t[s];for(;i<arguments.length;)a.push(arguments[i++]);return L(e,r,this,this,a)};return r}),h.partial.placeholder=h,h.bindAll=w(function(e,t){var n=(t=G(t,!1,!1)).length;if(n<1)throw new Error("bindAll must be passed function names");for(;n--;){var r=t[n];e[r]=h.bind(e[r],e)}}),h.memoize=function(e,t){var n=function(r){var i=n.cache,o=""+(t?t.apply(this,arguments):r);return k(i,o)||(i[o]=e.apply(this,arguments)),i[o]};return n.cache={},n},h.delay=w(function(e,t,n){return setTimeout(function(){return e.apply(null,n)},t)}),h.defer=h.partial(h.delay,h,1),h.throttle=function(e,t,n){var r,i,o,a,s=0;n||(n={});var l=function(){s=!1===n.leading?0:h.now(),r=null,a=e.apply(i,o),r||(i=o=null)},c=function(){var c=h.now();s||!1!==n.leading||(s=c);var u=t-(c-s);return i=this,o=arguments,u<=0||u>t?(r&&(clearTimeout(r),r=null),s=c,a=e.apply(i,o),r||(i=o=null)):r||!1===n.trailing||(r=setTimeout(l,u)),a};return c.cancel=function(){clearTimeout(r),s=0,r=i=o=null},c},h.debounce=function(e,t,n){var r,i,o=function(t,n){r=null,n&&(i=e.apply(t,n))},a=w(function(a){if(r&&clearTimeout(r),n){var s=!r;r=setTimeout(o,t),s&&(i=e.apply(this,a))}else r=h.delay(o,t,this,a);return i});return a.cancel=function(){clearTimeout(r),r=null},a},h.wrap=function(e,t){return h.partial(t,e)},h.negate=function(e){return function(){return!e.apply(this,arguments)}},h.compose=function(){var e=arguments,t=e.length-1;return function(){for(var n=t,r=e[t].apply(this,arguments);n--;)r=e[n].call(this,r);return r}},h.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},h.before=function(e,t){var n;return function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=null),n}},h.once=h.partial(h.before,2),h.restArguments=w;var N=!{toString:null}.propertyIsEnumerable("toString"),Q=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],B=function(e,t){var n=Q.length,r=e.constructor,i=h.isFunction(r)&&r.prototype||s,o="constructor";for(k(e,o)&&!h.contains(t,o)&&t.push(o);n--;)(o=Q[n])in e&&e[o]!==i[o]&&!h.contains(t,o)&&t.push(o)};h.keys=function(e){if(!h.isObject(e))return[];if(m)return m(e);var t=[];for(var n in e)k(e,n)&&t.push(n);return N&&B(e,t),t},h.allKeys=function(e){if(!h.isObject(e))return[];var t=[];for(var n in e)t.push(n);return N&&B(e,t),t},h.values=function(e){for(var t=h.keys(e),n=t.length,r=Array(n),i=0;i<n;i++)r[i]=e[t[i]];return r},h.mapObject=function(e,t,n){t=_(t,n);for(var r=h.keys(e),i=r.length,o={},a=0;a<i;a++){var s=r[a];o[s]=t(e[s],s,e)}return o},h.pairs=function(e){for(var t=h.keys(e),n=t.length,r=Array(n),i=0;i<n;i++)r[i]=[t[i],e[t[i]]];return r},h.invert=function(e){for(var t={},n=h.keys(e),r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t},h.functions=h.methods=function(e){var t=[];for(var n in e)h.isFunction(e[n])&&t.push(n);return t.sort()};var z=function(e,t){return function(n){var r=arguments.length;if(t&&(n=Object(n)),r<2||null==n)return n;for(var i=1;i<r;i++)for(var o=arguments[i],a=e(o),s=a.length,l=0;l<s;l++){var c=a[l];t&&void 0!==n[c]||(n[c]=o[c])}return n}};h.extend=z(h.allKeys),h.extendOwn=h.assign=z(h.keys),h.findKey=function(e,t,n){t=_(t,n);for(var r,i=h.keys(e),o=0,a=i.length;o<a;o++)if(t(e[r=i[o]],r,e))return r};var U,F,D=function(e,t,n){return t in n};h.pick=w(function(e,t){var n={},r=t[0];if(null==e)return n;h.isFunction(r)?(t.length>1&&(r=b(r,t[1])),t=h.allKeys(e)):(r=D,t=G(t,!1,!1),e=Object(e));for(var i=0,o=t.length;i<o;i++){var a=t[i],s=e[a];r(s,a,e)&&(n[a]=s)}return n}),h.omit=w(function(e,t){var n,r=t[0];return h.isFunction(r)?(r=h.negate(r),t.length>1&&(n=t[1])):(t=h.map(G(t,!1,!1),String),r=function(e,n){return!h.contains(t,n)}),h.pick(e,r,n)}),h.defaults=z(h.allKeys,!0),h.create=function(e,t){var n=C(e);return t&&h.extendOwn(n,t),n},h.clone=function(e){return h.isObject(e)?h.isArray(e)?e.slice():h.extend({},e):e},h.tap=function(e,t){return t(e),e},h.isMatch=function(e,t){var n=h.keys(t),r=n.length;if(null==e)return!r;for(var i=Object(e),o=0;o<r;o++){var a=n[o];if(t[a]!==i[a]||!(a in i))return!1}return!0},U=function(e,t,n,r){if(e===t)return 0!==e||1/e==1/t;if(null==e||null==t)return!1;if(e!=e)return t!=t;var i=typeof e;return("function"===i||"object"===i||"object"==typeof t)&&F(e,t,n,r)},F=function(e,t,n,r){e instanceof h&&(e=e._wrapped),t instanceof h&&(t=t._wrapped);var i=f.call(e);if(i!==f.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+e==""+t;case"[object Number]":return+e!=+e?+t!=+t:0==+e?1/+e==1/t:+e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object Symbol]":return l.valueOf.call(e)===l.valueOf.call(t)}var o="[object Array]"===i;if(!o){if("object"!=typeof e||"object"!=typeof t)return!1;var a=e.constructor,s=t.constructor;if(a!==s&&!(h.isFunction(a)&&a instanceof a&&h.isFunction(s)&&s instanceof s)&&"constructor"in e&&"constructor"in t)return!1}r=r||[];for(var c=(n=n||[]).length;c--;)if(n[c]===e)return r[c]===t;if(n.push(e),r.push(t),o){if((c=e.length)!==t.length)return!1;for(;c--;)if(!U(e[c],t[c],n,r))return!1}else{var u,d=h.keys(e);if(c=d.length,h.keys(t).length!==c)return!1;for(;c--;)if(u=d[c],!k(t,u)||!U(e[u],t[u],n,r))return!1}return n.pop(),r.pop(),!0},h.isEqual=function(e,t){return U(e,t)},h.isEmpty=function(e){return null==e||(E(e)&&(h.isArray(e)||h.isString(e)||h.isArguments(e))?0===e.length:0===h.keys(e).length)},h.isElement=function(e){return!(!e||1!==e.nodeType)},h.isArray=p||function(e){return"[object Array]"===f.call(e)},h.isObject=function(e){var t=typeof e;return"function"===t||"object"===t&&!!e},h.each(["Arguments","Function","String","Number","Date","RegExp","Error","Symbol","Map","WeakMap","Set","WeakSet"],function(e){h["is"+e]=function(t){return f.call(t)==="[object "+e+"]"}}),h.isArguments(arguments)||(h.isArguments=function(e){return k(e,"callee")});var V=i.document&&i.document.childNodes;"object"!=typeof Int8Array&&"function"!=typeof V&&(h.isFunction=function(e){return"function"==typeof e||!1}),h.isFinite=function(e){return!h.isSymbol(e)&&isFinite(e)&&!isNaN(parseFloat(e))},h.isNaN=function(e){return h.isNumber(e)&&isNaN(e)},h.isBoolean=function(e){return!0===e||!1===e||"[object Boolean]"===f.call(e)},h.isNull=function(e){return null===e},h.isUndefined=function(e){return void 0===e},h.has=function(e,t){if(!h.isArray(t))return k(e,t);for(var n=t.length,r=0;r<n;r++){var i=t[r];if(null==e||!d.call(e,i))return!1;e=e[i]}return!!n},h.noConflict=function(){return i._=o,this},h.identity=function(e){return e},h.constant=function(e){return function(){return e}},h.noop=function(){},h.property=function(e){return h.isArray(e)?function(t){return I(t,e)}:x(e)},h.propertyOf=function(e){return null==e?function(){}:function(t){return h.isArray(t)?I(e,t):e[t]}},h.matcher=h.matches=function(e){return e=h.extendOwn({},e),function(t){return h.isMatch(t,e)}},h.times=function(e,t,n){var r=Array(Math.max(0,e));t=b(t,n,1);for(var i=0;i<e;i++)r[i]=t(i);return r},h.random=function(e,t){return null==t&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},h.now=Date.now||function(){return(new Date).getTime()};var q={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},H=h.invert(q),R=function(e){var t=function(t){return e[t]},n="(?:"+h.keys(e).join("|")+")",r=RegExp(n),i=RegExp(n,"g");return function(e){return e=null==e?"":""+e,r.test(e)?e.replace(i,t):e}};h.escape=R(q),h.unescape=R(H),h.result=function(e,t,n){h.isArray(t)||(t=[t]);var r=t.length;if(!r)return h.isFunction(n)?n.call(e):n;for(var i=0;i<r;i++){var o=null==e?void 0:e[t[i]];void 0===o&&(o=n,i=r),e=h.isFunction(o)?o.call(e):o}return e};var W=0;h.uniqueId=function(e){var t=++W+"";return e?e+t:t},h.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var $=/(.)^/,K={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Z=/\\|'|\r|\n|\u2028|\u2029/g,Y=function(e){return"\\"+K[e]};h.template=function(e,t,n){!t&&n&&(t=n),t=h.defaults({},t,h.templateSettings);var r,i=RegExp([(t.escape||$).source,(t.interpolate||$).source,(t.evaluate||$).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(i,function(t,n,r,i,s){return a+=e.slice(o,s).replace(Z,Y),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),t}),a+="';\n",t.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{r=new Function(t.variable||"obj","_",a)}catch(e){throw e.source=a,e}var s=function(e){return r.call(this,e,h)},l=t.variable||"obj";return s.source="function("+l+"){\n"+a+"}",s},h.chain=function(e){var t=h(e);return t._chain=!0,t};var J=function(e,t){return e._chain?h(t).chain():t};h.mixin=function(e){return h.each(h.functions(e),function(t){var n=h[t]=e[t];h.prototype[t]=function(){var e=[this._wrapped];return c.apply(e,arguments),J(this,n.apply(h,e))}}),h},h.mixin(h),h.each(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=a[e];h.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),"shift"!==e&&"splice"!==e||0!==n.length||delete n[0],J(this,n)}}),h.each(["concat","join","slice"],function(e){var t=a[e];h.prototype[e]=function(){return J(this,t.apply(this._wrapped,arguments))}}),h.prototype.value=function(){return this._wrapped},h.prototype.valueOf=h.prototype.toJSON=h.prototype.value,h.prototype.toString=function(){return String(this._wrapped)},void 0===(r=function(){return h}.apply(t,[]))||(n.exports=r)}()}).call(this,n(50),n(151)(e))},151:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},152:function(e,t){jQuery(function(e){var t=jQuery("form.give-form"),n=e(document);e.fn.toggleError=function(e){return this.toggleClass("error",e),this.toggleClass("valid",!e),this},Give.init(),n.on("change","#give_cc_address input.card_state, #give_cc_address select",function(){var t=e(this),r=t.parents("form");if("card_state"!==t.attr("id")){r.find("#card_state").empty().append('<option value="1">'+Give.fn.getGlobalVar("general_loading")+"</option>").prop("disabled",!0);var i={action:"give_get_states",country:t.val(),field_name:"card_state"};e.ajax({type:"POST",data:i,url:Give.fn.getGlobalVar("ajaxurl"),xhrFields:{withCredentials:!0},success:function(e){var t="",i=e.states_label;if(t=void 0!==e.states_found&&!0===e.states_found?e.data:'<input type="text" id="card_state"  name="card_state" class="cart-state give-input required" placeholder="'.concat(i,'" value="').concat(e.default_state,'" autocomplete="address-level4"/>'),!1===r.hasClass("float-labels-enabled")){void 0!==e.states_require&&!0===e.states_require?r.find('input[name="card_state"], select[name="card_state"]').closest("p").find("label .give-required-indicator").removeClass("give-hidden"):r.find('input[name="card_state"], select[name="card_state"]').closest("p").find("label .give-required-indicator").addClass("give-hidden");var o=r.find('input[name="card_city"]');void 0!==e.city_require&&!0===e.city_require?(o.closest("p").find("label .give-required-indicator").removeClass("give-hidden").removeClass("required"),o.attr("required",!0)):(o.closest("p").find("label .give-required-indicator").addClass("give-hidden").addClass("required"),o.removeAttr("required"))}else r.find('input[name="card_state"], select[name="card_state"]').closest("p").find("label").text(i);r.find('input[name="card_state"], select[name="card_state"]').closest("p").find("label .state-label-text").text(i),r.find('input[name="card_state"], select[name="card_state"]').replaceWith(t),void 0!==e.show_field&&!0===e.show_field?(r.find("p#give-card-state-wrap").removeClass("give-hidden"),r.find("p#give-card-zip-wrap").addClass("form-row-last"),r.find("p#give-card-zip-wrap").removeClass("form-row-wide")):(r.find("p#give-card-state-wrap").addClass("give-hidden"),r.find("p#give-card-zip-wrap").addClass("form-row-wide"),r.find("p#give-card-zip-wrap").removeClass("form-row-last")),n.trigger("give_checkout_billing_address_updated",[e,r.attr("id")])}}).fail(function(e){window.console&&window.console.log&&console.log(e)})}return!1}),n.on("give_gateway_loaded",function(){Give.form.fn.field.formatCreditCard(t)}),n.on("submit","#give_payment_mode",function(){if(!Give.form.fn.getGateway(e(this).closest("form")).length)return alert(Give.fn.getGlobalVar("no_gateway")),!1}),n.on("click","#give-payment-mode-select input",function(){var t,n=e(this).parents("form"),r=n.find("#give-payment-mode-select li"),i=n.find('li.give-gateway-option-selected input[name="payment-mode"]').val().trim();r.removeClass("give-gateway-option-selected"),r.prop("checked",!1),e(this).prop("checked",!0),e(this).parent().addClass("give-gateway-option-selected"),t=Give.form.fn.getGateway(n),n.attr("action",n.attr("action").replace("payment-mode="+i,"payment-mode="+t))}),n.on("focus",".give-donation-amount .give-text-input",function(t){var n=e(this).parents("form");e(this).removeClass("invalid-amount");var r=n.find(".give-final-total-amount").attr("data-total"),i=Give.form.fn.getInfo("decimal_separator",n);e(this).attr("data-amount",Give.fn.unFormatCurrency(r,i)),e(this).parent(".give-donation-amount").addClass("give-custom-amount-focus-in"),n.find(".give-default-level, .give-radio-input").removeClass("give-default-level"),n.find(".give-btn-level-custom").addClass("give-default-level"),n.find(".give-radio-input").prop("checked",!1),n.find(".give-radio-input.give-radio-level-custom").prop("checked",!0),n.find(".give-select-level").prop("selected",!1),n.find(".give-select-level .give-donation-level-custom").prop("selected",!0)}),n.on("blur",".give-donation-amount .give-text-input",function(t,n,r,i){var o=void 0!==n?n:e(this).closest("form"),a=e(this).attr("data-amount"),s=void 0!==r?r:e(this).val(),l=Give.form.fn.getInfo("decimal_separator",o),c=Give.form.fn.getMinimumAmount(o),u=Give.form.fn.getMaximumAmount(o),f=0===s?c:Give.fn.unFormatCurrency(s,l),d=Give.form.fn.formatAmount(f,o,{});if(i=void 0===i?Give.form.fn.getPriceID(o,!0):i,""===f||0===f){var p=e('.give-donation-levels-wrap [data-default="1"]',n);p.length&&(i=p.data("price-id"),s=f=Give.fn.unFormatCurrency(p.val(),l),d=Give.form.fn.formatAmount(f,o,{}))}if(Give.fn.setCache("amount_"+f,i,o),e(this).val(d),Give.form.fn.isValidDonationAmount(o))e(this).removeClass("give-invalid-amount"),o.find(".give-invalid-minimum, .give-invalid-maximum").slideUp(300,function(){e(this).remove()}),Give.form.fn.disable(o,!1);else{e(this).addClass("give-invalid-amount"),Give.form.fn.disable(o,!0);var m=o.find(".give-invalid-minimum"),v=o.find(".give-invalid-maximum");0===m.length&&f<c?Give.notice.fn.renderNotice("bad_minimum",o):f>=c&&m.slideUp(300,function(){e(this).remove()}),0===v.length&&f>u?Give.notice.fn.renderNotice("bad_maximum",o):f<=u&&v.slideUp(300,function(){e(this).remove()})}a!==f&&o.find(".give-final-total-amount").attr("data-total",f).text(Give.fn.formatCurrency(f,{symbol:Give.form.fn.getInfo("currency_symbol",o),position:Give.form.fn.getInfo("currency_position",o)},o)),-1!==i&&(e('input[name="give-price-id"]',o).val(i),o.find(".give-amount-hidden").val(Give.form.fn.formatAmount(f,o,{})),o.find(".give-default-level").removeClass("give-default-level"),Give.form.fn.autoSelectDonationLevel(o,i)),e(this).parent(".give-donation-amount").removeClass("give-custom-amount-focus-in"),e(document).trigger("give_donation_value_updated",[o,f,i])}),n.on("click touchend",".give-donation-level-btn",function(t){t.preventDefault(),Give.form.fn.autoSetMultiLevel(e(this))}),n.on("click touchend",".give-radio-input-level",function(t){Give.form.fn.autoSetMultiLevel(e(this))}),n.on("change",".give-select-level",function(t){Give.form.fn.autoSetMultiLevel(e(this))}),n.on("click",".give_terms_links",function(t){t.preventDefault();var n=e(this).closest("fieldset");return e("[class^=give_terms-]",n).slideToggle(),e("a.give_terms_links",n).toggle(),!1}),e('label[for^="give-radio-level"]').on("click",function(t){var n=e(this).closest("form").find("#"+e(this).attr("for"));n.length&&(n.trigger("click"),t.preventDefault())})}),jQuery(window).on("load",function(){jQuery("body").on("keyup change focusout",".give-form .card-number, .give-form .card-cvc, .give-form .card-expiry",function(e){var t=jQuery(this),n=t.parents("form.give-form"),r=t.attr("id"),i=n.find(".card-number"),o=n.find(".card-cvc"),a=n.find(".card-expiry"),s=jQuery.payment.cardType(i.val()),l=!1;switch(e.type){case"focusout":r.indexOf("card_number")>-1?(l=!jQuery.payment.validateCardNumber(i.val()),i.toggleError(l)):r.indexOf("card_cvc")>-1?(l=!jQuery.payment.validateCardCVC(o.val(),s),o.toggleError(l)):r.indexOf("card_expiry")>-1&&(l=!jQuery.payment.validateCardExpiry(a.payment("cardExpiryVal")),a.toggleError(l)),Give.form.fn.disable(t.parents("form"),l);break;default:if(t.hasClass("error")&&t.removeClass("error"),r.indexOf("card_number")>-1){var c=n.find(".card-type");null===s?(c.removeClass().addClass("off card-type"),t.removeClass("valid").addClass("error")):c.removeClass().addClass("card-type "+s)}else if(r.indexOf("card_expiry")>-1){var u=a.payment("cardExpiryVal");n.find(".card-expiry-month").val(u.month),n.find(".card-expiry-year").val(u.year)}}})})},17:function(e,t,n){"use strict";var r={fn:{renderNotice:function(e,t){var n;switch(t=void 0!==t?t:{},e){case"bad_minimum":n=jQuery('<div class="give_error give-invalid-minimum give-hidden">'+this.getNotice(e,t)+"</div>");break;case"bad_maximum":n=jQuery('<div class="give_error give-invalid-maximum give-hidden">'+this.getNotice(e,t)+"</div>")}if(!t.length)return"";n.insertBefore(t.find(".give-total-wrap")).show()},getNotice:function(e,t){if(!e.length)return null;var n,r,i;if(n=r=i="",t.length)switch(e){case"bad_minimum":r=Give.fn.getGlobalVar(e),i=Give.form.fn.getMinimumAmount(t);break;case"bad_maximum":r=Give.fn.getGlobalVar(e),i=Give.form.fn.getMaximumAmount(t)}return t.length&&""!==r&&(n=r+" "+Give.fn.formatCurrency(i,{symbol:Give.form.fn.getInfo("currency_symbol",t),position:Give.form.fn.getInfo("currency_position",t)},t)),n},getAdminNoticeHTML:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{dismissible:!0},r=commonL10n.dismiss||"";return'<div class="give-notice notice notice-'.concat(t).concat(n.dismissible?" is-dismissible":"",'"><p>').concat(e).concat(n.dismissible?' <button type="button" class="notice-dismiss"><span class="screen-reader-text">'.concat(r,"</span></button>"):"","</p</div>")}}},i={init:function(){this.fn.field.formatCreditCard(jQuery("form.give-form")),this.fn.__initialize_cache(),window.addEventListener("load",function(){Give.form.fn.__sendBackToForm()})},fn:{isFormExist:function(){return!!document.getElementsByName("give-form-hash").length},disable:function(e,t){if(!e.length)return!1;e.find(".give-submit").prop("disabled",t)},formatAmount:function(e,t,n){return t.length?Give.fn.formatCurrency(e,n,t):e},getInfo:function(e,t){var n="";if(t=void 0!==t?t:{},!e.length||!t.length)return n;switch(e){case"gateways":n=[],jQuery.each(t.find('input[name="payment-mode"]'),function(e,t){t=t instanceof jQuery?t:jQuery(t),n.push(t.val().trim())});break;case"form-type":t.hasClass("give-form-type-set")?n="set":t.hasClass("give-form-type-multi")&&(n="multi");break;case"form-id":n=t.find('input[name="give-form-id"]').val();break;default:void 0!==(n=t.get(0).hasAttribute("data-"+e)?t.attr("data-"+e):t.attr(e))&&n.trim()}return n},setInfo:function(e,t,n,r){if(!n.length)return!1;switch(e=void 0===e?"data":e){case"nonce":n.find('input[name="give-form-hash"]').val(t)}if(void 0!==r&&!r.length)return!1;switch(e){case"attr":n.attr(r,t);break;default:n.data(r,t)}return!0},getGateway:function(e){var t="";return e.length?void 0!==(t=e.find('input[name="payment-mode"]:checked').val().trim())?t:"":t},getVariablePrices:function(e){var t,n=[];return e.length&&e.hasClass("give-form-type-multi")&&(t=e.find(".give-donation-levels-wrap [data-price-id] "))?(jQuery.each(t,function(t,r){r=r instanceof jQuery?r:jQuery(r);var i=Give.form.fn.getInfo("decimal_separator",e);n.push({price_id:r.data("price-id"),amount:Give.fn.unFormatCurrency(r.val(),i)})}),n):n},getPriceID:function(e,t){var n=this.getVariablePrices(e),r=Give.fn.unFormatCurrency(e.find('input[name="give-amount"]').val(),this.getInfo("decimal_separator",e)),i=Give.fn.getCache("amount_"+r,e)?Give.fn.getCache("amount_"+r,e):-1;return t=void 0===t||t,n.length&&-1===i&&(t?(jQuery.each(n,function(e,t){if(t.amount===r)return i=t.price_id,!1}),-1===i&&this.getMinimumAmount(e)<=r&&this.getMaximumAmount(e)>=r&&this.getMinimumAmount(e)<=r&&(i="custom")):i=jQuery('input[name="give-price-id"]',e).val()),i},getMinimumAmount:function(e){return e.find('input[name="give-form-minimum"]').val()},getMaximumAmount:function(e){return e.find('input[name="give-form-maximum"]').val()},getAmount:function(e){if(!e.length)return null;var t=e.find('input[name="give-amount"]').val();return void 0!==t&&t||(t=0),Give.fn.unFormatCurrency(t,this.getInfo("decimal_separator",e))},getNonce:function(e){if(!e.length)return"";var t=e.find('input[name="give-form-hash"]').val();return void 0!==t&&t||(t=""),t},getNonceInfo:function(e){var t={};return e.length?(t.el=e.find('input[name="give-form-hash"]'),t.el.length?(t.value=e.find('input[name="give-form-hash"]').val(),t.value=void 0!==t.value&&t.value?t.value:"",t.createdInDonorSession="1"===t.el.attr("data-donor-session"),t):t):t},resetNonce:function(e){if(!e.length||!jQuery('input[name="give-form-hash"]',e).length)return!1;Give.form.fn.disable(e,!0),jQuery.post(Give.fn.getGlobalVar("ajaxurl"),{action:"give_donation_form_nonce",give_form_id:Give.form.fn.getInfo("form-id",e)},function(t){Give.form.fn.setInfo("nonce",t.data,e,""),Give.form.fn.disable(e,!1)})},resetAllNonce:function(e){return!!e.length&&(Give.form.fn.disable(e,!0),new Promise(function(t,n){jQuery.post(Give.fn.getGlobalVar("ajaxurl"),{action:"give_donation_form_reset_all_nonce",give_form_id:Give.form.fn.getInfo("form-id",e)},function(r){if(!r.success)return n(r);var i=e.find('input[name="give-form-user-register-hash"]');return Give.form.fn.setInfo("nonce",r.data.give_form_hash,e,""),i.length&&i.val(r.data.give_form_user_register_hash),Give.form.fn.disable(e,!1),jQuery(document).trigger("give_reset_all_nonce",[r.data]),t(r)}).done(function(){Give.form.fn.disable(e,!1)})}))},autoSelectDonationLevel:function(e,t){if(!e.length||"multi"!==this.getInfo("form-type",e))return!1;switch(t=void 0===t?this.getPriceID(e,!1):t,!0){case!!e.find(".give-radio-input").length:e.find(".give-radio-input").prop("checked",!1),e.find('.give-radio-input[data-price-id="'+t+'"]').prop("checked",!0).addClass("give-default-level");break;case!!e.find("button.give-donation-level-btn").length:e.find("button.give-donation-level-btn").blur(),e.find('button.give-donation-level-btn[data-price-id="'+t+'"]').addClass("give-default-level");break;case!!e.find("select.give-select-level").length:e.find("select.give-select-level option").prop("selected",!1),e.find('select.give-select-level option[data-price-id="'+t+'"]').prop("selected",!0).addClass("give-default-level")}},autoSetMultiLevel:function(e){var t=e.parents("form"),n=e.val(),r=e.data("price-id");if(void 0===r&&(r=e.find("option:selected").data("price-id")),"custom"===r)return t.find(".give-amount-top").val("").focus(),!1;t.find(".give-amount-top").val(n),t.find("span.give-amount-top").text(n);var i=Give.form.fn.getInfo("decimal_separator",t);jQuery(".give-donation-amount .give-text-input",t).attr("data-amount",Give.fn.unFormatCurrency(t.find(".give-final-total-amount").attr("data-total"),i)),t.find(".give-donation-amount .give-text-input").trigger("blur",[t,n,r])},__sendBackToForm:function(){var e=Give.fn.getParameterByName("form-id"),t=Give.fn.getParameterByName("payment-mode");if(!e||!t)return!1;var n=jQuery("body").find("#give-form-"+e+"-wrap"),r=n.find("form.give-form"),i=n.hasClass("give-display-modal"),o=n.hasClass("give-display-button"),a=n.hasClass("give-display-reveal");r.find("#give-gateway-radio-list label").removeClass("give-gateway-option-selected"),r.find("input[name=payment-mode][value="+t+"]").prop("checked",!0).parent().addClass("give-gateway-option-selected");var s=Give.fn.getParameterByName("level-id"),l=r.find('*[data-price-id="'+s+'"]');l.length>0&&this.autoSetMultiLevel(l),jQuery(".give-form-wrap").hasClass("give-form-grid-wrap")&&1===jQuery("#give-modal-form-"+e).length?jQuery.magnificPopup.open({items:{type:"inline",src:"#give-modal-form-"+e},fixedContentPos:!0,fixedBgPos:!0,closeBtnInside:!0,midClick:!0,removalDelay:300,mainClass:"modal-fade-slide"}):i||o?give_open_form_modal(n,r):a&&(r.find(".give-btn-reveal").hide(),r.find("#give-payment-mode-select, #give_purchase_form_wrap").slideDown())},isValidDonationAmount:function(e){if(e.find('input[name="give-form-minimum"]').length<=0)return!0;var t=this.getMinimumAmount(e),n=this.getMaximumAmount(e),r=this.getAmount(e),i=this.getPriceID(e,!0);return 0!==r&&(-1<r&&r>=t&&r<=n||-1!==i)},__initialize_cache:function(){jQuery.each(jQuery(".give-form"),function(e,t){t=t instanceof jQuery?t:jQuery(t),Give.cache["form_"+Give.form.fn.getInfo("form-id",t)]=[]})},field:{formatCreditCard:function(e){e.each(function(e,t){var n=(t=jQuery(t)).find(".card-number"),r=t.find(".card-cvc"),i=t.find(".card-expiry");n.length&&(n.payment("formatCardNumber"),r.payment("formatCardCVC"),i.payment("formatCardExpiry"))})}}}},o={fn:{hasSession:function(e){return!!e.length&&!!Give.fn.__getCookie(Give.fn.getGlobalVar("session_cookie_name"))},isLoggedIn:function(){return jQuery("body").hasClass("logged-in")}}},a={init:function(){var e=["form"],t=0;for(jQuery(document).trigger("give:preInit");t<e.length;)a[e[t]].init&&a[e[t]].init(),t++;jQuery(document).trigger("give:postInit")},fn:{formatCurrency:function(e,t,n){var r={symbol:"",decimal:this.getGlobalVar("decimal_separator"),thousand:this.getGlobalVar("thousands_separator"),precision:parseInt(this.getGlobalVar("number_decimals")),currency:this.getGlobalVar("currency")};if(e=e.toString().trim(),(n=void 0===n?{}:n).length&&(r={symbol:"",decimal:a.form.fn.getInfo("decimal_separator",n),thousand:a.form.fn.getInfo("thousands_separator",n),precision:a.form.fn.getInfo("number_decimals",n),currency:a.form.fn.getInfo("currency_code",n)}),(t=jQuery.extend(r,t)).precision=parseInt(t.precision),"INR"===t.currency){var i,o=parseFloat(e).toFixed(r.precision),s=t.precision?".0":"",l="",c="",u="";(o=(o=accounting.unformat(o,".").toString()).toString()).indexOf(".")>0&&(s=o.substring(o.indexOf("."),o.length)),l=(o=Math.floor(o).toString()).substring(o.length-3),""!==(c=o.substring(0,o.length-3))&&(l=r.thousand+l),i=(u=c.replace(/\B(?=(\d{2})+(?!\d))/g,r.thousand)+l+s).lastIndexOf("."),e=u=u.slice(0,i)+(u.slice(i)+"000000000000").substr(0,t.precision+1),void 0!==t.symbol&&t.symbol.length&&("after"===t.position?e+=t.symbol:e=t.symbol+e)}else"after"===t.position&&(t.format="%v%s"),e=accounting.formatMoney(e,t);return e},unFormatCurrency:function(e,t){if("string"==typeof e){var n=","===t.trim()?/[^0-9\,-]+/g:/[^0-9\.-]+/g;0===(e=e.replace(n,"")).indexOf(t)?e=e.substr(1):e.length-1===e.indexOf(t)&&(e=e.slice(0,-1))}return Math.abs(parseFloat(accounting.unformat(e,t)))},getParameterByName:function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},getGlobalVar:function(e){var t=this.getGlobal();return void 0===t[e]?"":t[e]},getGlobal:function(){return"undefined"==typeof give_global_vars?give_vars:give_global_vars},setCache:function(e,t,n){n.length?a.cache["form_"+a.form.fn.getInfo("form-id",n)][e]=t:a.cache[e]=t},getCache:function(e,t){var n,r=a.cache["form_"+a.form.fn.getInfo("form-id",t)];return n=void 0===(n=t.length?void 0!==r?r[e]:"":a.cache[e])?"":n},__getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"="),n="";return 2===t.length&&(n=t.pop().split(";").shift()),n},loader:function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=(r=Object.assign({show:!0,loadingAnimation:!0,loadingText:null},r)).loadingAnimation?'<span class="is-active spinner"></span>':"",o=null!==r.loadingText?r.loadingText:a.fn.getGlobalVar("loader_translation").updating;return!1===r.show?(jQuery(".give-spinner-wrap",e).remove(),!1):(t=i.length?"give-has-spinner":"",t=(t+=o.length?" give-has-text":"").length?" "+t.trim():"",n='<div class="give-spinner-wrap'.concat(t,'"><div class="give-spinner-inner">').concat((o+i).trim(),"</div></div>"),null===r.show?n:(e.prepend(n),!0))}},cache:{}};a.notice=r,a.form=i,a.donor=o;t.a=a},355:function(e,t,n){"use strict";n.r(t);n(146),n(76),n(147),n(57),n(78);var r=n(17),i=(n(152),n(11)),o=n.n(i);function a(e,t){var n=jQuery(e).find("#give-payment-mode-select .give-loading-text"),r=jQuery(e).find("#give-amount").val(),i=jQuery(e).find('input[name="give-form-id"]').val(),o=jQuery(e).find('input[name="give-form-id-prefix"]').val();n.fadeIn(),1!=jQuery(e).data()["blockUI.isBlocked"]&&jQuery(e).find("#give_purchase_form_wrap").block({message:null,overlayCSS:{background:"#fff",opacity:.6}}),jQuery.post(Give.fn.getGlobalVar("ajaxurl")+"?payment-mode="+t,{action:"give_load_gateway",give_total:r,give_form_id:i,give_form_id_prefix:o,give_payment_mode:t,nonce:Give.form.fn.getNonce(e)},function(t){jQuery(e).unblock(),jQuery(e).find("#give_purchase_form_wrap").html(t),jQuery(".give-no-js").hide(),jQuery(e).find("#give-payment-mode-select .give-loading-text").fadeOut(),jQuery(document).trigger("give_gateway_loaded",[t,jQuery(e).attr("id")])})}
/*!
 * Give AJAX JS
 *
 * @description: The Give AJAX scripts
 * @package:     Give
 * @subpackage:  Assets/JS
 * @copyright:   Copyright (c) 2016, GiveWP
 * @license:     http://opensource.org/licenses/gpl-2.0.php GNU Public License
 */
jQuery(document).ready(function(e){Give.form.fn.isFormExist()&&(e(".give-loading-text").hide(),e(".give-form").each(function(e,t){var n,r;t=jQuery(t),(n=Give.form.fn.getNonceInfo(t)).el.attr("data-donor-session")&&(!n.createdInDonorSession&&!Give.donor.fn.hasSession(t)||Give.donor.fn.isLoggedIn())||Give.form.fn.resetAllNonce(t),r=0>(r=1e3*(parseInt(n.el.data("time"))+parseInt(n.el.data("nonce-life")))-Date.now())?r:r+100,window.setTimeout(function(){Give.form.fn.resetAllNonce(t)},r)})),e(document).on("click",".give-checkout-login",function(t){var n=e(this),r=e(this).parents("form"),i=e(r).find('[id^="give-checkout-login-register"] .give-loading-text'),o={action:n.data("action"),form_id:e(r).find('[name="give-form-id"]').val()};return i.show(),e.post(Give.fn.getGlobalVar("ajaxurl"),o,function(t){e(r).find("[id^=give-checkout-login-register]").html(t),e(r).find(".give-submit-button-wrap").hide()}).done(function(){i.hide(),give_fl_trigger()}),!1}),e(document).on("click",".give-checkout-register-cancel",function(t){t.preventDefault();var n=e(this),r=e(this).parents("form"),i={action:n.data("action"),form_id:e(r).find('[name="give-form-id"]').val()};e.post(Give.fn.getGlobalVar("ajaxurl"),i,function(t){e(r).find("[id^=give-checkout-login-register]").html(e.parseJSON(t.fields)),e(r).find(".give-submit-button-wrap").show()}).done(function(){give_fl_trigger()})}),e(document).on("click","[id^=give-login-fields] input[type=submit]",function(t){t.preventDefault();var n=e(this).val(),r=e(this).parents("form");e(this).val(Give.fn.getGlobalVar("purchase_loading")),r.find("[id^=give-login-fields] .give-loading-animation").fadeIn();var i={action:"give_process_donation_login",give_ajax:1,give_user_login:r.find("[name=give_user_login]").val(),give_user_pass:r.find("[name=give_user_pass]").val(),give_form_id:r.find("[name=give-form-id]").val()};e.post(Give.fn.getGlobalVar("ajaxurl"),i,function(t){null!=e.trim(o()(t.success))&&1==t.success&&null!=o()(t.data)?(r.find(".give_errors").remove(),r.find("#give-payment-mode-select").after(t.data),r.find(".give_notices.give_errors").delay(5e3).slideUp(),Give.form.fn.resetAllNonce(r).then(function(e){a(r,r.find(".give-gateway-option-selected input").val())})):(r.find("[id^=give-login-fields] input[type=submit]").val(n),r.find(".give-loading-animation").fadeOut(),r.find(".give_errors").remove(),r.find("[id^=give-user-login-submit]").before(t.data))})}),e("select#give-gateway, input.give-gateway").on("change",function(t){t.preventDefault();var n=e(this).val();return"0"==n?(console.log("There was a problem loading the selected gateway"),!1):(a(e(this).parents("form"),n),!1)}),e("body").on("click","#give-confirm-email-btn",function(t){var n=e(this),r={action:"give_confirm_email_for_donations_access",email:n.data("email"),nonce:Give.fn.getGlobalVar("ajax_vars").ajaxNonce};return n.text(Give.fn.getGlobalVar("loading")),n.attr("disabled","disabled"),e.post(Give.fn.getGlobalVar("ajaxurl"),r,function(e){"error"===(e=JSON.parse(e)).status?(n.closest("#give_user_history tfoot").hide(),n.closest(".give_user_history_main").find(".give_user_history_notice").html(e.message)):"success"===e.status&&(n.closest(".give_user_history_main").find(".give_user_history_notice").html(e.message),n.hide(),n.closest(".give-security-button-wrap").find("span").show())}),!1}),e("body").on("click touchend",'form.give-form input[name="give-purchase"].give-submit',function(t){var n=e(this),r=n.parents("form.give-form"),i=r.find('input[type="submit"].give-submit + .give-loading-animation');i.fadeIn();var o=r.get(0);if("function"!=typeof o.checkValidity||!1!==o.checkValidity()||(i.fadeOut(),!1!=(-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")))){t.preventDefault();var a=e(this).val();e(this).val(Give.fn.getGlobalVar("purchase_loading")),Give.form.fn.disable(r,!0),e.post(Give.fn.getGlobalVar("ajaxurl"),r.serialize()+"&action=give_process_donation&give_ajax=true",function(t){"success"==e.trim(t)?(r.find(".give_errors").remove(),e(o).submit(),r.trigger("give_form_validation_passed")):(n.val(a),i.fadeOut(),r.find(".give_errors").remove(),r.find('#give_purchase_submit input[type="submit"].give-submit').before(t),Give.form.fn.disable(r,!1))})}});var t=document.getElementById("give-receipt");if(t){var n={action:"get_receipt",shortcode_atts:t.getAttribute("data-shortcode"),donation_id:t.getAttribute("data-donation-key"),receipt_type:t.getAttribute("data-receipt-type")};n[Give.fn.getGlobalVar("session_cookie_name")]=Give.fn.__getCookie(Give.fn.getGlobalVar("session_cookie_name")),e.ajax({url:Give.fn.getGlobalVar("ajaxurl"),method:"GET",data:n,success:function(e){t.innerHTML=e}})}});var s=n(110),l=n.n(s);jQuery(function(e){var t=e(document);give_fl_trigger(),give_change_html5_form_field_validation_message(),e(".js-give-grid-modal-launcher").magnificPopup({type:"inline",fixedContentPos:!0,fixedBgPos:!0,closeBtnInside:!0,midClick:!0,removalDelay:300,mainClass:"modal-fade-slide give-modal"}),void 0!==window.csGlobal&&window.jQuery(function(e){window.csGlobal.csHooks.filter("hash_scrolling_allow",function(t,n){return!e(n).hasClass("give-card")&&t})}),t.on("click touchend",".give-disabled",function(e){return e.preventDefault(),!1}),t.on("give_gateway_loaded",function(e,t,n){give_fl_trigger()}),t.on("give_checkout_billing_address_updated",function(t,n,r){e("form#"+r).hasClass("float-labels-enabled")&&give_fl_trigger()}),t.on("click",".give-btn-reveal",function(t){t.preventDefault();var n=e(this),r=e(this).parents("form"),i=e("#give-payment-mode-select"),o="";return n.hide(),e("li",i).length>1&&(o="#give-payment-mode-select, "),r.find(o+"#give_purchase_form_wrap").slideDown(),!1}),t.on("click",".give-btn-modal",function(t){t.preventDefault();var n=e(this).parents("div.give-form-wrap"),r=n.find("form.give-form"),i=r.find("#give-amount"),o=i.val();if(!o||o<=0)return i.focus(),!1;give_open_form_modal(n,r)});var n=jQuery('.give_notice[data-dismiss-type="auto"]');n.length&&n.each(function(t,n){n=e(n),window.setTimeout(function(){n.slideUp()},n.data("dismiss-interval"))}),e("body").on("click",".give-notice-close",function(){e(this).hide(),e(this).closest(".give_notices").slideUp()}),t.on("change","#give_profile_billing_address_wrap #give_address_country",update_profile_state_field),window.addEventListener("pageshow",function(t){if(t.persisted||o()("undefined")!==window.performance&&2===window.performance.navigation.type){var n=e("body").find("form.give-form");n.length&&(n[0].reset(),Give.form.fn.resetAllNonce(n))}})}),window.give_open_form_modal=function(e,t){var n="#give_purchase_form_wrap, #give-payment-mode-select, .mfp-close, .give-hidden, .give-form-title";jQuery.magnificPopup.open({mainClass:Give.fn.getGlobal().magnific_options.main_class,closeOnBgClick:Give.fn.getGlobal().magnific_options.close_on_bg_click,fixedContentPos:!0,fixedBgPos:!0,removalDelay:250,items:{src:t,type:"inline"},callbacks:{beforeOpen:function(){jQuery("body").addClass("give-modal-open");var n=jQuery(".give-form-title",e);if(e.hasClass("give-modal")&&!t.data("content"))n.length&&!jQuery(".give-form-title",t).length&&t.prepend(n),t.data("content","loaded");else if(e.hasClass("give-display-button-only")&&!t.data("content")){var r=jQuery(".give-form-content-wrap",e),i=jQuery(".give-goal-progress",e),o=jQuery(">.give_error",e),a=jQuery(".give_errors",e);r.length&&!jQuery(".give-form-content-wrap",t).length&&(r.hasClass("give_post_form-content")?t.append(r):t.prepend(r)),a.length&&!jQuery(".give_errors",t).length&&a.each(function(e,n){t.prepend(jQuery(n))}),o.length&&!jQuery(">.give_error",t).length&&o.each(function(e,n){t.prepend(jQuery(n))}),i.length&&!jQuery(".give-goal-progress",t).length&&t.prepend(i),n.length&&!jQuery(".give-form-title",t).length&&t.prepend(n),t.data("content","loaded")}},open:function(){var r=jQuery(".mfp-content");r.outerWidth()>=500&&r.addClass("give-responsive-mfp-content"),e.hasClass("give-display-button-only")&&(n=t.children().not(".give-btn-modal")),t.children().not(n).hide()},close:function(){t.removeClass("mfp-hide"),jQuery("body").removeClass("give-modal-open"),t.children().not(n).show()}}})},window.give_fl_trigger=function(){window.give_float_labels=void 0===window.give_float_labels?{}:window.give_float_labels,window.give_float_labels instanceof l.a?window.give_float_labels.rebuild():window.give_float_labels=new l.a(".float-labels-enabled",{exclude:"#give-amount, .give-select-level, [multiple], .give-honeypot",prioritize:"placeholder",prefix:"give-fl-",style:"give"})},window.give_change_html5_form_field_validation_message=function(){var e,t=jQuery(".give-form");t.length&&jQuery.each(t,function(t,n){(e=jQuery("input",n)).length&&jQuery.each(e,function(e,t){t=jQuery(t).get(0),Give.fn.getGlobal().form_translation.hasOwnProperty(t.name)&&(t.oninvalid=function(e){e.target.setCustomValidity(""),e.target.validity.valid||e.target.setCustomValidity(Give.fn.getGlobal().form_translation[t.name])})})})},window.update_profile_state_field=function(){var e=jQuery(this),t=e.parents("form");if("give_address_country"===e.attr("id")){t.find("#give_address_state").empty().append('<option value="1">'+Give.fn.getGlobalVar("general_loading")+"</option>").prop("disabled",!0);var n={action:"give_get_states",country:e.val(),field_name:"give_address_state"};jQuery.ajax({type:"POST",data:n,url:Give.fn.getGlobalVar("ajaxurl"),xhrFields:{withCredentials:!0},success:function(e){var n="",r=e.states_label;n=null!=o()(e.states_found)&&1==e.states_found?e.data:'<input type="text" id="give_address_state"  name="give_address_state" class="text give-input" placeholder="'+r+'" value="'+e.default_state+'"/>',t.find('input[name="give_address_state"], select[name="give_address_state"]').replaceWith(n),null!=o()(e.show_field)&&1==e.show_field?(t.find("p#give-card-state-wrap").removeClass("give-hidden"),t.find("p#give-card-zip-wrap").addClass("form-row-last"),t.find("p#give-card-zip-wrap").removeClass("form-row-wide")):(t.find("p#give-card-state-wrap").addClass("give-hidden"),t.find("p#give-card-zip-wrap").addClass("form-row-wide"),t.find("p#give-card-zip-wrap").removeClass("form-row-last"))}}).fail(function(e){window.console&&window.console.log&&console.log(e)})}return!1};var c=n(5),u=n.n(c),f=n(9),d=n.n(f),p=(n(58),new(function(){function e(){u()(this,e),window.addEventListener("load",function(){window.addDynamicEventListener(document,"click",".give-donor__read-more",e.readMoreBtnEvent),window.addDynamicEventListener(document,"click",".give-donor__load_more",e.loadMoreBtnEvent)},!1),window.addEventListener("load",function(){e.loadGravatars()})}return d()(e,null,[{key:"readMoreBtnEvent",value:function(e){return e.preventDefault(),jQuery.magnificPopup.open({items:{src:e.target.parentNode.parentNode.parentNode.getElementsByClassName("give-donor__comment")[0],type:"inline"},mainClass:"give-modal give-donor-wall-modal",closeOnBgClick:!1}),!1}},{key:"loadMoreBtnEvent",value:function(t){t.preventDefault();var n=t.target,r=n.parentNode,i=r.getElementsByClassName("give-donor-wall-shortcode-attrs")[0];return jQuery.ajax({url:Give.fn.getGlobalVar("ajaxurl"),method:"POST",data:{action:"give_get_donor_comments",data:i.getAttribute("data-shortcode")},beforeSend:function(){n.className+=" give-active",n.setAttribute("disabled","disabled")}}).done(function(t){n.classList.remove("give-active"),n.removeAttribute("disabled","disabled"),t.html.length&&r.getElementsByClassName("give-grid")[0].insertAdjacentHTML("beforeend",t.html),t.shortcode.length&&i.setAttribute("data-shortcode",t.shortcode),t.remaining||n.remove(),e.loadGravatar(i)}),!1}},{key:"loadGravatars",value:function(){Array.from(document.querySelectorAll(".give-donor-wall-shortcode-attrs")).forEach(function(t,n){e.loadGravatar(t)})}},{key:"loadGravatar",value:function(e){var t,r,i=n(79);if(!("1"===Give.fn.getParameterByName("show_avatar",decodeURIComponent(e.getAttribute("data-shortcode")))))return!1;Array.from(e.parentNode.querySelectorAll(".give-grid__item")).forEach(function(e,n){if(!(t=e.querySelector(".give-donor__image")).classList.contains("gravatar-loaded")){if(r=t.getAttribute("data-donor_email"),"1"===t.getAttribute("data-has-valid-gravatar")){var o=document.createElement("IMG");t.innerHTML="",o.setAttribute("src",i.url(r)),o.setAttribute("width","60"),o.setAttribute("height","60"),t.appendChild(o)}t.className+=" gravatar-loaded"}})}}]),e}()),r.a.init),m=r.a.fn,v=r.a.form,g=r.a.notice,h=r.a.cache,y=r.a.donor;window.Give={init:p,fn:m,form:v,notice:g,cache:h,donor:y}},39:function(e,t){e.exports=jQuery},5:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},50:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},57:function(e,t,n){var r,i,o;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */i=[n(39)],void 0===(o="function"==typeof(r=function(e){var t,n,r,i,o,a,s=function(){},l=!!window.jQuery,c=e(window),u=function(e,n){t.ev.on("mfp"+e+".mfp",n)},f=function(t,n,r,i){var o=document.createElement("div");return o.className="mfp-"+t,r&&(o.innerHTML=r),i?n&&n.appendChild(o):(o=e(o),n&&o.appendTo(n)),o},d=function(n,r){t.ev.triggerHandler("mfp"+n,r),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(r)?r:[r]))},p=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},m=function(){e.magnificPopup.instance||((t=new s).init(),e.magnificPopup.instance=t)};s.prototype={constructor:s,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),r=e(document),t.popupsCache={}},open:function(n){var i;if(!1===n.isObj){t.items=n.items.toArray(),t.index=0;var a,s=n.items;for(i=0;i<s.length;i++)if((a=s[i]).parsed&&(a=a.el[0]),a===n.el[0]){t.index=i;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(!t.isOpen){t.types=[],o="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=r,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=f("bg").on("click.mfp",function(){t.close()}),t.wrap=f("wrap").attr("tabindex",-1).on("click.mfp",function(e){t._checkIfClose(e.target)&&t.close()}),t.container=f("container",t.wrap)),t.contentContainer=f("content"),t.st.preloader&&(t.preloader=f("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(i=0;i<l.length;i++){var m=l[i];m=m.charAt(0).toUpperCase()+m.slice(1),t["init"+m].call(t)}d("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(u("MarkupParse",function(e,t,n,r){n.close_replaceWith=p(r.type)}),o+=" mfp-close-btn-in"):t.wrap.append(p())),t.st.alignTop&&(o+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:c.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:r.height(),position:"absolute"}),t.st.enableEscapeKey&&r.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),c.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(o+=" mfp-auto-cursor"),o&&t.wrap.addClass(o);var v=t.wH=c.height(),g={};if(t.fixedContentPos&&t._hasScrollBar(v)){var h=t._getScrollbarSize();h&&(g.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):g.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),d("BuildControls"),e("html").css(g),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),r.on("focusin.mfp",t._onFocusIn)},16),t.isOpen=!0,t.updateSize(v),d("Open"),n}t.updateItemHTML()},close:function(){t.isOpen&&(d("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){d("Close");var n="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}r.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,d("AfterClose")},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,r=window.innerHeight*n;t.wrap.css("height",r),t.wH=r}else t.wH=e||c.height();t.fixedContentPos||t.wrap.css("height",t.wH),d("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var r=n.type;if(d("BeforeChange",[t.currItem?t.currItem.type:"",r]),t.currItem=n,!t.currTemplate[r]){var o=!!t.st[r]&&t.st[r].markup;d("FirstMarkupParse",o),t.currTemplate[r]=!o||e(o)}i&&i!==n.type&&t.container.removeClass("mfp-"+i+"-holder");var a=t["get"+r.charAt(0).toUpperCase()+r.slice(1)](n,t.currTemplate[r]);t.appendContent(a,r),n.preloaded=!0,d("Change",n),i=n.type,t.container.prepend(t.contentContainer),d("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[n]?t.content.find(".mfp-close").length||t.content.append(p()):t.content=e:t.content="",d("BeforeAppend"),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var r,i=t.items[n];if(i.tagName?i={el:e(i)}:(r=i.type,i={data:i,src:i.src}),i.el){for(var o=t.types,a=0;a<o.length;a++)if(i.el.hasClass("mfp-"+o[a])){r=o[a];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=r||t.st.type||"inline",i.index=n,i.parsed=!0,t.items[n]=i,d("ElementParse",i),t.items[n]},addGroup:function(e,n){var r=function(r){r.mfpEl=this,t._openClick(r,e,n)};n||(n={});var i="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(i).on(i,r)):(n.isObj=!1,n.delegate?e.off(i).on(i,n.delegate,r):(n.items=e,e.off(i).on(i,r)))},_openClick:function(n,r,i){var o=void 0!==i.midClick?i.midClick:e.magnificPopup.defaults.midClick;if(o||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==i.disableOn?i.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(c.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),i.el=e(n.mfpEl),i.delegate&&(i.items=r.find(i.delegate)),t.open(i)}},updateStatus:function(e,r){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),r||"loading"!==e||(r=t.st.tLoading);var i={status:e,text:r};d("UpdateStatus",i),e=i.status,r=i.text,t.preloader.html(r),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass("mfp-prevent-close")){var r=t.st.closeOnContentClick,i=t.st.closeOnBgClick;if(r&&i)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(r)return!0}else if(i&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?r.height():document.body.scrollHeight)>(e||c.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,r){var i;r.data&&(n=e.extend(r.data,n)),d("MarkupParse",[t,n,r]),e.each(n,function(n,r){if(void 0===r||!1===r)return!0;if((i=n.split("_")).length>1){var o=t.find(".mfp-"+i[0]);if(o.length>0){var a=i[1];"replaceWith"===a?o[0]!==r[0]&&o.replaceWith(r):"img"===a?o.is("img")?o.attr("src",r):o.replaceWith(e("<img>").attr("src",r).attr("class",o.attr("class"))):o.attr(i[1],r)}}else t.find(".mfp-"+n).html(r)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:s.prototype,modules:[],open:function(t,n){return m(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){m();var r=e(this);if("string"==typeof n)if("open"===n){var i,o=l?r.data("magnificPopup"):r[0].magnificPopup,a=parseInt(arguments[1],10)||0;o.items?i=o.items[a]:(i=r,o.delegate&&(i=i.find(o.delegate)),i=i.eq(a)),t._openClick({mfpEl:i},r,o)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),l?r.data("magnificPopup",n):r[0].magnificPopup=n,t.addGroup(r,n);return r};var v,g,h,y=function(){h&&(g.after(h.addClass(v)).detach(),h=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),u("Close.inline",function(){y()})},getInline:function(n,r){if(y(),n.src){var i=t.st.inline,o=e(n.src);if(o.length){var a=o[0].parentNode;a&&a.tagName&&(g||(v=i.hiddenClass,g=f(v),v="mfp-"+v),h=o.after(g).detach().removeClass(v)),t.updateStatus("ready")}else t.updateStatus("error",i.tNotFound),o=e("<div>");return n.inlineElement=o,o}return t.updateStatus("ready"),t._parseMarkup(r,{},n),r}}});var b,_=function(){b&&e(document.body).removeClass(b)},w=function(){_(),t.req&&t.req.abort()};e.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),b=t.st.ajax.cursor,u("Close.ajax",w),u("BeforeChange.ajax",w)},getAjax:function(n){b&&e(document.body).addClass(b),t.updateStatus("loading");var r=e.extend({url:n.src,success:function(r,i,o){var a={data:r,xhr:o};d("ParseAjax",a),t.appendContent(e(a.data),"ajax"),n.finished=!0,_(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),d("AjaxContentAdded")},error:function(){_(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(r),""}}});var C,x,k=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var r=t.st.image.titleSrc;if(r){if(e.isFunction(r))return r.call(t,n);if(n.el)return n.el.attr(r)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,r=".image";t.types.push("image"),u("Open"+r,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),u("Close"+r,function(){n.cursor&&e(document.body).removeClass(n.cursor),c.off("resize.mfp")}),u("Resize"+r,t.resizeImage),t.isLowIE&&u("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,C&&clearInterval(C),e.isCheckingImgSize=!1,d("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,r=e.img[0],i=function(o){C&&clearInterval(C),C=setInterval(function(){r.naturalWidth>0?t._onImageHasSize(e):(n>200&&clearInterval(C),3==++n?i(10):40===n?i(50):100===n&&i(500))},o)};i(1)},getImage:function(n,r){var i=0,o=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,d("ImageLoadComplete")):++i<200?setTimeout(o,100):a())},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=r.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",o).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),(c=n.img[0]).naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(r,{title:k(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(C&&clearInterval(C),n.loadError?(r.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(r.removeClass("mfp-loading"),t.updateStatus("ready")),r):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,r.addClass("mfp-loading"),t.findImageSize(n)),r)}}}),e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,r=".zoom";if(n.enabled&&t.supportsTransition){var i,o,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),r="all "+n.duration/1e3+"s "+n.easing,i={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},o="transition";return i["-webkit-"+o]=i["-moz-"+o]=i["-o-"+o]=i[o]=r,t.css(i),t},l=function(){t.content.css("visibility","visible")};u("BuildControls"+r,function(){if(t._allowZoom()){if(clearTimeout(i),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void l();(o=s(e)).css(t._getOffset()),t.wrap.append(o),i=setTimeout(function(){o.css(t._getOffset(!0)),i=setTimeout(function(){l(),setTimeout(function(){o.remove(),e=o=null,d("ZoomAnimationEnded")},16)},a)},16)}}),u("BeforeClose"+r,function(){if(t._allowZoom()){if(clearTimeout(i),t.st.removalDelay=a,!e){if(!(e=t._getItemToZoom()))return;o=s(e)}o.css(t._getOffset(!0)),t.wrap.append(o),t.content.css("visibility","hidden"),setTimeout(function(){o.css(t._getOffset())},16)}}),u("Close"+r,function(){t._allowZoom()&&(l(),o&&o.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var r,i=(r=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),o=parseInt(r.css("padding-top"),10),a=parseInt(r.css("padding-bottom"),10);i.top-=e(window).scrollTop()-o;var s={width:r.width(),height:(l?r.innerHeight():r[0].offsetHeight)-a-o};return void 0===x&&(x=void 0!==document.createElement("p").style.MozTransform),x?s["-moz-transform"]=s.transform="translate("+i.left+"px,"+i.top+"px)":(s.left=i.left,s.top=i.top),s}}});var I=function(e){if(t.currTemplate.iframe){var n=t.currTemplate.iframe.find("iframe");n.length&&(e||(n[0].src="//about:blank"),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),u("BeforeChange",function(e,t,n){t!==n&&("iframe"===t?I():"iframe"===n&&I(!0))}),u("Close.iframe",function(){I()})},getIframe:function(n,r){var i=n.src,o=t.st.iframe;e.each(o.patterns,function(){if(i.indexOf(this.index)>-1)return this.id&&(i="string"==typeof this.id?i.substr(i.lastIndexOf(this.id)+this.id.length,i.length):this.id.call(this,i)),i=this.src.replace("%id%",i),!1});var a={};return o.srcAction&&(a[o.srcAction]=i),t._parseMarkup(r,a,n),t.updateStatus("ready"),r}}});var j=function(e){var n=t.items.length;return e>n-1?e-n:e<0?n+e:e},S=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery";if(t.direction=!0,!n||!n.enabled)return!1;o+=" mfp-gallery",u("Open"+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),r.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),u("UpdateStatus"+i,function(e,n){n.text&&(n.text=S(n.text,t.currItem.index,t.items.length))}),u("MarkupParse"+i,function(e,r,i,o){var a=t.items.length;i.counter=a>1?S(n.tCounter,o.index,a):""}),u("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var r=n.arrowMarkup,i=t.arrowLeft=e(r.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),o=t.arrowRight=e(r.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");i.click(function(){t.prev()}),o.click(function(){t.next()}),t.container.append(i.add(o))}}),u("Change"+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),u("Close"+i,function(){r.off(i),t.wrap.off("click"+i),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=j(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=j(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,r=Math.min(n[0],t.items.length),i=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?i:r);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?r:i);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=j(n),!t.items[n].preloaded){var r=t.items[n];r.parsed||(r=t.parseEl(n)),d("LazyLoad",r),"image"===r.type&&(r.img=e('<img class="mfp-img" />').on("load.mfploader",function(){r.hasSize=!0}).on("error.mfploader",function(){r.hasSize=!0,r.loadError=!0,d("LazyLoadError",r)}).attr("src",r.src)),r.preloaded=!0}}}}),e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;(n=isNaN(n)?n():n)>1&&(u("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),u("ElementParse.retina",function(t,r){r.src=e.replaceSrc(r,n)}))}}}}),m()})?r.apply(t,i):r)||(e.exports=o)},58:function(e,t){!function(e){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),e.addDynamicEventListener=function(e,t,n,r,i){e.addEventListener(t,function(e,t){return function(n){n.target&&n.target.matches(e)&&t.apply(this,arguments)}}(n,r),i)}}(window)},76:function(e,t,n){(function(t){e.exports=t.accounting=n(77)}).call(this,n(50))},77:function(e,t,n){
/*!
 * accounting.js v0.4.1
 * Copyright 2014 Open Exchange Rates
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://openexchangerates.github.io/accounting.js/
 */
!function(n,r){var i={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},o=Array.prototype.map,a=Array.isArray,s=Object.prototype.toString;function l(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function c(e){return a?a(e):"[object Array]"===s.call(e)}function u(e){return e&&"[object Object]"===s.call(e)}function f(e,t){var n;for(n in e=e||{},t=t||{})t.hasOwnProperty(n)&&null==e[n]&&(e[n]=t[n]);return e}function d(e,t,n){var r,i,a=[];if(!e)return a;if(o&&e.map===o)return e.map(t,n);for(r=0,i=e.length;r<i;r++)a[r]=t.call(n,e[r],r,e);return a}function p(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function m(e){var t=i.settings.currency.format;return"function"==typeof e&&(e=e()),l(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:l(t)?i.settings.currency.format={pos:t,neg:t.replace("%v","-%v"),zero:t}:t}var v=i.unformat=i.parse=function(e,t){if(c(e))return d(e,function(e){return v(e,t)});if("number"==typeof(e=e||0))return e;t=t||i.settings.number.decimal;var n=new RegExp("[^0-9-"+t+"]",["g"]),r=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(n,"").replace(t,"."));return isNaN(r)?0:r},g=i.toFixed=function(e,t){t=p(t,i.settings.number.precision);var n=Math.pow(10,t);return(Math.round(i.unformat(e)*n)/n).toFixed(t)},h=i.formatNumber=i.format=function(e,t,n,r){if(c(e))return d(e,function(e){return h(e,t,n,r)});e=v(e);var o=f(u(t)?t:{precision:t,thousand:n,decimal:r},i.settings.number),a=p(o.precision),s=e<0?"-":"",l=parseInt(g(Math.abs(e||0),a),10)+"",m=l.length>3?l.length%3:0;return s+(m?l.substr(0,m)+o.thousand:"")+l.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+o.thousand)+(a?o.decimal+g(Math.abs(e),a).split(".")[1]:"")},y=i.formatMoney=function(e,t,n,r,o,a){if(c(e))return d(e,function(e){return y(e,t,n,r,o,a)});e=v(e);var s=f(u(t)?t:{symbol:t,precision:n,thousand:r,decimal:o,format:a},i.settings.currency),l=m(s.format);return(e>0?l.pos:e<0?l.neg:l.zero).replace("%s",s.symbol).replace("%v",h(Math.abs(e),p(s.precision),s.thousand,s.decimal))};i.formatColumn=function(e,t,n,r,o,a){if(!e)return[];var s=f(u(t)?t:{symbol:t,precision:n,thousand:r,decimal:o,format:a},i.settings.currency),g=m(s.format),y=g.pos.indexOf("%s")<g.pos.indexOf("%v"),b=0,_=d(e,function(e,t){if(c(e))return i.formatColumn(e,s);var n=((e=v(e))>0?g.pos:e<0?g.neg:g.zero).replace("%s",s.symbol).replace("%v",h(Math.abs(e),p(s.precision),s.thousand,s.decimal));return n.length>b&&(b=n.length),n});return d(_,function(e,t){return l(e)&&e.length<b?y?e.replace(s.symbol,s.symbol+new Array(b-e.length+1).join(" ")):new Array(b-e.length+1).join(" ")+e:e})},e.exports&&(t=e.exports=i),t.accounting=i}()},78:function(e,t){jQuery.fn.giveHintCss=function(e,t){return this.each(function(){var n=jQuery(this);t=jQuery.extend({label:""},t);var r=n.next("span.give-hint-tooltip-js");if(!r.length){var i=t.label.length?t.label:n.data("hint-aria-label");if(!i.length)return;n.after('<span class="give-hint-tooltip-js hint--top hint--medium" aria-label="'+i+'"></span>'),(r=n.next()).css({top:-n.outerHeight(),left:-n.outerWidth()/2})}"show"===e?r.addClass("hint--always"):"hide"===e&&r.removeClass("hint--always")})},jQuery(document).ready(function(e){var t=e("[data-tooltip]");function n(t){if(!t.is('[class*="hint"]')){var n=t.attr("class"),r=[],i=t.data("tooltip").split(" ").length;n&&(n=n.split(" "),(r=e.grep(n,function(e){return-1!==e.indexOf("give-icon")})).length&&(r=r.join(" "),t.removeClass(r),t.append('<i class="'+r+'"></i>'))),t.addClass("hint--top"),15<i?t.addClass("hint--large"):7<i&&t.addClass("hint--medium"),t.attr("aria-label",t.data("tooltip"))}}t.length&&t.each(function(t,r){n(r=r instanceof jQuery?r:e(r))}),e("body").on("hover","[data-tooltip]",function(){n(e(this))})})},79:function(e,t,n){e.exports=n(80)},80:function(e,t,n){var r=n(81),i=n(82),o=/^[0-9a-f]{32}$/;function a(e,t){if(e)return"boolean"==typeof e.protocol?e.protocol:"http"!==e.protocol&&("https"===e.protocol||void 0)}function s(e){return(e="string"==typeof e?e.trim().toLowerCase():"unspecified").match(o)?e:r(e)}function l(e){var t=i.stringify(function(e){var t={},n={protocol:1,format:1};for(var r in e)n[r]||(t[r]=e[r]);return t}(e));return t&&"?"+t||""}e.exports={url:function(e,t,n){var r="//www.gravatar.com/avatar/";t&&t.cdn?(r=t.cdn+"/avatar/",delete t.cdn):(t&&t.protocol&&(n=a(t)),void 0!==n&&(r=n?"https://s.gravatar.com/avatar/":"http://www.gravatar.com/avatar/"));var i=l(t);return r+s(e)+i},profile_url:function(e,t,n){var r=null!=t&&null!=t.format?String(t.format):"json";if(t&&t.cdn)i=t.cdn+"/",delete t.cdn;else{t&&t.protocol&&(n=a(t));var i=n?"https://secure.gravatar.com/":"http://www.gravatar.com/"}var o=l(t);return i+s(e)+"."+r+o}}},81:function(e,t,n){var r;!function(i){"use strict";function o(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function a(e,t,n,r,i,a){return o((s=o(o(t,e),o(r,a)))<<(l=i)|s>>>32-l,n);var s,l}function s(e,t,n,r,i,o,s){return a(t&n|~t&r,e,t,i,o,s)}function l(e,t,n,r,i,o,s){return a(t&r|n&~r,e,t,i,o,s)}function c(e,t,n,r,i,o,s){return a(t^n^r,e,t,i,o,s)}function u(e,t,n,r,i,o,s){return a(n^(t|~r),e,t,i,o,s)}function f(e,t){var n,r,i,a,f;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var d=1732584193,p=-271733879,m=-1732584194,v=271733878;for(n=0;n<e.length;n+=16)r=d,i=p,a=m,f=v,d=s(d,p,m,v,e[n],7,-680876936),v=s(v,d,p,m,e[n+1],12,-389564586),m=s(m,v,d,p,e[n+2],17,606105819),p=s(p,m,v,d,e[n+3],22,-1044525330),d=s(d,p,m,v,e[n+4],7,-176418897),v=s(v,d,p,m,e[n+5],12,1200080426),m=s(m,v,d,p,e[n+6],17,-1473231341),p=s(p,m,v,d,e[n+7],22,-45705983),d=s(d,p,m,v,e[n+8],7,1770035416),v=s(v,d,p,m,e[n+9],12,-1958414417),m=s(m,v,d,p,e[n+10],17,-42063),p=s(p,m,v,d,e[n+11],22,-1990404162),d=s(d,p,m,v,e[n+12],7,1804603682),v=s(v,d,p,m,e[n+13],12,-40341101),m=s(m,v,d,p,e[n+14],17,-1502002290),d=l(d,p=s(p,m,v,d,e[n+15],22,1236535329),m,v,e[n+1],5,-165796510),v=l(v,d,p,m,e[n+6],9,-1069501632),m=l(m,v,d,p,e[n+11],14,643717713),p=l(p,m,v,d,e[n],20,-373897302),d=l(d,p,m,v,e[n+5],5,-701558691),v=l(v,d,p,m,e[n+10],9,38016083),m=l(m,v,d,p,e[n+15],14,-660478335),p=l(p,m,v,d,e[n+4],20,-405537848),d=l(d,p,m,v,e[n+9],5,568446438),v=l(v,d,p,m,e[n+14],9,-1019803690),m=l(m,v,d,p,e[n+3],14,-187363961),p=l(p,m,v,d,e[n+8],20,1163531501),d=l(d,p,m,v,e[n+13],5,-1444681467),v=l(v,d,p,m,e[n+2],9,-51403784),m=l(m,v,d,p,e[n+7],14,1735328473),d=c(d,p=l(p,m,v,d,e[n+12],20,-1926607734),m,v,e[n+5],4,-378558),v=c(v,d,p,m,e[n+8],11,-2022574463),m=c(m,v,d,p,e[n+11],16,1839030562),p=c(p,m,v,d,e[n+14],23,-35309556),d=c(d,p,m,v,e[n+1],4,-1530992060),v=c(v,d,p,m,e[n+4],11,1272893353),m=c(m,v,d,p,e[n+7],16,-155497632),p=c(p,m,v,d,e[n+10],23,-1094730640),d=c(d,p,m,v,e[n+13],4,681279174),v=c(v,d,p,m,e[n],11,-358537222),m=c(m,v,d,p,e[n+3],16,-722521979),p=c(p,m,v,d,e[n+6],23,76029189),d=c(d,p,m,v,e[n+9],4,-640364487),v=c(v,d,p,m,e[n+12],11,-421815835),m=c(m,v,d,p,e[n+15],16,530742520),d=u(d,p=c(p,m,v,d,e[n+2],23,-995338651),m,v,e[n],6,-198630844),v=u(v,d,p,m,e[n+7],10,1126891415),m=u(m,v,d,p,e[n+14],15,-1416354905),p=u(p,m,v,d,e[n+5],21,-57434055),d=u(d,p,m,v,e[n+12],6,1700485571),v=u(v,d,p,m,e[n+3],10,-1894986606),m=u(m,v,d,p,e[n+10],15,-1051523),p=u(p,m,v,d,e[n+1],21,-2054922799),d=u(d,p,m,v,e[n+8],6,1873313359),v=u(v,d,p,m,e[n+15],10,-30611744),m=u(m,v,d,p,e[n+6],15,-1560198380),p=u(p,m,v,d,e[n+13],21,1309151649),d=u(d,p,m,v,e[n+4],6,-145523070),v=u(v,d,p,m,e[n+11],10,-1120210379),m=u(m,v,d,p,e[n+2],15,718787259),p=u(p,m,v,d,e[n+9],21,-343485551),d=o(d,r),p=o(p,i),m=o(m,a),v=o(v,f);return[d,p,m,v]}function d(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function p(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function m(e){var t,n,r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return r}function v(e){return unescape(encodeURIComponent(e))}function g(e){return function(e){return d(f(p(e),8*e.length))}(v(e))}function h(e,t){return function(e,t){var n,r,i=p(e),o=[],a=[];for(o[15]=a[15]=void 0,i.length>16&&(i=f(i,8*e.length)),n=0;n<16;n+=1)o[n]=909522486^i[n],a[n]=1549556828^i[n];return r=f(o.concat(p(t)),512+8*t.length),d(f(a.concat(r),640))}(v(e),v(t))}function y(e,t,n){return t?n?h(t,e):m(h(t,e)):n?g(e):m(g(e))}void 0===(r=function(){return y}.call(t,n,t,e))||(e.exports=r)}()},82:function(e,t,n){"use strict";t.decode=t.parse=n(83),t.encode=t.stringify=n(84)},83:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,o){t=t||"&",n=n||"=";var a={};if("string"!=typeof e||0===e.length)return a;var s=/\+/g;e=e.split(t);var l=1e3;o&&"number"==typeof o.maxKeys&&(l=o.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var u=0;u<c;++u){var f,d,p,m,v=e[u].replace(s,"%20"),g=v.indexOf(n);g>=0?(f=v.substr(0,g),d=v.substr(g+1)):(f=v,d=""),p=decodeURIComponent(f),m=decodeURIComponent(d),r(a,p)?i(a[p])?a[p].push(m):a[p]=[a[p],m]:a[p]=m}return a};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},84:function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,s){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?o(a(e),function(a){var s=encodeURIComponent(r(a))+n;return i(e[a])?o(e[a],function(e){return s+encodeURIComponent(r(e))}).join(t):s+encodeURIComponent(r(e[a]))}).join(t):s?encodeURIComponent(r(s))+n+encodeURIComponent(r(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var a=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},9:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}});
// source --> http://demo2.themelexus.com/worldlife/wp-content/themes/worldlife/assets/js/libs/owl.carousel.js?ver=2.2.1 
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                'initializing': [ 'busy' ],
                'animating': [ 'busy' ],
                'dragging': [ 'interacting' ]
            }
        };

        $.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [ {
        filter: [ 'width', 'settings' ],
        run: function() {
            this._width = this.$element.width();
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };

            !grid && this.$stage.children().css(css);

            cache.css = css;
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];

            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

                cache.items.merge = merge > 1 || cache.items.merge;

                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            var clones = [],
                items = this._items,
                settings = this.settings,
                // TODO: Should be computed from number of min width items in stage
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';

            repeat /= 2;

            while (repeat--) {
                // Switch to only using appended clones
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();

            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: [ 'items' ],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: [ 'position' ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ 'width', 'position', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                    || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            if (this.settings.center) {
                this.$stage.children('.center').removeClass('center');
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    } ];

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
        this.enter('initializing');
        this.trigger('initialize');

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
            .wrap('<div class="' + this.settings.stageOuterClass + '"/>');

        // append stage
        this.$element.append(this.$stage.parent());

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.$element.is(':visible')) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);

        // register event handlers
        this.registerEventHandlers();

        this.leave('initializing');
        this.trigger('initialized');
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        this.trigger('change', { property: { name: 'settings', value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }

        this.trigger('prepared', { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) { return this[p] }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is('valid') && this.enter('valid');
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
        this.enter('refreshing');
        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave('refreshing');
        this.trigger('refreshed');
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.$element.is(':visible')) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');

        this.refresh();

        this.leave('resizing');
        this.trigger('resized');
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function() {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
        }

        if (this.settings.touchDrag){
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin :
                    stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));

            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();

            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function(event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);

        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();

            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function() { return false; });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function(index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {
        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();

        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function(state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function(part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function(v, i) { return i });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress([ 'translate', 'translated' ]);

        this.animate(this.coordinates(position));

        this.release([ 'translate', 'translated' ]);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            reciprocalItemsWidth = this._items[--iterator].width();
            elementWidth = this.$element.width();
            while (iterator--) {
                reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                if (reciprocalItemsWidth > elementWidth) {
                    break;
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

        if (position === undefined) {
            return $.map(this._clones, function(v, i) { return map(i) });
        }

        return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.$element.is(':visible')) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function(event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
        var current = this.relative(this._current);

        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger('add', { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate('items');

        this.trigger('added', { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function(images) {
        images.each($.proxy(function(i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function(e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {

        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();

        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace, state, enter) {
        var status = {
            item: { count: this._items.length, index: this.current() }
        }, handler = $.camelCase(
            $.grep([ 'on', name, namespace ], function(v) { return v })
                .join('-').toLowerCase()
        ), event = $.Event(
            [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
            $.extend({ relatedTarget: this }, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function(name) {
        $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }

            this._states.current[name]++;
        }, this));
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function(name) {
        $.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
            this._states.current[name]--;
        }, this));
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function(object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function(e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function(event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
                event.changedTouches[0] : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function(number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function(first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function(option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function() {
            var $this = $(this),
                data = $this.data('owl.carousel');

            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);

                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function(i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([ event ]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([ event ]);
                        }
                    }, data));
                });
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function() {
        if (this._interval) {
            return;
        }

        this._visible = this._core.$element.is(':visible');
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function() {
        if (this._core.$element.is(':visible') === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass('owl-hidden', !this._visible);

        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function() {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) { this.load(v) }, this);

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function(index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

            this._core.trigger('load', { element: $element, url: url }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoHeight
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
        var start = this._core._current,
            end = start + this._core.settings.items,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function(index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {
        var type = (function() {
                if (target.attr('data-vimeo-id')) {
                    return 'vimeo';
                } else if (target.attr('data-vzaar-id')) {
                    return 'vzaar'
                } else {
                    return 'youtube';
                }
            })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {

			/*
			 Parses the id's out of the following urls (and probably more):
			 https://www.youtube.com/watch?v=:id
			 https://youtu.be/:id
			 https://vimeo.com/:id
			 https://vimeo.com/channels/:channel/:id
			 https://vimeo.com/groups/:group/videos/:id
			 https://app.vzaar.com/videos/:id

			 Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			 */

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function(event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
                video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="//player.vimeo.com/video/' + video.id +
                '?autoplay=1" width="' + width + '" height="' + height +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        } else if (video.type === 'vzaar') {
            html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
                'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
        }

        $('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

        this._playing = item.addClass('owl-video-playing');
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return element && $(element).parent().hasClass('owl-video-frame');
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {

        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css( { 'left': left + 'px' } )
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function(e) {
        $(e.target).css( { 'left': '' } )
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout.
         * @type {Timeout}
         */
        this._timeout = null;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = false;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position') {
                    //console.log('play?', e);
                    if (this._core.settings.autoplay) {
                        this._setAutoPlayInterval();
                    }
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function(e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function() {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function(timeout, speed) {
        this._paused = false;

        if (this._core.is('rotating')) {
            return;
        }

        this._core.enter('rotating');

        this._setAutoPlayInterval();
    };

    /**
     * Gets a new timeout
     * @private
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     * @return {Timeout}
     */
    Autoplay.prototype._getNextTimeout = function(timeout, speed) {
        if ( this._timeout ) {
            window.clearTimeout(this._timeout);
        }
        return window.setTimeout($.proxy(function() {
            if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
                return;
            }
            this._core.next(speed || this._core.settings.autoplaySpeed);
        }, this), timeout || this._core.settings.autoplayTimeout);
    };

    /**
     * Sets autoplay in motion.
     * @private
     */
    Autoplay.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout();
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
        if (!this._core.is('rotating')) {
            return;
        }

        window.clearTimeout(this._timeout);
        this._core.leave('rotating');
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
        if (!this._core.is('rotating')) {
            return;
        }

        this._paused = true;
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [ 'prev', 'next' ],
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [ 'owl-prev', 'owl-next' ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
            : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function(e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [ $('<div>')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML') ];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
            : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$absolute)
                ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, settings.dotsSpeed);
        }, this));

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function(page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
        var position, length,
            settings = this._core.settings;

        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function(e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function(item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function(e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);

            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function() {
                return !!test('transform');
            },
            csstransforms3d: function() {
                return !!test('perspective');
            },
            csstransitions: function() {
                return !!test('transition');
            },
            cssanimations: function() {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
		/* jshint -W053 */
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[ $.support.transition ];
    }

    if (tests.cssanimations()) {
		/* jshint -W053 */
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[ $.support.animation ];
    }

    if (tests.csstransforms()) {
		/* jshint -W053 */
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }

})(window.Zepto || window.jQuery, window, document);