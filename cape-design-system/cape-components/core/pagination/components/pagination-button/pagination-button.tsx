import type { MouseEventHandler } from 'react';
import { forwardRef } from 'react';
import { Button } from '../../../button';
import { usePaginationContext } from '../../hooks/use-pagination-context';
import type { PaginationButtonProps } from './type';

const getNextValue = (
  action: PaginationButtonProps['action'],
  current: number,
  count: number,
): number => {
  switch (action) {
    case 'first':
      return 1;
    case 'prev':
      return current - 1;
    case 'next':
      return current + 1;
    case 'last':
      return count;
    default:
      return 1;
  }
};

/**
 * PaginationButton is children of Pagination
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const PaginationButton = forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ children, action, disabled, onClick, ...restProps }, ref) => {
  const { isLast, isFirst, onChange, current, count } = usePaginationContext();
  const shouldDisableButton =
    (action === 'next' || action === 'last' ? isLast : isFirst) || disabled;
  const nextValue = getNextValue(action, current, count);

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    onChange?.(nextValue);
    onClick?.(event);
  };

  return (
    <Button
      ref={ref}
      {...restProps}
      disabled={shouldDisableButton}
      onClick={onClickHandler}
      size="xsmall"
      variant="tertiary"
    >
      {children}
    </Button>
  );
});

PaginationButton.displayName = 'PaginationButton';
