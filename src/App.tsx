import React from 'react';

import { Word, MissedCharacters, Man, LoadingScreen, GameOver } from './Components';
import { getGuessWord } from './Util/helper';

import './app.scss';

interface State {
  word: string;
  guessedCharacters: string[];
  missedCharacters: string[];
  uniqueCharactersInWord: string[];
}

class App extends React.Component<unknown, State> {
  private _isMounted = false;
  constructor(props: unknown){
    super(props);
    this.state = {
      word: '',
      guessedCharacters: [],
      missedCharacters: [],
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
    const { guessedCharacters, missedCharacters, word } = this.state;

    if(!word.includes(key) && !missedCharacters.includes(key)) {
      missedCharacters.push(key);
    }

    if(word.includes(key) && !guessedCharacters.includes(key)) {
      guessedCharacters.push(key);
    }

    this.setState({ guessedCharacters, missedCharacters });
  }

  onNewWordClick = () => {
    this.setState({ word: '', guessedCharacters: [], missedCharacters: [] });
    this.fetchNewWord();
  }

  render() {
    const { word, guessedCharacters, missedCharacters, uniqueCharactersInWord } = this.state;

    if(!word) {
      return <LoadingScreen />
    }

    return (
      <div className="hangman">
        <div className="hangman__background">
          <div className="hangman__background-card">
          <Man lives={11 - missedCharacters.length} />
          <MissedCharacters characters={missedCharacters} />
          <Word word={word} gussedCharacters={guessedCharacters} />
          </div>
        </div>
        <GameOver onNewWordClick={this.onNewWordClick} isGameOver={missedCharacters.length === 11} hasPlayerWon={uniqueCharactersInWord.length === guessedCharacters.length} />
      </div>
    );
  }
}

export default App;
