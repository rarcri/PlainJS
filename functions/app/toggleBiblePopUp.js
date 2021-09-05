let toggle = document.querySelector("#customToggle");
let BiblePopUp = document.querySelector("#BiblePopUp");

toggle.addEventListener("change", () => {
  if (BiblePopUp.classList.contains("hidden"))
    BiblePopUp.classList.remove("hidden");
  else window.location.reload();
});
