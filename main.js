(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>T});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),s=t.n(c),d=new URL(t(43),t.b),l=new URL(t(638),t.b),p=new URL(t(577),t.b),u=new URL(t(966),t.b),f=new URL(t(47),t.b),g=new URL(t(954),t.b),h=new URL(t(572),t.b),m=a()(o());m.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);"]);var b=s()(d),y=s()(l),x=s()(p),v=s()(u),w=s()(f),k=s()(g),S=s()(h);m.push([n.id,`* {\n  font-family: "Inter", sans-serif;\n  font-optical-sizing: auto;\n  font-style: normal;\n  color: #181818;\n  transition: 0.5s ease;\n}\n\nbody {\n  background: url(${b});\n  background-size: cover;\n  height: 100vh;\n  background-repeat: no-repeat;\n  overflow: hidden;\n}\n\nh1 {\n  font-size: 38px;\n  font-weight: 500;\n  width: 100px;\n  margin-bottom: -10px;\n}\n\n.container {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -10px auto;\n  height: 700px;\n  width: 350px;\n  margin-left: -190px;\n  margin-top: -370px;\n  padding: 20px;\n  border-radius: 20px;\n  backdrop-filter: blur(30px);\n}\n\n.night {\n  border: 5px solid transparent;\n  background: \n  linear-gradient(130deg, #30425A 0%, #061325 100%) padding-box, \n  linear-gradient(320deg, #5D7291 0%, #5D7291 100%) border-box;\n  backdrop-filter: blur(10px);\n  opacity: 0.8;\n}\n\n.day {\n  border: 5px solid transparent;\n  background: \n  linear-gradient(130deg, #dfedf0 0%, #c0dee7 100%) padding-box, \n  linear-gradient(320deg, #d8f8ff 0%, #ebfaff 100%) border-box;\n  backdrop-filter: blur(10px);\n  opacity: 0.8;\n}\n\n.search-input {\n  gap: 20px;\n  display: flex;\n  align-items: center;\n}\n\n.search-input .img-holder {\n  background: url(${y});\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  width: 24px;\n  height: 24px;\n  opacity: 0.7;\n}\n\n.search-input .img-holder:hover {\n  cursor: pointer;\n  opacity: 1;\n  transition: 0.3s ease;\n}\n\ninput {\n  transition: 0.5s ease;\n  background: #ffffff80;\n  border: none;\n  font-size: 1.2rem;\n  border-radius: 10px;\n  padding: 5px 10px;\n}\n\ninput:focus {\n  outline: none;\n  scale: 1.05;\n}\n\n.low-opacity {\n  color: #18181880;\n}\n\n.temperature-info {\n  margin: 30px 0px 0px;\n  display: flex;\n  justify-content: center;\n  scale: 1.2;\n}\n\n.temperature-info .img-holder {\n  position: relative;\n  top: -15px;\n  left: -30px;\n  background: url(${x});\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 10rem;\n  width: 45%;\n}\n\n.weather-text {\n  position: relative;\n  left: -30px;\n  top: 0px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.weather-text .temperature {\n  font-size: 5rem;\n  font-weight: 700;\n  color: #303345;\n}\n\n.weather-text .status {\n  margin-top: -10px;\n  font-size: 1.2rem;\n  font-weight: 400;\n  color: #303345;\n}\n\n.weather-text p {\n  position: absolute;\n  right: -20px;\n  color: #303345;\n}\n\n.weather-description {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.info-row {\n  display: flex;\n  align-items: center;\n  border: 1px solid white;\n  gap: 5px;\n  background: linear-gradient(130deg, #ffffff40 0%, #ffffff00 50%, #ffffff40 100%);\n  border-radius: 15px;\n}\n\n.info-row .img-holder {\n  padding-left: 30px;\n  height: 30px;\n  width: 30px;\n}\n\n.info-row:nth-child(1) .img-holder{\n  background: url(${v});\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.info-row:nth-child(2) .img-holder {\n  background: url(${w});\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.info-row:nth-child(3) .img-holder {\n  background: url(${k});\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.info-row p:nth-child(3) {\n  position: absolute;\n  right: 50px;\n}\n\n.day-selector {\n  margin-top: 10px;\n  justify-content: space-between;\n  padding: 0px 5px; \n  display: flex;\n}\n\n.day-selector p {\n  color: #3a3a3a;\n}\n\n.day-selector p:hover {\n  transition: 0.2s ease-in-out;\n  cursor: pointer;\n  opacity: 0.8;\n  scale: 1.05;\n}\n\n.hour-element {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 50px;\n  border: 1px solid white;\n  border-radius: 20px;\n  padding: 3px;\n  background: linear-gradient(180deg, #ffffff40 0%, #ffffff00 50%, #ffffff40 100%);;\n}\n\n.hour-element .img-holder {\n  width: 70px;\n  height: 35px;\n  background: url(${S});\n  background-size: 50px;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.hour-element p {\n  font-size: 13px;\n  margin: 5px;\n}\n\n.by-hour-forecast {\n  overflow-x: scroll;\n  gap: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n\n::-webkit-scrollbar {\n  width: 3px;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 0px rgb(207, 207, 207); \n  border-radius: 10px;\n}\n \n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: 0;\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #75757590; \n}\n\n::-webkit-scrollbar-button {\n  display: hidden;\n}\n\n#country {\n  margin-top: 20px;\n  margin-bottom: 0;\n  width: 360px;\n}\n\n#city {\n  margin-top: 0;\n  width: 360px;\n}\n\n.night input {\n  border: none;\n  font-size: 1.2rem;\n  border-radius: 10px;\n  padding: 5px 10px;\n  background: #f1f1f180;\n  color: white;\n}\n\n.night .search-input .img-holder {\n  filter: invert(100)\n}\n\n.night ::placeholder {\n  color: rgb(255, 255, 255);\n  opacity: 1; /* Firefox */\n}\n\n.night p, \n.night h1, \n.night h2 {\n  color: white;\n}\n\n.night #today, \n.night #tomorrow, \n.night #next7 {\n  color: white;\n}\n\n.night .temperature {\n  color: white;\n}\n\n.night .status {\n  color: white;\n}`,""]);const T=m},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},966:(n,e,t)=>{n.exports=t.p+"f920265d6a78cc0ccced.png"},47:(n,e,t)=>{n.exports=t.p+"932dab91523680245092.png"},954:(n,e,t)=>{n.exports=t.p+"e8e16ca8afc897d37f37.png"},43:(n,e,t)=>{n.exports=t.p+"acf6d86caa40e6fe48df.jpg"},572:(n,e,t)=>{n.exports=t.p+"291d93f5d5b16dc679f6.png"},638:(n,e,t)=>{n.exports=t.p+"ff6c3cb276803a65ebd3.png"},577:(n,e,t)=>{n.exports=t.p+"5a045299329e92a0846a.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),u=t.n(p),f=t(113),g=t.n(f),h=t(365),m={};m.styleTagTransform=g(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=u(),o()(h.A,m),h.A&&h.A.locals&&h.A.locals;const b=n=>Math.round(5*(n-32)/9),y=n=>{let e=new Date(n);return`${["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][e.getDay()]}, ${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]} ${e.getDate()}`},x=function(){const n=n=>{console.log(n);let e=n.resolvedAddress,t=n.address,r=n.currentConditions;return{resolvedAddress:e,address:t,localTime:r.datetime,currentDayInfo:{feelslike:r.feelslike,temp:r.temp,humidity:r.humidity,windspeed:r.windspeed,dew:r.dew,icon:r.icon,conditions:r.conditions,hours:n.days[0].hours},daysArray:n.days.slice(1,8)}};return{makeRequest:e=>{fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${e}?key=V8AB8JYQSBKAY28E63RHLNLZW`,{mode:"cors"}).then((n=>n.json())).then((e=>n(e))).then((n=>q.displayData(n))).catch((n=>console.error("Error:",n)))},parseRequest:n}}();var v=t(572);const w=t.p+"628ea75271b34e308457.png",k=t.p+"07291cf626d4ae0eb4b6.png",S=t.p+"13a822046d4cbe5bdd25.png",T=t.p+"3f3d8e96865dff579ead.png",L=t.p+"8681f6a7e7560f3bd1aa.png",$=t.p+"a7d9adb13b8b25c19d52.jpg";var C=t(43);const q=function(){const n={snow:v,rain:v,fog:w,wind:w,cloudy:w,"partly-cloudy-day":k,"partly-cloudy-night":S,"clear-day":T,"clear-night":L},e=e=>{let t=document.querySelector(".by-hour-forecast");if(t.innerHTML="",+e.localTime.slice(0,2)>=19&&+e.localTime.slice(0,2)<=23||+e.localTime.slice(0,2)<=6){document.body.style.background=`url(${$})`,document.body.style.backgroundSize="cover",document.body.style.height="100vh",document.body.style.backgroundRepeat="no-repeat",document.body.style.overflow="hidden";let n=document.querySelector(".container");n.classList.remove("day"),n.classList.add("night")}if(+e.localTime.slice(0,2)<=19&&+e.localTime.slice(0,2)>=6){document.body.style.background=`url(${C})`,document.body.style.backgroundSize="cover",document.body.style.height="100vh",document.body.style.backgroundRepeat="no-repeat",document.body.style.overflow="hidden";let n=document.querySelector(".container");n.classList.remove("night"),n.classList.add("day")}e.currentDayInfo.hours.slice(+e.localTime.slice(0,2)-1,24).forEach((r=>{const o=document.createElement("div");o.classList.add("hour-element"),o.innerHTML=`\n        <p class="hour">${+r.datetime.slice(0,2)==e.localTime.slice(0,2)?"Now":r.datetime.slice(0,5)}</p>\n        <div class="img-holder"></div>\n        <p>${b(r.temp)} °C</p>\n      `;const i=o.querySelector(".img-holder");i.style.background=`url(${n[r.icon]})`,i.style.backgroundSize="contain",i.style.backgroundPosition="center",i.style.backgroundRepeat="no-repeat",t.appendChild(o)}))},t=e=>{let t=document.querySelector(".by-hour-forecast");t.innerHTML="",e.daysArray[0].hours.forEach((e=>{const r=document.createElement("div");r.classList.add("hour-element"),r.innerHTML=`\n        <p class="hour">${e.datetime.slice(0,5)}</p>\n        <div class="img-holder"></div>\n        <p>${b(e.temp)} °C</p>\n      `;const o=r.querySelector(".img-holder");o.style.background=`url(${n[e.icon]})`,o.style.backgroundSize="contain",o.style.backgroundPosition="center",o.style.backgroundRepeat="no-repeat",t.appendChild(r)}))};return{getInputValue:()=>document.querySelector("#search-input").value,displayData:r=>{const o=document.querySelector("#country"),i=document.querySelector("#city");o.textContent=r.resolvedAddress.split(",")[r.resolvedAddress.split(",").length-1],i.textContent=r.address,document.querySelector("#date").textContent=y(new Date);const a=document.querySelector(".temperature"),c=document.querySelector(".status");a.textContent=b(r.currentDayInfo.temp),c.textContent=r.currentDayInfo.conditions;const s=document.querySelector("#weather-icon");s.style.background=`url(${n[r.currentDayInfo.icon]})`,s.style.backgroundSize="contain",s.style.backgroundPosition="center",s.style.backgroundRepeat="no-repeat";let d=document.querySelectorAll(".info-row");d[0].innerHTML=`\n      <div class="img-holder"></div>\n      <p>Humidity</p>\n      <p>${r.currentDayInfo.humidity} %</p>`,d[1].innerHTML=`\n      <div class="img-holder"></div>\n      <p>Feels like</p>\n      <p>${b(r.currentDayInfo.feelslike)} °C</p>`,d[2].innerHTML=`\n      <div class="img-holder"></div>\n      <p>Wind</p>\n      <p>${r.currentDayInfo.windspeed} m/s</p>`,e(r),(n=>{document.querySelector("#today").addEventListener("click",(()=>{e(n)}))})(r),(n=>{document.querySelector("#tomorrow").addEventListener("click",(()=>{t(n)}))})(r),(e=>{document.querySelector("#next7").addEventListener("click",(()=>{(e=>{let t=document.querySelector(".by-hour-forecast");t.innerHTML="",e.daysArray.forEach((e=>{const r=document.createElement("div");r.classList.add("hour-element"),r.innerHTML=`\n        <p class="hour">${e.datetime.slice(5).split("-")[0]}.${e.datetime.slice(5).split("-")[1]}</p>\n        <div class="img-holder"></div>\n        <p>${b(e.temp)} °C</p>\n      `;const o=r.querySelector(".img-holder");o.style.background=`url(${n[e.icon]})`,o.style.backgroundSize="contain",o.style.backgroundPosition="center",o.style.backgroundRepeat="no-repeat",t.appendChild(r)}))})(e)}))})(r)},assignEnterClick:()=>{const n=document.querySelector("input");n.addEventListener("keyup",(e=>{"Enter"===e.key&&(e.preventDefault(),x.makeRequest(n.value))}))},displayTomorrowByHour:t}}();x.makeRequest(q.getInputValue()),q.assignEnterClick()})();