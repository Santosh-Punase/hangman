import React from 'react';

import { Word, MissedCharacters, Man, LoadingScreen, GameOver } from './Components';
import { getGuessWord } from './Util/helper';

import './app.scss';

interface State {
  word: string;
  guessedChars: string[];
  missedChars: string[];
  uniqueCharactersInWord: string[];
}

class App extends React.Component<unknown, State> {
  private _isMounted = false;
  constructor(props: unknown){
    super(props);
    this.state = {
      word: '',
      guessedChars: [],
      missedChars: [],
      uniqueCharactersInWord: []
    }
  }

  fetchNewWord = () => {
    getGuessWord()
    .then((word) => {
      if(!this._isMounted) return;
      let uniqueCharactersInWord: string[] = [];
      for(let c of word) {
        if(!uniqueCharactersInWord.includes(c)) uniqueCharactersInWord.push(c);
      }
      this.setState({ uniqueCharactersInWord, word: word.toLowerCase() })
    })
    .catch();
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener("keydown", this.handleKeyDown);

    this.fetchNewWord();   
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  handleKeyDown = (keyEvent: KeyboardEvent) => {
    if(!keyEvent.code.includes('Key')) return;

    const key = keyEvent.key.toLowerCase();
    const { guessedChars, missedChars, word } = this.state;

    if(!word.includes(key) && !missedChars.includes(key)) {
      missedChars.push(key);
    }

    if(word.includes(key) && !guessedChars.includes(key)) {
      guessedChars.push(key);
    }

    this.setState({ guessedChars, missedChars });
  }

  onNewWordClick = () => {
    this.setState({ word: '', guessedChars: [], missedChars: [] });
    this.fetchNewWord();
  }

  render() {
    const { word, guessedChars, missedChars, uniqueCharactersInWord } = this.state;

    if(!word) {
      return <LoadingScreen />
    }

    return (
      <div className="hangman">
        <div className="hangman__background">
          <div className="hangman__background-card">
          <Man lives={11 - missedChars.length} />
          <MissedCharacters characters={missedChars} />
          <Word word={word} gussedCharacters={guessedChars}/>
          </div>
        </div>
        <GameOver onNewWordClick={this.onNewWordClick} isGameOver={missedChars.length === 11} hasPlayerWon={uniqueCharactersInWord.length === guessedChars.length} />
      </div>
    );
  }
}

export default App;
