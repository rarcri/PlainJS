import { bible } from "../content/romcor.js";
import { books } from "../content/BibleBooks.js";
import searchBook from "./searchBook.js";

const searchBible = (book, chapter, verse) => {
  const Bible = JSON.parse(bible);
  let booknr = searchBook(book, books);
  console.log(Bible.books[booknr].chapters[chapter].verses[verse].text);
};

searchBible("Geneza", 10, 2);
