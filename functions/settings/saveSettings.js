import { currentFont } from "./selectFont.js";
import drawCanvas from "../canvas/drawCanvas.js";
import { searchTerms } from "../../main.js";
import { text, reference, imageURL } from "../canvas/drawCanvas.js";
import { currentAspectRatio } from "./selectAspectRatio.js";

// Toggles
import toggleBiblePopUp from "../app/toggleBiblePopUp.js";
import toggleDownloadPopUp from "../app/toggleDownloadPopUp.js";

let saveSettingsButton = document.querySelector("#saveSettingsButton");
let settings = document.getElementById("settings");

const handleSaveSettings = () => {
  setTimeout(() => {
    drawCanvas(
      searchTerms,
      currentFont,
      reference,
      text,
      true,
      imageURL,
      true,
      currentAspectRatio
    );
  }, 1000);
  drawCanvas(
    searchTerms,
    currentFont,
    reference,
    text,
    true,
    imageURL,
    true,
    currentAspectRatio
  );
  settings.classList.add("d-none");

  // Call toggles off
  toggleBiblePopUp(true);
  toggleDownloadPopUp(true);
};

saveSettingsButton.addEventListener("click", handleSaveSettings);
