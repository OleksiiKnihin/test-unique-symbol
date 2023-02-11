export function searchFirstUnicSymbol(text) {
  // Сheck for string with spaces
  if (text.trim() === '') return '';

  // Delete extra symbols
  let currentText = text.replaceAll(/[-().,^+!?"]/g, '');

  // Divide the whole text into single words
  currentText = currentText.split(' ');

  // Looking for the first unique symbol in each word
  let symbolInEachWord = [];

  for (const word of currentText) {
    for (const letter of word) {
      if (word.indexOf(letter) === word.lastIndexOf(letter)) {
        symbolInEachWord.push(letter);
        break;
      }
    }
  }

  //Looking for the first unique symbol in all text
  for (const symbol of symbolInEachWord) {
    if (
      symbolInEachWord.indexOf(symbol) === symbolInEachWord.lastIndexOf(symbol)
    ) {
      return symbol;
    }
  }
}
