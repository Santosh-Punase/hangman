import React from 'react';

import './missed-chars.scss';

interface Props {
  characters: string[];
}

const MissedCharacters: React.FC<Props> = ({ characters }) => {
  if(!characters.length) {
    return null;
  }

  return (
    <div className="hangman__missed-characters">
      <div className="hangman__missed-characters__text">You Missed:</div>
      <div className="hangman__missed-characters__char">
        {characters.map((c) => <div key={c}>{c}</div>)}
      </div>

    </div>
  );
}

export { MissedCharacters };
