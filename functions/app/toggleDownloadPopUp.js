// Toggles
import toggleBiblePopUp from "./toggleBiblePopUp.js";

let downloadPopUp = document.getElementById("downloadPopUp");
let downloadImage = document.getElementById("downloadButton");
let biblePopUp = document.getElementById("BiblePopUp");
let bibleToggle = document.querySelector("#choice");

const toggleDownloadPopUp = (on) => {
  if (downloadPopUp.classList.contains("hidden") && on != true) {
    biblePopUp.classList.add("hidden");
    bibleToggle.checked = false;

    downloadPopUp.classList.remove("hidden");
    console.log("toggled off BiblePopUp");
    downloadImage.classList.replace("btn-primary", "btn-danger");
    downloadImage.innerText = "Anulează";
  } else {
    downloadPopUp.classList.add("hidden");
    downloadImage.classList.replace("btn-danger", "btn-primary");
    downloadImage.innerText = "Descarcă imaginea";
  }
};

downloadImage.addEventListener("click", toggleDownloadPopUp);

export default toggleDownloadPopUp;
