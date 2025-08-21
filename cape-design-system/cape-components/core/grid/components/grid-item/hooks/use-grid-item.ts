import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../grid.module.scss';
import type { GridItemProps } from '../type';

interface UseGridItemReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

const getBreakpoints = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}: GridItemProps): CSSProperties => {
  const bpStyle: Record<string, number | undefined> = {};
  if (xxl || xl || lg || md || sm || xs) {
    bpStyle['--cp-grid-column-xxl'] = xxl || xl || lg || md || sm || xs;
  }
  if (xl || lg || md || sm || xs) {
    bpStyle['--cp-grid-column-xl'] = xl || lg || md || sm || xs;
  }
  if (lg || md || sm || xs) {
    bpStyle['--cp-grid-column-lg'] = lg || md || sm || xs;
  }
  if (md || sm || xs) {
    bpStyle['--cp-grid-column-md'] = md || sm || xs;
  }
  if (sm || xs) {
    bpStyle['--cp-grid-column-sm'] = sm || xs;
  }
  if (xs) {
    bpStyle['--cp-grid-column-xs'] = xs;
  }

  return bpStyle;
};

export const useGridItem = ({
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  className,
  style,
  ...restProps
}: GridItemProps): UseGridItemReturnType => ({
  rootProps: {
    style: {
      ...getBreakpoints({ xs, sm, md, lg, xl, xxl }),
      ...style,
    } as CSSProperties,
    className: useCombinedClassName({
      className: styles['grid-item'],
      overrideClassName: className,
    }),
    ...restProps,
  },
});
