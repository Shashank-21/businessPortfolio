import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import { useSelector } from "react-redux";

function ValueDisplay({ image, title, description }) {
  const [isFront, setIsFront] = useState(true);
  const [isHoveringOver, setIsHoveringOver] = useState(false);

  const theme = useSelector((state) => state.theme);

  const handleMouseEnter = () => {
    if (isFront)
      setIsHoveringOver((current) => {
        if (!current) return true;
      });
  };
  const handleMouseLeave = () => {
    if (isFront)
      setIsHoveringOver((current) => {
        if (current) return false;
      });
  };

  const handleClick = () => {
    setIsFront((current) => {
      return !current;
    });
  };

  const backContent = (
    <div
      className={`${
        theme === "light" ? "bg-blue-900" : "bg-stone-200"
      } flex flex-col justify-center items-center rounded-xl w-full h-full opacity-100 absolute inset-0 card-back`}
    >
      <h3
        className={`${
          theme === "light" ? "text-blue-50" : "text-stone-900"
        } text-4xl`}
      >
        {title.toUpperCase()}
      </h3>
      {description && (
        <p
          className={`${
            theme === "light" ? "text-blue-50" : "text-stone-900"
          } text-xl text-center text-white m-6`}
        >
          {description}
        </p>
      )}
    </div>
  );

  const hoverContent = (
    <div className="flex flex-col justify-center items-center rounded-xl bg-gray-800 opacity-75 w-full h-full absolute inset-0">
      <h3 className="text-4xl text-white">{title.toUpperCase()}</h3>
      <p className="text-white">Click to know more</p>
    </div>
  );

  const frontContent = (
    <div className="absolute w-full h-full cursor-pointer card-front rounded-xl">
      {isHoveringOver && hoverContent}
      <img src={image} alt={title} className="w-full h-full rounded-xl" />
    </div>
  );

  return (
    <div
      className="relative w-2/5 h-80 m-5 cursor-pointer flippable-card-container"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CSSTransition in={isFront} timeout={750} classNames="flip">
        <div className="card-placeholder">
          {backContent}
          {frontContent}
        </div>
      </CSSTransition>
    </div>
  );
}
export default ValueDisplay;
