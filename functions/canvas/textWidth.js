const textWidth = (ctx, text) => {
  let textMetrics = ctx.measureText(text);
  let textWidth = textMetrics.width;

  return textWidth;
};

export default textWidth;
