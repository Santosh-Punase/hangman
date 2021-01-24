import React from 'react';

import { Bar } from '../Bar/Bar';
import { Head } from './Components';

import './man.scss';

interface Props {
  lives: number;
}

const Man: React.FC<Props> = ({ lives }) => {
  
  return (
    <div className="hangman__man">
      <Bar />
      {lives <= 10 && <Head />}
      {lives <= 9 && <div className="hangman__man-neck"></div>}
      {lives <= 8 &&
        <div className="hangman__man-corpus">
          {lives <= 7 && <div className="hangman__man-arm__right" />  }
          {lives <= 6 && <div className="hangman__man-arm__left" /> }
          {lives <= 5 && <div className="hangman__man-hand__right" /> }
          {lives <= 4 && <div className="hangman__man-hand__left" />}
          {lives <= 3 && <div className="hangman__man-leg__right" />  }
          {lives <= 2 && <div className="hangman__man-leg__left" /> }
          {lives <= 1 && <div className="hangman__man-foot__right" /> }
          {lives <= 0 && <div className="hangman__man-foot__left" />}
        </div>
      }      
    </div>

  );
}

export { Man };
