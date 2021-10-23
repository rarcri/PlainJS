import drawCanvas from "../canvas/drawCanvas.js";
import { searchTerms } from "../../main.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";

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
  });
};

getNew(searchTerms);

export default getNew;
