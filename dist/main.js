!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{try{let e=0;const t=document.querySelector(".head"),n=document.querySelector(".clubs-list > ul"),o=document.getElementById("free_visit_form"),c=document.getElementById("callback_form");t.addEventListener("click",t=>{const l=t.target;l.matches(".clubs-list > p")&&(e++,n.style.display="block"),l.matches(".open-popup")&&(o.style.display="block"),l.matches(".callback-btn")&&(c.style.display="block")}),document.body.addEventListener("click",t=>{const l=t.target;2===e?l.closest(".clubs-list > ul")||(e=0,n.style.display="none"):1===e&&(l.closest(".club-select")||(e=0,n.style.display="none")),(l.matches(".close_icon")||l.matches(".overlay")&&!l.closest(".form-content"))&&(o.style.display="none",c.style.display="none")})}catch(e){console.warn("openHeadElem.js",e)}};var c=()=>{try{const e=document.getElementById("thanks"),t=e.querySelector(".form-content");let n={};const o=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});document.querySelectorAll("form").forEach(c=>{c.addEventListener("submit",l=>{l.preventDefault();const r=c.querySelector('input[type="checkbox"]');if(r&&!r.checked)return c.querySelector(".personal-data > label").style.border="2px solid red",void r.addEventListener("change",()=>{r.checked&&(c.querySelector(".personal-data > label").style.border="")});new FormData(c).forEach((e,t)=>{n[t]=e}),o(n).then(t=>{if(200!==t.status)throw new Error("Что-то пошло не так...");e.style.display="block"}).catch(n=>{t.innerHTML=`\n                            <h4>Ошибка отправки!</h4>\n                            <p>${n} \n                            <br><br>\n                            Пожалуйста, попробуйте позже...</p>\n                            <br>\n                        `,e.style.display="block"}).finally(()=>{c.querySelectorAll("input").forEach(e=>{"radio"!==e.getAttribute("type")&&(e.value=""),e.checked=""}),n={}})})})}catch(e){console.warn("sendForm.js",e)}};var l=()=>{try{const e=document.querySelector(".fixed-gift"),t=document.getElementById("gift"),n=document.getElementById("thanks");e&&e.addEventListener("click",()=>{t.style.display="block",e.style.display="none"}),t&&t.addEventListener("click",e=>{const n=e.target;(n.matches(".overlay")&&!n.matches(".form-content")||n.matches(".close-btn")||n.matches(".close_icon"))&&(t.style.display="none")}),n&&n.addEventListener("click",e=>{const t=e.target;(t.matches(".overlay")&&!t.matches(".form-content")||t.matches(".close-btn")||t.matches(".close_icon"))&&(n.style.display="none")})}catch(e){console.warn("openPopup.js",e)}};var r=function(e,t="+7 (___) ___-__-__"){try{const o=document.querySelectorAll(e);function n(e){const n=e.keyCode,o=t,c=o.replace(/\D/g,""),l=this.value.replace(/\D/g,"");let r=0,s=o.replace(/[_\d]/g,(function(e){return r<l.length?l.charAt(r++)||c.charAt(r):e}));r=s.indexOf("_"),-1!=r&&(s=s.slice(0,r));let a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of o)e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}catch(e){console.warn("maskPhone.js",e)}};var s=()=>{try{document.body.addEventListener("input",e=>{const t=e.target;t.matches('input[name="name"]')&&(t.value=t.value.replace(/[^а-я ]/gi,""))})}catch(e){console.warn("validaition.js",e)}};var a=(e,t)=>{try{const n=document.querySelector(e),o=n.querySelectorAll(t);let c,l=0;o.forEach((t,n)=>{".main-slider"===e&&(t.style.position="absolute"),n>0&&(t.style.display="none")});const r=(e,t)=>{e[t].style.display="none"},s=(e,t)=>{e[t].style.display="block"},a=()=>{r(o,l),l++,l>=o.length&&(l=0),s(o,l)},i=()=>{c=setInterval(a,1e3)},d=()=>{clearInterval(c)};n.addEventListener("click",e=>{const t=e.target;t.closest(".prev")&&(r(o,l),l--,l<0&&(l=o.length-1),s(o,l)),t.closest(".next")&&(r(o,l),l++,l>=o.length&&(l=0),s(o,l))}),n.addEventListener("mouseover",e=>{const t=e.target;(t.closest(".prev")||t.closest(".next"))&&d()}),n.addEventListener("mouseout",e=>{e.target.closest(".prev, .next")&&i()}),i()}catch(e){console.warn("mainSlider.js",e)}};var i=()=>{try{const e=document.querySelectorAll(".services-slider > .slide"),t=document.querySelector(".services-slider > .next"),n=document.querySelector(".services-slider > .prev");let o,c=0;t.style.marginTop="55px",n.style.marginTop="55px";const l=()=>{e.forEach((e,t)=>{e.style.margin="auto",e.style.marginTop=0,e.style.display=t>=c&&t<=o-1+c?"block":"none"})},r=()=>{const e=document.documentElement.clientWidth;e>768&&(o=4),e<=768&&e>425&&(o=2),e<=425&&(o=1),l()};r(),t.addEventListener("click",()=>{c++,e.length-1<o-1+c&&(c=0),l()}),n.addEventListener("click",()=>{c--,c<=0&&(c=o-1+c),l()}),window.addEventListener("resize",r)}catch(e){console.warn("sliderCarousel.js",e)}};var d=()=>{try{const e=document.querySelector(".menu-button"),t=document.querySelector(".popup-menu"),n=()=>{if(document.documentElement.clientWidth<768){e.addEventListener("click",()=>{t.style.display="flex"}),t.addEventListener("click",e=>{const n=e.target;(n.matches(".close-menu-btn > img")||n.matches(".scroll > a"))&&(t.style.display="none")});const n=document.querySelector(".top-menu"),o=document.querySelector(".head-slider");window.addEventListener("scroll",()=>{let e=o.getBoundingClientRect().top;n.style.position=e<=0?"fixed":"relative"})}};n(),window.addEventListener("resize",n)}catch(e){console.warn("viewBurger.js",e)}};var u=()=>{try{const e=document.getElementById("totop"),t=document.querySelector("#clubs > .wrapper"),n=document.querySelector(".breadcrumbs");let o;window.addEventListener("scroll",()=>{t&&(o=t.getBoundingClientRect().top),n&&(o=n.getBoundingClientRect().top),e.style.display=o<=100?"block":"none"})}catch(e){console.warn("windowScroll.js",e)}};var y=()=>{try{const e=document.getElementById("card_order"),t=document.getElementById("price-total"),n=[1999,9900,13900,19900],o=[2999,14990,21990,24990];let c=1;const l=(e,n)=>{e.forEach((e,o)=>{if(o===n){let n=Math.floor(e*c);t.textContent=""+n}})},r=()=>{const t=e.querySelectorAll('.time > input[name="card-type"]'),c=document.getElementById("card_leto_mozaika");let r;t.forEach((e,t)=>{e&&e.checked&&(r=t)}),c&&c.checked?l(n,r):l(o,r)};r(),e.addEventListener("click",e=>{const t=e.target;(t.matches("#card_leto_mozaika")||t.matches("#card_leto_schelkovo")||t.matches('.time > input[name="card-type"]'))&&r()}),e.addEventListener("input",e=>{const t=e.target;t.matches('.price-message > input[name="PromoCode"]')&&(c="ТЕЛО2020"===t.value?.7:1,r())})}catch(e){console.warn("calculator.js",e)}};(()=>{try{document.querySelectorAll(".scroll > a").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substr(1);"close"!==n&&document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})})})}catch(e){console.warn("smoothDocument.js",e)}})(),o(),l(),r('input[name="phone"]'),s(),c(),a(".main-slider",".slide"),a(".gallery-slider",".slide"),i(),d(),u(),y()}]);