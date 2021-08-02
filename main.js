//Imports
import fetchImage from "./functions/fetchImage.js";
import drawImage from "./functions/drawImage.js";
import drawText from "./functions/drawText.js";
import blur from "./functions/blur.js";
import resetFilter from "./functions/resetFilter.js";
import texte from "./content/texte.js";

// Get by ID
const canvas = document.getElementById("canvas");
const canvas1 = document.getElementById("canvas1");
const img = document.getElementById("image");

// Get contexts
const ctx = canvas.getContext("2d");
const ctx1 = canvas1.getContext("2d");

// Keyterms to search for on Pixabay
const searchTerms = [
  "green+hills",
  "flower",
  "landscape+summer",
  "nature",
  "bird",
];

let text = texte[Math.floor(Math.random() * 15)];

img.src = await fetchImage(searchTerms);
img.setAttribute("crossOrigin", "anonymous");

img.onload = () => {
  // Blur Image
  blur(ctx);
  blur(ctx1);

  // Draw the Image
  drawImage(canvas, canvas1, img);

  // Unblur Image
  resetFilter(ctx);
  resetFilter(ctx1);

  // Draw the text
  drawText(canvas, text);
  drawText(canvas1, text, 75);
};
