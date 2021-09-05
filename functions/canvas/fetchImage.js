function fetchImage(searchTerms) {
  return fetch(
    `https://pixabay.com/api/?key=${process.env.APIKEY}&q=${
      searchTerms[Math.floor(Math.random() * searchTerms.length)]
    }&image_type=photo&per_page=200`
  ).then((res) => res.json());
}

export default fetchImage;
