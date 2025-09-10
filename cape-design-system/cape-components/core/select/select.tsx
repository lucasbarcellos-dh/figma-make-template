import { forwardRef } from 'react';
import { ChevronDownMiniIcon } from '@deliveryhero/cape-icons';
import { useCombinedClassName } from '../common/hooks';
import type { SelectProps } from './type';
import styles from './select.module.scss';

/**
 * The `Select` component represents a control that provides a menu of options.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/218889-select
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = 'medium', className, disabled, error, style, ...rest }, ref) => {
    return (
      <div
        className={useCombinedClassName({
          className: styles.root,
          overrideClassName: className,
        })}
        data-disabled={disabled}
        data-error={error}
        data-size={size}
        data-testid="cape-select-wrapper"
        style={style}
      >
        <select
          {...rest}
          className={useCombinedClassName({
            className: styles.select,
            overrideClassName: 'cape-select',
          })}
          disabled={disabled}
          ref={ref}
        />

        <ChevronDownMiniIcon
          className={useCombinedClassName({
            className: styles.icon,
            overrideClassName: 'cape-select-icon',
          })}
          size={size === 'large' ? 'large' : 'medium'}
        />
      </div>
    );
  },
);

Select.displayName = 'Select';
