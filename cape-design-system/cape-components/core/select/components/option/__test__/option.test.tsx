import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Option } from '../index';

describe('<Option />', () => {
  it('renders without crashing', () => {
    render(<Option value="option" />);
    const element = screen.getByRole('option');
    expect(element).toBeInTheDocument();
  });
});
