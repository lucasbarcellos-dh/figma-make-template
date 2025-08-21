import { expect, describe, it, vi } from 'vitest';
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Tooltip } from '../../../tooltip';
import { TooltipContent } from '../../tooltip-content';
import { TooltipTrigger } from '../tooltip-trigger';

vi.mock('../../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('TooltipTrigger', () => {
  it('changes trigger state to open on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
      </Tooltip>,
    );

    const trigger = screen.getByText('Hover me');
    expect(trigger).toHaveAttribute('data-state', 'closed');

    await user.hover(trigger);
    await waitFor(() => {
      expect(trigger).toHaveAttribute('data-state', 'open');
    });
  });

  it('changes the state to closed on hover out', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );

    const trigger = screen.getByText('Hover me');

    await user.hover(trigger);
    await waitFor(() => {
      expect(screen.getByText('Tooltip content')).toBeInTheDocument();
    });

    await user.unhover(trigger);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Tooltip content'),
    );
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('merges the ref and handles events', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    const ref = vi.fn();

    render(
      <Tooltip>
        <TooltipTrigger onClick={onClick} ref={ref}>
          <button type="button">Hover me</button>
        </TooltipTrigger>
      </Tooltip>,
    );
    expect(ref).toHaveBeenCalledTimes(1);
    const trigger = screen.getByText('Hover me');
    await user.click(trigger);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('returns a button element when child is undefined', () => {
    render(
      <Tooltip>
        <TooltipTrigger>{undefined}</TooltipTrigger>
      </Tooltip>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('returns a button element when child is null', () => {
    render(
      <Tooltip>
        <TooltipTrigger>{null}</TooltipTrigger>
      </Tooltip>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
