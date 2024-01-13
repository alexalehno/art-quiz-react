export const getCurrentQuestion = (type, category) => {
  return type === 'artist'
    ? (category - 1) * 10
    : (category - 1) * 10 + 120;
}

export const getLastQuestion = (type, category) => {
  return type === 'artist'
    ? category * 10 - 1
    : category * 10 - 1 + 120;
}

export const soundPlayer = (track, volume) => {
  const audio = new Audio(track);
  audio.volume = volume / 100;
  audio.play();
}

export const highlight = (el, color) => el.style.backgroundColor = color;

export const increase = (val, step, min, max) => {
  val += step;

  if (val < min) {
    val = min;
  }

  if (val > max) {
    val = max;
  }

  return val;
}

export function importAll(r) {
  return r.keys().map(r);
}

export function getImage(number) {
  const src = `https://raw.githubusercontent.com/alexalehno/image-data/master/img/${number}.jpg`;
  return `url(${src})`
}

export function createOptions(data, num, numOfOptions) {
  const { imageNum, author } = data[num];
  return uniqueOptions(data, [imageNum], [author.toLowerCase()], numOfOptions);

  function uniqueOptions(data, arr1, arr2, n) {
    let imageNumArr = arr1;
    let authorArr = arr2;

    while (imageNumArr.length < n) {
      const randNum = randomRange(0, data.length - 1);
      const { imageNum, author } = data[randNum];

      if (imageNumArr.includes(imageNum) || authorArr.includes(author.toLowerCase())) {
        return uniqueOptions(data, imageNumArr, authorArr, n);
      }

      imageNumArr = [...imageNumArr, imageNum];
      authorArr = [...authorArr, author.toLowerCase()];
    }

    shuffle(imageNumArr);
    return imageNumArr.map(num => data[num]);
  }

  function shuffle(arr) {
    const array = arr;

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function randomRange(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
  }
}

export function getArrOfAuthors(data) {
  let authors= [];

  if (data) {
    authors = data.map(el => el.author.toLowerCase());
  }

 return authors;
}
