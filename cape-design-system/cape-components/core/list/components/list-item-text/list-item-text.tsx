import { forwardRef } from 'react';
import type { ListItemTextProps } from './type';
import { useListItemText } from './hooks/use-list-item-text';

/**
 * List Item Text is children of List Item
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/06cae6-list/b/4333f7
 */
export const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ children, ...restProps }, ref) => {
    const {
      rootProps,
      contentProps: {
        primaryText: { node: primaryTextNode, ...restPrimaryTextProps },
        secondaryText: { node: secondaryTextNode, ...restSecondaryTextProps },
      },
    } = useListItemText(restProps);

    return (
      <div ref={ref} {...rootProps}>
        {primaryTextNode ? (
          <span {...restPrimaryTextProps}>{primaryTextNode}</span>
        ) : null}
        {secondaryTextNode ? (
          <span {...restSecondaryTextProps}>{secondaryTextNode}</span>
        ) : null}
        {children}
      </div>
    );
  },
);

ListItemText.displayName = 'ListItemText';
