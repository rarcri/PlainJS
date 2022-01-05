import drawCanvas from "../canvas/drawCanvas.js";
import { searchTerms } from "../../main.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";
import setCanvasDivWidth from "../app/setCanvasDivWidth.js";

let downloadPopUp = document.getElementById("downloadPopUp");
let downloadButton = document.getElementById("downloadButton");

const getNew = (searchTerms) => {
  let getNew = document.querySelector("#getNew");

  getNew.addEventListener("click", () => {
    drawCanvas(
      searchTerms,
      fontFamily,
      "",
      "",
      false,
      "",
      false,
      currentAspectRatio
    );
    setCanvasDivWidth();
    downloadPopUp.classList.add("hidden");
    downloadButton.innerText = "Descarcă imaginea";
    downloadButton.classList.replace("btn-danger", "btn-primary");
  });
};

getNew(searchTerms);

export default getNew;
