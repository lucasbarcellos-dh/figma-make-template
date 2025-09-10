import { createElement, forwardRef } from 'react';
import type { TypographyProps, DeprecatedHeadings } from './type';
import { useTypography } from './hooks/use-typography';
import { deprecatedHeadings } from './constants';

/**
 * Typography component represents text content within a typography-related HTML element and applies the correct typography token passed as a prop.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/73c610-typography
 */
export const Typography = forwardRef<
  HTMLElementTagNameMap[TypographyProps['as']],
  TypographyProps
>(({ color = 'primary', children, ...restProps }, ref) => {
  const { as, rootProps } = useTypography({ color, ...restProps });

  function isDeprecatedHeading(asTag: string): asTag is DeprecatedHeadings {
    return deprecatedHeadings.includes(asTag as DeprecatedHeadings);
  }

  if (process.env.NODE_ENV !== 'production' && isDeprecatedHeading(as)) {
    // eslint-disable-next-line no-console -- using console.warn to deprecate heading usage in dev
    console.warn(
      `[Typography] <Typography as="${as}"> is deprecated. Use 'Heading' component instead.`,
    );
  }

  return createElement(
    as,
    {
      ref,
      ...rootProps,
    },
    children,
  );
});

Typography.displayName = 'Typography';
