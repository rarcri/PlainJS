let okDownloadButton = document.querySelector("#okDownloadButton");

const downloadPng = () => {
  let downloadName = document.getElementById("downloadName");
  let canvas = document.querySelector("#canvas");

  var a = document.createElement("a");

  console.log(
    canvas.getContext("2d").getImageData(0, 0, canvas.width, canvas.height)
  );

  let dataURL = canvas.toDataURL();

  a.href = canvas.toDataURL();
  a.download = downloadName.value;
  document.body.appendChild(a);
  a.click();
  console.log("Image downloaded");
};

okDownloadButton.addEventListener("click", downloadPng);
