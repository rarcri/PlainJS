const overlay = document.getElementById('overlay');

const drawImage = (canvas, img) => {
  // Get the context
  let ctx = canvas.getContext('2d');
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.filter = 'blur(2px)';

  ctx.drawImage(img, 0, 0);
  ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(overlay, 0, 0, canvas.width, canvas.height);
};

export default drawImage;
