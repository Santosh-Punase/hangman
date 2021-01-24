import React from 'react';

import { Word, MissedCharacters, Man, LoadingScreen, GameOver } from './Components';
import { getGuessWord } from './Util/helper';

import './app.scss';

interface State {
  word: string;
  guessedChars: string[];
  missedChars: string[];
}

class App extends React.Component<unknown, State> {
  private _isMounted = false;
  constructor(props: unknown){
    super(props);
    this.state = {
      word: '',
      guessedChars: [],
      missedChars: []
    }
  }

  fetchNewWord = () => {
    getGuessWord()
    .then(word => this._isMounted && this.setState({ word: word.toLowerCase() }))
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
    guessedChars.push(key);

    this.setState({ guessedChars, missedChars });
  }

  onNewWordClick = () => {
    this.setState({ word: '', guessedChars: [], missedChars: [] });
    this.fetchNewWord();
  }

  render() {
    const { word, guessedChars, missedChars } = this.state;

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
        { missedChars.length === 11 && <GameOver onNewWordClick={this.onNewWordClick}/> }
      </div>
    );
  }
}

export default App;
