function camelize(str) {
  let words = str.split('-');
  let newStr = words[0];

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    newStr += word.charAt(0).toUpperCase() + word.slice(1);
  }

  return newStr;
}
