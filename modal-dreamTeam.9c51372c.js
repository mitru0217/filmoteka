function e(e){return e&&e.__esModule?e.default:e}function t(e,t,o,a){Object.defineProperty(e,t,{get:o,set:a,enumerable:!0,configurable:!0})}var o=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;o.register("jMHcT",(function(t,a){var n=o("krGWQ"),l=o("cFuIO");function r(e){"Escape"===e.key&&s()}function d(e){e.target===n.modalBackdrop&&s()}function s(){n.modalBackdrop.firstElementChild.classList.remove("team-modal"),n.modalBackdrop.firstElementChild.classList.add("modal"),n.modalBackdrop.classList.remove("modal-open"),document.body.style.overflow="overlay",document.body.classList.remove("modal-open"),document.removeEventListener("keydown",r),n.modalBackdrop.removeEventListener("keydown",d),n.modalBackdrop.firstElementChild.dataset.id=""}console.log(n.btnOnModalTeam),n.btnOnModalTeam.addEventListener("click",(function(t){t.preventDefault(),n.modalBackdrop.firstElementChild.innerHTML="",m.innerHTML="",c.innerHTML="",n.modalBackdrop.firstElementChild.insertAdjacentElement("beforeend",c),c.classList.add("team-modal__title"),c.insertAdjacentHTML("beforeend","Моя команда"),n.modalBackdrop.firstElementChild.insertAdjacentElement("beforeend",m),n.modalBackdrop.firstElementChild.insertAdjacentHTML("beforeend",i),m.classList.add("team-modal__list"),e(l).map((e=>{const t=`<li class="team-modal__item">\n\t\t<img src="${e.img}" class="team-modal__pic">\n\t\t<h2 class="team-modal__name">${e.name}</h2>\n    <p class="team-modal__role">${e.role}</p>\n\t\t<div>\n\t\t<a href="${e.git}" target="_blank" class="team-modal__link">\n      <svg \n        xmlns="http://www.w3.org/2000/svg" \n        width="24" \n        height="24" \n        viewBox="0 0 24 24"\n      >\n        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"\n        />\n      </svg>\n\t\t</a>\n\t\t</div>\n\t\t</li>`;m.insertAdjacentHTML("beforeend",t)})),n.modalBackdrop.classList.add("modal-open"),document.body.style.overflow="hidden",document.body.classList.add("modal-open"),n.modalBackdrop.addEventListener("click",d),document.addEventListener("keydown",r),document.querySelector(".modal__btn-closs").addEventListener("click",s),n.modalBackdrop.firstElementChild.classList.add("team-modal"),n.modalBackdrop.firstElementChild.classList.remove("modal")}));const i='\n<button class="modal__btn-closs btn__closs-modal">\n      <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="14"\n        height="14"\n        fill="currentColor"\n        class="bi bi-x-lg"\n        viewBox="0 0 16 16"\n      >\n        <path\n          d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"\n        />\n      </svg>\n    </button>\n',m=document.createElement("ul"),c=document.createElement("h1")})),o.register("krGWQ",(function(e,o){t(e.exports,"btnOnModalTeam",(function(){return n})),t(e.exports,"modalBackdrop",(function(){return l}));const a={form:document.querySelector(".js-search-form"),searchBtn:document.querySelector(".js-search-btn"),btnOnModalTeam:document.querySelector(".team-link"),modalBackdrop:document.querySelector(".modal-backdrop"),btnWatched:document.querySelector("#watched"),btnQueue:document.querySelector("#queue")},{btnOnModalTeam:n,modalBackdrop:l}=a})),o.register("cFuIO",(function(e,t){e.exports=JSON.parse('[{"name":"Ilya Kolomak","role":"Team Lead","git":"https://github.com/ilya-kolomak","img":"https://avatars.githubusercontent.com/u/99127402?v=4"},{"name":" ","role":"Scrum Master","git":" ","img":" "},{"name":"Serhii Artyshchuk","role":"Developer","git":"https://github.com/LachesisAsa","img":"https://avatars.githubusercontent.com/u/104760743?s=96&v=4"},{"name":"Tanya Kuchak","role":"Developer","git":"https://github.com/TanyaKuchak","img":"https://avatars.githubusercontent.com/u/105127427?v=4"},{"name":"Alisa Verbitska","role":"Developer","git":"https://github.com/VerbitskaAlisa","img":"https://avatars.githubusercontent.com/u/104210874?v=4"},{"name":"Oleksii Nedohybchenko","role":"Developer","git":"https://github.com/aleksnedo","img":"https://avatars.githubusercontent.com/u/104201289?v=4"},{"name":"Nikita Polozov","role":"Developer","git":"https://github.com/Npolozov","img":"https://avatars.githubusercontent.com/u/103377917?v=4"},{"name":"Veronika Terletska","role":"Developer","git":"https://github.com/VeronikaTerletska","img":"https://avatars.githubusercontent.com/u/104487544?s=400&u=ee1ed9b353f046a781415b57f2d339fb54a9c546&v=4"},{"name":" ","role":"Developer","git":" ","img":" "},{"name":" ","role":"Developer","git":" ","img":" "},{"name":" ","role":"Developer","git":" ","img":" "}]')}));
//# sourceMappingURL=modal-dreamTeam.9c51372c.js.map