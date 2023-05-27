import { render, screen } from '@testing-library/react';
import App from '../App';
import Landing from '../Pages/landing';

test('renders the landing page', () => {
  render(<Landing/>);
});