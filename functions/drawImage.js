const drawImage = (canvas, canvas1, img) => {
  // Get the context
  let ctx = canvas.getContext("2d");
  let ctx1 = canvas1.getContext("2d");

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  //   Set canvas1 width and height as the image's
  canvas1.width = img.width;
  canvas1.height = img.height;
  ctx1.filter = "blur(5px)";
  ctx1.drawImage(img, 0, 0);
};

export default drawImage;
