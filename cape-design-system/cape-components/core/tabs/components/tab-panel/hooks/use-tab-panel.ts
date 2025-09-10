import type { CSSProperties } from 'react';
import type { TabPanelProps } from '../type';
import { useTabsContext } from '../../../hooks/use-tabs-context';

interface UseTabPanelReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'data-active': boolean;
    role: string;
    hidden: boolean;
    id: string;
    'aria-labelledby': string;
  };
}

export const useTabPanel = ({
  style,
  value,
  ...restProps
}: TabPanelProps): UseTabPanelReturnType => {
  const { active } = useTabsContext();

  return {
    rootProps: {
      style,
      'data-active': value === active,
      role: 'tabpanel',
      hidden: value !== active,
      id: `cape-tabs-panel-${value}`,
      'aria-labelledby': `cape-tabs-tab-button-${value}`,
      ...restProps,
    },
  };
};
