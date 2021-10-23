//imports
import drawCanvas from "./functions/canvas/drawCanvas.js";
import BiblePopUp from "./functions/app/BiblePopUp.js";

// Keyterms to search for on Pixabay
export const searchTerms = [
  "green+hills",
  "flower",
  "landscape+summer",
  "nature",
];

// Getting the Input from select tag
BiblePopUp();

drawCanvas(searchTerms);
