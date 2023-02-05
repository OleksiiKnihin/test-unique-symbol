function searchFirstUnicSymbol(word) {
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

export function searchFirstNotRepeatSymbolInAllText(text) {
  if (!text) return '';
  // Divide the whole text into single words
  let arrWords = text.trim().split(' ');

  // Looking for the first unique symbol in each word
  let firstSymbolInEachWord = [];
  for (let i = 0; i < arrWords.length; i += 1) {
    firstSymbolInEachWord.push(searchFirstUnicSymbol(arrWords[i]));
  }

  //We are looking for the first unique symbol in all text
  let answer = searchFirstUnicSymbol(firstSymbolInEachWord);

  console.log(answer);
  //   console.log(`Your text: ${text}`);
  //   console.log(`First unique symbol in all text - ${answer}`);
  return answer;
}
