import React from 'react';

import './loading-screen.scss';

const LoadingScreen: React.FC = () => {
  
  return (
    <div className="hangman__loading-screen">
      <span className="dots"></span>
      <span className="dots"></span>
      <span className="dots"></span>
    </div>
  );
}

export { LoadingScreen };
