// Toggles
import toggleBiblePopUp from "./toggleBiblePopUp.js";

let downloadPopUp = document.getElementById("downloadPopUp");
let downloadImage = document.getElementById("downloadButton");

const toggleDownloadPopUp = (on) => {
  if (downloadPopUp.classList.contains("d-none") && on != true) {
    toggleBiblePopUp(true);
    downloadPopUp.classList.remove("d-none");
    console.log("toggled off BiblePopUp");
    downloadImage.classList.replace("btn-primary", "btn-danger");
    downloadImage.innerText = "Anulează";
  } else {
    downloadPopUp.classList.add("d-none");
    downloadImage.classList.replace("btn-danger", "btn-primary");
    downloadImage.innerText = "Descarcă imaginea";
  }
};

downloadImage.addEventListener("click", toggleDownloadPopUp);

export default toggleDownloadPopUp;
