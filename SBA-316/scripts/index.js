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
  `Get personalized recommendations.`,
  `Stay updated with the latest Books and Reading events.`,
  `Enjoy members-only perks and discounts.`,
];

// --------------- global scope variable ---------------
const sectHero = document.querySelector(".sect-hero");
const sectAbout = document.getElementById("id-sect-about");
const artcSignUp = document.querySelector("#id-artc-signup");
const formEl = document.getElementById("id-input-form");

// set the background image of section hero
sectHero.style.backgroundImage = `url(${images[0]})`;

// insert paragraphs in the about section by first
// for each to iterate over elements of {aboutText} array
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

// --------------- form ---------------
// --------------- add event listener ---------------
formEl.addEventListener("submit", (e) => {
  // prevent default
  e.preventDefault();
  // boolean to set validity
  let isValid = true;

  // get form inputs
  const fName = document.querySelector("#id-fname").value.trim();
  const lName = document.querySelector("#id-lname").value.trim();
  const email = document.querySelector("#id-email").value.trim();
  const usrName = document.getElementById("id-usrname").value.trim();
  const pwd = document.getElementById("id-pword").value.trim();
  const pwd2 = document.querySelector("#id-pword-2").value.trim();

  // clear any error that could have happened previously
  const errors = document.querySelectorAll(".cls-error");
  errors.forEach((er) => {
    er.textContent = "";
    document
      .querySelectorAll("input")
      .forEach((inpt) => (inpt.style.background = "transparent"));
  });

  // --------------- validate user inputs ---------------
  // validate first name
  const nmPattrn = /[A-Za-z]/;
  if (fName.length < 3 || fName.length > 50 || !nmPattrn.test(fName)) {
    document.getElementById("fname-err").textContent =
      "First Name must be at least 3 characters long, and less than 50 characters.";
    document.querySelector("#id-fname").style.background = "var(--error-clr)";
    isValid = false;
  }

  // validate last name
  if (lName.length < 3 || lName.length > 50 || !nmPattrn.test(lName)) {
    document.getElementById("lname-err").textContent =
      "Last Name must be at least 3 characters long, and less than 50 characters.";
    document.querySelector("#id-lname").style.background = "var(--error-clr)";
    isValid = false;
  }

  // validate email
  const emPattrn = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emPattrn.test(email)) {
    document.getElementById("email-err").textContent =
      "Please enter a valid email address.";
    document.querySelector("#id-email").style.background = "var(--error-clr)";
    isValid = false;
  }

  // validate username
  const unmPattrn = /[a-zA-Z0-9]{6,12}/;
  if (usrName.length < 6 || usrName.length >= 12 || !unmPattrn.test(usrName)) {
    document.querySelector(
      "#uname-err"
    ).textContent = `User name must be at least 6 characters and at maximum 12 characters long. 
     You can include numbers. `;
    document.querySelector("#id-usrname").style.background = "var(--error-clr)";
    isValid = false;
  }

  // validate password - it has to be at least 6 characters
  if (pwd.length < 6) {
    document.getElementById("pwd-err").textContent =
      "Password must be at least 6 characters long.";
    document.getElementById("id-pword").style.background = "var(--error-clr)";
    document.getElementById("id-pword-2").style.background = "var(--error-clr)";

    isValid = false;
  }

  // check if the password matches the confirmation password
  if (pwd !== pwd2) {
    document.getElementById("pwd2-err").textContent =
      "Passwords do not match. Please try again!";
    document.getElementById("id-pword-2").style.background = "var(--error-clr)";
    isValid = false;
  }

  // do something if the form is submitted
});
