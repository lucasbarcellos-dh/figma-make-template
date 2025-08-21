import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../dropdown.module.scss';
import type { DropdownSelectSlotProps } from './type';

const NAME = 'DropdownSelectSlot';

/**
 * DropdownSelectSlot is used with DropdownSelect.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/849338-dropdown
 */
export const DropdownSelectSlot = forwardRef<
  HTMLDivElement,
  DropdownSelectSlotProps
>(({ className = '', children, ...restProps }, ref) => {
  const classNames = useCombinedClassName({
    className: styles.slot,
    overrideClassName: className,
  });

  return (
    <div ref={ref} {...restProps} className={classNames}>
      {children}
    </div>
  );
});

DropdownSelectSlot.displayName = NAME;
