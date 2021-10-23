import { text } from "../canvas/drawCanvas.js";
import { reference } from "../canvas/drawCanvas.js";
import drawCanvas from "../canvas/drawCanvas.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";

import { searchTerms } from "../../main.js";

let changeImageButton = document.querySelector("#changeImageButton");

changeImageButton.addEventListener("click", () => {
  drawCanvas(
    searchTerms,
    fontFamily,
    reference,
    text,
    true,
    currentAspectRatio
  );
});
