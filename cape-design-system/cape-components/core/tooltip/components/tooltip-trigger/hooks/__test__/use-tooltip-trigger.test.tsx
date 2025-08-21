import { createElement } from 'react';
import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { useMergeRefs } from '@floating-ui/react';
import { useTooltipTrigger } from '../use-tooltip-trigger';

const mockChildren = <button type="button">Click me</button>;

const createMockContext = (overrides = {}) => ({
  context: {
    ...overrides,
  },
  getFloatingProps: vi.fn(
    (props: React.HTMLProps<Element>) => props as Record<string, unknown>,
  ),
  getReferenceProps: vi.fn(
    (props: React.HTMLProps<HTMLElement>) => props as Record<string, unknown>,
  ),
  refs: {
    setFloating: 'setFloating',
    setReference: 'setReference',
  },
  ...overrides,
});

let mockContextValue = createMockContext();

vi.mock('../../../../hooks/use-tooltip-context', () => ({
  useTooltipContext: () => mockContextValue,
}));

vi.mock('@floating-ui/react', () => ({
  useMergeRefs: vi.fn((refs: [React.RefObject<HTMLElement>]) => refs.join(',')),
}));

describe('useTooltipTrigger', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockContextValue = createMockContext();
  });

  it('merges refs correctly', () => {
    const customRef = { current: null };
    const childRef = { current: null };
    const childElement = createElement('button', {
      ref: childRef,
      type: 'button',
    });

    renderHook(() =>
      useTooltipTrigger({
        ref: customRef,
        children: childElement,
      }),
    );

    expect(useMergeRefs).toHaveBeenCalledWith([
      'setReference',
      childRef,
      customRef,
    ]);
  });

  it('returns correct root props with default state', () => {
    const { result } = renderHook(() =>
      useTooltipTrigger({
        className: 'test-class',
        children: mockChildren,
      }),
    );

    expect(result.current.rootProps).toMatchObject({
      className: 'test-class',
      'data-state': 'closed',
    });
  });

  it('returns correct root props when tooltip is open', () => {
    mockContextValue = createMockContext({ open: true });

    const { result } = renderHook(() =>
      useTooltipTrigger({
        className: 'test-class',
        children: mockChildren,
      }),
    );

    expect(result.current.rootProps).toMatchObject({
      className: 'test-class',
      'data-state': 'open',
    });
  });

  it('merges child props correctly', () => {
    const childProps = {
      onClick: vi.fn(),
      className: 'child-class',
    };

    const { result } = renderHook(() =>
      useTooltipTrigger({
        className: 'test-class',
        children: (
          <button type="button" {...childProps}>
            Click me
          </button>
        ),
      }),
    );

    expect(result.current.rootProps).toMatchObject({
      className: 'child-class',
      onClick: childProps.onClick,
    });
  });

  it('handles non-element children', () => {
    const { result } = renderHook(() =>
      useTooltipTrigger({
        className: 'test-class',
        children: 'I am not an element',
      }),
    );

    expect(result.current.rootProps).toMatchObject({
      className: 'test-class',
      'data-state': 'closed',
    });
  });

  it('passes additional props to getReferenceProps', () => {
    const additionalProps = {
      'aria-label': 'tooltip trigger',
      'data-testid': 'tooltip-trigger',
    };

    renderHook(() =>
      useTooltipTrigger({
        className: 'test-class',
        children: mockChildren,
        ...additionalProps,
      }),
    );

    expect(mockContextValue.getReferenceProps).toHaveBeenCalledWith(
      expect.objectContaining(additionalProps),
    );
  });

  it('handles null ref in children', () => {
    renderHook(() =>
      useTooltipTrigger({
        className: 'test-class',
        children: (
          <button ref={null} type="button">
            Click me
          </button>
        ),
      }),
    );

    expect(useMergeRefs).toHaveBeenCalledWith([
      'setReference',
      null,
      undefined,
    ]);
  });
});
