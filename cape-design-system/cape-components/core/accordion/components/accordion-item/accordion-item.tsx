import type { SyntheticEvent } from 'react';
import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import { useAccordionContext } from '../../hooks/use-accordion-context';
import styles from '../../accordion.module.scss';
import type { AccordionItemProps } from './type';

const NAME = 'AccordionItem';

export const AccordionItem = forwardRef<HTMLDetailsElement, AccordionItemProps>(
  (
    {
      children,
      className,
      disabled,
      open: controlledOpen,
      value,
      onToggle,
      ...rest
    },
    ref,
  ) => {
    const classNames = useCombinedClassName({
      className: styles.item,
      overrideClassName: className,
    });
    const { size, standalone, onToggleItem, openedItems } =
      useAccordionContext();

    const controlled = controlledOpen !== undefined;
    const open = controlled ? controlledOpen : openedItems.includes(value);

    const handleToggle = (e: SyntheticEvent<HTMLDetailsElement>): void => {
      if (!controlled) {
        onToggleItem(value, e.currentTarget.open);
      }
      onToggle?.(value, e.currentTarget.open);
    };

    return (
      <details
        aria-disabled={disabled || undefined}
        data-disabled={disabled}
        data-name={value}
        data-size={size}
        data-standalone={standalone}
        onToggle={handleToggle}
        open={open}
        tabIndex={disabled ? -1 : undefined}
        {...rest}
        className={classNames}
        ref={ref}
      >
        {children}
      </details>
    );
  },
);

AccordionItem.displayName = NAME;
