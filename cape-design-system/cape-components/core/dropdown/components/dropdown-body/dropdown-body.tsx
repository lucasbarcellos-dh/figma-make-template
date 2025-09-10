import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../dropdown.module.scss';
import type { DropdownBodyProps } from './type';

const NAME = 'DropdownBody';

/**
 * DropdownBody is used with Dropdown.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/849338-dropdown
 */
export const DropdownBody = forwardRef<HTMLDivElement, DropdownBodyProps>(
  ({ className = '', children, ...restProps }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.body,
      overrideClassName: className,
    });
    return (
      <div ref={ref} {...restProps} className={classNames}>
        {children}
      </div>
    );
  },
);

DropdownBody.displayName = NAME;
