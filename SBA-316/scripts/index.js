// array of mages
const images = [
  "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg",
];

// global scope variable
const SectHero = document.querySelector(".hero");

// set the background image of section hero
SectHero.style.backgroundImage = `url(${images[0]})`;

console.log(SectHero);
