const searchBook = (book, books) => {
  let i = 0;
  for (i = 0; i < books.length; i++) {
    if (books[i] === book) return i;
  }
  if (books[i] === books.length - 1)
    console.log(`Book ${book} does not exist in Bible.`);
};

export default searchBook;
