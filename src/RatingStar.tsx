import { CSSProperties, ReactNode, memo, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "./icons";
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

function RatingStar(props: IRatingStarProps) {
  const {
    value = 0,
    count = 5,
    size = 14,
    isEdit = false,
    valueShow = false,
    emptyIcon = <BsStar />,
    halfIcon = <BsStarHalf />,
    filledIcon = <BsStarFill />,
    activeColor = "#FED900",
    activeColors = [],
    inactiveColor = "#808080",
    onChange,
    style = {},
    classNames = "",
  } = props;

  const initialColor = activeColors[Math.round(value) - 1]
    ? activeColors[Math.round(value) - 1]
    : activeColor;

  const [currentValue, setCurrentValue] = useState<number>(value);
  const [color, setColor] = useState<string>(initialColor);

  const clickHandler = (nextValue: number) => {
    if (!isEdit) return;
    setCurrentValue(nextValue);
    if (typeof onChange === "function") onChange(nextValue);
    const color = activeColors[nextValue - 1]
      ? activeColors[nextValue - 1]
      : activeColor;
    setColor(color);
  };

  return (
    <>
      <div
        className={classNames}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          fontSize: typeof size === "number" ? `${size}px` : size,
          gap: 3,
        }}
      >
        {Array(count)
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

            return (
              <span
                onClick={() => clickHandler(index + 1)}
                key={index}
                style={{
                  color: starColor,
                  cursor: isEdit ? "pointer" : "default",
                }}
              >
                {starIcon}
              </span>
            );
          })}
        <span style={{ color: inactiveColor }}>
          {!!currentValue && valueShow && currentValue.toFixed(1)}
        </span>
      </div>
    </>
  );
}

export default memo(RatingStar);