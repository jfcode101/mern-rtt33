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

// book list
const books = [
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
  { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
  { title: "The Odyssey", author: "Homer", year: "circa 8th century BC" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Picture of Dorian Gray", author: "Oscar Wilde", year: 1890 },
  { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", year: 1880 },
  { title: "The Bell Jar", author: "Sylvia Plath", year: 1963 },
  { title: "The Grapes of Wrath", author: "John Steinbeck", year: 1939 },
  { title: "Wuthering Heights", author: "Emily Brontë", year: 1847 },
  { title: "The Road", author: "Cormac McCarthy", year: 2006 },
  { title: "The Fault in Our Stars", author: "John Green", year: 2012 },
  { title: "The Book Thief", author: "Markus Zusak", year: 2005 },
  { title: "The Night Circus", author: "Erin Morgenstern", year: 2011 },
  { title: "The Shadow of the Wind", author: "Carlos Ruiz Zafón", year: 2001 },
];

// --------------- global scope variable ---------------
const sectHero = document.querySelector(".sect-hero");
const sectAbout = document.getElementById("id-sect-about");
const artcSignUp = document.querySelector("#id-artc-signup");
const formEl = document.getElementById("id-input-form");
const formLoginEl = document.getElementById("id-login-form");
const sectBooks = document.querySelector(".sect-books");

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

// --------------- forms ---------------
// --------------- start: add {submit} event listener to the form  that creates an acount ---------------
formEl.addEventListener("submit", (e) => {
  // prevent default
  e.preventDefault();
  // boolean to set validity
  let isValid = true;

  // get form inputs from the form
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

  // -------- object to store user input into Local Storage --------
  const saveUserSingup = { fName, lName, email, usrName, pwd, pwd2 };

  // -------- retrieve existing user from local storage --------
  //   let userInfos = JSON.parse(localStorage.getItem("user")) || [];
  let userInfos = JSON.parse(localStorage.getItem("userInfos")) || [];

  if (!isValid) {
    //  if any of the input field doesn't meet the requirement return
    return;
  } else {
    // add the new user to the array
    userInfos.push(saveUserSingup);

    //  // now, save the updated array back to local storage
    localStorage.setItem("userInfos", JSON.stringify(userInfos));
    // Browser Object Model to alret the user of
    alert("You have successfully created an account!");
    // Browser Object Model to console the paragraph

    // cache some element from html
    const artcSuccess = document.querySelector("#artc-sigin-success");
    const paraSuccess = document.getElementById("id-para-success");
    const btnOK = document.getElementById("id-btn-ok");

    // use the variable
    artcSuccess.style.display = "flex";
    paraSuccess.textContent = "You have successfully created an account!";
    // Browser Object Model to console the paragraph
    console.log(paraSuccess);

    // -------- click event when the user click on the ok button --------
    btnOK.addEventListener("click", () => {
      // hide the article success when the user clicks on it
      artcSuccess.style.display = "none";
    });
  }

  // now, save the updated array back to local storage
  //   localStorage.setItem("users", JSON.stringify(userInfos));

  // clear the form after submission
  formEl.reset();

  // display a message
  //   alert("form submitted");
});

// --------------- end: add {submit} event listener to the form  that creates an acount ---------------

// --------------- start: add {submit} event listener to the form  that logs in the user ---------------
formLoginEl.addEventListener("submit", (e) => {
  // prevent default
  e.preventDefault();

  const userNameLogin = document.getElementById("id-usrlogin").value;
  const pwdLogin = document.querySelector("#id-usrpwd").value;

  // get the user infos stored into the local storage
  const storedInfo = JSON.parse(localStorage.getItem("userInfos")) || [];

  const user = storedInfo.find(
    (user) => user.usrName === userNameLogin && user.pwd === pwdLogin
  );

  // check if stored infos matches user info
  if (user) {
    alert("Login successful!");
    console.log("Login successful!");
    // call show books
    showBooks();
  } else {
    alert("Invalid email or password. Try again!");
    console.log("Invalid email or password. Try again!");
  }
});

// --------------- end: add {submit} event listener to the form  that logs in the user ---------------

//  function that

// Browser Object Model to alret user
console.log(
  "The screen width = ",
  screen.width,
  ", and its height = ",
  screen.height
);

console.log(
  "The current browser width = ",
  window.innerWidth,
  ", and its height =  ",
  window.innerHeight
);

// function to show the books
function showBooks() {
  // function scope variable
  const bookList = document.querySelector("#id-tbl-body");
  bookList.innerHTML = "";

  books.forEach((book) => {
    // initialize forEach block level variable
    const tblRow = document.createElement("tr");
    const titleData = document.createElement("td");
    const authorName = document.createElement("td");
    const year = document.createElement("td");

    // add data to table celss
    titleData.textContent = book.title;
    authorName.textContent = book.author;
    year.textContent = book.year;

    tblRow.appendChild(titleData);
    tblRow.appendChild(authorName);
    tblRow.appendChild(year);

    bookList.appendChild(tblRow);
  });

  // show section {sectBooks}
  sectBooks.style.display = "block";
}
// add event listener to done button
const doneBtn = document.getElementById("id-btn-done");
doneBtn.addEventListener("click", () => {
  sectBooks.style.display = "none";
});

// heroAction to change
const heroAction = document.querySelector(".hero-action");
// function to add some responsiveness to the {heroAction} class
function responsiveDesign() {
  if (window.innerWidth >= 768) {
    heroAction.classList.add("flex-rw-ct-ct");
  } else if (window.innerWidth < 768) {
    heroAction.classList.add("flex-cl-ct-ct");
  }
}

// call resposnive design
responsiveDesign();

// add a {resize} event listener to the window object to add responsive design
window.addEventListener("resize", responsiveDesign);
