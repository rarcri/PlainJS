import wrapText from "./wrapText.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";

function drawText(
  canvas,
  text,
  fillColor = "white",
  strokeColor = "black",
  strokeWidth = 1,
  yMain = 0,
  fontSize = 50,
  //cursive, sans-serif, serif, monospace, Akronim-Regular, Arvo-Regular, PTSansNarrow-Regular
  fontFamily = "serif"
) {
  //Getting the context
  let ctx = canvas.getContext("2d");

  console.log("TEXT LENGTH: ", text.length);
  // setting the font size
  let nrDeLinii = 3;
  var maxWidth = canvas.width - 0.1 * canvas.width;

  // TEXT
  if (fontSize == -1) {
    nrDeLinii = 3;
    maxWidth = canvas.width - 0.15 * canvas.width;

    if (currentAspectRatio == "16:9") {
      maxWidth = canvas.width - 0.2 * canvas.width;
      if (text.length < 100) {
        nrDeLinii = 2.3;
      }
      if (text.length > 150) {
        nrDeLinii = 4;
      }
      if (text.length < 90) {
        nrDeLinii = 1.7;
      }
      if (text.length < 20) {
        nrDeLinii = 0.5;
      }
    } else if (currentAspectRatio == "1:1") {
      nrDeLinii = 4;
      if (text.length < 50) {
        nrDeLinii = 3;
      }
      if (text.length > 120) {
        nrDeLinii = 4.5;
      }
      if (text.length < 100) {
        nrDeLinii = 2.7;
      }
      if (text.length > 150) {
        nrDeLinii = 5;
      }
      if (text.length < 20) {
        nrDeLinii = 0.5;
      }
    } else if (currentAspectRatio == "9:16") {
      nrDeLinii = 5;
      if (text.length < 100) {
        nrDeLinii = 4;
      }
      if (text.length > 150) {
        nrDeLinii = 6;
      }
      if (text.length < 20) {
        nrDeLinii = 0.5;
      }
    }

    // REFERINTA
  } else if (fontSize == -2) {
    maxWidth = canvas.width - 0.7 * canvas.width;
    nrDeLinii = 0.8;
  }
  // nr de linii pe care sa se afiseze textul

  fontSize = (maxWidth / text.length) * nrDeLinii /* <- nr de linii */ * 2;
  let font = `${fontSize}px ${fontFamily}`;
  ctx.font = font;

  // Add text
  ctx.lineWidth = strokeWidth;
  ctx.fillStyle = fillColor;

  ctx.strokeStyle = strokeColor;
  ctx.textAlign = "center";

  var lineHeight = fontSize * 1.25;

  // Text metrics
  let textMetrics = ctx.measureText(text);
  let textInitialLength = textMetrics.width;
  let textRows = Math.ceil(textInitialLength / maxWidth);
  let textHeight = textRows * lineHeight;

  console.log("TEXT HEIGHT: ", textHeight);

  var x = canvas.width / 2;
  let y = canvas.height / 2 - textHeight / 2;

  if (yMain !== 0) y = yMain;

  y = wrapText(ctx, text, x, y, maxWidth, fontSize, lineHeight);

  return y;
}

export default drawText;
