import classNames from "classnames";
import { useSelector } from "react-redux";
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
  const theme = useSelector((state) => {
    return state.theme;
  });
  const [isHoveringOver, setIsHoveringOver] = useState(false);

  const handleMouseEnter = () => {
    setIsHoveringOver(true);
  };
  const handleMouseLeave = () => {
    setIsHoveringOver(false);
  };

  const classes = classNames(
    className,
    "flex items-center px-6 py-3 border-2 cursor-pointer shadow-md",
    `${theme === "light" ? "shadow-gray-200" : "shadow-gray-800"}`,
    `${isHoveringOver ? "scale-110" : ""}`,
    {
      "border-gray-800 bg-gray-800 text-white": secondary && !outline,
      "border-green-800 bg-green-800 text-white": success && !outline,
      "border-yellow-500 bg-yellow-400 text-black": warning && !outline,
      "border-purple-600 bg-purple-600 text-white": primary && !outline,
      "rounded-full": rounded,
      "border-gray-900 bg-white text-gray-900": outline && secondary,
      "border-green-600 bg-white text-green-600": outline && success,
      "border-yellow-500 bg-white text-yellow-500": outline && warning,
      "border-purple-600 bg-white text-purple-600": outline && primary,
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
