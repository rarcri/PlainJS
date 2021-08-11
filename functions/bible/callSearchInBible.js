import searchInBible from './searchInBible.js';

const callSearchInBible = (text) => {
  // Here we convert string to array of string
  // 'Ioan 3:16' -> ['Ioan', '3', '16']
  let book;
  let chapter;
  let verse;
  let output = '';

  let text1 = text.split(' ');
  // We remove empty elements from array
  let stext = text1.filter((item) => {
    return item != null && item != '';
  });

  // Checking if first thing is not a number
  if (isNaN(stext[0])) {
    book = stext[0];

    let sstext = stext[1].split(':');
    chapter = sstext[0];
    verse = sstext[1];
  } else {
    book = stext[0] + ' ' + stext[1];

    let sstext = stext[2].split(':');
    chapter = sstext[0];
    verse = sstext[1];
  }

  if (verse.includes(',')) {
    let verses = verse.split(',');
    let allverses = [];

    // 14-12,13,14,15-27
    verses.forEach((verse) => {
      if (verse.includes('-')) {
        let sverse = verse.split('-');
        for (let i = sverse[0]; i < sverse[1]; i++) allverses.push(i);
      } else {
        allverses.push(verse);
      }
    });

    allverses.forEach((verse) => {
      output += searchInBible(book, chapter, verse);
    });
  }
  // If verses reference contains -
  else if (verse.includes('-')) {
    let sverse = verse.split('-');
    let start = sverse[0];
    let end = sverse[1];

    // Adding to output verses from start to end
    for (let i = start; i <= end; i++)
      output += searchInBible(book, chapter, i);
  } else output += searchInBible(book, chapter, verse);

  return output;
};

export default callSearchInBible;
