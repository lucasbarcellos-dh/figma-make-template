import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DialogFooter } from '../dialog-footer';
import { Dialog } from '../../../dialog';

describe('DialogFooter Component', () => {
  it('renders without crashing', () => {
    render(
      <Dialog>
        <DialogFooter data-testid="dialog-footer" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-footer');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Dialog>
        <DialogFooter data-testid="dialog-footer" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-footer');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Dialog>
        <DialogFooter className="custom-class" data-testid="dialog-footer" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-footer');
    expect(element).toHaveClass('custom-class');
  });
});
