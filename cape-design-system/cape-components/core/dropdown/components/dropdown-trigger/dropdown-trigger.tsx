import { forwardRef } from 'react';
import { useDropdownContext } from '../../hooks/use-dropdown-context';
import styles from '../../dropdown.module.scss';
import type { DropdownTriggerProps } from './type';

const NAME = 'DropdownTrigger';

/**
 * DropdownTrigger is used with Dropdown.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/849338-dropdown
 */
export const DropdownTrigger = forwardRef<HTMLDivElement, DropdownTriggerProps>(
  ({ className = '', children, ...restProps }, ref) => {
    const { trigger, disabled } = useDropdownContext();

    return (
      <summary
        className={styles.trigger}
        data-disabled={disabled}
        data-trigger-type={trigger}
        tabIndex={disabled ? -1 : undefined}
      >
        <div ref={ref} {...restProps} className={className}>
          {children}
        </div>
      </summary>
    );
  },
);

DropdownTrigger.displayName = NAME;
