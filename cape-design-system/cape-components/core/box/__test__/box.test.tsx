import { render, screen } from '@testing-library/react';
import { expect, describe, it } from 'vitest';
import { Box } from '../box';
import type { BoxElementTagName } from '../type';

describe('box Component', () => {
  it('renders without crashing', () => {
    render(<Box>Test Box</Box>);
    const testBox: HTMLElement = screen.getByText('Test Box');
    expect(testBox).toBeInTheDocument();
  });

  it('renders as div by default', () => {
    render(<Box>Test Box</Box>);
    const testBox: HTMLElement = screen.getByText('Test Box');
    expect(testBox.tagName).toBe('DIV');
  });

  it('renders with custom class', () => {
    render(<Box className="custom-class">Test Box</Box>);
    const testBox: HTMLElement = screen.getByText('Test Box');
    expect(testBox).toHaveClass('custom-class');
  });

  it.each(['section', 'article'])(
    'renders as a semantic HTML %s element',
    (tagName) => {
      render(<Box as={tagName as BoxElementTagName}>Test Box</Box>);
      const testBox: HTMLElement = screen.getByText('Test Box');
      expect(testBox.tagName).toBe(tagName.toUpperCase());
    },
  );

  it('applies system props correctly', () => {
    render(
      <Box margin={10} padding={5}>
        Test Box
      </Box>,
    );
    const testBox: HTMLElement = screen.getByText('Test Box');
    expect(testBox).toHaveStyle({
      margin: '10px',
      padding: '5px',
    });
  });

  it('renders with logical and physical margin properties', () => {
    render(
      <Box margin="10px" marginBlock="20px">
        Test Box
      </Box>,
    );

    const box = screen.getByText('Test Box');
    expect(box).toHaveStyle({
      'margin-block': '20px',
      margin: '10px',
    });
  });

  it('renders with combined physical and logical padding properties', () => {
    render(
      <Box padding="10px" paddingBlock="20px">
        Test Box
      </Box>,
    );
    const box = screen.getByText('Test Box');
    expect(box).toHaveStyle({
      'padding-block': '20px',
      padding: '10px',
    });
  });

  it('renders with width properties', () => {
    render(<Box width="50%">Test Box</Box>);

    const box = screen.getByText('Test Box');
    expect(box).toHaveStyle({ width: '50%' });
  });

  it('renders with width logical properties', () => {
    render(<Box inlineSize="50%">Test Box</Box>);

    const box = screen.getByText('Test Box');
    expect(box).toHaveStyle({ 'inline-size': '50%' });
  });

  it('should not render a "style" attribute when system prop is explicitly set to undefined', () => {
    render(
      <Box margin={undefined} padding={undefined}>
        Test Box
      </Box>,
    );
    const boxElement = screen.getByText('Test Box');
    expect(boxElement).not.toHaveAttribute('style');
  });
});
