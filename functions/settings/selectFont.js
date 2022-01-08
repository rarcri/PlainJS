import { fonts } from "../../content/fonts.js";
let selectFont = document.querySelector("#selectFont");

fonts.forEach((font) => {
  setTimeout(() => {
    selectFont.innerHTML += `<option class='text-black' value=${font} style='font-family:${font};font-size:40px;'>${font}</option>`;
  }, 50);
});

export let currentFont = selectFont.value || "sans-serif";

selectFont.addEventListener("change", () => {
  currentFont = selectFont.value;
});
