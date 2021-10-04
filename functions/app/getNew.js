import drawCanvas from "../canvas/drawCanvas.js";
import { searchTerms } from "../../main.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";

const getNew = (searchTerms) => {
  let getNew = document.querySelector("#getNew");

  getNew.addEventListener("click", () => {
    drawCanvas(searchTerms, fontFamily);
  });
};

getNew(searchTerms);

export default getNew;
