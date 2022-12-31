import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ExpandedSvg } from "../svg/main-text.svg";
import { ReactComponent as ExpandedSvgDark } from "../svg/main-text-dark.svg";

function HomePage() {
  const navigate = useNavigate();
  const theme = useSelector((state) => {
    return state.theme;
  });

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className={`h-screen ${theme} p-10`}>
      <div className="flex flex-col items-center justify-around h-4/5 p-10">
        {theme === "light" ? (
          <ExpandedSvg className="scale-75 text-center" />
        ) : (
          <ExpandedSvgDark className="scale-75 text-center" />
        )}
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
