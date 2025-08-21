import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import type { DatePickerBodyFooterProps } from '../type';
import styles from '../../../date-picker.module.scss';

interface UseDatePickerBodyFooterReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
  };
}

export const useDatePickerBodyFooter = ({
  className = '',
  ...restProps
}: DatePickerBodyFooterProps): UseDatePickerBodyFooterReturnType => {
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles['footer-wrapper'],
        overrideClassName: className,
      }),
      ...restProps,
    },
  };
};
