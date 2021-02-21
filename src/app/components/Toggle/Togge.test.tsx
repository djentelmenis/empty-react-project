import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from './Toggle';

console.log(Input);

describe('Toggle', () => {
  it('Renders without crashing', () => {
    render(<Input initialValue />);

    expect(screen.getByText('Auto-brightness')).toBeDefined();
  });
});
