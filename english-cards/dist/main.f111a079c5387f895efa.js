(()=>{"use strict";var i={};i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"==typeof window)return window}}(),(()=>{var a;i.g.importScripts&&(a=i.g.location+"");var e=i.g.document;if(!a&&e&&(e.currentScript&&(a=e.currentScript.src),!a)){var o=e.getElementsByTagName("script");o.length&&(a=o[o.length-1].src)}if(!a)throw new Error("Automatic publicPath is not supported in this browser");a=a.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=a})();i.p;let a=document.querySelector(".main__inner"),e=(document.querySelectorAll(".main__btn"),document.querySelector(".main__item"),document.querySelectorAll(".sidebar-modal__link")),o=document.querySelector("input[name=checkbox]"),r=new Audio;const t=document.querySelector("body"),n=document.querySelectorAll(".burger__menu-btn"),d=document.querySelector(".sidebar-modal__overlay"),m=document.querySelectorAll(".sidebar-modal__window"),s=document.querySelector(".sidebar-modal"),l=document.querySelector(".menu-btn__burger");document.querySelectorAll(".sidebar-modal__link");let c=!1;const g=[{name:"Action (set A)",image:"img/actionseta.jpg"},{name:"Action (set B)",image:"img/actionsetb.jpg"},{name:"Animal (set A)",image:"img/animalseta.jpg"},{name:"Animal (set B)",image:"img/animalsetb.jpg"},{name:"Clothes",image:"img/clothes.jpg"},{name:"Emotions",image:"img/emotions.jpg"},{name:"Vehicles",image:"img/vehicles.jpg"},{name:"Weather",image:"img/weather.jpg"}],u=[[{word:"cry",translation:"плакать",image:"img/cry.jpg",audioSrc:"audio/cry.mp3"},{word:"dance",translation:"танцевать",image:"img/dance.jpg",audioSrc:"audio/dance.mp3"},{word:"dive",translation:"нырять",image:"img/dive.jpg",audioSrc:"audio/dive.mp3"},{word:"draw",translation:"рисовать",image:"img/draw.jpg",audioSrc:"audio/draw.mp3"},{word:"fish",translation:"ловить рыбу",image:"img/fish.jpg",audioSrc:"audio/fish.mp3"},{word:"fly",translation:"летать",image:"img/fly.jpg",audioSrc:"audio/fly.mp3"},{word:"hug",translation:"обнимать",image:"img/hug.jpg",audioSrc:"audio/hug.mp3"},{word:"jump",translation:"прыгать",image:"img/jump.jpg",audioSrc:"audio/jump.mp3"}],[{word:"open",translation:"открывать",image:"img/open.jpg",audioSrc:"audio/open.mp3"},{word:"play",translation:"играть",image:"img/play.jpg",audioSrc:"audio/play.mp3"},{word:"point",translation:"указывать",image:"img/point.jpg",audioSrc:"audio/point.mp3"},{word:"ride",translation:"ездить",image:"img/ride.jpg",audioSrc:"audio/ride.mp3"},{word:"run",translation:"бегать",image:"img/run.jpg",audioSrc:"audio/run.mp3"},{word:"sing",translation:"петь",image:"img/sing.jpg",audioSrc:"audio/sing.mp3"},{word:"skip",translation:"пропускать, прыгать",image:"img/skip.jpg",audioSrc:"audio/skip.mp3"},{word:"swim",translation:"плавать",image:"img/swim.jpg",audioSrc:"audio/swim.mp3"}],[{word:"cat",translation:"кот",image:"img/cat.jpg",audioSrc:"audio/cat.mp3"},{word:"chick",translation:"цыплёнок",image:"img/chick.jpg",audioSrc:"audio/chick.mp3"},{word:"chicken",translation:"курица",image:"img/chicken.jpg",audioSrc:"audio/chicken.mp3"},{word:"dog",translation:"собака",image:"img/dog.jpg",audioSrc:"audio/dog.mp3"},{word:"horse",translation:"лошадь",image:"img/horse.jpg",audioSrc:"audio/horse.mp3"},{word:"pig",translation:"свинья",image:"img/pig.jpg",audioSrc:"audio/pig.mp3"},{word:"rabbit",translation:"кролик",image:"img/rabbit.jpg",audioSrc:"audio/rabbit.mp3"},{word:"sheep",translation:"овца",image:"img/sheep.jpg",audioSrc:"audio/sheep.mp3"}],[{word:"bird",translation:"птица",image:"img/bird.jpg",audioSrc:"audio/bird.mp3"},{word:"fish",translation:"рыба",image:"img/fish1.jpg",audioSrc:"audio/fish.mp3"},{word:"frog",translation:"жаба",image:"img/frog.jpg",audioSrc:"audio/frog.mp3"},{word:"giraffe",translation:"жираф",image:"img/giraffe.jpg",audioSrc:"audio/giraffe.mp3"},{word:"lion",translation:"лев",image:"img/lion.jpg",audioSrc:"audio/lion.mp3"},{word:"mouse",translation:"мышь",image:"img/mouse.jpg",audioSrc:"audio/mouse.mp3"},{word:"turtle",translation:"черепаха",image:"img/turtle.jpg",audioSrc:"audio/turtle.mp3"},{word:"dolphin",translation:"дельфин",image:"img/dolphin.jpg",audioSrc:"audio/dolphin.mp3"}],[{word:"skirt",translation:"юбка",image:"img/skirt.jpg",audioSrc:"audio/skirt.mp3"},{word:"pants",translation:"брюки",image:"img/pants.jpg",audioSrc:"audio/pants.mp3"},{word:"blouse",translation:"блузка",image:"img/blouse.jpg",audioSrc:"audio/blouse.mp3"},{word:"dress",translation:"платье",image:"img/dress.jpg",audioSrc:"audio/dress.mp3"},{word:"boot",translation:"ботинок",image:"img/boot.jpg",audioSrc:"audio/boot.mp3"},{word:"shirt",translation:"рубашка",image:"img/shirt.jpg",audioSrc:"audio/shirt.mp3"},{word:"coat",translation:"пальто",image:"img/coat.jpg",audioSrc:"audio/coat.mp3"},{word:"shoe",translation:"туфли",image:"img/shoe.jpg",audioSrc:"audio/shoe.mp3"}],[{word:"sad",translation:"грустный",image:"img/sad.jpg",audioSrc:"audio/sad.mp3"},{word:"angry",translation:"сердитый",image:"img/angry.jpg",audioSrc:"audio/angry.mp3"},{word:"happy",translation:"счастливый",image:"img/happy.jpg",audioSrc:"audio/happy.mp3"},{word:"tired",translation:"уставший",image:"img/tired.jpg",audioSrc:"audio/tired.mp3"},{word:"surprised",translation:"удивлённый",image:"img/surprised.jpg",audioSrc:"audio/surprised.mp3"},{word:"scared",translation:"испуганный",image:"img/scared.jpg",audioSrc:"audio/scared.mp3"},{word:"smile",translation:"улыбка",image:"img/smile.jpg",audioSrc:"audio/smile.mp3"},{word:"laugh",translation:"смех",image:"img/laugh.jpg",audioSrc:"audio/laugh.mp3"}],[{word:"airplane",translation:"самолёт",image:"img/airplane.gif",audioSrc:"audio/airplane.mp3"},{word:"ambulance",translation:"Скорая помощь",image:"img/ambulance.gif",audioSrc:"audio/ambulance.mp3"},{word:"bicycle",translation:"велосипед",image:"img/bicycle.gif",audioSrc:"audio/bicycle.mp3"},{word:"bus",translation:"автобус",image:"img/bus.gif",audioSrc:"audio/bus.mp3"},{word:"fire-engine",translation:"пожарная машина",image:"img/fire-engine.gif",audioSrc:"audio/fire-engine.mp3"},{word:"lorry",translation:"грузовик",image:"img/lorry.gif",audioSrc:"audio/lorry.mp3"},{word:"motorbike",translation:"мотоцикл",image:"img/motorbike.gif",audioSrc:"audio/motorbike.mp3"},{word:"van",translation:"фургон",image:"img/van.gif",audioSrc:"audio/van.mp3"}],[{word:"blizzard",translation:"снежная буря",image:"img/blizzard.gif",audioSrc:"audio/blizzard.mp3"},{word:"clear",translation:"ясно",image:"img/clear.gif",audioSrc:"audio/clear.mp3"},{word:"freezing",translation:"леденящий",image:"img/freezing.gif",audioSrc:"audio/freezing.mp3"},{word:"hot",translation:"жарко",image:"img/hot.gif",audioSrc:"audio/hot.mp3"},{word:"rainbow",translation:"радуга",image:"img/rainbow.gif",audioSrc:"audio/rainbow.mp3"},{word:"snow",translation:"снег",image:"img/snow.gif",audioSrc:"audio/snow.mp3"},{word:"sun",translation:"солнце",image:"img/sun.gif",audioSrc:"audio/sun.mp3"},{word:"tornado",translation:"смерч",image:"img/tornado.gif",audioSrc:"audio/tornado.mp3"}]];function p(){a.innerHTML=""}function _(i){for(let e=0;e<u[i].length;e+=1){let o=`\n<div class="main__item">\n<div class="main__card">\n<div class="main__face main__face_front">\n  <img class="main__img" src="${u[i][e].image}" alt="${u[i][e].word}">\n  <span class="main__title">${u[i][e].word}</span>\n  <audio id="audio${e}" src="${u[i][e].audioSrc}"></audio>\n  <button class="main__btn" type="button"><img src="img/flipflop.png" alt="flipflop"></button>\n</div>\n<div class="main__face main__face_back">\n<img class="main__img" src="${u[i][e].image}" alt="${u[i][e].word}">\n<span class="main__title-back">${u[i][e].translation}</span>\n</div>\n</div>\n</div>\n`;a.insertAdjacentHTML("beforeend",o)}}function b(i){r.src=i,r.play()}!function(){for(let i=0;i<g.length;i+=1){let e=`\n<div class="main__cat-item">\n  <div class="main__cat-card">\n      <img class="main__cat-img" src="${g[i].image}" alt="${g[i].name}">\n      <span class="main__cat-title">${g[i].name}</span>\n  </div>\n</div>\n       `;a.insertAdjacentHTML("beforeend",e)}}(),e.forEach(((i,a,o)=>{i.addEventListener("click",(function(){let o=a;e.forEach((i=>{i.classList.remove("sidebar-modal__link_active")})),i.classList.add("sidebar-modal__link_active"),p(),_(o),document.querySelectorAll(".main__card").forEach((i=>{i.addEventListener("click",(function(){i.classList.add("is-flipped"),b(i.querySelector("audio").src)}))})),document.querySelectorAll(".main__card").forEach((i=>{i.addEventListener("mouseleave",(function(){setTimeout((function(){i.classList.remove("is-flipped")}),500)}))}))}))}));document.querySelectorAll(".main__cat-item").forEach(((i,a,e)=>{i.addEventListener("click",(function(){let i=a;p(),_(i),document.querySelectorAll(".main__card").forEach((i=>{i.addEventListener("click",(function(){i.classList.add("is-flipped"),b(i.querySelector("audio").src)}))})),document.querySelectorAll(".main__card").forEach((i=>{i.addEventListener("mouseleave",(function(){setTimeout((function(){i.classList.remove("is-flipped")}),500)}))}))}))}));function f(){document.querySelectorAll(".main__title").forEach((i=>{i.classList.toggle("main__title_hide")}))}o.addEventListener("change",(function(){this.checked?(document.querySelector("header").classList.add("header__play"),document.getElementById("playbtn").classList.add("header__play-btn_on"),f()):(document.querySelector("header").classList.remove("header__play"),document.getElementById("playbtn").classList.remove("header__play-btn_on"),f())})),document.getElementById("playbtn").addEventListener("click",(function(){})),n.forEach((i=>{i.addEventListener("click",(i=>{let a=i.currentTarget.getAttribute("data-path");m.forEach((i=>{i.classList.remove("sidebar-modal_visible")})),!1===c?(document.querySelector(`[data-target="${a}"]`).classList.add("sidebar-modal_visible"),t.classList.add("overflow-hidden"),d.classList.add("sidebar-modal__overlay_visible"),s.classList.add("sidebar-modal-main_visible"),l.classList.add("menu-btn_open"),c=!0):!0===c&&(t.classList.remove("overflow-hidden"),d.classList.remove("sidebar-modal__overlay_visible"),s.classList.remove("sidebar-modal-main_visible"),l.classList.remove("menu-btn_open"),c=!1)}))})),d.addEventListener("click",(i=>{i.target==d&&1==c&&(t.classList.remove("overflow-hidden"),d.classList.remove("sidebar-modal__overlay_visible"),s.classList.remove("sidebar-modal-main_visible"),l.classList.remove("menu-btn_open"),c=!1,m.forEach((i=>{i.classList.remove("sidebar-modal_visible")})))}));document.querySelector(".sidebar-modal__back").addEventListener("click",(i=>{1==c&&(t.classList.remove("overflow-hidden"),d.classList.remove("sidebar-modal__overlay_visible"),s.classList.remove("sidebar-modal-main_visible"),l.classList.remove("menu-btn_open"),c=!1,m.forEach((i=>{i.classList.remove("sidebar-modal_visible")})))}))})();