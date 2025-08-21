// utility classes
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  cpBaseSpacingNone,
  cpBaseSpacingTiny,
  cpBaseSpacingXsmall,
  cpBaseSpacingSmall,
  cpBaseSpacingMedium,
  cpBaseSpacingLarge,
  cpBaseSpacingXlarge,
  cpBaseSpacing2xlarge,
  cpBaseSpacing3xlarge,
  cpBaseSpacing4xlarge,
  cpBaseSpacing5xlarge,
} from '@deliveryhero/cape-tokens/themes/cape/light.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const spacing = {
  0: cpBaseSpacingNone,
  '2xs': cpBaseSpacingTiny,
  xs: cpBaseSpacingXsmall,
  sm: cpBaseSpacingSmall,
  md: cpBaseSpacingMedium,
  lg: cpBaseSpacingLarge,
  xlg: cpBaseSpacingXlarge,
  '2xlg': cpBaseSpacing2xlarge,
  '3xlg': cpBaseSpacing3xlarge,
  '4xlg': cpBaseSpacing4xlarge,
  '5xlg': cpBaseSpacing5xlarge,
  auto: 'auto',
};

const sizing = {
  '3xs': '256px',
  '2xs': '288px',
  xs: '320px',
  sm: '384px',
  md: '448px',
  lg: '512px',
  xl: '576px',
  '2xl': '672px',
  '3xl': '768px',
  '4xl': '896px',
  '5xl': '1024px',
  '6xl': '1152px',
  '7xl': '1280px',
  auto: 'auto',
  px: '1px',
  full: '100%',
  screen: '100vw',
  dvw: '100dvw',
  dvh: '100dvh',
  lvw: '100lvw',
  lvh: '100lvh',
  svw: '100svw',
  svh: '100svh',
  min: 'min-content',
  max: 'max-content',
  fit: 'fit-content',
};

const flexProperties = ['flex-1', 'flex-auto', 'flex-initial', 'flex-none'];

const generateClasses = () => {
  let css = '';

  // Generate margin and padding classes
  for (const [key, value] of Object.entries(spacing)) {
    css += `.m-${key} { margin: ${value}; }\n`;
    css += `.mt-${key} { margin-top: ${value}; }\n`;
    css += `.mr-${key} { margin-right: ${value}; }\n`;
    css += `.mb-${key} { margin-bottom: ${value}; }\n`;
    css += `.ml-${key} { margin-left: ${value}; }\n`;
    css += `.my-${key} { margin-block: ${value}; }\n`;
    css += `.mye-${key} { margin-block-end: ${value}; }\n`;
    css += `.mys-${key} { margin-block-start: ${value}; }\n`;
    css += `.mx-${key} { margin-inline: ${value}; }\n`;
    css += `.me-${key} { margin-inline-end: ${value}; }\n`;
    css += `.ms-${key} { margin-inline-start: ${value}; }\n`;

    css += `.p-${key} { padding: ${value}; }\n`;
    css += `.pt-${key} { padding-top: ${value}; }\n`;
    css += `.pr-${key} { padding-right: ${value}; }\n`;
    css += `.pb-${key} { padding-bottom: ${value}; }\n`;
    css += `.pl-${key} { padding-left: ${value}; }\n`;
    css += `.py-${key} { padding-block: ${value}; }\n`;
    css += `.pye-${key} { padding-block-end: ${value}; }\n`;
    css += `.pys-${key} { padding-block-start: ${value}; }\n`;
    css += `.px-${key} { padding-inline: ${value}; }\n`;
    css += `.pe-${key} { padding-inline-end: ${value}; }\n`;
    css += `.ps-${key} { padding-inline-start: ${value}; }\n`;
  }

  // Generate width classes
  for (const [key, value] of Object.entries(sizing)) {
    css += `.w-${key} { width: ${value}; }\n`;
  }

  // Generate height classes
  for (const [key, value] of Object.entries(sizing)) {
    css += `.h-${key} { height: ${value}; }\n`;
  }

  // Generate flex classes
  flexProperties.forEach((flex) => {
    css += `.${flex} { flex: ${flex.split('-')[1]}; }\n`;
  });

  // Generate min-width, max-width, min-height, max-height classes
  for (const [key, value] of Object.entries(sizing)) {
    css += `.min-w-${key} { min-width: ${value}; }\n`;
    css += `.max-w-${key} { max-width: ${value}; }\n`;
    css += `.min-h-${key} { min-height: ${value}; }\n`;
    css += `.max-h-${key} { max-height: ${value}; }\n`;
  }

  // Generate gap classes
  for (const [key, value] of Object.entries(spacing)) {
    css += `.gap-${key} { gap: ${value}; }\n`;
    css += `.gap-x-${key} { gap: ${value}; }\n`;
    css += `.gap-y-${key} { gap: ${value}; }\n`;
  }

  // Generate flex and grid utility classes
  css += `.flex { display: flex; }\n`;
  css += `.grid { display: grid; }\n`;
  css += `.items-start { align-items: flex-start; }\n`;
  css += `.items-center { align-items: center; }\n`;
  css += `.items-end { align-items: flex-end; }\n`;
  css += `.justify-start { justify-content: flex-start; }\n`;
  css += `.justify-end { justify-content: flex-end; }\n`;
  css += `.justify-center { justify-content: center; }\n`;
  css += `.justify-between { justify-content: space-between; }\n`;
  css += `.justify-around { justify-content: space-around; }\n`;
  css += `.justify-evenly { justify-content: space-evenly; }\n`;
  css += `.justify-stretch { justify-content: stretch; }\n`;
  css += `.justify-baseline { justify-content: baseline; }\n`;
  css += `.justify-normal { justify-content: normal; }\n`;
  css += `.self-start { align-self: flex-start; }\n`;
  css += `.self-center { align-self: center; }\n`;
  css += `.self-end { align-self: flex-end; }\n`;
  css += `.justify-self-start { justify-self: start; }\n`;
  css += `.justify-self-center { justify-self: center; }\n`;
  css += `.justify-self-end { justify-self: end; }\n`;

  return css;
};

const css = generateClasses();
writeFileSync(`${__dirname}/utilities.css`, css);

// eslint-disable-next-line no-console -- ignore
console.log('Utility CSS classes generated successfully.');
