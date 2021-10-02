import fetchImage from "./fetchImage.js";
import drawImage from "./drawImage.js";
import drawText from "./drawText.js";
import resetFilter from "./resetFilter.js";
import saveOnServer from "../app/saveOnServer.js";

//Content Imports
import texte from "../../content/texte.js";

//Bible Imports
import callSearchInBible from "../bible/callSearchInBible.js";

// Get by ID
const canvas = document.getElementById("canvas");

// Initialize the text and reference
export let text;
export let reference;

// Get contexts
const ctx = canvas.getContext("2d");
const drawCanvas = (
  searchTerms,
  userReference = "",
  userText = "",
  customText = false
) => {
  //Canvas Imports
  let json = fetchImage(searchTerms);

  // Getting the data from Pixabay
  json.then((data) => {
    let nrTexteBiblice = texte.length;

    // Loging the number of Bible verses
    console.log("Nr texte Biblice: ", nrTexteBiblice);

    // Getting a random Number
    let randomNumber = Math.floor(Math.random() * nrTexteBiblice);

    reference = "";
    // Getting the reference from texts object
    if (!customText) {
      reference =
        userReference != "" ? userReference : texte[randomNumber].reference;
      console.log(reference);
    } else reference = userReference;

    // Setting the text
    text = "";
    if (!customText) text = `„${callSearchInBible(reference)}”`;
    else text = userText;
    // Creating a new image to draw on canvas
    let img = new Image();

    // setting the image source
    img.src = data.hits[Math.floor(Math.random() * 200)].largeImageURL;

    // Setting the cookies
    img.setAttribute("crossOrigin", "anonymous");

    // Image on load
    img.onload = () => {
      // Draw the Image
      drawImage(canvas, img);

      // Unblur Image
      resetFilter(ctx);

      // Draw the text
      let y = drawText(canvas, text, "white", "black", 0, 75);

      // Add 20px to the y
      y += 20;

      // Draw the reference text
      drawText(canvas, reference, "red", "white", y, 75);
    };
  }); // End of Promise
};

export default drawCanvas;
