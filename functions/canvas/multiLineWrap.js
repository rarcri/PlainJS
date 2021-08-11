import wrapText from "./wrapText.js";

const multiLineWrap = (ctx, text, x, y, maxWidth, lineHeight) => {
  const textSplit = text.split(/\n/);
  console.log(textSplit);
  for (let i = 0; i < textSplit.length; i++) {
    y = wrapText(ctx, textSplit[i], x, y, maxWidth, lineHeight);
    y += lineHeight;
  }
  return y;
};

export default multiLineWrap;
