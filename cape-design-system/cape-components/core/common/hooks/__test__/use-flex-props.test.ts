import { renderHook } from '@testing-library/react';
import { useFlexProps } from '../use-flex-props';

describe('useMarginProps', () => {
  it('should support all flex container props', () => {
    const { result } = renderHook(() =>
      useFlexProps({
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexFlow: 'column wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        alignContent: 'space-between',
        rowGap: 10,
        columnGap: 11,
        gap: 12,
      }),
    );
    expect(result.current).toEqual({
      flexDirection: 'row',
      flexWrap: 'wrap',
      flexFlow: 'column wrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      alignContent: 'space-between',
      rowGap: '10px',
      columnGap: '11px',
      gap: '12px',
    });
  });

  it('should support all flex item props', () => {
    const { result } = renderHook(() =>
      useFlexProps({
        order: 31,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 200,
        flex: '1 1 0',
        alignSelf: 'stretch',
      }),
    );
    expect(result.current).toEqual({
      order: 31,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '200px',
      flex: '1 1 0',
      alignSelf: 'stretch',
    });
  });

  it('should accept string values for rowGap, columnGap and gap', () => {
    const { result } = renderHook(() =>
      useFlexProps({
        rowGap: '10px',
        columnGap: '10px',
        gap: '20px 20px',
      }),
    );

    expect(result.current).toEqual({
      rowGap: '10px',
      columnGap: '10px',
      gap: '20px 20px',
    });
  });

  it('should accept number values for rowGap, columnGap and gap', () => {
    const { result } = renderHook(() =>
      useFlexProps({
        rowGap: 10,
        columnGap: 10,
        gap: 20,
      }),
    );

    expect(result.current).toEqual({
      rowGap: '10px',
      columnGap: '10px',
      gap: '20px',
    });
  });
});
