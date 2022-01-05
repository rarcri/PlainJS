import { bible } from '../../content/romcor.js';
import { books } from '../../content/BibleBooks.js';
import searchBook from './searchBook.js';

const searchInBible = (book, chapter, verse) => {
  // Here we convert the json string to object
  const Bible = JSON.parse(bible);
  // We call searchBook
  let booknr = searchBook(book, books);
  console.log(
    'Bible: ',
    Bible.books[booknr].chapters[chapter - 1].verses[verse - 1]
  );

  return Bible.books[booknr].chapters[chapter - 1].verses[verse - 1].text;
};

export default searchInBible;
