import { expect, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tooltip } from '../../../tooltip';
import { TooltipContent } from '../tooltip-content';
import { TooltipTrigger } from '../../tooltip-trigger';

vi.mock('../../../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('<TooltipContent />', () => {
  it('renders the tooltip content by default, when specified', () => {
    render(
      <Tooltip defaultOpen>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );

    expect(screen.getByText('Tooltip content')).toBeInTheDocument();
  });

  it('does not render the tooltip content by default', () => {
    render(
      <Tooltip>
        <TooltipTrigger>{null}</TooltipTrigger>
        <TooltipContent>Tooltip content</TooltipContent>
      </Tooltip>,
    );

    expect(screen.queryByText('Tooltip content')).not.toBeInTheDocument();
  });
});
