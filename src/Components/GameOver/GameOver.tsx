import React from 'react';

import './game-over.scss';

interface Props {
  onNewWordClick: () => void;
}

const GameOver: React.FC<Props> = ({ onNewWordClick }) => {

  return (
    <div className="hangman__game-over">
      <div className="hangman__game-over__text">Game Over</div>
      <div className="hangman__game-over__button" onClick={onNewWordClick}>New word</div>
    </div>
  );
}

export { GameOver };
