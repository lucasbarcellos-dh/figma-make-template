import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DrawerFooter } from '../drawer-footer';
import { Drawer } from '../../../drawer';

describe('DrawerFooter Component', () => {
  it('renders without crashing', () => {
    render(
      <Drawer>
        <DrawerFooter data-testid="dialog-footer" />
      </Drawer>,
    );
    const element = screen.getByTestId('dialog-footer');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Drawer>
        <DrawerFooter data-testid="dialog-footer" />
      </Drawer>,
    );
    const element = screen.getByTestId('dialog-footer');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Drawer>
        <DrawerFooter className="custom-class" data-testid="dialog-footer" />
      </Drawer>,
    );
    const element = screen.getByTestId('dialog-footer');
    expect(element).toHaveClass('custom-class');
  });
});
