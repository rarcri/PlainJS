// Toggles
import toggleDownloadPopUp from "./toggleDownloadPopUp.js";

let toggle = document.querySelector("#choice");
let BiblePopUp = document.querySelector("#BiblePopUp");

const toggleBiblePopUp = (on) => {
  if (BiblePopUp.classList.contains("d-none") && on != true) {
    BiblePopUp.classList.remove("d-none");
    toggle.checked = true;
    toggleDownloadPopUp(true);
    console.log("toggled off DownloadPopUp");
  } else {
    BiblePopUp.classList.add("d-none");
    toggle.checked = false;
  }
};

toggle.addEventListener("click", toggleBiblePopUp);

export default toggleBiblePopUp;
