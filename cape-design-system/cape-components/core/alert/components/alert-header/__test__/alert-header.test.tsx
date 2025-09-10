import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { AlertHeader } from '../alert-header';

describe('AlertHeader Component', () => {
  it('should render without crashing', () => {
    render(<AlertHeader>test header</AlertHeader>);
    const alertHeaderElement: HTMLElement = screen.getByText('test header');
    expect(alertHeaderElement).toBeInTheDocument();
  });
});
