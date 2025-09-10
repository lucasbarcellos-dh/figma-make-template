import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DialogBody } from '../dialog-body';
import { Dialog } from '../../../dialog';

describe('DialogBody Component', () => {
  it('renders without crashing', () => {
    render(
      <Dialog>
        <DialogBody data-testid="dialog-body" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-body');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Dialog>
        <DialogBody data-testid="dialog-body" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-body');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Dialog>
        <DialogBody className="custom-class" data-testid="dialog-body" />
      </Dialog>,
    );
    const element = screen.getByTestId('dialog-body');
    expect(element).toHaveClass('custom-class');
  });
});
