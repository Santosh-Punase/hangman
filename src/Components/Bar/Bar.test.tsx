import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Bar } from './Bar';

afterEach(cleanup);

describe('Hangman bars', () => {
  test('should render bars', () => {
    const { asFragment } = render(<Bar />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
