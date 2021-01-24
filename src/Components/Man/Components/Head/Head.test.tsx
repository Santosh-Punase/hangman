import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Head } from './Head';

afterEach(cleanup);

describe('Hangman Man Head', () => {
  test('should render head', () => {
    const { asFragment } = render(<Head />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
