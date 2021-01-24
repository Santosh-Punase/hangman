import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { GameOver } from './GameOver';

afterEach(cleanup);

const props = {
  onNewWordClick: jest.fn()
};

describe('Game Over screen', () => {
  test('should render', () => {
    const { asFragment } = render(<GameOver { ...props } />);
    
    expect(asFragment()).toMatchSnapshot();
  });

  test('should start new game on "new word" click', () => {
    const { getByText } = render(<GameOver { ...props } />);
    
    fireEvent.click(getByText(/New word/i));

    expect(props.onNewWordClick).toHaveBeenCalledTimes(1);
  });
});
