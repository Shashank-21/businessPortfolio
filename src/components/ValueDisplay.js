import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function ValueDisplay({ image, title, description }) {
  const [isFront, setIsFront] = useState(true);
  const [isHoveringOver, setIsHoveringOver] = useState(false);

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
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-400 w-full h-full absolute inset-0 card-back">
      <h3 className="text-4xl text-black">{title.toUpperCase()}</h3>
      {description && (
        <p className="text-center text-black text-xl m-6">{description}</p>
      )}
    </div>
  );

  const hoverContent = (
    <div className="flex flex-col justify-center items-center bg-gray-800 opacity-75 w-full h-full absolute inset-0">
      <h3 className="text-4xl text-white">{title.toUpperCase()}</h3>
      <p className="text-white">Click to know more</p>
    </div>
  );

  const frontContent = (
    <div className="absolute w-full h-full duration-500 cursor-pointer card-front">
      {isHoveringOver && hoverContent}
      <img src={image} alt={title} className="w-full h-full" />
    </div>
  );

  return (
    <div
      className="relative w-2/5 h-80 m-5 duration-500 cursor-pointer flippable-card-container"
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
