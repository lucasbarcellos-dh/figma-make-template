import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../grid.module.scss';
import type { GridProps, Breakpoints } from '../type';

interface UseGridReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

const formatGap = ({ gap }: { gap: GridProps['gap'] }): CSSProperties => {
  const gapStyles: Record<string, string> = {};

  for (const bp in gap) {
    const gapValue = gap[bp as Breakpoints];

    if (gapValue) {
      if (['wide', 'condensed', 'narrow'].includes(gapValue)) {
        gapStyles[`--cp-grid-gap-${bp}`] = `var(--cp-grid-gutter-${gapValue})`;
      } else {
        gapStyles[`--cp-grid-gap-${bp}`] = gapValue;
      }
    }
  }

  return gapStyles as CSSProperties;
};

export const useGrid = ({
  className,
  gap,
  style,
  ...restProps
}: GridProps): UseGridReturnType => ({
  rootProps: {
    style: {
      ...formatGap({ gap }),
      ...style,
    } as CSSProperties,
    className: useCombinedClassName({
      className: styles.grid,
      overrideClassName: className,
    }),
    ...restProps,
  },
});
