import { text } from "../canvas/drawCanvas.js";
import { reference } from "../canvas/drawCanvas.js";
import drawCanvas from "../canvas/drawCanvas.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";
import setCanvasDivWidth from "../app/setCanvasDivWidth.js";

import { searchTerms } from "../../main.js";

let changeImageButton = document.querySelector("#changeImageButton");
let downloadPopUp = document.getElementById("downloadPopUp");
let downloadButton = document.getElementById("downloadButton");

changeImageButton.addEventListener("click", () => {
  drawCanvas(
    searchTerms,
    fontFamily,
    reference,
    text,
    true,
    currentAspectRatio
  );
  setCanvasDivWidth();
  downloadPopUp.classList.add("hidden");
  downloadButton.innerText = "Descarcă imaginea";
  downloadButton.classList.replace("btn-danger", "btn-primary");
});
