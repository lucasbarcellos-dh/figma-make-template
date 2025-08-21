import { useCombinedClassName } from '../../common/hooks';
import type { LabelProps } from '../type';
import styles from '../label.module.scss';

interface UseLabelReturnType {
  htmlFor: LabelProps['htmlFor'];
  'data-size': LabelProps['size'];
  className?: string;
  disabled?: LabelProps['disabled'];
}

export const useLabel = ({
  htmlFor,
  size,
  className,
  disabled,
  ...restProps
}: LabelProps): UseLabelReturnType => {
  return {
    htmlFor,
    'data-size': size,
    disabled,
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    ...restProps,
  };
};
