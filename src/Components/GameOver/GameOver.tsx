import React from 'react';

import './game-over.scss';

interface Props {
  isGameOver: boolean;
  hasPlayerWon: boolean;
  onNewWordClick: () => void;
}

const GameOver: React.FC<Props> = ({ onNewWordClick, isGameOver, hasPlayerWon }) => {

  if(isGameOver) {
    return (
      <div className="hangman__game-over">
        <div className="hangman__game-over__text">Game Over</div>
        <div className="hangman__game-over__button" onClick={onNewWordClick}>New word</div>
      </div>
    );
  }

  if(hasPlayerWon) {
    return (
      <div className="hangman__game-over">
        <div className="hangman__game-over__text">You won!!!</div>
        <div className="hangman__game-over__button" onClick={onNewWordClick}>Start over</div>
      </div>
    );
  }

  return null;
}

export { GameOver };
