import type { SVGProps, JSX } from 'react';

export function IndeterminateIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M6 9C5.44772 9 5 9.44772 5 10C5 10.5523 5.44772 11 6 11H10.0024H10.0025H14.0049C14.5572 11 15.0049 10.5523 15.0049 10C15.0049 9.44772 14.5572 9 14.0049 9H10.0025H10.0024H6Z"
        fillRule="evenodd"
      />
    </svg>
  );
}
