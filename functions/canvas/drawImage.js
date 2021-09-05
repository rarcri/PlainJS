const overlay = document.getElementById("overlay");

const drawImage = (canvas, img) => {
  // Get the context
  let ctx = canvas.getContext("2d");
  //Set img Width
  let imgWidth = img.width;
  let imgHeight = img.height;

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.filter = "blur(2px)";

  ctx.drawImage(img, 0, 0);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
};

export default drawImage;
