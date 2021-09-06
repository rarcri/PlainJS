import saveOnServer from "./saveOnServer.js";
let facebookButton = document.querySelector("#facebookButton");

const shareToFacebook = async () => {
  await saveOnServer();
  facebookButton.href =
    "https://www.facebook.com/sharer/sharer.php?u=https://rarcri.github.io/PlainJS";
  // facebookButton.click();
};

facebookButton.addEventListener("click", shareToFacebook);
