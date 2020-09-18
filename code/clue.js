// -----------------GENERAL VARIABLES-----------
const loader = document.querySelector(".loader-item");
const deck = document.querySelectorAll(".deck");

// ----------------OBJECTS---------------
const mrGreen = {
  title: "Mr",
  firstName: "Jacob",
  lastName: "Green",
  color: "green",
  description: "He has a lot of connections",
  age: 45,
  image: "assets/mr_green.jpg",
  occupation: "Entrepreneur",
  favoriteWeapon: "rope",
};

const colMustard = {
  title: "Colonel",
  firstName: "Jack",
  lastName: "Mustard",
  color: "yellow",
  description: "He is a dignified and dangerous military man",
  age: 60,
  image: "assets/col_mustard.jpg",
  occupation: "Colonel",
  favoriteWeapon: "pistol",
};

const msScarlett = {
  title: "Miss",
  firstName: "Cassandra",
  lastName: "Scarlett",
  color: "red",
  description: "She is a femme fatale.",
  age: 25,
  image: "assets/ms_scarlett.jpg",
  occupation: "Actress",
  favoriteWeapon: "knife",
};

const mrWhite = {
  title: "Mr",
  firstName: "Jim",
  lastName: "White",
  color: "white",
  description: "He is a dominant butler.",
  age: 65,
  image: "assets/mr_white.jpg",
  occupation: "Butler",
  favoriteWeapon: "candlestick",
};

const mrsPeacock = {
  title: "Mrs",
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "blue",
  description: "She is an elegant and classy aristocrat.",
  age: 42,
  image: "assets/mrs_peacock.jpg",
  occupation: "Socialite",
  favoriteWeapon: "piping",
};

const profPlum = {
  title: "Professor",
  firstName: "Henrietta",
  lastName: "Plum",
  color: "purple",
  description: "She is a quick witted professor with a dubious past",
  age: 46,
  image: "./assets/prof_plum.jpg",
  occupation: "Professor",
  favoriteWeapon: "wrench",
};

const rope = {
  id: "rope",
  name: "rope",
  weight: 10,
  image: "assets/rope.jpg",
};

const candlestick = {
  id: "candlesstick",
  name: "candlestick",
  weight: 25,
  image: "assets/candlestick.jpg",
};

const pistol = {
  id: "pistol",
  name: "pistol",
  weight: 15,
  image: "assets/revolver.jpg",
};

const knife = {
  id: "knife",
  name: "knife",
  weight: 12,
  image: "assets/knife.jpg",
};

const piping = {
  id: "piping",
  name: "piping",
  weight: 19,
  image: "assets/piping.jpg",
};

const wrench = {
  id: "wrench",
  name: "wrench",
  weight: 21,
  image: "assets/wrench.jpg",
};

const dumbbell = {
  id: "dumbbell",
  name: "dumbbell",
  weight: 35,
};

const axe = {
  id: "axe",
  name: "axe",
  weight: 7,
};

const bat = {
  id: "bat",
  name: "bat",
  weight: 4,
};

const trophy = {
  id: "trophy",
  name: "trophy",
  weight: 9,
};

const ballroom = {
  name: "ballroom",
  image: "assets/ballroom.jpg",
};

const billiardRoom = {
  name: "billiard room",
  image: "assets/billiard_room.jpg",
};

const conservatory = {
  name: "conservatory",
  image: "assets/conservatory.jpg",
};

const kitchen = {
  name: "kitchen",
  image: "assets/kitchen.jpg",
};

const diningRoom = {
  name: "dining room",
  image: "assets/dining_room.jpg",
};

const library = {
  name: "library",
  image: "assets/kitchen.jpg",
};

const study = {
  name: "study",
  image: "assets/study.jpg",
};

const hall = {
  name: "hall",
  image: "assets/hall.jpg",
};

const lounge = {
  name: "lounge",
  image: "assets/lounge.jpg",
};

const mystery = {
  killer: "",
  weapon: "",
  room: "",
};

const killerCard = {
  name: document.getElementById("killerName"),
  age: document.getElementById("killerAge"),
  image: document.getElementById("killerImage"),
  color: document.getElementById("killerColor"),
  favoriteWeapon: document.getElementById("killerFavoriteWeapon"),
  description: document.getElementById("killerDescription"),
}

const weaponCard = {
  name: document.getElementById("weaponName"),
  weight: document.getElementById("weaponWeight"),
  image: document.getElementById("weaponImage")
}

const roomCard = {
  name: document.getElementById("roomName"),
  image: document.getElementById("roomImage"),
}

const showMysteryInfo = {
  title: document.querySelector("#mysteryTitle"),
  mysteryReveal: document.querySelector("#mysterySecret"),
  mysteryInfo: document.querySelector("#mysteryInfo"),
}
// ----------ARRAYS TO GROUP OBJECTS------------

const suspects = [
  mrGreen,
  mrWhite,
  colMustard,
  msScarlett,
  mrsPeacock,
  profPlum,
];

const weapons = [
  rope,
  candlestick,
  pistol,
  knife,
  piping,
  wrench,
  dumbbell,
  axe,
  bat,
  trophy,
];

const rooms = [
  kitchen,
  ballroom,
  conservatory,
  billiardRoom,
  library,
  study,
  hall,
  lounge,
  diningRoom,
];

// -------------FUNCTIONS----------------

// -------------Random selector----------
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// --------------Loader------------------

const showKiller = () => {
  loader.classList.toggle("is-active");
  setTimeout(() => {
    loader.classList.toggle("is-active");
    pickKiller();
  }, 700);
};

const showWeapon = () => {
  loader.classList.toggle("is-active");
  setTimeout(() => {
    loader.classList.toggle("is-active");
    pickWeapon();
  }, 700);
};

const showRoom = () => {
  loader.classList.toggle("is-active");
  setTimeout(() => {
    loader.classList.toggle("is-active");
    pickRoom();
  }, 700);
};

const getMystery = () => {
  loader.classList.toggle("is-active");
  setTimeout(() => {
    loader.classList.toggle("is-active");
    showMystery();
  }, 1000);
};

// ----------Shuffle suspects favorite weapon--------------

shuffleFavoriteWeapon = (suspects) => {
  return suspects.map(suspect => {
    const favoriteWeaponArray = [
      ...weapons
    ];
    suspect.favoriteWeapon = randomSelector(favoriteWeaponArray);
  });
};

const pickKiller = () => {
  mystery.killer = randomSelector(suspects);
  document.getElementById("killerCard").style.background = mystery.killer.color;
  killerCard.name.innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
  killerCard.image.src = mystery.killer.image;
  killerCard.age.innerHTML = `${mystery.killer.age} years old.`;
  killerCard.description.innerHTML = mystery.killer.description;
  shuffleFavoriteWeapon(suspects);
  console.log(suspects);
  killerCard.favoriteWeapon.innerHTML = `${mystery.killer.favoriteWeapon.name}`;
};

const pickWeapon = () => {
  mystery.weapon = randomSelector(weapons);
  weaponCard.name.innerHTML = mystery.weapon.name;
  weaponCard.weight.innerHTML = `${mystery.weapon.weight} kg`;
  weaponImage.src = mystery.weapon.image;
};

const pickRoom = () => {
  mystery.room = randomSelector(rooms);
  roomCard.name.innerHTML = mystery.room.name;
  roomCard.image.src = mystery.room.image;
};

const showMystery = () => {
  showMysteryInfo.title.innerHTML = `Mystery`;
  showMysteryInfo.mysteryReveal.innerHTML = `Mr Black will be killed by ${mystery.killer.title} ${mystery.killer.lastName} with the ${mystery.weapon.name} in the ${mystery.room.name}.`;
  showMysteryInfo.mysteryInfo.innerHTML = `Hush! Remember to keep it a secret!`;
};

document.getElementById("killerCard").addEventListener("click", showKiller);
document.getElementById("weaponCard").addEventListener("click", showWeapon);
document.getElementById("roomCard").addEventListener("click", showRoom);
