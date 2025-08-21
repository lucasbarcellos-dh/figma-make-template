import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DrawerBody } from '../drawer-body';
import { Drawer } from '../../../drawer';

describe('DrawerBody Component', () => {
  it('renders without crashing', () => {
    render(
      <Drawer>
        <DrawerBody data-testid="drawer-body" />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-body');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Drawer>
        <DrawerBody data-testid="drawer-body" />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-body');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Drawer>
        <DrawerBody className="custom-class" data-testid="drawer-body" />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-body');
    expect(element).toHaveClass('custom-class');
  });
});
