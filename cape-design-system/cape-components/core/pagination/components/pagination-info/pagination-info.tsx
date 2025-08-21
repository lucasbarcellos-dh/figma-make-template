import { forwardRef } from 'react';
import type { TypographyProps } from '../../../typography';
import { Typography } from '../../../typography';
import type { PaginationInfoProps } from './type';

/**
 * PaginationInfo is children of Pagination
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const PaginationInfo = forwardRef<
  HTMLElementTagNameMap[TypographyProps['as']],
  PaginationInfoProps
>(({ children, ...restProps }, ref) => {
  return (
    <Typography
      ref={ref}
      {...restProps}
      as="p"
      style={{ flexShrink: '0', fontVariantNumeric: 'tabular-nums' }}
      variant="bodyMedium"
    >
      {children}
    </Typography>
  );
});

PaginationInfo.displayName = 'PaginationButton';
