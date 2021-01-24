import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Word } from './Word';

afterEach(cleanup);

describe('Guess Word', () => {

  test('should not render initially', () => {
    const { asFragment } = render(<Word word='' gussedCharacters={['a','b']} />);
    
    expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`);
  });

  test('should render guessed characters', () => {
    const { asFragment } = render(<Word word='analog' gussedCharacters={['a','b']}  />);
    
    expect(asFragment()).toMatchSnapshot();
  });  
});
