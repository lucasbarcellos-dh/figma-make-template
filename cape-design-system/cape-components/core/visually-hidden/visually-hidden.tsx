import { createElement, forwardRef } from 'react';
import styles from './visually-hidden.module.scss';
import type { VisuallyHiddenProps } from './type';

/**
 * Visually hidden component hides its content from the user sight keeping it available in the DOM for the assistive technologies like screen readers to read.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/75eb38-visuallyhidden
 */
export const VisuallyHidden = forwardRef<HTMLElement, VisuallyHiddenProps>(
  ({ as = 'div', children, ...rest }, ref) => {
    return createElement(
      as,
      {
        ref,
        className: styles.root,
        ...rest,
      },
      children,
    );
  },
);

VisuallyHidden.displayName = 'VisuallyHidden';
