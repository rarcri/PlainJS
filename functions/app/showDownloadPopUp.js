let downloadPopUp = document.getElementById("downloadPopUp");
let downloadImage = document.getElementById("downloadButton");

const showPopUp = () => {
  if (downloadPopUp.classList.contains("d-none"))
    downloadPopUp.classList.remove("d-none");
  else downloadPopUp.classList.add("d-none");
};

downloadImage.addEventListener("click", showPopUp);
