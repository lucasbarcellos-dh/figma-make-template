import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { DrawerHeader } from '../drawer-header';
import { Drawer } from '../../../drawer';

describe('DrawerHeader Component', () => {
  it('renders without crashing', async () => {
    render(
      <Drawer>
        <DrawerHeader data-testid="drawer-header" />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-header');
    expect(element).toBeInTheDocument();

    expect(await screen.findByLabelText('Close drawer')).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(
      <Drawer>
        <DrawerHeader data-testid="drawer-header" />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-header');
    expect(element.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(
      <Drawer>
        <DrawerHeader className="custom-class" data-testid="drawer-header" />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-header');
    expect(element).toHaveClass('custom-class');
  });

  it('renders without close button', () => {
    render(
      <Drawer>
        <DrawerHeader data-testid="drawer-header" closeButton={false} />
      </Drawer>,
    );
    const element = screen.getByTestId('drawer-header');
    expect(element).toBeInTheDocument();

    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
});
