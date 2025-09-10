import { renderHook } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { useIconButton } from '../use-icon-button';
import { AddIcon } from '@deliveryhero/cape-icons';

describe('useIconButton', () => {
  it('should override default props when provided', () => {
    const {
      result: {
        current: { rootProps, contentProps },
      },
    } = renderHook(() =>
      useIconButton({
        size: 'large',
        variant: 'primary',
        status: 'inverse',
        disabled: true,
        type: 'submit',
      }),
    );

    expect(rootProps['data-size']).toBe('large');
    expect(rootProps['data-variant']).toBe('primary');
    expect(rootProps['data-status']).toBe('inverse');
    expect(contentProps['data-variant']).toBe('primary');
    expect(rootProps.disabled).toBe(true);
    expect(rootProps.type).toBe('submit');
  });

  it('can use aria-label when provided', () => {
    const {
      result: {
        current: { rootProps, contentProps },
      },
    } = renderHook(() =>
      useIconButton({
        icon: <AddIcon />,
        'aria-label': 'Add',
      }),
    );

    //@ts-expect-error -- aria-label is not in the type definition
    expect(rootProps['aria-label']).toBe('Add');
    expect(contentProps['aria-hidden']).toBe(true);
  });
});
