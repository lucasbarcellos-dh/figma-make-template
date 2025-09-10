import type { ChangeEventHandler } from 'react';
import { forwardRef, useState } from 'react';
import { TextInput, TextInputControl } from '../../../text-input';
import { usePaginationContext } from '../../hooks/use-pagination-context';
import type { PaginationInputProps } from './type';

/**
 * PaginationInput is children of Pagination
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const PaginationInput = forwardRef<
  HTMLInputElement,
  PaginationInputProps
>(({ placeholder, ...restProps }, ref) => {
  const { onChange, count, current } = usePaginationContext();
  const [error, setError] = useState(false);
  const [internalValue, setInternalValue] = useState<string | number>(current);

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setError(false);
    setInternalValue(value);
    const numericValue = Number(value);
    if (isNaN(numericValue) || numericValue > count || numericValue < 1) {
      setError(true);
    } else {
      onChange?.(numericValue);
    }
  };

  return (
    <TextInput
      ref={ref}
      {...restProps}
      error={error}
      size="xsmall"
      style={{ flexShrink: 0, width: 'fit-content' }}
    >
      <TextInputControl
        max={count}
        min={0}
        onChange={onChangeHandler}
        placeholder={placeholder}
        type="number"
        value={internalValue}
      />
    </TextInput>
  );
});

PaginationInput.displayName = 'PaginationInput';
