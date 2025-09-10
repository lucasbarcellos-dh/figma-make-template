import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { HelperText } from '../helper-text';

describe('HelperText', () => {
  it('should render the component', () => {
    render(<HelperText>Helper text message.</HelperText>);
    const helperTextElement: HTMLElement = screen.getByText(
      'Helper text message.',
    );
    const iconElement: HTMLElement = screen.getByLabelText('Help icon');
    expect(helperTextElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  it('should have neutral variant by default', () => {
    render(
      <HelperText data-testid="test-helper-text">
        Helper text message.
      </HelperText>,
    );
    const helperTextElement: HTMLElement =
      screen.getByTestId('test-helper-text');
    expect(helperTextElement.dataset.variant).toBe('neutral');
  });

  it('should have medium size by default', () => {
    render(
      <HelperText data-testid="test-helper-text">
        Helper text message.
      </HelperText>,
    );
    const alertElement: HTMLElement = screen.getByTestId('test-helper-text');
    expect(alertElement.dataset.size).toBe('medium');
  });

  it('should render with passed variant and size', () => {
    render(
      <HelperText data-testid="test-helper-text" size="large" variant="success">
        Helper text message.
      </HelperText>,
    );
    const helperTextElement: HTMLElement =
      screen.getByTestId('test-helper-text');
    expect(helperTextElement.dataset.variant).toBe('success');
    expect(helperTextElement.dataset.size).toBe('large');
  });

  it('should not render icon', () => {
    render(<HelperText icon={false}>Helper text message.</HelperText>);
    const iconElement: HTMLElement[] = screen.queryAllByLabelText('Help icon');
    expect(iconElement.length).toBe(0);
  });
});
