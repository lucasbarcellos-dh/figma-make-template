import { renderHook } from '@testing-library/react';
import { useScrollBlock } from '../use-scroll-block';

describe('useScrollBlock', () => {
  it('should block scroll when calling blockScroll', () => {
    const { result } = renderHook(() => useScrollBlock());
    const [blockScroll] = result.current;

    blockScroll();

    expect(document.documentElement.style.overflow).toBe('hidden');
    expect(document.documentElement.style.position).toBe('relative');
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.style.position).toBe('relative');
  });

  it('should allow scroll when calling allowScroll', () => {
    const { result } = renderHook(() => useScrollBlock());
    const [, allowScroll] = result.current;

    allowScroll();

    expect(document.documentElement.style.overflow).toBe('');
    expect(document.documentElement.style.position).toBe('');
    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.position).toBe('');
  });

  it('should unlock scroll on component unmount', () => {
    const { result, unmount } = renderHook(() => useScrollBlock());
    const [blockScroll] = result.current;

    blockScroll();
    unmount();

    expect(document.documentElement.style.overflow).toBe('');
    expect(document.documentElement.style.position).toBe('');
    expect(document.body.style.overflow).toBe('');
    expect(document.body.style.position).toBe('');
  });
});
