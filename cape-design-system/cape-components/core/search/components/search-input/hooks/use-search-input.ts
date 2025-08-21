import type { ChangeEvent, CSSProperties } from 'react';
import type { SVGComponentCustomProps } from '@deliveryhero/cape-icons';
import {
  useCombinedClassName,
  useControllableState,
} from '../../../../common/hooks';
import styles from '../../../search.module.scss';
import type { SearchInputProps } from '../type';
import type {
  TextInputProps,
  TextInputControlProps,
} from '../../../../text-input';
import type { IconButtonProps } from '../../../../icon-button';

export interface UseSearchInputReturnType {
  rootProps: {
    size: TextInputProps['size'];
    id?: string;
    className?: string;
    style?: CSSProperties;
    'data-testid': string;
  } & Pick<
    TextInputProps,
    'disabled' | 'error' | 'validationState' | 'readOnly'
  >;
  inputProps: Omit<TextInputControlProps, 'type'>;
  searchIconProps: {
    size: SVGComponentCustomProps['size'];
    'data-testid': string;
  };
  clearButtonProps: {
    size: IconButtonProps['size'];
    'data-testid': string;
    showClearIcon: boolean;
    handleClearIconClick: () => void;
    'aria-label'?: string;
  };
}

const SearchIconSizeMap: Record<string, string> = {
  xsmall: 'small',
  small: 'small',
  medium: 'medium',
  large: 'medium',
};

const ClearIconSizeMap: Record<string, string> = {
  xsmall: '2xsmall',
  small: '2xsmall',
  medium: 'small',
  large: 'small',
};

export const useSearchInput = ({
  size = 'medium',
  id,
  className,
  placeholder,
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  autoCapitalize,
  autoComplete,
  name,
  pattern,
  minLength,
  maxLength,
  list,
  form,
  disabled,
  error,
  validationState,
  readOnly,
  style,
  onClear,
  clearButtonLabel,
  ...restProps
}: SearchInputProps): UseSearchInputReturnType => {
  const [inputValue, setInputValue] = useControllableState<string>({
    value: value as string,
    defaultValue: (defaultValue ?? '') as string,
    onChange: (newInputValue: string) => {
      onChange?.(newInputValue);
    },
  });

  const showClearIcon = Boolean(
    inputValue && typeof inputValue === 'string' && inputValue.length > 0,
  );

  const handleClearIconClick = (): void => {
    setInputValue('');
    onClear?.();
  };

  return {
    rootProps: {
      id,
      size,
      className: useCombinedClassName({
        className: styles.search,
        overrideClassName: className,
      }),
      disabled,
      error,
      validationState,
      readOnly,
      style,
      'data-testid': 'cape-search-wrapper',
    },
    inputProps: {
      className: styles.input,
      placeholder,
      value: inputValue,
      defaultValue,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      },
      onBlur,
      onFocus,
      autoCapitalize,
      autoComplete,
      name,
      pattern,
      minLength,
      maxLength,
      list,
      form,
      ...restProps,
    },
    searchIconProps: {
      size: SearchIconSizeMap[size] as SVGComponentCustomProps['size'],
      'data-testid': 'cape-search-control-icon',
    },
    clearButtonProps: {
      showClearIcon,
      handleClearIconClick,
      size: ClearIconSizeMap[size] as IconButtonProps['size'],
      'data-testid': 'cape-search-clear-btn',
      'aria-label': clearButtonLabel,
    },
  };
};
