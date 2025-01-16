//TRUE RESULT - Happy outcome

export function dBRecursive(num) {
  if (num === 0) {
    return num;
  } else {
    return (num % 2) + 10 * dBRecursive(Math.floor(num / 2));
  }
}



