import type { CSSProperties, InputHTMLAttributes } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import { getInputProps } from '../../common/utils';
import styles from '../radio.module.scss';
import type { RadioProps } from '../type';

interface UseRadioReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size': RadioProps['size'];
    'data-disabled': RadioProps['disabled'];
    'data-readonly': RadioProps['readOnly'];
  };
  labelProps: {
    className?: string;
  };
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  containerProps: {
    className?: string;
  };
  controlProps: {
    className?: string;
    'data-error'?: RadioProps['error'];
  };
}

export const useRadio = ({
  className = '',
  size,
  id,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  name,
  value,
  tabIndex = undefined,
  required,
  readOnly,
  checked,
  defaultChecked,
  disabled,
  error,
  hideLabel,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  ...restProps
}: RadioProps): UseRadioReturnType => ({
  rootProps: {
    className: useCombinedClassName({
      className: styles.root,
      overrideClassName: className,
    }),
    'data-size': size,
    'data-disabled': disabled,
    'data-readonly': readOnly,
    ...restProps,
  },
  labelProps: {
    className: `${styles.label} ${hideLabel ? styles['label-hidden'] : ''}`,
  },
  containerProps: {
    className: styles.container,
  },
  controlProps: {
    className: styles.control,
    'data-error': error,
  },
  inputProps: {
    className: styles.input,
    ...getInputProps({
      type: 'radio',
      name,
      value,
      id,
      tabIndex,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      required,
      readOnly,
      checked,
      defaultChecked,
      disabled,
      ariaLabel,
      ariaLabelledBy,
    }),
  },
});
