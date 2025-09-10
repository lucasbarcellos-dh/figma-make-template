import { forwardRef, useEffect } from 'react';
import { ChevronDownMiniIcon } from '@deliveryhero/cape-icons';
import { useCombinedClassName } from '../../../common/hooks';
import { useDropdownContext } from '../../hooks/use-dropdown-context';
import styles from '../../dropdown.module.scss';
import type { DropdownSelectProps } from './type';

const NAME = 'DropdownSelect';

/**
 * DropdownSelect is used with Dropdown.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/849338-dropdown
 */
export const DropdownSelect = forwardRef<HTMLDivElement, DropdownSelectProps>(
  (
    {
      className = '',
      size = 'medium',
      error = false,
      validationState,
      children,
      ...restProps
    },
    ref,
  ) => {
    const { setTrigger, disabled } = useDropdownContext();

    const classNames = useCombinedClassName({
      className: styles.select,
      overrideClassName: className,
    });

    useEffect(() => {
      setTrigger('select');
    }, []);

    return (
      <div
        ref={ref}
        {...restProps}
        className={classNames}
        data-disabled={disabled}
        data-error={error}
        data-size={size}
        data-validation-state={validationState}
      >
        <div className={styles.content}>{children}</div>
        <ChevronDownMiniIcon
          className={styles.icon}
          size={size === 'large' ? 'large' : 'medium'}
        />
      </div>
    );
  },
);

DropdownSelect.displayName = NAME;
