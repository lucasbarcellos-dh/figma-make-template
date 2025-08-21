import { forwardRef } from 'react';
import type { HeadingProps, HeadingTag } from './type';
import { useHeading } from './hooks/use-heading';
import { headingTagMap } from './constants';

/**
 * Heading component provides semantic structure to content using proper heading tags (h1–h6).
 * It ensures consistent typography styles across heading levels.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/736261-heading
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ level = 2, variant, color = 'primary', children, ...restProps }, ref) => {
    const Tag = headingTagMap[level] as HeadingTag;

    const { rootProps } = useHeading({
      color,
      variant,
      ...restProps,
    });

    return (
      <Tag ref={ref} {...rootProps}>
        {children}
      </Tag>
    );
  },
);

Heading.displayName = 'Heading';
