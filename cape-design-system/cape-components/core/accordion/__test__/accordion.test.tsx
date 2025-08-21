import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Accordion } from '../accordion';
import { AccordionItem } from '../components/accordion-item';
import { AccordionHeader } from '../components/accordion-header';
import { AccordionHeading } from '../components/accordion-heading';
import { AccordionBody } from '../components/accordion-body';

describe('<Accordion />', () => {
  it('should render correctly', () => {
    render(
      <Accordion>
        <AccordionItem data-testid="accordion" open value="animals">
          <AccordionHeader>
            <AccordionHeading>Koalas are slow</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>
            Koalas are very slow and they like to climb trees
          </AccordionBody>
        </AccordionItem>
      </Accordion>,
    );

    const accordionItem = screen.getByTestId('accordion');
    expect(accordionItem).toBeInTheDocument();

    expect((accordionItem as HTMLDetailsElement).open).toBeTruthy();
  });

  it('should allow multiple accordion to be open', async () => {
    const onValueChangeMock = vi.fn();

    render(
      <Accordion
        data-testid="accordion"
        onValueChange={onValueChangeMock}
        type="multiple"
        value="animal"
      >
        <AccordionItem open value="animal">
          <AccordionHeader>
            <AccordionHeading>Koalas are slow</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>
            Koalas are very slow and they like to climb trees
          </AccordionBody>
        </AccordionItem>
        <AccordionItem value="nature">
          <AccordionHeader>
            <AccordionHeading>Plants are green</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>Plants are green and they need sunlight</AccordionBody>
        </AccordionItem>
      </Accordion>,
    );

    const accordionWrapper = screen.getByTestId('accordion');
    const [firstItem, secondItem] =
      within(accordionWrapper).getAllByRole('group');
    expect((firstItem as HTMLDetailsElement).open).toBeTruthy();
    expect((secondItem as HTMLDetailsElement).open).toBeFalsy();

    const secondItemSummary = within(secondItem as HTMLDetailsElement);

    await userEvent.click(
      secondItemSummary.getByRole('heading', { name: /Plants are green/i }),
    );
    expect(onValueChangeMock).toHaveBeenCalledWith(['animal', 'nature']);
  });

  it('should have a single accordion open in group of accordion items', async () => {
    const onValueChangeMock = vi.fn();

    render(
      <Accordion
        data-testid="accordion"
        onValueChange={onValueChangeMock}
        type="single"
      >
        <AccordionItem value="animal">
          <AccordionHeader>
            <AccordionHeading>Koalas are slow</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>
            Koalas are very slow and they like to climb trees
          </AccordionBody>
        </AccordionItem>
        <AccordionItem value="nature">
          <AccordionHeader>
            <AccordionHeading>Plants are green</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>Plants are green and they need sunlight</AccordionBody>
        </AccordionItem>
      </Accordion>,
    );

    const accordionWrapper = screen.getByTestId('accordion');
    const [firstItem, secondItem] =
      within(accordionWrapper).getAllByRole('group');
    const firstItemSummary = within(firstItem as HTMLDetailsElement);
    const secondItemSummary = within(secondItem as HTMLDetailsElement);

    await userEvent.click(
      firstItemSummary.getByRole('heading', { name: /Koalas are slow/i }),
    );
    expect(onValueChangeMock).toHaveBeenCalledWith(['animal']);

    await userEvent.click(
      secondItemSummary.getByRole('heading', { name: /Plants are green/i }),
    );
    expect(onValueChangeMock).toHaveBeenCalledWith(['nature']);

    await userEvent.click(
      firstItemSummary.getByRole('heading', { name: /Koalas are slow/i }),
    );
    expect(onValueChangeMock).toHaveBeenCalledWith(['animal']);
  });

  it('should not toggle when disabled', async () => {
    const onValueChangeMock = vi.fn();

    render(
      <Accordion
        data-testid="accordion"
        onValueChange={onValueChangeMock}
        type="single"
      >
        <AccordionItem disabled value="animal">
          <AccordionHeader>
            <AccordionHeading>Koalas are slow</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>
            Koalas are very slow and they like to climb trees
          </AccordionBody>
        </AccordionItem>
        <AccordionItem value="nature">
          <AccordionHeader>
            <AccordionHeading>Plants are green</AccordionHeading>
          </AccordionHeader>
          <AccordionBody>Plants are green and they need sunlight</AccordionBody>
        </AccordionItem>
      </Accordion>,
    );

    const accordionWrapper = screen.getByTestId('accordion');
    const [firstItem, secondItem] =
      within(accordionWrapper).getAllByRole('group');
    const secondItemSummary = within(secondItem as HTMLDetailsElement);

    expect(firstItem).toHaveAttribute('data-disabled');

    await userEvent.click(
      secondItemSummary.getByRole('heading', { name: /Plants are green/i }),
    );

    expect(onValueChangeMock).toHaveBeenCalledWith(['nature']);
  });
});
