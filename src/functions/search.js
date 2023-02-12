export function searchFirstUnicSymbol(text) {
  // Сheck for string with spaces
  if (text.trim() === '') return '';

  // Delete extra symbols
  text = text.replaceAll(/[-().,^+!?"]/g, '');

  // Divide the whole text into single words
  text = text.split(' ');

  // Looking for the first unique symbol in each word
  let symbols = [];

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
