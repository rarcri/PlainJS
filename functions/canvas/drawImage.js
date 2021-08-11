const drawImage = (canvas, img) => {
  // Get the context
  let ctx = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.filter = "blur(5px)";

  ctx.drawImage(img, 0, 0);
};

export default drawImage;
