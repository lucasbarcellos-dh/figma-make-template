import type {
  CSSProperties,
  FocusEventHandler,
  KeyboardEventHandler,
  MouseEventHandler,
} from 'react';
import { useCombinedClassName } from '../../../../common/hooks';
import styles from '../../../tabs.module.scss';
import type { TabButtonProps } from '../type';
import { useTabsContext } from '../../../hooks/use-tabs-context';

interface UseTabButtonReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    role: string;
    'aria-selected': boolean;
    onClick?: MouseEventHandler<HTMLElement>;
    onFocus?: FocusEventHandler<HTMLElement>;
    onKeyDown?: KeyboardEventHandler<HTMLButtonElement>;
    id: string;
    'aria-controls': string;
    tabIndex?: number;
    disabled: boolean;
  };
}

export const useTabButton = ({
  className = '',
  value,
  onClick,
  onFocus,
  disabled = false,
  ...restProps
}: TabButtonProps): UseTabButtonReturnType => {
  const { active, setActive, tabsRef } = useTabsContext();

  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    setActive(value);
    onClick?.(event);
  };

  const handleOnFocus: FocusEventHandler<HTMLButtonElement> = (event) => {
    setActive(value);
    onFocus?.(event);
  };

  const moveFocusToTab = (tabId: string | undefined): void => {
    if (!tabId) return;

    const tab = tabsRef.current.get(tabId);
    if (!tab) return;

    const button = tab.querySelector('button');
    if (!button) return;

    button.focus();
  };

  const handleTabKeyDown: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    const eventKey = event.key;
    const tabKeys = Array.from(tabsRef.current.keys());

    if (tabKeys.length === 0) return;

    const currentIndex = tabKeys.findIndex((tabKey) => tabKey === value);
    let nextIndex = -1;

    switch (eventKey) {
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length;
        break;

      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % tabKeys.length;
        break;

      case 'Home':
        nextIndex = 0;
        break;

      case 'End':
        nextIndex = tabKeys.length - 1;
        break;

      default:
        break;
    }

    if (nextIndex === -1) return;

    event.stopPropagation();
    event.preventDefault();

    moveFocusToTab(tabKeys[nextIndex]);
  };

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.button,
        overrideClassName: className,
      }),
      ...restProps,
      onClick: handleOnClick,
      role: 'tab',
      id: `cape-tabs-tab-button-${value}`,
      'aria-controls': `cape-tabs-panel-${value}`,
      'aria-selected': value === active,
      tabIndex: value === active ? undefined : -1,
      onFocus: handleOnFocus,
      onKeyDown: handleTabKeyDown,
      disabled,
    },
  };
};
