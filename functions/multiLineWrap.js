import wrapText from "./wrapText.js";

const multiLineWrap = (ctx, text, x, y, maxWidth, lineHeight) => {
  const textSplit = text.split(/\n/);
  textSplit.forEach((text) => {
    wrapText(ctx, text, x, y, maxWidth, lineHeight);
  });
};

export default multiLineWrap;
