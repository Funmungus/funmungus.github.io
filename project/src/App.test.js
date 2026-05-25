import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders introduction text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/self introduction/i);
  expect(textElement).toBeInTheDocument();
});
