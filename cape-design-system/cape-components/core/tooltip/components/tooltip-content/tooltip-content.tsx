import { FloatingPortal, FloatingArrow } from '@floating-ui/react';
import {
  TOOLTIP_ARROW_HEIGHT,
  TOOLTIP_ARROW_RADIUS,
  TOOLTIP_ARROW_WIDTH,
} from '../../constants';
import type { TooltipContentProps } from './type';
import { useTooltipContent } from './hooks/use-tooltip-content';

const NAME = 'TooltipContent';

/**
 *  TooltipContent is used inside <Tooltip /> component to display content of the tooltip.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/80fd67-tooltip
 */
export function TooltipContent({
  children,
  ...props
}: TooltipContentProps): JSX.Element | null {
  const { rootProps, wrapperProps, disablePortal, isMounted, arrowRef } =
    useTooltipContent({
      ...props,
    });

  if (!isMounted) {
    return null;
  }

  const floatingContext = rootProps.context;

  const renderContent = () => (
    <div {...rootProps}>
      {floatingContext.middlewareData.arrow ? (
        <FloatingArrow
          context={floatingContext}
          height={TOOLTIP_ARROW_HEIGHT}
          ref={arrowRef}
          tipRadius={TOOLTIP_ARROW_RADIUS}
          width={TOOLTIP_ARROW_WIDTH}
        />
      ) : null}
      <div {...wrapperProps}>{children}</div>
    </div>
  );

  return disablePortal ? (
    renderContent()
  ) : (
    <FloatingPortal>{renderContent()}</FloatingPortal>
  );
}

TooltipContent.displayName = NAME;
