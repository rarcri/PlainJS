import { text } from "../canvas/drawCanvas.js";
import { reference } from "../canvas/drawCanvas.js";
import drawCanvas from "../canvas/drawCanvas.js";

import { searchTerms } from "../../main.js";

let changeImageButton = document.querySelector("#changeImageButton");

changeImageButton.addEventListener("click", () => {
  drawCanvas(searchTerms, reference, text, true);
});
