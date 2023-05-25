import "../styles/style.css";

// cookieboks
const cookieBox = document.getElementById("cookiebox");
const afvisBtn = document.getElementById("afvis");
const accepterBtn = document.getElementById("accepter");

afvisBtn.addEventListener("click", () => {
  cookieBox.style.display = "none";
});

accepterBtn.addEventListener("click", () => {
  cookieBox.style.display = "none";
});

/*burgermenu*/
const menu = document.querySelector("#hammenu");
const menuItem = document.querySelector(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  console.log("not");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    console.log("yes");
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
