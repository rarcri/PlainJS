// TODO - Add posibility to use any aspect Ratio

const setAspectRatio = (image, canvas, aspectRatio) => {
  let imgWidth = image.width;
  let imgHeight = image.height;

  if (aspectRatio == "1:1") {
    if (imgWidth < imgHeight) {
      canvas.width = imgWidth;
      canvas.height = imgWidth;
    } else {
      canvas.width = imgHeight;
      canvas.height = imgHeight;
    }
  } else if (aspectRatio == "16:9") {
    //             _   _______________    _
    //            |   |               |    |
    //            |   |               |     - 16:9 height
    //  actual   -    |    image      |    |
    //  height    |   |_______________|   _|
    //            |   |               |
    //            |_  |_______________|
    //

    if (imgHeight > imgWidth / (16 / 9)) {
      canvas.height = imgWidth / (16 / 9);
      canvas.width = imgWidth;
    } else {
      canvas.width = imgHeight * (16 / 9);
      canvas.height = imgHeight;
    }
  } else if (aspectRatio == "9:16") {
    if (imgWidth > imgHeight * (9 / 16)) {
      canvas.width = imgHeight * (9 / 16);
      canvas.height = imgHeight;
    } else {
      canvas.height = imgWidth / (9 / 16);
      canvas.width = imgWidth;
    }
  } else {
    canvas.width = imgWidth;
    canvas.height = imgHeight;
  }
};

export default setAspectRatio;
