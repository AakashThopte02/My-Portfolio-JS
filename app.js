let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // menuIcon.classList.remove("bx-x");
  // navbar.classList.remove = "active";
  // let header = document.querySelector("header");
  // header[0].classList.toggle("sticky", window.scrollY > 100);
};

// ===============toggle menubar==============
let menuIcon = document.getElementById("menu-icon");
let navbar = document.querySelector("nav");
menuIcon.addEventListener("click", (e) => {
  e.target.classList.toggle("bx-x");
  if (e.target.classList.contains("bx-x")) {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
  console.log(e.target.classList);
});

// ======remove toggle icon navbar when click navbar link=======

let allA = document.querySelectorAll("nav a");
Array.from(allA).forEach((a) => {
  a.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if (screen.width <= 768) {
      menuIcon.classList.remove("bx-x");
      navbar.style.display = "none";
    }
  });
});

//Form Validation
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#emailAddress");
const mobileNumber = document.querySelector("#mobileNumber");
const emailSubject = document.querySelector("#emailSubject");
const message = document.querySelector("#message");

// When clicked on send message button
let submitBtn = document.querySelector(".pop-up");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    fullName.value != "" &&
    email.value != "" &&
    mobileNumber.value != "" &&
    emailSubject.value != ""
  ) {
    setTimeout(() => {
      submitBtn.value = "Message sent Successfully!";
      submitBtn.style.backgroundColor = "green";
      submitBtn.style.color = "white";
    }, 20);
    setTimeout(() => {
      submitBtn.value = "Thank You!";
    }, 2000);
    setTimeout(() => {
      submitBtn.value = "Send Message";
      submitBtn.style.backgroundColor = "#0ef";
      submitBtn.style.color = "#1f242d";
    }, 3000);
    fullName.value = "";
    email.value = "";
    mobileNumber.value = "";
    emailSubject.value = "";
    message.value = "";
  } else {
    submitBtn.value = "Enter valid details!";
    submitBtn.style.backgroundColor = "red";
    submitBtn.style.color = "white";
    setTimeout(() => {
      submitBtn.value = "Send Message";
      submitBtn.style.backgroundColor = "#0ef";
      submitBtn.style.color = "#323946";
    }, 2000);
  }
});
