// Toggles
import toggleDownloadPopUp from "./toggleDownloadPopUp.js";

let toggle = document.querySelector("#choice");
let BiblePopUp = document.querySelector("#BiblePopUp");
let downloadPopUp = document.getElementById("downloadPopUp");
let downloadButton = document.getElementById("downloadButton");

const toggleBiblePopUp = (on) => {
  if (BiblePopUp.classList.contains("hidden") && on != true) {
    BiblePopUp.classList.remove("hidden");
    toggle.checked = true;
    toggleDownloadPopUp(true);
    console.log("toggled off DownloadPopUp");

    downloadPopUp.classList.add("hidden");
    downloadButton.innerText = "Descarcă imaginea";
    downloadButton.classList.replace("btn-danger", "btn-primary");
  } else {
    BiblePopUp.classList.add("hidden");
    toggle.checked = false;
  }
};

toggle.addEventListener("click", toggleBiblePopUp);

export default toggleBiblePopUp;
