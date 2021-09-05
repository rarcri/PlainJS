import saveOnServer from "./saveOnServer.js";
let facebookButton = document.querySelector("#facebookButton");

const shareToFacebook = async () => {
  await saveOnServer();
  facebookButton.href =
    "https://www.facebook.com/sharer/sharer.php?u=rarphoto.herokuapp.com/image.png";
  facebookButton.click();
};

facebookButton.addEventListener("click", shareToFacebook);
