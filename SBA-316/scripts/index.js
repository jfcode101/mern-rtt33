// array of mages
const images = [
  "https://images.pexels.com/photos/768125/pexels-photo-768125.jpeg",
];

// about text array
const aboutText = [
  "Our mission is to inspire and empower readers by providing a comprehensive and curated platform for discovering, sharing, and discussing books across all genres. We aim to foster a vibrant community of book lovers, where users can find personalized recommendations, engage in meaningful conversations, and explore diverse literary voices.",
  "We believe that every reader deserves to find their next great read, and our platform is designed to make that journey enjoyable and effortless. By leveraging user-generated content, expert reviews, and advanced algorithms, we strive to connect readers with books that resonate with their interests and preferences.",
  "In addition to book recommendations, we are committed to promoting literacy and a love for reading in all age groups. We partner with schools, libraries, and local organizations to host events, reading challenges, and book drives that encourage community engagement and foster a culture of reading.",
  "Through our user-friendly interface and innovative features, we aim to make the joy of reading accessible to everyone, encouraging lifelong learning and a passion for literature. Together, we can create a world where stories are celebrated, ideas are shared, and every reader finds their place in the literary landscape.",
];

// sign up article array
const signUpTexts = [
  `We're thrilled to have you here! By signing up, you'll gain access to exclusive content, special offers, and a community of like-minded individuals. Whether you’re looking to learn, connect, or explore, there's something for everyone.`,
  ` Why Sign Up?`,
  `Get personalized recommendations`,
  `Stay updated with the latest Books and Reading events`,
  `Enjoy members-only perks and discounts`,
];

// global scope variable
const sectHero = document.querySelector(".sect-hero");
const sectAbout = document.getElementById("id-sect-about");
const artcSignUp = document.querySelector("#id-artc-signup");

// set the background image of section hero
sectHero.style.backgroundImage = `url(${images[0]})`;

// insert paragraphs in the about section
aboutText.forEach((txt) => {
  const pEl = document.createElement("p");
  pEl.classList.add("about-para");
  pEl.textContent = txt;
  sectAbout.appendChild(pEl);
});

// insert a paragraph inside sign up section
const singUpPara = document.createElement("p");
singUpPara.textContent = signUpTexts[0];
artcSignUp.appendChild(singUpPara);

// insert a heading3 inside sign up section
const singUph3 = document.createElement("h3");
singUph3.textContent = signUpTexts[1];
artcSignUp.appendChild(singUph3);

// create a list
const signUpUl = document.createElement("ul");
artcSignUp.appendChild(signUpUl);

signUpTexts.forEach((item) => {
  if (signUpTexts.indexOf(item) >= 2) {
    const liEl = document.createElement("li");
    liEl.textContent = item;
    signUpUl.appendChild(liEl);
  }
});
