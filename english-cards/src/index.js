//import "./styles/styles.css";
import "./styles/scss.scss";
import json from "./assets/json";
import WebpackLogo from "./assets/bird.jpg";

let mainInner = document.querySelector(".main__inner");
let mainBtn = document.querySelectorAll(".main__btn");
let mainItem = document.querySelector(".main__item");
let sidebarModalLink = document.querySelectorAll(".sidebar-modal__link");
let checkBox = document.querySelector("input[name=checkbox]");
let audio = new Audio();
let catNow = returnNumberCat();

// sidebar
const bodyOverflow = document.querySelector("body");
const btns = document.querySelectorAll(".burger__menu-btn");
const modalOverlay = document.querySelector(".sidebar-modal__overlay");
const modals = document.querySelectorAll(".sidebar-modal__window");
const sidebarModal = document.querySelector(".sidebar-modal");
const menuBtn = document.querySelector(".menu-btn__burger");
const sbmlink = document.querySelectorAll(".sidebar-modal__link");
//sidebar end
let sideBarOpen = false;
const categories = [
  {
    name: "Action (set A)",
    image: "img/actionseta.jpg",
  },
  {
    name: "Action (set B)",
    image: "img/actionsetb.jpg",
  },

  {
    name: "Animal (set A)",
    image: "img/animalseta.jpg",
  },

  {
    name: "Animal (set B)",
    image: "img/animalsetb.jpg",
  },

  {
    name: "Clothes",
    image: "img/clothes.jpg",
  },

  {
    name: "Emotions",
    image: "img/emotions.jpg",
  },

  {
    name: "Vehicles",
    image: "img/vehicles.jpg",
  },
  {
    name: "Weather",
    image: "img/weather.jpg",
  },
];

const allcards = [
  [
    {
      word: "cry",
      translation: "плакать",
      image: "img/cry.jpg",
      audioSrc: "audio/cry.mp3",
    },
    {
      word: "dance",
      translation: "танцевать",
      image: "img/dance.jpg",
      audioSrc: "audio/dance.mp3",
    },
    {
      word: "dive",
      translation: "нырять",
      image: "img/dive.jpg",
      audioSrc: "audio/dive.mp3",
    },
    {
      word: "draw",
      translation: "рисовать",
      image: "img/draw.jpg",
      audioSrc: "audio/draw.mp3",
    },
    {
      word: "fish",
      translation: "ловить рыбу",
      image: "img/fish.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "fly",
      translation: "летать",
      image: "img/fly.jpg",
      audioSrc: "audio/fly.mp3",
    },
    {
      word: "hug",
      translation: "обнимать",
      image: "img/hug.jpg",
      audioSrc: "audio/hug.mp3",
    },
    {
      word: "jump",
      translation: "прыгать",
      image: "img/jump.jpg",
      audioSrc: "audio/jump.mp3",
    },
  ],
  [
    {
      word: "open",
      translation: "открывать",
      image: "img/open.jpg",
      audioSrc: "audio/open.mp3",
    },
    {
      word: "play",
      translation: "играть",
      image: "img/play.jpg",
      audioSrc: "audio/play.mp3",
    },
    {
      word: "point",
      translation: "указывать",
      image: "img/point.jpg",
      audioSrc: "audio/point.mp3",
    },
    {
      word: "ride",
      translation: "ездить",
      image: "img/ride.jpg",
      audioSrc: "audio/ride.mp3",
    },
    {
      word: "run",
      translation: "бегать",
      image: "img/run.jpg",
      audioSrc: "audio/run.mp3",
    },
    {
      word: "sing",
      translation: "петь",
      image: "img/sing.jpg",
      audioSrc: "audio/sing.mp3",
    },
    {
      word: "skip",
      translation: "пропускать, прыгать",
      image: "img/skip.jpg",
      audioSrc: "audio/skip.mp3",
    },
    {
      word: "swim",
      translation: "плавать",
      image: "img/swim.jpg",
      audioSrc: "audio/swim.mp3",
    },
  ],
  [
    {
      word: "cat",
      translation: "кот",
      image: "img/cat.jpg",
      audioSrc: "audio/cat.mp3",
    },
    {
      word: "chick",
      translation: "цыплёнок",
      image: "img/chick.jpg",
      audioSrc: "audio/chick.mp3",
    },
    {
      word: "chicken",
      translation: "курица",
      image: "img/chicken.jpg",
      audioSrc: "audio/chicken.mp3",
    },
    {
      word: "dog",
      translation: "собака",
      image: "img/dog.jpg",
      audioSrc: "audio/dog.mp3",
    },
    {
      word: "horse",
      translation: "лошадь",
      image: "img/horse.jpg",
      audioSrc: "audio/horse.mp3",
    },
    {
      word: "pig",
      translation: "свинья",
      image: "img/pig.jpg",
      audioSrc: "audio/pig.mp3",
    },
    {
      word: "rabbit",
      translation: "кролик",
      image: "img/rabbit.jpg",
      audioSrc: "audio/rabbit.mp3",
    },
    {
      word: "sheep",
      translation: "овца",
      image: "img/sheep.jpg",
      audioSrc: "audio/sheep.mp3",
    },
  ],
  [
    {
      word: "bird",
      translation: "птица",
      image: "img/bird.jpg",
      audioSrc: "audio/bird.mp3",
    },
    {
      word: "fish",
      translation: "рыба",
      image: "img/fish1.jpg",
      audioSrc: "audio/fish.mp3",
    },
    {
      word: "frog",
      translation: "жаба",
      image: "img/frog.jpg",
      audioSrc: "audio/frog.mp3",
    },
    {
      word: "giraffe",
      translation: "жираф",
      image: "img/giraffe.jpg",
      audioSrc: "audio/giraffe.mp3",
    },
    {
      word: "lion",
      translation: "лев",
      image: "img/lion.jpg",
      audioSrc: "audio/lion.mp3",
    },
    {
      word: "mouse",
      translation: "мышь",
      image: "img/mouse.jpg",
      audioSrc: "audio/mouse.mp3",
    },
    {
      word: "turtle",
      translation: "черепаха",
      image: "img/turtle.jpg",
      audioSrc: "audio/turtle.mp3",
    },
    {
      word: "dolphin",
      translation: "дельфин",
      image: "img/dolphin.jpg",
      audioSrc: "audio/dolphin.mp3",
    },
  ],
  [
    {
      word: "skirt",
      translation: "юбка",
      image: "img/skirt.jpg",
      audioSrc: "audio/skirt.mp3",
    },
    {
      word: "pants",
      translation: "брюки",
      image: "img/pants.jpg",
      audioSrc: "audio/pants.mp3",
    },
    {
      word: "blouse",
      translation: "блузка",
      image: "img/blouse.jpg",
      audioSrc: "audio/blouse.mp3",
    },
    {
      word: "dress",
      translation: "платье",
      image: "img/dress.jpg",
      audioSrc: "audio/dress.mp3",
    },
    {
      word: "boot",
      translation: "ботинок",
      image: "img/boot.jpg",
      audioSrc: "audio/boot.mp3",
    },
    {
      word: "shirt",
      translation: "рубашка",
      image: "img/shirt.jpg",
      audioSrc: "audio/shirt.mp3",
    },
    {
      word: "coat",
      translation: "пальто",
      image: "img/coat.jpg",
      audioSrc: "audio/coat.mp3",
    },
    {
      word: "shoe",
      translation: "туфли",
      image: "img/shoe.jpg",
      audioSrc: "audio/shoe.mp3",
    },
  ],
  [
    {
      word: "sad",
      translation: "грустный",
      image: "img/sad.jpg",
      audioSrc: "audio/sad.mp3",
    },
    {
      word: "angry",
      translation: "сердитый",
      image: "img/angry.jpg",
      audioSrc: "audio/angry.mp3",
    },
    {
      word: "happy",
      translation: "счастливый",
      image: "img/happy.jpg",
      audioSrc: "audio/happy.mp3",
    },
    {
      word: "tired",
      translation: "уставший",
      image: "img/tired.jpg",
      audioSrc: "audio/tired.mp3",
    },
    {
      word: "surprised",
      translation: "удивлённый",
      image: "img/surprised.jpg",
      audioSrc: "audio/surprised.mp3",
    },
    {
      word: "scared",
      translation: "испуганный",
      image: "img/scared.jpg",
      audioSrc: "audio/scared.mp3",
    },
    {
      word: "smile",
      translation: "улыбка",
      image: "img/smile.jpg",
      audioSrc: "audio/smile.mp3",
    },
    {
      word: "laugh",
      translation: "смех",
      image: "img/laugh.jpg",
      audioSrc: "audio/laugh.mp3",
    },
  ],
  [
    {
      word: "airplane",
      translation: "самолёт",
      image: "img/airplane.gif",
      audioSrc: "audio/airplane.mp3",
    },
    {
      word: "ambulance",
      translation: "Скорая помощь",
      image: "img/ambulance.gif",
      audioSrc: "audio/ambulance.mp3",
    },
    {
      word: "bicycle",
      translation: "велосипед",
      image: "img/bicycle.gif",
      audioSrc: "audio/bicycle.mp3",
    },
    {
      word: "bus",
      translation: "автобус",
      image: "img/bus.gif",
      audioSrc: "audio/bus.mp3",
    },
    {
      word: "fire-engine",
      translation: "пожарная машина",
      image: "img/fire-engine.gif",
      audioSrc: "audio/fire-engine.mp3",
    },
    {
      word: "lorry",
      translation: "грузовик",
      image: "img/lorry.gif",
      audioSrc: "audio/lorry.mp3",
    },
    {
      word: "motorbike",
      translation: "мотоцикл",
      image: "img/motorbike.gif",
      audioSrc: "audio/motorbike.mp3",
    },
    {
      word: "van",
      translation: "фургон",
      image: "img/van.gif",
      audioSrc: "audio/van.mp3",
    },
  ],
  [
    {
      word: "blizzard",
      translation: "снежная буря",
      image: "img/blizzard.gif",
      audioSrc: "audio/blizzard.mp3",
    },
    {
      word: "clear",
      translation: "ясно",
      image: "img/clear.gif",
      audioSrc: "audio/clear.mp3",
    },
    {
      word: "freezing",
      translation: "леденящий",
      image: "img/freezing.gif",
      audioSrc: "audio/freezing.mp3",
    },
    {
      word: "hot",
      translation: "жарко",
      image: "img/hot.gif",
      audioSrc: "audio/hot.mp3",
    },
    {
      word: "rainbow",
      translation: "радуга",
      image: "img/rainbow.gif",
      audioSrc: "audio/rainbow.mp3",
    },
    {
      word: "snow",
      translation: "снег",
      image: "img/snow.gif",
      audioSrc: "audio/snow.mp3",
    },
    {
      word: "sun",
      translation: "солнце",
      image: "img/sun.gif",
      audioSrc: "audio/sun.mp3",
    },
    {
      word: "tornado",
      translation: "смерч",
      image: "img/tornado.gif",
      audioSrc: "audio/tornado.mp3",
    },
  ],
];

// create categories
function categoriesGrid() {
  for (let i = 0; i < categories.length; i += 1) {
    let mainCatCard = `
<div class="main__cat-item">
  <div class="main__cat-card">
      <img class="main__cat-img" src="${categories[i].image}" alt="${categories[i].name}">
      <span class="main__cat-title">${categories[i].name}</span>
  </div>
</div>
       `;
    mainInner.insertAdjacentHTML("beforeend", mainCatCard);
  }
}

// DELETE CATEGORIES
function deleteCategories() {
  mainInner.innerHTML = "";
}

// CREATE CARDS

function cardGrid(j) {
  for (let i = 0; i < allcards[j].length; i += 1) {
    let mainCard = `
<div class="main__item">
<div class="main__card">
<div class="main__face main__face_front">
  <img class="main__img" src="${allcards[j][i].image}" alt="${allcards[j][i].word}">
  <span class="main__title">${allcards[j][i].word}</span>
  <audio id="audio${i}" src="${allcards[j][i].audioSrc}"></audio>
  <button class="main__btn" type="button"><img src="img/flipflop.png" alt="flipflop"></button>
</div>
<div class="main__face main__face_back">
<img class="main__img" src="${allcards[j][i].image}" alt="${allcards[j][i].word}">
<span class="main__title-back">${allcards[j][i].translation}</span>
</div>
</div>
</div>
`;
    mainInner.insertAdjacentHTML("beforeend", mainCard);
  }
}

// PLAY AUDIO
function playAudio(element) {
  audio.src = element;
  audio.play();
}

categoriesGrid();

// return number of categorie
function returnNumberCat(x) {
  return x;
}

// Remove active menu
function checkMenu() {
  sidebarModalLink.forEach((element) => {
    element.classList.remove("sidebar-modal__link_active");
  });
}

// CREATE GRID ELEMENTS CATEGORIES AT MENU
sidebarModalLink.forEach((element, index, array) => {
  element.addEventListener("click", function() {
    let indexCatMenu = index;
    checkMenu();
    element.classList.add("sidebar-modal__link_active");
    returnNumberCat(indexCatMenu);
    deleteCategories();
    cardGrid(indexCatMenu);
    // CARDS FLIP-FLOP ON
    document.querySelectorAll(".main__card").forEach((element) => {
      element.addEventListener("click", function() {
        element.classList.add("is-flipped");
        // PLAY AUDIO
        playAudio(element.querySelector("audio").src);
      });
    });
    // CARDS FLIP-FLOP OFF
    document.querySelectorAll(".main__card").forEach((element) => {
      element.addEventListener("mouseleave", function() {
        setTimeout(function() {
          element.classList.remove("is-flipped");
        }, 500);
      });
    });
  });
});

// ENTER CATERGORIES
let categoriesLink = document
  .querySelectorAll(".main__cat-item")
  .forEach((element, index, array) => {
    element.addEventListener("click", function() {
      let indexCategorie = index;

      returnNumberCat(indexCategorie);
      deleteCategories();
      cardGrid(indexCategorie);
      // CARDS FLIP-FLOP ON
      document.querySelectorAll(".main__card").forEach((element) => {
        element.addEventListener("click", function() {
          element.classList.add("is-flipped");
          // PLAY AUDIO
          playAudio(element.querySelector("audio").src);
        });
      });
      // CARDS FLIP-FLOP OFF
      document.querySelectorAll(".main__card").forEach((element) => {
        element.addEventListener("mouseleave", function() {
          setTimeout(function() {
            element.classList.remove("is-flipped");
          }, 500);
        });
      });
    });
  });

//
function titleHide() {
  document.querySelectorAll(".main__title").forEach((element) => {
    element.classList.toggle("main__title_hide");
  });
}

// Checked
checkBox.addEventListener("change", function() {
  if (this.checked) {
    document.querySelector("header").classList.add("header__play");
    document.getElementById("playbtn").classList.add("header__play-btn_on");
    titleHide();
  } else {
    document.querySelector("header").classList.remove("header__play");
    document.getElementById("playbtn").classList.remove("header__play-btn_on");
    titleHide();
  }
});

document.getElementById("playbtn").addEventListener("click", function() {});

// SIDEBAR****************************************************
btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");
    modals.forEach((el) => {
      el.classList.remove("sidebar-modal_visible");
    });
    if (sideBarOpen === false) {
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("sidebar-modal_visible");
      bodyOverflow.classList.add("overflow-hidden");
      modalOverlay.classList.add("sidebar-modal__overlay_visible");
      sidebarModal.classList.add("sidebar-modal-main_visible");
      menuBtn.classList.add("menu-btn_open");
      sideBarOpen = true;
    } else if (sideBarOpen === true) {
      bodyOverflow.classList.remove("overflow-hidden");
      modalOverlay.classList.remove("sidebar-modal__overlay_visible");
      sidebarModal.classList.remove("sidebar-modal-main_visible");
      menuBtn.classList.remove("menu-btn_open");
      sideBarOpen = false;
    }
  });
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay && sideBarOpen == true) {
    bodyOverflow.classList.remove("overflow-hidden");
    modalOverlay.classList.remove("sidebar-modal__overlay_visible");
    sidebarModal.classList.remove("sidebar-modal-main_visible");
    menuBtn.classList.remove("menu-btn_open");
    sideBarOpen = false;
    modals.forEach((el) => {
      el.classList.remove("sidebar-modal_visible");
    });
  }
});

const back = document.querySelector(".sidebar-modal__back");
back.addEventListener("click", (e) => {
  if (sideBarOpen == true) {
    bodyOverflow.classList.remove("overflow-hidden");
    modalOverlay.classList.remove("sidebar-modal__overlay_visible");
    sidebarModal.classList.remove("sidebar-modal-main_visible");
    menuBtn.classList.remove("menu-btn_open");
    sideBarOpen = false;
    modals.forEach((el) => {
      el.classList.remove("sidebar-modal_visible");
    });
  }
});
