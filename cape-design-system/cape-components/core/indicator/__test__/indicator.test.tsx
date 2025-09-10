import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import type { IndicatorProps } from '../type';
import { Indicator } from '../indicator';

describe('Indicator Component', () => {
  it('renders without crashing', () => {
    render(<Indicator>Test Indicator</Indicator>);
    const element = screen.getByText('Test Indicator');
    expect(element).toBeInTheDocument();
  });

  it('renders as `div` by default', () => {
    render(<Indicator>Test Indicator</Indicator>);
    expect(screen.getByText('Test Indicator').tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Indicator className="custom-class">Test Indicator</Indicator>);
    const element = screen.getByText('Test Indicator');
    expect(element).toHaveClass('custom-class');
  });

  it('applies style prop correctly', () => {
    render(
      <Indicator style={{ margin: '10px', width: '50%' }}>
        Test Indicator
      </Indicator>,
    );
    const element = screen.getByText('Test Indicator');
    expect(element).toHaveStyle({
      margin: '10px',
      width: '50%',
    });
  });

  it('renders with role="status" by default, and can accept a custom role', () => {
    const { rerender } = render(<Indicator>Test Indicator</Indicator>);
    expect(screen.getByRole('status')).toBeInTheDocument();

    rerender(<Indicator role="alert">Test Indicator</Indicator>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders with status="branded" by default', () => {
    render(<Indicator>Test Indicator</Indicator>);
    expect(screen.getByText('Test Indicator').dataset.status).toBe('branded');
  });

  it.each(['branded', 'neutral', 'error', 'warning', 'success'])(
    'renders with status `%s`',
    (status) => {
      render(
        <Indicator status={status as IndicatorProps['status']}>
          Test Indicator
        </Indicator>,
      );
      expect(screen.getByText('Test Indicator').dataset.status).toBe(status);
    },
  );

  it('renders with size="medium" by default', () => {
    render(<Indicator>Test Indicator</Indicator>);
    expect(screen.getByText('Test Indicator').dataset.size).toBe('medium');
  });

  it.each(['small', 'medium', 'large'])(
    'renders with status `%s`',
    (status) => {
      render(
        <Indicator status={status as IndicatorProps['status']}>
          Test Indicator
        </Indicator>,
      );
      expect(screen.getByText('Test Indicator').dataset.status).toBe(status);
    },
  );

  it('renders with icon', () => {
    function Icon(): React.ReactNode {
      return <div>Icon component</div>;
    }

    render(
      <Indicator>
        <Icon />
      </Indicator>,
    );
    expect(screen.getByText('Icon component')).toBeInTheDocument();
  });
});
