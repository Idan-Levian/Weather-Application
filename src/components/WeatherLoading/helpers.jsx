import * as S from './styled';

export const dropsPrinter = () => {
  const drops = [];
  for (let index = 0; index <= 10; index++) {
    drops.push(<S.Drop></S.Drop>);
  }
  return drops;
};

const dropAnimationsStyle = (i, duration) => {
  return `
        &:nth-child(${i + 1}) {
          animation-delay: ${duration};
         }
      `;
};
export const dropsAnimations = () => {
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
  for (let index = 0; index < 10; index += 1) {
    str += dropAnimationsStyle(index, durations[index]);
  }
  return str;
};
