// Search function for the first unique symbol in one word
function searchFirstUnicSymbolInWord(word) {
  for (let i = 0; i < word.length; i += 1) {
    let counter = 0;
    let uniqSymbol = word[i];
    for (let j = 0; j < word.length; j += 1) {
      if (word[j] === ' ') break;
      if (word[j] === uniqSymbol) {
        counter += 1;
      }
    }
    if (counter === 1) {
      return uniqSymbol;
    }
  }
}

export function searchFerstUnicSymbolInAllText(text) {
  // Сheck for string with spaces
  // if (text.trim() === '') return '';

  // Delete extra symbols
  let currentText = text.replaceAll(/[-().,^+!?"]/g, '');

  // Divide the whole text into single words
  currentText = currentText.split(' ');
  // console.log(currentText);

  // Looking for the first unique symbol in each word
  let symbolInEachWord = [];
  for (let i = 0; i < currentText.length; i += 1) {
    if (currentText[i] === '') continue;
    symbolInEachWord.push(searchFirstUnicSymbolInWord(currentText[i]));
  }

  //Looking for the first unique symbol in all text
  return searchFirstUnicSymbolInWord(symbolInEachWord);
}
