import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function ValueDisplay({ image, title, description, creditLink, creditText }) {
  const [isFront, setIsFront] = useState(true);
  const [isHoveringOver, setIsHoveringOver] = useState(false);
  console.log(creditLink, creditText);

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
    <div className="flex flex-col justify-center items-center rounded-xl w-full h-full opacity-100 absolute inset-0 card-back bg-blue-900 shadow-xl">
      <h3 className="text-blue-50 text-4xl">{title.toUpperCase()}</h3>
      {description && (
        <p className="text-blue-50 text-xl text-center text-white m-6">
          {description}
        </p>
      )}
    </div>
  );

  const hoverContent = (
    <div className="flex flex-col justify-center items-center rounded-xl bg-gray-800 opacity-75 w-full h-full absolute inset-0 shadow-xl">
      <h3 className="text-4xl text-white">{title.toUpperCase()}</h3>
      <p className="text-white">Click to know more</p>
      <p className="text-white mt-20">Image Credit:</p>
      <a
        href={creditLink}
        className="text-white"
        target="_blank"
        rel="noreferrer"
      >
        {creditText}
      </a>
    </div>
  );

  const frontContent = (
    <div className="absolute w-full h-full cursor-pointer card-front rounded-xl shadow-xl">
      {isHoveringOver && hoverContent}
      <img src={image} alt={title} className="w-full h-full rounded-xl" />
    </div>
  );

  return (
    <div
      className="relative w-2/5 h-96 m-5 cursor-pointer flippable-card-container"
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
