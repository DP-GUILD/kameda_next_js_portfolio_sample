// Type declarations for Next.js modules
declare module 'next/image';
declare module 'next/link';
declare module 'next/dynamic';

// React JSX declarations
declare namespace React {
  interface FC<P = {}> {
    (props: P): any;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
