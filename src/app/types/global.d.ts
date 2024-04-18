declare module '*.scss' {
    type IClassNames = Record<string, string>;
    const classNames: IClassNames;
    export = classNames;
}

declare module '*.svg' {
    import type React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
    // export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}
declare module '*.png';
declare module '*.jpg';

// const from webpack config
declare const __IS_DEV__: boolean;
