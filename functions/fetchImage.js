async function fetchImage(searchTerms) {
  const res = await fetch(
    `https://pixabay.com/api/?key=15219428-7eba042dad533469cf2a7368c&q=${
      searchTerms[Math.floor(Math.random() * 5)]
    }&image_type=photo&per_page=200`
  );
  const data = await res.json();

  let imgURL = data.hits[Math.floor(Math.random() * 200)].largeImageURL;
  console.log(imgURL);

  return imgURL;
}

export default fetchImage;
