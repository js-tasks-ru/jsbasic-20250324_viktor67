function getMinMax(str) {
  const words = str.split(' ');
  const numbers = [];

  for (let i = 0; i < words.length; i++) {
    let num = parseFloat(words[i]);
    if (!isNaN(num)) {
      numbers.push(num);
    }
  }

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  return { min, max };
}
