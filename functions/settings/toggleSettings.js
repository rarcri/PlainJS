import toggleBiblePopUp from "../app/toggleBiblePopUp.js";
import toggleDownloadPopUp from "../app/toggleDownloadPopUp.js";

let settingsCog = document.getElementById("settings-cog");
let cancelSettingsButton = document.getElementById("cancelSettingsButton");

let settings = document.getElementById("settings");

// Show Settings
const showSettings = () => {
  settings.classList.remove("d-none");
};

settingsCog.addEventListener("click", showSettings);

// Hide Settings
const hideSettings = () => {
  settings.classList.add("d-none");
  toggleBiblePopUp(true);
  toggleDownloadPopUp(true);
};

cancelSettingsButton.addEventListener("click", hideSettings);
