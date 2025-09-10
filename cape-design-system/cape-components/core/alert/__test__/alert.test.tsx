import { render, screen } from '@testing-library/react';
import { expect, describe, it, vi } from 'vitest';
import { IconPlaceholderIcon } from '@deliveryhero/cape-icons';
import { Alert } from '../alert';

const mockCloseFunction = vi.fn();
describe('Alert Component', () => {
  it('should render without crashing', () => {
    render(<Alert>test</Alert>);
    const alertElement: HTMLElement = screen.getByRole('alert');
    expect(alertElement).toBeInTheDocument();
  });

  it('should have branded variant by default when the variant prop is not set.', () => {
    render(<Alert>test</Alert>);
    const alertElement: HTMLElement = screen.getByRole('alert');
    expect(alertElement.dataset.variant).toBe('branded');
  });

  it('should show the close button when the onClose callback function is provided.', () => {
    render(<Alert onClose={mockCloseFunction}>test</Alert>);
    const closeButtonElement: HTMLElement | undefined =
      screen.getByRole('button');
    expect(closeButtonElement).toBeInTheDocument();
  });

  it('should show the custom icon element passed as the icon prop.', () => {
    render(
      <Alert icon={<IconPlaceholderIcon data-testid="icon-element" />}>
        test
      </Alert>,
    );
    const iconElement = screen.getByTestId('icon-element');
    expect(iconElement).toBeInTheDocument();
  });

  it('should use default aria-label "Close" if closeButtonLabel is not provided', () => {
    render(<Alert onClose={mockCloseFunction}>test</Alert>);
    const closeButton = screen.getByRole('button', {
      name: 'Close',
    });
    expect(closeButton).toBeInTheDocument();
  });

  it('should set a custom aria-label on the close button via closeButtonLabel prop', () => {
    render(
      <Alert closeButtonLabel="Close custom alert" onClose={mockCloseFunction}>
        test
      </Alert>,
    );
    const closeButton = screen.getByRole('button', {
      name: 'Close custom alert',
    });
    expect(closeButton).toBeInTheDocument();
  });
});
