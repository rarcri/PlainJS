let canvas = document.getElementById("canvas");

function saveOnServer() {
  let dataURL = canvas.toDataURL();

  let imgToSave = new Image();
  imgToSave.src = dataURL;

  fetch(dataURL)
    .then((res) => res.blob())
    .then((blob) => {
      let postData = new FormData();
      postData.append("profile-file", blob);
      fetch("http://localhost:3000/single", {
        method: "POST",
        headers: {
          // "Content-type": "multipart/formdata",
        },
        body: postData,
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
}

export default saveOnServer;
