// import { LoginForm } from './TextField';
// import { UniqueSymbol } from './UniqueSymbol';
import { searchFirstNotRepeatSymbolInAllText } from 'functions/search';
import { useState } from 'react';

export const App = () => {
  const [words, setWords] = useState('');
  const [unique, setUnique] = useState('');

  let form = null;
  const handleChange = evt => {
    evt.preventDefault();
    form = evt.target.value;
    setWords(form);
    symbol(form);
  };

  const symbol = form => {
    const fn = searchFirstNotRepeatSymbolInAllText(form);
    setUnique(fn);
  };

  const handleDelete = () => {
    setWords('');
    setUnique('');
  };

  const addExample = () => {
    const text =
      'The Tao gave birth to machine language.  Machine language gave birth to the assembler. The assembler gave birth to the compiler.  Now there are ten thousand languages. Each language has its purpose, however humble.  Each language expresses the Yin and Yang of software.  Each language has its place within the Tao. But do not program in COBOL if you can avoid it.         -- Geoffrey James, "The Tao of Programming"';
    setWords(text);
    symbol(text);
  };

  return (
    <div>
      <div className="wrapper">
        <h2>Task</h2>
        <p>
          Вам потрібно розробити алгоритм програми, яка повинна виконувати
          наступне: - програма приймає на вхід довільний текст і знаходить в
          кожному слові цього тексту найперший символ, який більше НЕ
          повторюється в аналізуємому слові - далі із отриманого набору символів
          програма повинна вибрати перший унікальний (тобто той, який більше не
          зустручається в наборі) і повернути його.
        </p>
        <p>Наприклад, якщо програма отримує на вхід текст нижче:</p>
        <p>
          The Tao gave birth to machine language. Machine language gave birth to
          the assembler. The assembler gave birth to the compiler. Now there are
          ten thousand languages. Each language has its purpose, however humble.
          Each language expresses the Yin and Yang of software. Each language
          has its place within the Tao. But do not program in COBOL if you can
          avoid it. -- Geoffrey James, "The Tao of Programming" то повинна
          повернути вона символ "m".
        </p>
      </div>
      <textarea name="search" value={words} onChange={handleChange} />
      <button type="button" onClick={handleDelete}>
        Clean
      </button>
      <button type="button" onClick={addExample}>
        Add text from example
      </button>
      {unique !== '' && (
        <p className="unique">
          Unique symbol: {unique || 'Нету такого символа'}
        </p>
      )}
    </div>
  );
};
