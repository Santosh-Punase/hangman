import React from 'react';

import './head.scss';

const Head: React.FC = () => {
  
  return (
    <div className="hangman__man-head">
      <div className="hangman__man-ears"></div>
      <div className="hangman__man-face"></div>
      <div className="hangman__man-forehead"></div>
      <div className="hangman__man-eyes eye__left"></div>
      <div className="hangman__man-eyes eye__right"></div>
      <div className="hangman__man-chick chick__left"></div>
      <div className="hangman__man-chick chick__right"></div>
      <div className="hangman__man-nose"></div>
      <div className="hangman__man-mouth"></div>
      <div className="hangman__man-earing"></div>
    </div>

  );
}

export { Head };
