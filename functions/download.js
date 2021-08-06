let downloadImage = document.getElementById("downloadImage");
downloadImage.addEventListener("click", downloadPng);

const downloadPng = () => {
  ReImg.fromCanvas(document.querySelector("#canvas1")).downloadPng(
    `rarphoto $`
  );
};
