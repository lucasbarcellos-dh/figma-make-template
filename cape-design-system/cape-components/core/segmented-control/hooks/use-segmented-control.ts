import type { CSSProperties } from 'react';
import { useCombinedClassName } from '../../common/hooks';
import styles from '../segmented-control.module.scss';
import type { SegmentedControlProps } from '../type';
import { useControllableState } from '../../common/hooks/use-controllable-state';

type UseSegmentedControlProps = SegmentedControlProps;

interface UseSegmentedControlReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-size'?: SegmentedControlProps['size'];
  };
  controlContextProps: {
    activeItem: string;
    setActiveItem: ReturnType<typeof useControllableState<string>>[1];
  };
}

export const useSegmentedControl = ({
  className = '',
  size = 'medium',
  value,
  defaultValue,
  onChange,
  ...restProps
}: UseSegmentedControlProps): UseSegmentedControlReturnType => {
  const [activeItem, setActiveItem] = useControllableState({
    value,
    defaultValue,
    onChange,
  });
  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      'data-size': size,
      ...restProps,
    },
    controlContextProps: {
      activeItem,
      setActiveItem,
    },
  };
};
