import { importAll } from '../../../funcs/funcs';


export function chooseCategoryResult(num, length) {
  const [a, b, c] = importAll(require.context('./icons', false, /\.(png|jpe?g|svg)$/));

  if (num && num !== length) {
    return {
      icon: a,
      title: `${num}/${length}`,
      caption: 'Congratulations!',
      buttons: ['Home', 'Next Quiz'],
      isNext: true,
    };
  }

  if (num && num === length) {
    return {
      icon: c,
      title: 'Grand result',
      caption: 'Congratulations!',
      buttons: ['Home', 'Next Quiz'],
      isNext: true,
    };
  }

  return {
    icon: b,
    title: 'Game over',
    caption: 'Play again?',
    buttons: ['No', 'Yes'],
    isNext: false,
  };
}
