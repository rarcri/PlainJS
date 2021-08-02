import wrapText from "./wrapText.js";
import multiLineWrap from "./multiLineWrap.js";

function drawText(
  canvas,
  text,
  fillColor = "white",
  strokeColor = "black",
  yMain = 0,
  fontSize = 50,
  fontFamily = "serif"
) {
  let font = `${fontSize}px ${fontFamily}`;
  //Getting the context
  let ctx = canvas.getContext("2d");

  // Add text
  ctx.font = font;
  ctx.lineWidth = 4;
  ctx.fillStyle = fillColor;

  ctx.strokeStyle = strokeColor;
  ctx.textAlign = "center";

  var maxWidth = canvas.width - 0.1 * canvas.width;
  var lineHeight = fontSize * 1.25;

  // Text metrics
  let textMetrics = ctx.measureText(text);
  let textInitialLength = textMetrics.width;
  let textRows = Math.ceil(textInitialLength / maxWidth);
  let textHeight = textRows * lineHeight;
  console.log(textHeight);

  var x = canvas.width / 2;
  let y = canvas.height / 2 - textHeight / 2;

  if (yMain !== 0) y = yMain;

  y = multiLineWrap(ctx, text, x, y, maxWidth, lineHeight);
  return y;
}

export default drawText;
