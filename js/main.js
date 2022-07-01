// Settings
$("#settings-cog").on("click",()=>{
  $("#settings").toggleClass("d-none");
});

$("#cancelSettingsButton").on("click",()=>{
  $("#settings").toggleClass("d-none");
});

// Custom
$("#choice").on("click", () => {
  $("#customPopUp").toggleClass("d-none");
});

$("#xSignCustom").on("click", () => {
  $("#customPopUp").toggleClass("d-none");
  $("#choice").prop("checked", false);
});

// Custom Toggle
$("#customToggle").on("click",() => {
  $("#BiblePopUp").toggleClass("d-none");
});
