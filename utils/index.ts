export const numberToArray = (number: number) => {
  const array = [];
  for (let i = 1; i<=number; i++) {
    array.push(i);
  }
  return array;
}
