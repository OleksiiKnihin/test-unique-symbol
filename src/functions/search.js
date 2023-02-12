export function searchFirstUnicSymbol(inputText) {
  // Сheck for string with spaces
  if (inputText.trim() === '') return '';

  // Divide the whole text into single words
  const text = inputText.split(' ');

  // Looking for the first unique symbol in each word
  const symbols = [];

  for (const word of text) {
    for (const letter of word) {
      if (word.indexOf(letter) === word.lastIndexOf(letter)) {
        symbols.push(letter);
        break;
      }
    }
  }

  //Looking for the first unique symbol in all text
  for (const symbol of symbols) {
    if (symbols.indexOf(symbol) === symbols.lastIndexOf(symbol)) {
      return symbol;
    }
  }
}
