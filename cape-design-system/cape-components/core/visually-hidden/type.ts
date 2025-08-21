import type { ComponentPropsWithRef } from 'react';

export type ElementTag = 'div' | 'span' | 'p';

export type VisuallyHiddenProps = ComponentPropsWithRef<ElementTag> &
  Partial<{
    /**
     * The HTML element to be rendered
     * @defaultValue 'div'
     * */
    as: ElementTag;
  }>;
