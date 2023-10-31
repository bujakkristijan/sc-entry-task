// npm install --save-dev sass gulp gulp-sass gulp-clean gulp-rename gulp-clean-css

const navLinks = document.querySelector(".nav-links-container");
const hamburgerMenuIcon = document.querySelector(".bars-icon");
const xIcon = document.querySelector(".x-icon");
const navButtons = document.querySelector(".nav-buttons-container");

function showMenu() {
    navLinks.style.right = "0px";
    navLinks.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, .50)";
    navButtons.style.display = "block";
    navLinks.appendChild(navButtons);
  }

  function hideMenu(){
    navLinks.style.right = "-200px";
    navLinks.style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
    navButtons.style.display = "none";
    navLinks.removeChild(navButtons);
  }

hamburgerMenuIcon.addEventListener("click", showMenu);
xIcon.addEventListener("click", hideMenu);