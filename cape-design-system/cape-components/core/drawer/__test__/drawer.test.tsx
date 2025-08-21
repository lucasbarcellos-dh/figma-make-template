import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { Drawer } from '../drawer';
import { DrawerTrigger } from '../components/drawer-trigger';
import { DrawerContent } from '../components/drawer-content';

vi.mock('../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('Drawer Component', () => {
  it('should render drawer by default', () => {
    render(
      <Drawer defaultOpen>
        <DrawerTrigger>
          <button type="button">I am an anchor</button>
        </DrawerTrigger>
        <DrawerContent>Test Drawer</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByText('I am an anchor')).toBeInTheDocument();
    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  });

  it('should render drawer with disablePortal', () => {
    render(
      <Drawer defaultOpen disablePortal>
        <DrawerTrigger>
          <button type="button">I am an anchor</button>
        </DrawerTrigger>
        <DrawerContent>Test Drawer</DrawerContent>
      </Drawer>,
    );
    expect(screen.getByText('Test Drawer')).toBeInTheDocument();
  });

  it('should trigger onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChangeMock = vi.fn();

    render(
      <Drawer onOpenChange={onOpenChangeMock} open={false}>
        <DrawerTrigger>
          <button type="button">I am an anchor</button>
        </DrawerTrigger>
        <DrawerContent>Test Drawer</DrawerContent>
      </Drawer>,
    );

    const anchorElement = screen.getByText('I am an anchor');
    await user.click(anchorElement);

    expect(onOpenChangeMock).toHaveBeenCalledWith(true);
  });

  it('should change open state', async () => {
    const user = userEvent.setup();

    render(
      <Drawer defaultOpen>
        <DrawerTrigger>
          <button type="button">I am an anchor</button>
        </DrawerTrigger>
        <DrawerContent>Test Drawer</DrawerContent>
      </Drawer>,
    );

    expect(screen.getByText('Test Drawer').getAttribute('data-status')).toEqual(
      'initial',
    );

    // eslint-disable-next-line testing-library/no-node-access -- quering floating-ui-portal
    const closeButton = document.querySelector(
      'div[data-floating-ui-portal=""]',
    );
    closeButton && (await user.click(closeButton));

    expect(screen.getByText('Test Drawer').getAttribute('data-status')).toEqual(
      'close',
    );
  });

  it('should trigger onOpenChange if children are not valid element', async () => {
    const user = userEvent.setup();
    const onOpenChangeMock = vi.fn();

    render(
      <Drawer onOpenChange={onOpenChangeMock} open={false}>
        <DrawerTrigger>I am an anchor</DrawerTrigger>
        <DrawerContent>Test Drawer</DrawerContent>
      </Drawer>,
    );

    const anchorElement = screen.getByText('I am an anchor');
    await user.click(anchorElement);

    expect(onOpenChangeMock).toHaveBeenCalledWith(true);
  });
});
