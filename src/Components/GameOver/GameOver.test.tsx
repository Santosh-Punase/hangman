import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { GameOver } from './GameOver';

afterEach(cleanup);

const props = {
  onNewWordClick: jest.fn(),
  isGameOver: false,
  hasPlayerWon: false
};

describe('Game Over screen', () => {
  test('should Not render initially', () => {
    const { asFragment } = render(<GameOver { ...props } />);
    
    expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`);
  });

  test('should render gameover', () => {
    const { asFragment } = render(<GameOver { ...props } isGameOver />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('should render player Won', () => {
    const { asFragment } = render(<GameOver { ...props } hasPlayerWon />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('should start new game on "new word" click', () => {
    const { getByText } = render(<GameOver { ...props } isGameOver />);
    
    fireEvent.click(getByText(/New word/i));

    expect(props.onNewWordClick).toHaveBeenCalledTimes(1);
  });
});
