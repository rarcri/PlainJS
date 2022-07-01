// Here we get the canvas
let canvas = new fabric.Canvas("canvas", { preserveObjectStacking:true });

let iImages = 0;
let iTexts = 0;

let images = { hits: [] };
let texts = { verses: [] };

// cand dam click sa generam o imagine
$("#getNew").on("click", () => {

  // Here we clear the canvas
  canvas.clear();

  // Adding overlay 
  let overlay = new fabric.Rect(
    {
      width: canvas.width,
      height: canvas.height,
      top:0,
      left:0,
      opacity:0.17 
    }
  );

  // Add image
  if (iImages >= images.hits.length) {
    iImages = 0;
    $.get(
      "https://pixabay.com/api/?key=15219428-7eba042dad533469cf2a7368c&q=yellow+flowers&image_type=photo",
      function (data) {
        images = data;
        console.log(data);

        fabric.Image.fromURL(images.hits[iImages].largeImageURL, function (myImg) {
          var img1 = myImg.set({ left: 0, top: 0 });
          canvas.add(img1);
          canvas.sendBackwards(img1);
          canvas.add(overlay);
          canvas.sendBackwards(overlay);
          },
          {
            crossOrigin: "anonymous"
          }
        );
      },
    );
  } else {
    iImages++;
    fabric.Image.fromURL(images.hits[iImages].largeImageURL, function (myImg) {
      var img1 = myImg.set({ left: 0, top: 0 });
      canvas.add(img1);
      canvas.sendBackwards(img1);
      canvas.add(overlay);
      canvas.sendBackwards(overlay);
    },
    {
      crossOrigin: "anonymous"
    });
  }


  // ADDING TEXT
  if (iTexts >= texts.verses.length) {
    iTexts = 0;
    $.get(
      "https://getbible.net/v2/cornilescu/62/3.json",
      function (data) {
        texts = data;
        console.log(data);

        let text = new fabric.Textbox(
          texts.verses[iTexts].text
        ,
          {
            width: canvas.width - 0.2 * canvas.width,
            styles: {},
            fontFamily: "Courier",
            fontSize: 35,
            stroke: "black",
            fill: "white",
            fontWeight: 600,
            paintFirst: "stroke",
            strokeWidth: 3,
            left: 50,
            top: 50,
            textAlign: "center",
            lockRotation: true,
          }
        );

        canvas.add(text);
        canvas.centerObject(text);

      }
    );
  } else {

    iTexts++;
    let text = new fabric.Textbox(
      texts.verses[iTexts].text
    ,
      {
        width: canvas.width - 0.2 * canvas.width,
        styles: {},
        fontFamily: "Courier",
        fontSize: 35,
        stroke: "black",
        fill: "white",
        paintFirst: "stroke",
        fontWeight: 600,
        strokeWidth: 3,
        left: 50,
        top: 50,
        textAlign: "center",
        lockRotation: true,
      }
    );

    console.log("text top",text.top); 
    canvas.add(text);
    canvas.centerObject(text);

  }
});

canvas.renderAll();


// HERE we handle the download
$("#downloadButton").on("click", () => {
  let image = canvas.toDataURL({pixelRatio: 2});

  // creem un link temporar
  let tmpLink = document.createElement('a');
  tmpLink.download = 'image.png';
  tmpLink.href = image;

  document.body.appendChild(tmpLink);
  tmpLink.click();
  document.body.removeChild(tmpLink);

});
