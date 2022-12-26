import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  const handleClick = () => {
    setShowFront((current) => !current);
  };
  return (
    <div className="flippable-card-container flippable-card-container-dimensions">
      <CSSTransition in={showFront} timeout={500} classNames="flip">
        <Card onClick={handleClick} />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
