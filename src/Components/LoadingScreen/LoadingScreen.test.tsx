import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { LoadingScreen } from './LoadingScreen';

afterEach(cleanup);

describe('Loading screen', () => {
  test('should render', () => {
    const { asFragment } = render(<LoadingScreen />);
    
    expect(asFragment()).toMatchSnapshot();
  });
});
