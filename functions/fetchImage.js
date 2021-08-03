function fetchImage(searchTerms) {
  return fetch(
    `https://pixabay.com/api/?key=15219428-7eba042dad533469cf2a7368c&q=${
      searchTerms[Math.floor(Math.random() * 5)]
    }&image_type=photo&per_page=200`
  ).then((res) => res.json());
}

export default fetchImage;
