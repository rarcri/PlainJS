import {currentAspectRatio} from "../settings/selectAspectRatio.js"

let canvas = document.getElementById("canvas");
let canvasContainer = document.getElementById("canvas-div");

let canvasAspectRatio = parseInt(currentAspectRatio.split(":")[0])/parseInt(currentAspectRatio.split(":")[1])
console.log("canvasAspcetRatio:", canvasAspectRatio)

const setCanvasDivWidth = () => {
  // console.log("CANVAS width: ", canvas.style.width);
  // console.log("CANVAS height: ", canvas.style.height);

  // canvasContainer.style.width = 90/100*document.body.offsetWidth ? `${90/100*document.body.offsetWidth}px` : "800px";
  // canvasContainer.style.height = canvas.height ? `${canvas.height*canvasAspectRatio}px` : "500px";
};

export default setCanvasDivWidth;
