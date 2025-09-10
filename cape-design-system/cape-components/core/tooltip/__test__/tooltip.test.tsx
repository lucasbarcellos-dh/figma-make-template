import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { Tooltip } from '../tooltip';
import { TooltipTrigger } from '../components/tooltip-trigger';
import { TooltipContent } from '../components/tooltip-content';

vi.mock('../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('Tooltip Component', () => {
  it('renders without crashing', () => {
    render(
      <Tooltip>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });

  it('renders the tooltip content when the trigger is hovered', async () => {
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
    expect(trigger).toHaveAttribute('data-state', 'open');

    await user.unhover(trigger);
    await waitForElementToBeRemoved(() =>
      screen.queryByText('Tooltip content'),
    );
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('renders the tooltip content by default, when specified', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });

  it('toggles the tooltip content', async () => {
    const { rerender } = render(
      <Tooltip open>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
    expect(screen.getByText('Tooltip content')).toBeInTheDocument();

    rerender(
      <Tooltip open={false}>
        <TooltipTrigger>
          <button type="button">Hover me</button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );

    await waitForElementToBeRemoved(() =>
      screen.queryByText('Tooltip content'),
    );
  });
});
