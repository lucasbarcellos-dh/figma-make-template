import { useEffect, type ReactNode, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { useCombinedClassName, useScrollBlock } from '../../common/hooks';
import styles from '../backdrop.module.scss';
import type { BackdropProps } from '../type';

interface UseBackdropReturnType {
  rootProps: {
    className?: string;
    style?: CSSProperties;
    'aria-hidden': BackdropProps['aria-hidden'];
    'data-open': BackdropProps['open'];
  };
  renderBackdrop: (backdropContent: ReactNode) => ReactNode;
}

export const useBackdrop = ({
  className,
  open,
  zIndex,
  style,
  disablePortal,
  ...restProps
}: BackdropProps): UseBackdropReturnType => {
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (open) {
      blockScroll();
    } else {
      allowScroll();
    }

    return () => {
      allowScroll();
    };
  }, [allowScroll, blockScroll, open]);

  return {
    rootProps: {
      className: useCombinedClassName({
        className: styles.root,
        overrideClassName: className,
      }),
      style: {
        /* the variable is predefined in the style file */
        '--cp-backdrop-z-index': zIndex,
        ...style,
      } as CSSProperties,
      'aria-hidden': true,
      'data-open': open,
      ...restProps,
    },
    renderBackdrop: (backdropContent: ReactNode) =>
      typeof window !== 'object' || disablePortal
        ? backdropContent
        : createPortal(backdropContent, document.body),
  };
};
