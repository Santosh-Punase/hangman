import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Man } from './Man';

afterEach(cleanup);

describe('Hangman Man should render with', () => {
  [11,10,9,8,7,6,5,4,3,2,1,0].forEach(live => {
    test(`${live} lives`, () => {
      const { asFragment } = render(<Man lives={live} />);
      
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
