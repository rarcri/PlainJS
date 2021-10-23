let aspectRatio = document.getElementById("selectAspectRatio");

export let currentAspectRatio = aspectRatio.value || "none";

aspectRatio.addEventListener("change", () => {
  currentAspectRatio = aspectRatio.value;
});
