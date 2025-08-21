import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { ProgressBar } from '../progress-bar';

describe('<ProgressBar />', () => {
  it('renders without crashing', () => {
    const { rerender } = render(<ProgressBar data-testid="progress-bar" />);
    let element = screen.getByTestId('progress-bar');
    expect(element).toBeInTheDocument();
    rerender(<ProgressBar data-testid="progress-bar" value={12} />);
    element = screen.getByTestId('progress-bar');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` if value is specified', () => {
    render(<ProgressBar data-testid="progress-bar" value={20} />);
    const element = screen.getByTestId('progress-bar');
    expect(element.tagName).toBe('DIV');
  });

  it('renders as `div` if value is not specified', () => {
    render(<ProgressBar data-testid="progress-bar" />);
    const element = screen.getByTestId('progress-bar');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    const { rerender } = render(
      <ProgressBar
        className="custom-class"
        data-testid="progress-bar"
        value={20}
      />,
    );
    let element = screen.getByTestId('progress-bar');
    expect(element).toHaveClass('custom-class');
    rerender(
      <ProgressBar className="custom-class" data-testid="progress-bar" />,
    );
    element = screen.getByTestId('progress-bar');
    expect(element).toHaveClass('custom-class');
  });

  it('applies system prop correctly', () => {
    const { rerender } = render(
      <ProgressBar
        data-testid="progress-bar"
        style={{ margin: '10px', padding: '50px' }}
        value={20}
      />,
    );
    let element = screen.getByTestId('progress-bar');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
    rerender(
      <ProgressBar
        data-testid="progress-bar"
        style={{
          margin: '10px',
          padding: '50px',
        }}
      />,
    );
    element = screen.getByTestId('progress-bar');
    expect(element).toHaveStyle({
      margin: '10px',
      padding: '50px',
    });
  });

  it.each`
    prop         expectation
    ${'small'}               | ${'small'}
    ${'medium'}              | ${'medium'}
    ${'large'}               | ${'large'}
  `(
    'applies the size prop correctly when size is $size',
    ({
      prop,
      expectation,
    }: {
      prop: 'small' | 'medium' | 'large';
      expectation: string;
    }) => {
      const { rerender } = render(
        <ProgressBar data-testid="progress-bar" size={prop} value={20} />,
      );
      let element = screen.getByTestId('progress-bar');
      expect(element).toHaveAttribute('data-size', expectation);
      rerender(<ProgressBar data-testid="progress-bar" size={prop} />);
      element = screen.getByTestId('progress-bar');
      expect(element).toHaveAttribute('data-size', expectation);
    },
  );
});
