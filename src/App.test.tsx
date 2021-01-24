import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

describe('App', () => {

  test('should render Loading screen initially', () => {
    const { container } = render(<App />);
    
    expect(container.firstElementChild?.classList.contains('hangman__loading-screen')).toBe(true);
  });

  test('should render game, when word is loaded', async () => {
    const { container } = render(<App />);

    return await waitFor(() => {
      expect(container.firstElementChild?.classList.contains('hangman')).toBe(true);
    });
  });
});
