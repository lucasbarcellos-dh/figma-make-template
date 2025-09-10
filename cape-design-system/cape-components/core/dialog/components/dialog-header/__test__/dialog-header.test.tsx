import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DialogHeader } from '../dialog-header';
import { Dialog } from '../../../dialog';

describe('DialogHeader Component', () => {
  it('renders without crashing', () => {
    render(
      <Dialog>
        <DialogHeader data-testid="dialog-header" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-header');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Dialog>
        <DialogHeader data-testid="dialog-header" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-header');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Dialog>
        <DialogHeader className="custom-class" data-testid="dialog-header" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-header');
    expect(element).toHaveClass('custom-class');
  });
});
