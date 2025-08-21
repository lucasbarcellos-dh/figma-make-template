import { forwardRef, type ReactElement } from 'react';
import { AddIcon, RemoveIcon, DeleteIcon } from '@deliveryhero/cape-icons';
import { IconButton, type IconButtonProps } from '../../../icon-button';
import { useQuantitySelectorContext } from '../../hooks/use-quantity-selector-context';
import type { QuantitySelectorProps } from '../../type';
import type { QuantitySelectorButtonProps } from './type';

/**
 * Use QuantitySelectorButton inside QuantitySelector component to show increment or decrement buttons.
 *
 * @see https://cape.deliveryhero.com/2bfa22855/p/740e35-quantity-selector
 */
export const QuantitySelectorButton = forwardRef<
  HTMLButtonElement,
  QuantitySelectorButtonProps
>(({ icon, action, ...restProps }, ref) => {
  const { size } = useQuantitySelectorContext();

  const iconButtonSizeMap: Record<
    NonNullable<QuantitySelectorProps['size']>,
    IconButtonProps['size']
  > = {
    small: 'xsmall',
    medium: 'small',
    large: 'medium',
  };

  const actionToIconMap: Record<
    QuantitySelectorButtonProps['action'],
    ReactElement
  > = {
    increment: <AddIcon aria-label="Increment Icon" />,
    decrement: <RemoveIcon aria-label="Decrement Icon" />,
    delete: <DeleteIcon aria-label="Delete Icon" />,
  };

  return (
    <IconButton
      icon={icon || actionToIconMap[action]}
      ref={ref}
      size={iconButtonSizeMap[size]}
      {...restProps}
    />
  );
});

QuantitySelectorButton.displayName = 'QuantitySelectorButton';
