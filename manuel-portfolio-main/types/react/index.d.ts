declare module 'react' {
  export type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
  export type ReactChild = ReactElement | string | number;
  export type ReactFragment = {} | ReactNode[];
  export interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = any> {
    type: T;
    props: P;
    key: string | number | null;
  }
  export type JSXElementConstructor<P> = ((props: P) => ReactElement<any, any> | null) | (new (props: P) => any);
  export interface Attributes {
    key?: string | number | null;
  }
  export interface DOMAttributes<T> {
    children?: ReactNode;
  }
  export interface HTMLAttributes<T> extends DOMAttributes<T> {
    className?: string;
    id?: string;
    href?: string;
    src?: string;
    alt?: string;
    target?: string;
    rel?: string;
    type?: string;
    title?: string;
  }
  export interface AnchorHTMLAttributes<T> extends HTMLAttributes<T> {
    href?: string;
    target?: string;
    rel?: string;
  }
  export interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    src?: string;
    alt?: string;
  }
  export type MouseEvent<T = Element> = {
    preventDefault(): void;
    currentTarget: T;
  };
  export function createElement<P>(type: any, props: P, ...children: any[]): ReactElement<P>;
  export function Fragment(props: { children?: ReactNode }): ReactElement<any>;
  export const Children: {
    toArray(children: ReactNode): ReactNode[];
  };
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: string | number): any;
  export function jsxs(type: any, props: any, key?: string | number): any;
  export function Fragment(props: { children?: any }): any;
}

declare module 'react/jsx-dev-runtime' {
  export function jsxDEV(type: any, props: any, key?: string | number, isStaticChildren?: boolean, source?: any, self?: any): any;
  export function Fragment(props: { children?: any }): any;
}

declare module 'react-dom' {
  export const hydrate: any;
  export const render: any;
}

declare module 'react-dom/client' {
  export function createRoot(container: any): {
    render(element: any): void;
  };
}

declare namespace JSX {
  type Element = React.ReactElement | string | number | boolean | null | undefined;
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface ElementClass {
    render: any;
  }
  interface ElementAttributesProperty {
    props: any;
  }
  interface ElementChildrenAttribute {
    children: {};
  }
}
