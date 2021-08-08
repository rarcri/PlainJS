let downloadPopUp = document.getElementById("downloadPopUp");
let downloadImage = document.getElementById("downloadButton");

const showPopUp = () => {
  downloadPopUp.style.display = "block";
};

downloadImage.addEventListener("click", showPopUp);
