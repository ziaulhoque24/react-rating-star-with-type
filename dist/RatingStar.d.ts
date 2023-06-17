import { CSSProperties, ReactNode } from "react";
import React from "react";
export interface IRatingStarProps {
    value?: number;
    count?: number;
    size?: number | string;
    isEdit?: boolean;
    valueShow?: boolean;
    emptyIcon?: ReactNode;
    halfIcon?: ReactNode;
    filledIcon?: ReactNode;
    activeColor?: string;
    inactiveColor?: string;
    classNames?: string;
    style?: CSSProperties;
    onChange?: (nextValue: number) => void;
    activeColors?: string[];
}
declare function RatingStar(props: IRatingStarProps): React.JSX.Element;
declare const _default: React.MemoExoticComponent<typeof RatingStar>;
export default _default;
//# sourceMappingURL=RatingStar.d.ts.map