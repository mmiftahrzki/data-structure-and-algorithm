export default function twoCrystalBalls(breaks: boolean[] = []) {
  const jump_length = Math.floor(Math.sqrt(breaks.length));
  let i = 0;

  for (; i < breaks.length; i += jump_length) {
    if (breaks[i] == true) {
      break;
    }
  }

  i -= jump_length;

  for (let j = i; j <= i + jump_length && breaks.length; j++) {
    if (breaks[j] == true) {
      return j;
    }
  }

  return -1;
}
