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

export function createOptions(data, num) {
  const options = uniqueOptions([data[num]], 4);
  shuffle(options);
  
  return options;

  function uniqueOptions(arr, n) {
    let options = arr;

    while (options.length < n) {
      const randNum = randomRange(0, data.length - 1);
      const option = data[randNum];

      if (options.includes(option)) {
        return uniqueOptions(options, n);
      }

      options = [...options, option];
    }

    return options;
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