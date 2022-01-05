import setAspectRatio from "./setAspectRatio.js";
const overlay = document.getElementById("overlay");

const drawImage = (canvas, img, aspectRatio = "none") => {
  // Get the context
  let ctx = canvas.getContext("2d");
  let imgWidth = img.width;
  let imgHeight = img.height;
  let vertical = false;

  // set aspect ratio
  setAspectRatio(img, canvas, aspectRatio);

  ctx.filter = "blur(2px)";

  ctx.drawImage(img, 0, 0);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(overlay, 0, 0, imgWidth, imgHeight);
};

export default drawImage;
