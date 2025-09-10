import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import { sanitizeCustomProperties } from '../../common/utils';
import styles from '../progress-bar.module.scss';
import type { ProgressBarProps } from '../type';
import { DEFAULT_MAX_VALUE } from '../constants';

interface UseProgressBarReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size': ProgressBarProps['size'];
    'data-variant': ProgressBarProps['variant'];
    'data-indeterminate': boolean;
    max: number;
    value?: number;
  };
  progressValueProps: {
    style?: CSSProperties;
    className?: string;
  };
}

export const useProgressBar = ({
  className = '',
  style,
  size,
  value,
  max = DEFAULT_MAX_VALUE,
  variant,
  ...restProps
}: ProgressBarProps): UseProgressBarReturnType => {
  const isIndeterminate = value === undefined;
  const percentageValue = !isIndeterminate && Math.round((value / max) * 100);
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      style: sanitizeCustomProperties({
        ...style,
        '--cp-progress-bar-value': `${percentageValue}%`,
      }),
      'data-size': size,
      'data-variant': variant,
      'data-indeterminate': isIndeterminate,
      value,
      max,
      ...restProps,
    },
    progressValueProps: {
      className: styles['progress-value'],
    },
  };
};
