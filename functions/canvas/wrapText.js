import textWidth from "./textWidth.js";

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" ");
  console.log(words);
  let currentLine = words[0];
  let testLine = words[0];

  for (let i = 1; i < words.length; i++) {
    testLine += ` ${words[i]}`;
    if (textWidth(ctx, testLine) < maxWidth) {
      currentLine = testLine;
      console.log(currentLine);
      console.log("Called if");
      // For showing the last line
      if (i == words.length - 1) {
        ctx.strokeText(currentLine, x, y);
        ctx.fillText(currentLine, x, y);
        console.log("Called if inside if");
      }
    } else {
      ctx.strokeText(currentLine, x, y);
      ctx.fillText(currentLine, x, y);
      console.log("Called currentLine");

      y += lineHeight;
      testLine = words[i];
      // For showing the last line when the last word
      // won't fit on the before last line
      if (i == words.length - 1) {
        ctx.strokeText(testLine, x, y);
        ctx.fillText(testLine, x, y);
        console.log("Called if inside else");
      }
      console.log(testLine);
    }
  }
  return y;
}

export default wrapText;
