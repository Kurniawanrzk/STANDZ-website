import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[20px]" };
const variants = {
  fill: {
    deep_purple_400: "bg-deep_purple-400 text-black-900",
    deep_purple_400_72_02: "bg-deep_purple-400_72_02 text-black-900",
    blue_gray_900: "bg-blue_gray-900 text-white-A700",
    gray_300_af: "bg-gray-300_af text-white-A700",
    deep_purple_400_01: "bg-deep_purple-400_01 text-black-900",
    deep_purple_400_72: "bg-deep_purple-400_72 text-black-900",
    gray_200_bf: "bg-gray-200_bf text-black-900",
    blue_gray_100: "bg-blue_gray-100 text-black-900",
    pink_900: "bg-pink-900 text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "pink_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "deep_purple_400",
    "deep_purple_400_72_02",
    "blue_gray_900",
    "gray_300_af",
    "deep_purple_400_01",
    "deep_purple_400_72",
    "gray_200_bf",
    "blue_gray_100",
    "pink_900",
  ]),
};

export { Button };
