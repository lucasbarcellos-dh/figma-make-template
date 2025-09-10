import { describe, it, expect, vi, afterAll } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useMediaQuery } from '../use-media-query';

describe('useMediaQuery', () => {
  const originalMatchMedia = window.matchMedia;
  const getMatchMediaMock = (
    overrides?: Record<string, unknown>,
  ): MediaQueryList => ({
    matches: true,
    media: '',
    onchange: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    ...overrides,
  });

  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });

  it('useMediaQuery behaves correctly', () => {
    const matchMediaMock = getMatchMediaMock();
    window.matchMedia = () => matchMediaMock;
    const { result } = renderHook(() => useMediaQuery('(max-width : 768px)'));

    expect(result.current).toBeTruthy();
  });

  it('should call addEventListener when mount', () => {
    const mockAddEventListener = vi.fn();
    const matchMediaMock = getMatchMediaMock({
      addEventListener: mockAddEventListener,
    });
    window.matchMedia = () => matchMediaMock;

    renderHook(() => useMediaQuery('(max-width : 768px)'));

    expect(mockAddEventListener).toBeCalledTimes(1);
  });

  it('should call removeEventListener when unmount', () => {
    const mockRemoveEventListener = vi.fn();
    const matchMediaMock = getMatchMediaMock({
      removeEventListener: mockRemoveEventListener,
    });
    window.matchMedia = () => matchMediaMock;

    const { unmount } = renderHook(() => useMediaQuery('(max-width : 768px)'));
    unmount();
    expect(mockRemoveEventListener).toBeCalledTimes(1);
  });
});
