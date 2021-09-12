let toggle = document.querySelector("#choice");
let BiblePopUp = document.querySelector("#BiblePopUp");

toggle.addEventListener("change", () => {
  if (BiblePopUp.classList.contains("d-none"))
    BiblePopUp.classList.remove("d-none");
  else BiblePopUp.classList.add("d-none");
});
