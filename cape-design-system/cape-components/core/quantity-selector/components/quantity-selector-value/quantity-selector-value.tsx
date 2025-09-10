import { forwardRef } from 'react';
import { useQuantitySelectorValue } from '../../hooks/use-quantity-selector-value';
import type { QuantitySelectorValueProps } from './type';

/**
 * Use QuantitySelectorValue inside QuantitySelector component to show a value between the buttons.
 *
 * @see https://cape.deliveryhero.com/2bfa22855/p/740e35-quantity-selector
 */
export const QuantitySelectorValue = forwardRef<
  HTMLDivElement,
  QuantitySelectorValueProps
>(({ children, ...restProps }, ref) => {
  const { valueProps } = useQuantitySelectorValue({
    ...restProps,
  });

  return (
    <div ref={ref} {...valueProps}>
      {children}
    </div>
  );
});

QuantitySelectorValue.displayName = 'QuantitySelectorValue';
