import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Stack } from '../stack';

describe('Stack Component', () => {
  it('should render without crashing', () => {
    render(<Stack>Test Stack</Stack>);
    const stackElement: HTMLElement = screen.getByText('Test Stack');
    expect(stackElement).toBeInTheDocument();
  });

  it('should support custom class names', () => {
    render(<Stack className="custom-class">Test Stack</Stack>);
    const stackElement: HTMLElement = screen.getByText('Test Stack');
    expect(stackElement).toHaveClass('custom-class');
  });

  it('should have "display: flex" by default', () => {
    render(<Stack>Test Stack</Stack>);
    const stackElement: HTMLElement = screen.getByText('Test Stack');
    expect(stackElement).toHaveStyle({
      display: 'flex',
    });
  });

  it('should reflect the "direction" prop to CSS "--cp-stack-direction" variable property', () => {
    render(<Stack direction="row">Row Stack</Stack>);
    render(<Stack direction="row-reverse">Row Reverse Stack</Stack>);

    render(<Stack direction="column">Column Stack</Stack>);
    render(<Stack direction="column-reverse">Column Reverse Stack</Stack>);

    const rowStack: HTMLElement = screen.getByText('Row Stack');
    const rowReverseStack: HTMLElement = screen.getByText('Row Reverse Stack');
    const columnStack: HTMLElement = screen.getByText('Column Stack');
    const columnReverseStack: HTMLElement = screen.getByText(
      'Column Reverse Stack',
    );

    expect(rowStack).toHaveStyle({
      display: 'flex',
      '--cp-stack-direction': 'row',
    });
    expect(rowReverseStack).toHaveStyle({
      display: 'flex',
      '--cp-stack-direction': 'row-reverse',
    });
    expect(columnStack).toHaveStyle({
      display: 'flex',
      '--cp-stack-direction': 'column',
    });
    expect(columnReverseStack).toHaveStyle({
      display: 'flex',
      '--cp-stack-direction': 'column-reverse',
    });
  });

  it('should reflect the "spacing" prop to CSS "gap" property', () => {
    render(<Stack spacing={5}>Stack Spacing</Stack>);

    const stackSpacing: HTMLElement = screen.getByText('Stack Spacing');

    expect(stackSpacing).toHaveStyle({
      display: 'flex',
      '--cp-stack-gap': '5px',
    });
  });

  it('should support `as` prop', () => {
    render(<Stack as="section">Test Stack</Stack>);
    const stackElement: HTMLElement = screen.getByText('Test Stack');
    expect(stackElement.tagName).toBe('SECTION');
  });

  // TODO: add row-gap and column-gap test cases in case the flex-wrap is set to wrap
});
