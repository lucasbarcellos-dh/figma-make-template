import type { Ref } from 'react';
import { createContext, useContext } from 'react';
import type { useFloating, useInteractions } from '@floating-ui/react';
import type { TooltipProps } from '../type';

export type TooltipContextType = Pick<
  TooltipProps,
  'zIndex' | 'disablePortal' | 'size' | 'variant' | 'onToggle' | 'open'
> & {
  arrowRef: Ref<SVGSVGElement>;
} & ReturnType<typeof useFloating> &
  ReturnType<typeof useInteractions>;

export const TooltipContext = createContext<TooltipContextType | null>(null);

export const useTooltipContext = (): TooltipContextType => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error('Tooltip components must be wrapped in <Tooltip />');
  }

  return context;
};
