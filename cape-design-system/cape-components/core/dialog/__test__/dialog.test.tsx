import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import { Dialog } from '../dialog';
import { DialogTrigger } from '../components/dialog-trigger';
import { DialogContent } from '../components/dialog-content';

vi.mock('../../common/hooks/use-media-query', () => ({
  useMediaQuery: () => true,
}));

describe('Dialog Component', () => {
  it('should render dialog by default', () => {
    render(
      <Dialog defaultOpen>
        <DialogTrigger>
          <button type="button">I am an anchor</button>
        </DialogTrigger>
        <DialogContent>Test Dialog</DialogContent>
      </Dialog>,
    );
    expect(screen.getByText('I am an anchor')).toBeInTheDocument();
    expect(screen.getByText('Test Dialog')).toBeInTheDocument();
  });

  it('should trigger onOpenChange', async () => {
    const user = userEvent.setup();
    const onOpenChangeMock = vi.fn();

    render(
      <Dialog onOpenChange={onOpenChangeMock} open={false}>
        <DialogTrigger>
          <button type="button">I am an anchor</button>
        </DialogTrigger>
        <DialogContent>Test Dialog</DialogContent>
      </Dialog>,
    );

    const anchorElement = screen.getByText('I am an anchor');
    await user.click(anchorElement);

    expect(onOpenChangeMock).toHaveBeenCalledWith(true);
  });
});
