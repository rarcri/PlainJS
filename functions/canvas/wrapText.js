import { textWidth, textHeight } from "./textMetrics.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";

function wrapText(ctx, text, x, y, maxWidth, maxHeight, lineHeight) {
  function checkWrap(words, maxWidth, ctx) {
    // Aici vom stoca textul care încape pe o linie
    let currentLine = "";

    // Aici vom stoca fiecare rând de text
    let lines = [];

    // mergem prin toate cuvintele din arrayul words
    words.forEach((word, index) => {
      // Dacă currentLine + currentword nu întrece lățimea oferită
      if (textWidth(ctx, `${currentLine} ${word}`) < maxWidth) {
        // adăugăm și următorul cuvânt
        currentLine += ` ${word}`;

        // Dacă suntem la ultimul element
        if (words.length - 1 == index)
          // Adăugăm lina curentă în array-ul lines
          lines.push(`${currentLine} `);
      }
      //altfel
      else {
        // adăugăm linia curentă în array-ul de string lines
        lines.push(currentLine);
        // Golim variabila pentru a fi pregătită pentru linia următoare
        currentLine = word;

        // iar dacă suntem la ultimul element
        if (words.length - 1 == index)
          // îl adăugăm și pe acesta la array-ul lines
          lines.push(`${word} `);
      }
    });
    console.log("LINES:", lines);
    return lines;
  }

  //  ctx.fillText(text,x,y,maxWidth)
  // Împărțim textul în cuvinte
  var words = text.split(" ");

  // chemăm funcția checkWrap și stocăm linile generate de aceasta în variablia lines
  let lines = checkWrap(words, maxWidth, ctx);
  console.log("WRAP - lines: ", lines);

  // getTextHeight
  // Găsim înălțimea unei singure linii
  let rowHeight = textHeight(ctx, "M");
  // Înălțimea întregului text
  // let textH = lines.length*rowHeight + lineHeight *lines.length;
  let textH = 500;
  console.log(textH);
  // Mărimea fontului de plecare
  let fontSize = 50;

  // // Dacă înălțimea textului este mai mare decât înălțimea dorită atunci
  // if (textH > maxHeight - 10) {
  //   // Cât timp înălțimea textului este mai mare decât înălțimea dorită
  //   while (textH > maxHeight - 10 && textH > 0) {
  //     //Atunci decrementăm mărimea Fontului
  //     fontSize--;

  //     // setăm fontul cu noul fontSize
  //     ctx.font = `${fontSize}px ${fontFamily}`;
  //     console.log(fontSize);

  //     // chemăm functia checkWrap
  //     lines = checkWrap(words, maxWidth, ctx);
  //   }
  // }

  // // Dacă înălțimea texului este mai mică decât maxHeight
  // else if (textH < maxHeight - 10) {
  //   // Atunci cât timp înălțimea textului este mică decât maxHeight
  //   while (textH < maxHeight - 10) {
  //     // incrementăm fontSize
  //     fontSize++;

  //     // setăm fontul cu noul fontSize
  //     ctx.font = `${fontSize}px ${fontFamily}`;

  //     // apelăm funcția check Wrap
  //     lines = checkWrap(words, maxWidth, ctx);
  //   }
  // }

  //  pentru fiecare linie apelăm funcția ctx.fillText && ctx.strokeText
  lines.forEach((line) => {
    ctx.strokeText(line, x, y);
    ctx.fillText(line, x, y);
    // Incrementăm pe y cu lineHeight
    y += lineHeight;
  });

  return y;
}

export default wrapText;
