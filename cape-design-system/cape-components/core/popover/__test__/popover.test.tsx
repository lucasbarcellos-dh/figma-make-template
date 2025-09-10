import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { Popover } from '../popover';
import { PopoverTrigger } from '../components/popover-trigger';
import { PopoverContent } from '../components/popover-content';

vi.mock('../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('Popover Component', () => {
  it('renders without crashing', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <button type="button">I am an anchor</button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );
    expect(screen.getByText('I am an anchor')).toBeInTheDocument();
    expect(screen.queryByText('Test Popover')).not.toBeInTheDocument();
  });

  it('should render popover by default', () => {
    render(
      <Popover defaultOpen>
        <PopoverTrigger>
          <button type="button">I am an anchor</button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );
    expect(screen.getByText('I am an anchor')).toBeInTheDocument();
    expect(screen.getByText('Test Popover')).toBeInTheDocument();
  });

  it('should hide/show popover', async () => {
    const { rerender } = render(
      <Popover open>
        <PopoverTrigger>
          <button type="button">I am an anchor</button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );
    expect(screen.getByText('I am an anchor')).toBeInTheDocument();
    expect(screen.getByText('Test Popover')).toBeInTheDocument();

    rerender(
      <Popover open={false}>
        <PopoverTrigger>
          <button type="button">I am an anchor</button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    await waitForElementToBeRemoved(() => screen.queryByText('Test Popover'));
  });

  it('should trigger onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChangeMock = vi.fn();

    render(
      <Popover onOpenChange={onOpenChangeMock} open={false}>
        <PopoverTrigger>
          <button type="button">I am an anchor</button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    const anchorElement = screen.getByText('I am an anchor');
    await user.click(anchorElement);

    expect(onOpenChangeMock).toHaveBeenCalledWith(true);
  });

  it('should support hover trigger type', async () => {
    const user = userEvent.setup();

    render(
      <Popover triggerType="hover">
        <PopoverTrigger>
          <button type="button">I am an anchor</button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    const anchorElement = screen.getByText('I am an anchor');
    await user.hover(anchorElement);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();

    await user.unhover(anchorElement);
    await waitForElementToBeRemoved(() => screen.queryByText('Test Popover'));
  });

  it('should support more than one trigger', async () => {
    const user = userEvent.setup();
    const onOpenChangeMock = vi.fn();

    render(
      <Popover onOpenChange={onOpenChangeMock} open={false}>
        <PopoverTrigger>
          <button name="btn-a" type="button">
            I am an anchor 1
          </button>
        </PopoverTrigger>
        <PopoverTrigger>
          <button name="btn-a" type="button">
            I am an anchor 2
          </button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    let anchorElement = screen.getByText('I am an anchor 1');
    await user.click(anchorElement);

    expect(onOpenChangeMock).toHaveBeenCalledWith(true);

    anchorElement = screen.getByText('I am an anchor 2');
    await user.click(anchorElement);

    expect(onOpenChangeMock).toHaveBeenCalledWith(true);
  });

  it('should independently control popover state with both triggers', async () => {
    const user = userEvent.setup({ delay: 100 });

    render(
      <Popover>
        <PopoverTrigger>
          <button name="btn-a" type="button">
            I am an anchor 1
          </button>
        </PopoverTrigger>
        <PopoverTrigger>
          <button name="btn-b" type="button">
            I am an anchor 2
          </button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    const anchorElement1 = screen.getByText('I am an anchor 1');
    const anchorElement2 = screen.getByText('I am an anchor 2');

    await user.hover(anchorElement1);
    await user.click(anchorElement1);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();

    await user.hover(anchorElement1);
    await user.click(anchorElement1);
    await waitForElementToBeRemoved(() => screen.queryByText('Test Popover'));

    expect(screen.queryByText('Test Popover')).not.toBeInTheDocument();

    await user.hover(anchorElement2);
    await user.click(anchorElement2);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();

    await user.hover(anchorElement2);
    await user.click(anchorElement2);
    await waitForElementToBeRemoved(() => screen.queryByText('Test Popover'));

    expect(screen.queryByText('Test Popover')).not.toBeInTheDocument();
  });

  it('should not close popover when both triggers are interacted with', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger>
          <button name="btn-a" type="button">
            I am an anchor 1
          </button>
        </PopoverTrigger>
        <PopoverTrigger>
          <button name="btn-b" type="button">
            I am an anchor 2
          </button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    const anchorElement1 = screen.getByText('I am an anchor 1');
    await user.click(anchorElement1);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();

    const anchorElement2 = screen.getByText('I am an anchor 2');
    await user.click(anchorElement2);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();
  });

  it('should switch between triggers without closing popover', async () => {
    const user = userEvent.setup();

    render(
      <Popover>
        <PopoverTrigger>
          <button name="btn-a" type="button">
            I am an anchor 1
          </button>
        </PopoverTrigger>
        <PopoverTrigger>
          <button name="btn-b" type="button">
            I am an anchor 2
          </button>
        </PopoverTrigger>
        <PopoverContent>Test Popover</PopoverContent>
      </Popover>,
    );

    const anchorElement1 = screen.getByText('I am an anchor 1');
    await user.click(anchorElement1);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();

    const anchorElement2 = screen.getByText('I am an anchor 2');
    await user.click(anchorElement2);
    expect(screen.getByText('Test Popover')).toBeInTheDocument();
  });
});
