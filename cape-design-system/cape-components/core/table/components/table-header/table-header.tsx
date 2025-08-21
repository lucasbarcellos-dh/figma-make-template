import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../table.module.scss';
import type { TableHeaderProps } from './type';

/**
 * Used within the `<Table>` component to define the header of the table.
 */

const NAME = 'TableHeader';

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ sticky, children, ...restProps }, ref) => {
  const [stuck, setStuck] = useState(false);
  const classNames = useCombinedClassName({
    className: styles.header,
    overrideClassName: restProps.className,
  });
  const headerRef = useRef<HTMLTableSectionElement>(null);

  useImperativeHandle(
    ref,
    () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We are making sure that ref is handled.
      return headerRef.current!;
    },
    [],
  );

  useEffect(() => {
    if (!sticky || !headerRef.current) return;
    const el = headerRef.current;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        setStuck(e.intersectionRatio < 1);
      },
      { threshold: [1] },
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [sticky, headerRef]);

  return (
    <thead
      ref={headerRef}
      {...restProps}
      className={classNames}
      data-sticky={sticky}
      data-stuck={stuck || undefined}
    >
      {children}
    </thead>
  );
});

TableHeader.displayName = NAME;
