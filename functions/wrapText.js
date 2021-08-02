import textWidth from "./textWidth.js";

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" ");
  console.log(words);
  let currentLine = words[0];
  let testLine = words[0];

  for (let i = 1; i < words.length; i++) {
    testLine += ` ${words[i]}`;
    console.log(testLine);
    if (textWidth(ctx, testLine) < maxWidth && words[i] !== "\n") {
      currentLine = testLine;
      console.log(currentLine);
      console.log("Called if");
      // For showing the last line
      if (i == words.length - 1) {
        ctx.fillText(currentLine, x, y);
        ctx.strokeText(currentLine, x, y);
        console.log("Called if inside if");
      }
    } else {
      ctx.fillText(currentLine, x, y);
      ctx.strokeText(currentLine, x, y);
      console.log("Called currentLine");

      y += lineHeight;
      testLine = words[i];
      // For showing the last line when the last word
      // won't fit on the before last line
      if (i == words.length - 1) {
        ctx.fillText(testLine, x, y);
        ctx.strokeText(testLine, x, y);
        console.log("Called if inside if");
      }
      console.log(testLine);
    }
  }
}

export default wrapText;
