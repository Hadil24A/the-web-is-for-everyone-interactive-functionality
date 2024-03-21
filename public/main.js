let navigatie = document.querySelector(".navigatie");
let menu = document.querySelector(".home-menu");

navigatie.addEventListener("click", () => {
  
  navigatie.classList.toggle("active");
  menu.classList.toggle("home-menu-active");
});

let openButton = document.querySelector(".makeAPlaylistBtn");
let newPlaylist = document.querySelector(".newPlaylist");
let submitButton = document.getElementById("submitPL");
let playlistNameInput = document.querySelector(".newPlaylist input[type='text']");

openButton.addEventListener("click", function () {
  newPlaylist.classList.toggle("newPlaylistOpen");
});


playlistNameInput.addEventListener("input", () => {
  if (playlistNameInput.value.trim() !== '') {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
