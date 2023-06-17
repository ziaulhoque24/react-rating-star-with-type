import { memo, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "./icons";
import React from "react";
function RatingStar(props) {
    const { value = 0, count = 5, size = 14, isEdit = false, valueShow = false, emptyIcon = React.createElement(BsStar, null), halfIcon = React.createElement(BsStarHalf, null), filledIcon = React.createElement(BsStarFill, null), activeColor = "#FED900", activeColors = [], inactiveColor = "#808080", onChange, style = {}, classNames = "", } = props;
    const initialColor = activeColors[Math.round(value) - 1]
        ? activeColors[Math.round(value) - 1]
        : activeColor;
    const [currentValue, setCurrentValue] = useState(value);
    const [color, setColor] = useState(initialColor);
    const clickHandler = (nextValue) => {
        if (!isEdit)
            return;
        setCurrentValue(nextValue);
        if (typeof onChange === "function")
            onChange(nextValue);
        const color = activeColors[nextValue - 1]
            ? activeColors[nextValue - 1]
            : activeColor;
        setColor(color);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classNames, style: Object.assign(Object.assign({}, style), { display: "flex", alignItems: "center", fontSize: typeof size === "number" ? `${size}px` : size, gap: 3 }) },
            Array(count)
                .fill(1)
                .map((item, index) => {
                const roundedValue = Math.round(currentValue * 2) / 2;
                const currentValueFloor = Math.floor(roundedValue);
                const isActive = currentValueFloor >= index + 1;
                // Check if the current value is a half value
                const isHalfActive = roundedValue === index + 0.5;
                // Determine the color and icon based on the current value and half value
                const starColor = isHalfActive
                    ? color
                    : isActive
                        ? color
                        : inactiveColor;
                const starIcon = isHalfActive
                    ? halfIcon
                    : isActive
                        ? filledIcon
                        : emptyIcon;
                return (React.createElement("span", { onClick: () => clickHandler(index + 1), key: index, style: {
                        color: starColor,
                        cursor: isEdit ? "pointer" : "default",
                    } }, starIcon));
            }),
            React.createElement("span", { style: { color: inactiveColor } }, !!currentValue && valueShow && currentValue.toFixed(1)))));
}
export default memo(RatingStar);
