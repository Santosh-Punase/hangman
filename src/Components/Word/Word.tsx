import React from 'react';

import './word.scss';

interface Props {
  word: string;
  gussedCharacters: string[];
}

const Word: React.FC<Props> = ({ word, gussedCharacters }) => {
  if(!word) {
    return null;
  }

  const startIndex = 11 - word.length;

  return (
    <div className="hangman__word">
      {[...Array(11)].map((x,i) => (
        startIndex - i > 0
        ? <div className="hangman__word__char-box box-empty" key={i}></div>
        : <div className="hangman__word__char-box" key={i}>{gussedCharacters.includes(word.charAt(i-startIndex)) ? word.charAt(i-startIndex) : ''}</div>
      ))
      }
    </div>
  );
}

export { Word };
