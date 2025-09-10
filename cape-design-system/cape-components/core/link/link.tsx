import type { ReactNode, Ref } from 'react';
import { cloneElement, createElement, forwardRef, isValidElement } from 'react';
import type { LinkProps } from './type';
import { useLink } from './hooks/use-link';
import { combinedRef, mergeReactProps } from './utils';

/**
 * Links are simply highlighted texts which allow user to navigate to another page or resource
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/554c87-link
 */
export const Link = forwardRef<HTMLElement, LinkProps>(
  ({ children, asChild, ...restProps }, ref) => {
    const { rootProps } = useLink({
      ...restProps,
    });

    if (asChild && isValidElement(children)) {
      /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any -- Needed to access ref and children values */
      const content = children.props?.children as ReactNode;
      return cloneElement(children, {
        ...mergeReactProps(rootProps, children.props),
        children: content,
        ref: combinedRef([
          ref,
          ((children as any).ref || children.props?.ref) as Ref<unknown>,
        ]),
      });
      /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any -- Re-enabling rules */
    }
    return createElement(
      'a',
      {
        ...rootProps,
        ref,
      },
      children,
    );
  },
);

Link.displayName = 'Link';
