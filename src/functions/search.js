// Search function for the first unique symbol in one word
function searchFirstUnicSymbolInWord(word) {
  const ArrSymbols = [];

  for (let i = 0; i < word.length; i += 1) {
    let counter = 0;
    let symbol = word[i];
    for (let j = 0; j < word.length; j += 1) {
      if (word[j] === symbol) {
        counter += 1;
      }
    }
    if (counter === 1) {
      ArrSymbols.push(symbol);
    }
  }

  return ArrSymbols[0];
}

export function searchFerstUnicSymbolInAllText(text) {
  // Сheck for string with spaces
  if (text.trim() === '') return '';

  // Delete extra symbols
  let currentText = text.replaceAll(/[-().,^+!?]/g, '');

  // Divide the whole text into single words
  currentText = currentText.split(' ');

  // Looking for the first unique symbol in each word
  let symbolInEachWord = [];
  for (let i = 0; i < currentText.length; i += 1) {
    symbolInEachWord.push(searchFirstUnicSymbolInWord(currentText[i]));
  }

  //Looking for the first unique symbol in all text
  return searchFirstUnicSymbolInWord(symbolInEachWord);
}
