import React from 'react';

import './bar.scss';

const Bar: React.FC = () => {
  return (
    <div className="hangman__bar-container">
      <div className="hangman__bar bar-horizontal"></div>
      <div className="hangman__bar bar-vertical"></div>
    </div>
  );
}

export { Bar };
