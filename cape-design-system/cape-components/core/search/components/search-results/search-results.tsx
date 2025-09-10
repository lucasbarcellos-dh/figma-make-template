import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../search.module.scss';
import type { SearchResultsProps } from './type';

const NAME = 'SearchResults';

/**
 * SearchResults is used with Search.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/34b998-search
 */
export const SearchResults = forwardRef<HTMLDivElement, SearchResultsProps>(
  ({ className, children, ...restProps }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.result,
      overrideClassName: className,
    });

    return (
      <div ref={ref} {...restProps} className={classNames}>
        {children}
      </div>
    );
  },
);

SearchResults.displayName = NAME;
