import { books } from "../../content/BibleBooks.js";
import searchBook from "../bible/searchBook.js";
import { bible } from "../../content/romcor.js";
import drawCanvas, { imageURL } from "../canvas/drawCanvas.js";
import { currentFont as fontFamily } from "../settings/selectFont.js";
import { currentAspectRatio } from "../settings/selectAspectRatio.js";

// Keyterms to search for on Pixabay
const searchTerms = ["green+hills", "flower", "landscape+summer", "nature"];

// Getting the Input from select tag
let text = "";

const BiblePopUp = () => {
  let Bible = JSON.parse(bible);

  let selectBook = document.getElementById("BibleBook");
  let selectChapter = document.getElementById("BibleChapter");
  let selectVerse = document.getElementById("BibleVerse");

  let bookIndex;
  let chapterIndex;
  let verseIndex;

  let bookSelection = '<option value="">Alege cartea ...</option>';
  let chapterSelection = '<option value="">Alege capitolul ...</option>';
  let verseSelection = '<option value="">Alege versetul ...</option>';

  // We wrap each book in option tags and store them in
  // bookSelection
  books.forEach((book) => {
    bookSelection += `<option value='${book}'>${book}</option>\n`;
  });

  console.log(Bible);
  console.log(searchBook(selectBook.value, books));

  selectBook.innerHTML = bookSelection;
  selectChapter.innerHTML = chapterSelection;
  selectVerse.innerHTML = verseSelection;

  // Update Chapter Selection
  selectBook.onchange = (e) => {
    chapterSelection = '<option value="">Alege capitolul ...</option>';
    console.log("e.target.value of selectBook: ", e.target.value);
    bookIndex = searchBook(e.target.value, books);
    for (let i = 0; i < Bible.books[bookIndex].chapters.length; i++)
      chapterSelection += `<option value='${i + 1}'>${i + 1}</option>`;
    selectChapter.innerHTML = chapterSelection;
  };

  // Update Verse Selection
  selectChapter.onchange = (e) => {
    chapterIndex = e.target.value - 1;
    verseSelection = '<option value="">Alege versetul ...</option>';
    for (
      let i = 0;
      i < Bible.books[bookIndex].chapters[chapterIndex].verses.length;
      i++
    )
      verseSelection += `<option value='${i + 1}'>${i + 1}</option>`;
    selectVerse.innerHTML = verseSelection;
  };

  // Here we call draw Canvas
  selectVerse.onchange = () => {
    let reference = `${selectBook.value} ${selectChapter.value}:${selectVerse.value}`;
    drawCanvas(
      searchTerms,
      fontFamily,
      reference,
      "",
      false,
      imageURL,
      true,
      currentAspectRatio
    );
  };
};

export default BiblePopUp;
