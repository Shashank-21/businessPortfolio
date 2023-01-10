import classNames from "classnames";
import { useState } from "react";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  outline,
  rounded,
  className,
  ...rest
}) {
  console.log(children);
  const [isHoveringOver, setIsHoveringOver] = useState(false);

  const handleMouseEnter = () => {
    setIsHoveringOver(true);
  };
  const handleMouseLeave = () => {
    setIsHoveringOver(false);
  };

  const classes = classNames(
    className,
    "flex items-center justify-center px-6 py-3 border-2 cursor-pointer shadow-md shadow-gray-500",
    `${isHoveringOver ? "scale-110" : ""}`,
    {
      "border-gray-800 bg-gray-800 text-white": primary && !outline,
      "border-green-800 bg-green-800 text-white": success && !outline,
      "border-yellow-500 bg-yellow-400 text-black": warning && !outline,
      "border-blue-600 bg-blue-600 text-white": secondary && !outline,
      "rounded-full": rounded,
      "border-gray-900 bg-white text-gray-900": outline && primary,
      "border-green-600 bg-white text-green-600": outline && success,
      "border-yellow-500 bg-white text-yellow-500": outline && warning,
      "border-blue-600 bg-white text-blue-600": outline && secondary,
    }
  );
  return (
    <button
      className={classes}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  checkVariation: ({ primary, secondary, success, warning }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success);
    if (count > 1)
      return new Error(
        "Only one of primary, secondary, success, warning or danger can be true"
      );
  },
};

export default Button;
