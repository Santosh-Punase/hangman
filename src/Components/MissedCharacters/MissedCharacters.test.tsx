import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { MissedCharacters } from './MissedCharacters';

afterEach(cleanup);

describe('Missed characters', () => {

  test('should not render initially', () => {
    const { asFragment } = render(<MissedCharacters characters={[]} />);
    
    expect(asFragment()).toMatchInlineSnapshot(`<DocumentFragment />`);
  });

  test('should render characters', () => {
    const { asFragment } = render(<MissedCharacters characters={['a','b']} />);
    
    expect(asFragment()).toMatchSnapshot();
  });  
});
