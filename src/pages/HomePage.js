import Button from "../components/Button";

import { useNavigate } from "react-router-dom";
import { ReactComponent as ExpandedSvg } from "../svg/main-text.svg";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedService } from "../store";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeSelectedService({ serviceName: "", categoryName: "" }));
  }, [dispatch]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className={`h-screen p-10`}>
      <div className="flex flex-col items-center justify-around h-4/5 p-10">
        <ExpandedSvg className="scale-75 text-center" />
        <p className="text-5xl text-center">
          Enabling your story to inspire the community
        </p>
        <Button primary className="text-2xl" onClick={handleClick}>
          Know more
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
