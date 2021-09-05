import drawCanvas from "../canvas/drawCanvas.js";
import { searchTerms } from "../../main.js";

const getNew = (searchTerms) => {
  let getNew = document.querySelector("#getNew");

  getNew.addEventListener("click", () => {
    drawCanvas(searchTerms);
  });
};

getNew(searchTerms);

export default getNew;
