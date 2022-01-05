export const textWidth = (ctx, text) => {

  let textMetrics = ctx.measureText(text);
  let textWidth = textMetrics.width;

  return textWidth;
};

export const textHeight = (ctx, text) => {
  
  let textMetrics = ctx.measureText(text); 
  let textHeight = textMetrics.fontBoundingBoxAscent - textMetrics.fontBoundingBoxDescent;

  return textHeight;

}
