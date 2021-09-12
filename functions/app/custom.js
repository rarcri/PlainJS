import { searchTerms } from "../../main.js";
import drawCanvas from "../canvas/drawCanvas.js";

let xSignCustom = document.getElementById("xSignCustom");
let customPopUp = document.getElementById("customPopUp");
let customToggle = document.getElementById("customToggle");
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
});

// Handle click on Generate Custom button
generateCustom.addEventListener("click", () => {
  drawCanvas(searchTerms, customReference.value, customText.value, true);
  customPopUp.classList.add("hidden");
  customToggle.checked = false;
});
