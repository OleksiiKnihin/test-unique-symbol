import { searchFerstUnicSymbolInAllText } from 'functions/search';
import { useState } from 'react';
import { ButtonAdd } from './Buttons/ButtonAdd';
import { ButtonClean } from './Buttons/ButtonClean';
import { ShowResult } from './ShowResult/ShowResult';
import { TaskText, exampleText } from './TaskText/TaskText';

export const App = () => {
  const [words, setWords] = useState('');
  const [unique, setUnique] = useState('');

  const handleChange = evt => {
    evt.preventDefault();
    let text = evt.target.value;
    setWords(text);
    searchUniqSymbol(text);
  };

  const searchUniqSymbol = text => {
    const result = searchFerstUnicSymbolInAllText(text);
    setUnique(result);
  };

  const handleDelete = () => {
    setWords('');
    setUnique('');
  };

  const addExample = () => {
    setWords(exampleText);
    searchUniqSymbol(exampleText);
  };

  return (
    <div className="container">
      <TaskText />
      <div className="wrapperUserInterface">
        <textarea name="search" value={words} onChange={handleChange} />
        <ButtonClean handleDelete={handleDelete} />
        <ButtonAdd addExample={addExample} />
      </div>
      {unique !== '' && <ShowResult unique={unique} />}
    </div>
  );
};
