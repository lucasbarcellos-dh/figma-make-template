import { useTransitionStatus } from '@floating-ui/react';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useTooltipContent } from '../use-tooltip-content';
import { useCombinedClassName } from '../../../../../common/hooks';

const createMockContext = (overrides = {}) => ({
  context: {
    placement: 'bottom',
    ...overrides,
  },
  disablePortal: false,
  zIndex: undefined,
  arrowRef: null,
  size: 'medium',
  variant: 'default',
  getFloatingProps: vi.fn(),
  refs: {
    setFloating: vi.fn(),
  },
  ...overrides,
});

let mockContextValue = createMockContext();

vi.mock('../../../../hooks/use-tooltip-context', () => ({
  useTooltipContext: () => mockContextValue,
}));
vi.mock('@floating-ui/react');
vi.mock('../../../../../common/hooks');
vi.mock('../../../../tooltip.module.scss', () => ({
  default: {
    root: 'root-class',
    wrapper: 'wrapper-class',
  },
}));

describe('useTooltipContent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockContextValue = createMockContext();
    vi.mocked(useTransitionStatus).mockReturnValue({
      isMounted: true,
      status: 'open',
    });
    vi.mocked(useCombinedClassName).mockReturnValue('root-class');
  });

  it('returns the correct rootProps', () => {
    const {
      result: {
        current: { rootProps },
      },
    } = renderHook(() => useTooltipContent({ className: '' }));

    expect(rootProps['data-status']).toBe('open');
    expect(rootProps.className).toBe('root-class');
    expect(rootProps['data-placement']).toBe('bottom');
    expect(rootProps['data-color']).toBe('default');
  });

  it('returns the correct wrapperProps', () => {
    const {
      result: {
        current: { wrapperProps },
      },
    } = renderHook(() => useTooltipContent({ className: '' }));

    expect(wrapperProps.className).toBe('wrapper-class');
    expect(wrapperProps['data-size']).toBe('medium');
    expect(wrapperProps['data-color']).toBe('default');
  });

  it('returns the correct disablePortal', () => {
    const {
      result: {
        current: { disablePortal },
      },
    } = renderHook(() => useTooltipContent({ className: '' }));

    expect(disablePortal).toBe(false);
  });

  it('handles custom z-index', () => {
    mockContextValue = createMockContext({
      zIndex: 1000,
    });

    const { result } = renderHook(() => useTooltipContent({ className: '' }));
    expect(result.current.rootProps.style?.zIndex).toBe(1000);
  });

  it('handles different sizes', () => {
    mockContextValue = createMockContext({
      size: 'small',
    });

    const { result } = renderHook(() => useTooltipContent({ className: '' }));
    expect(result.current.wrapperProps['data-size']).toBe('small');
  });
});
