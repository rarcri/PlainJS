import wrapText from "./wrapText.js";
import multiLineWrap from "./multiLineWrap.js";

function drawText(canvas, text, fontSize = 50, fontFamily = "serif") {
  let font = `${fontSize}px ${fontFamily}`;
  //Getting the context
  let ctx = canvas.getContext("2d");

  // Add text
  ctx.font = font;
  ctx.fillStyle = "white";

  ctx.strokeStyle = "black";
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
  var y = canvas.height / 2 - textHeight / 2;

  // multiLineWrap(text);
  wrapText(ctx, text, x, y, maxWidth, lineHeight);
}

export default drawText;
