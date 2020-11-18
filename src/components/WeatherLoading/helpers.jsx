import * as S from './styled';

export const dropsPrinter = (runner) => {
  const drops = [];
  for (let index = 0; index < runner; index++) {
    drops.push(<S.Drop key={index}></S.Drop>);
  }
  return drops;
};

const dropAnimationsStyle = (i, duration) => {
  var stringToInt = parseInt(i);
  return `
        .drop:nth-child(${stringToInt + 1}) {
          animation-delay: ${duration};
         }
      `;
};

export const dropsAnimations = (index) => {
  const durations = [
    '-130ms',
    '-240ms',
    '-390ms',
    '-525ms',
    '-640ms',
    '-790ms',
    '-900ms',
    '-1050ms',
    '-1130ms',
    '-1300ms',
  ];
  let str = '';
  for (let runner = 0; runner < index.length; runner++) {
    str += dropAnimationsStyle(index[runner].key, durations[runner]);
  }
  return str;
};
