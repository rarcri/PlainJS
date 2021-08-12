import { books } from '../../content/BibleBooks.js';
import searchBook from '../bible/searchBook.js';
import { bible } from '../../content/romcor.js';

let Bible = JSON.parse(bible);

let selectBook = document.getElementById('BibleBook');
let selectChapter = document.getElementById('BibleChapter');
let selectVerse = document.getElementById('BibleVerse');

let bookIndex;
let chapterIndex;
let verseIndex;

let bookSelection = '<option value="">Alege cartea ...</option>';
let chapterSelection = '<option value="">Alege capitolul ...</option>';
let verseSelection = '<option value="">Alege versetul ...</option>';
books.forEach((book) => {
  bookSelection += `<option value=${book}>${book}</option>\n`;
});

console.log(Bible);
console.log(searchBook(selectBook.value, books));

selectBook.innerHTML = bookSelection;
selectChapter.innerHTML = chapterSelection;
selectVerse.innerHTML = verseSelection;

selectBook.onchange = (e) => {
  chapterSelection = '';
  bookIndex = searchBook(e.target.value, books);
  for (let i = 0; i < Bible.books[bookIndex].chapters.length; i++)
    chapterSelection += `<option value='${i + 1}'>${i + 1}</option>`;
  selectChapter.innerHTML = chapterSelection;
};

selectChapter.onchange = (e) => {
  chapterIndex = e.target.value;
  verseSelection = '';
  for (
    let i = 0;
    i < Bible.books[bookIndex].chapters[chapterIndex].verses.length;
    i++
  )
    verseSelection += `<option value='${i + 1}'>${i + 1}</option>`;
  selectVerse.innerHTML = verseSelection;
};

selectVerse.onchange = () => {
  console.log(
    `${selectBook.value} ${selectChapter.value}:${selectVerse.value}`
  );
};
