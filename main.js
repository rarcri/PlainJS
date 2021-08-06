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
let json = fetchImage(searchTerms);

// Getting the data from
json.then((data) => {
  let randomNumber = Math.floor(Math.random() * 15);
  let text = texte[randomNumber].text;
  // let text = texte[7];
  let reference = texte[randomNumber].reference;

  let img = new Image();

  img.src = data.hits[Math.floor(Math.random() * 200)].largeImageURL;

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
    let y = drawText(canvas, text);
    let y1 = drawText(canvas1, text, "white", "black", 0, 75);

    // Add 20px to the ys
    y += 20;
    y1 += 20;

    // Draw the reference text
    drawText(canvas, reference, "red", "white", y);
    drawText(canvas1, reference, "red", "white", y1, 75);
  };
}); // End of Promise
