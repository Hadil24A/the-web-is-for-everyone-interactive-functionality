let navigatie = document.querySelector(".navigatie");
let menu = document.querySelector(".home-menu");

navigatie.addEventListener("click", () => {
  
  navigatie.classList.toggle("active");
  menu.classList.toggle("home-menu-active");
});

let submitButton = document.getElementById("submitPL");
let input = document.getElementById("playlistName");

input =.addEventListener("keyup", (e) => {
  let value = e.currentTarget.value;
  submitButton.disabled = false;

  if (value === "") {
    submitButton.disabled = true;
  }
});