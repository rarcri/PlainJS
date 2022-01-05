import { searchTerms } from "../../main.js";
import drawCanvas, { imageURL } from "../canvas/drawCanvas.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";
import setCanvasDivWidth from "../app/setCanvasDivWidth.js";

// Toggles
import toggleBiblePopUp from "./toggleBiblePopUp.js";
import toggleDownloadPopUp from "./toggleDownloadPopUp.js";

let xSignCustom = document.getElementById("xSignCustom");
let customPopUp = document.getElementById("customPopUp");
let customToggle = document.getElementById("customToggle");
let downloadPopUp = document.getElementById("downloadPopUp");
let downloadButton = document.getElementById("downloadButton");
let generateCustom = document.getElementById("generateCustom");
let customReference = document.getElementById("customReference");
let customText = document.getElementById("customText");

// Handle x sign click event
xSignCustom.addEventListener("click", () => {
  customPopUp.classList.add("hidden");
  customToggle.checked = false;
});

// Handle input type box click event
customToggle.addEventListener("click", () => {
  customPopUp.classList.remove("hidden");
  console.log("toggled off both");
});

// Handle click on Generate Custom button
generateCustom.addEventListener("click", () => {
  drawCanvas(
    searchTerms,
    fontFamily,
    customReference.value,
    customText.value,
    true,
    imageURL,
    true,
    currentAspectRatio
  );
  customPopUp.classList.add("hidden");
  downloadPopUp.classList.add("hidden");

  downloadButton.innerText = "Descarcă imaginea";
  downloadButton.classList.replace("btn-danger", "btn-primary");

  customToggle.checked = false;
  setCanvasDivWidth();
});
