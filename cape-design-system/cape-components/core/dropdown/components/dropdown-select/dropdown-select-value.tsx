import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../dropdown.module.scss';
import type { DropdownSelectValueProps } from './type';

const NAME = 'DropdownSelectValue';

/**
 * DropdownSelectValue is used with DropdownSelect.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/849338-dropdown
 */
export const DropdownSelectValue = forwardRef<
  HTMLDivElement,
  DropdownSelectValueProps
>(({ className = '', placeholder = '', children, ...restProps }, ref) => {
  const classNames = useCombinedClassName({
    className: styles.value,
    overrideClassName: className,
  });

  return children ? (
    <div ref={ref} {...restProps} className={classNames}>
      {children}
    </div>
  ) : (
    <div className={styles.placeholder}>{placeholder}</div>
  );
});

DropdownSelectValue.displayName = NAME;
