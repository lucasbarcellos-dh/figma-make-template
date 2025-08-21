import type { ReactElement } from 'react';
import { forwardRef } from 'react';
import { VisuallyHidden } from '../visually-hidden';
import type { QuantitySelectorProps } from './type';
import { useQuantitySelector } from './hooks/use-quantity-selector';
import { QuantitySelectorContext } from './hooks/use-quantity-selector-context';
import { QuantitySelectorButton } from './components/quantity-selector-button';
import { QuantitySelectorValue } from './components/quantity-selector-value';

/**
 * QuantitySelector allows users to select a specific quantity of an item. It can also be used to increment/decrement any custom value like zoom percentage.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/740e35-quantity-selector
 */
export const QuantitySelector = forwardRef<
  HTMLDivElement,
  QuantitySelectorProps
>(
  (
    {
      children,
      size = 'medium',
      value = 0,
      min = 0,
      max,
      labels,
      onIncrement,
      onDecrement,
      ...restProps
    },
    ref,
  ) => {
    const { rootProps } = useQuantitySelector({
      size,
      ...restProps,
    });

    const renderInnerElements = (): ReactElement => {
      if (children)
        return (
          <div ref={ref} {...rootProps}>
            {children}
          </div>
        );

      return (
        <div ref={ref} role="group" {...rootProps}>
          {value > min ? (
            <>
              <QuantitySelectorButton
                action={value === min + 1 ? 'delete' : 'decrement'}
                aria-label={
                  value === min + 1 ? labels?.delete : labels?.decrement
                }
                disabled={value === min}
                onClick={onDecrement}
              />
              <QuantitySelectorValue
                aria-atomic="true"
                aria-live="polite"
                role="status"
              >
                {labels?.quantity ? (
                  <>
                    <VisuallyHidden as="span">{labels.quantity}</VisuallyHidden>{' '}
                    {value}
                  </>
                ) : (
                  value
                )}
              </QuantitySelectorValue>
            </>
          ) : null}
          <QuantitySelectorButton
            action="increment"
            aria-label={labels?.increment}
            disabled={value === max}
            onClick={onIncrement}
          />
        </div>
      );
    };

    return (
      <QuantitySelectorContext.Provider value={{ size }}>
        {renderInnerElements()}
      </QuantitySelectorContext.Provider>
    );
  },
);

QuantitySelector.displayName = 'QuantitySelector';
