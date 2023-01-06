import { NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../svg/logo.svg";
import { ReactComponent as IndFlag } from "../svg/Flag_of_India.svg";
import { ReactComponent as USFlag } from "../svg/Flag_of_the_United_States.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../store";

function NavigationBar({ routes }) {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const activeLinkClasses =
    "cursor-pointer text-xl mx-1 px-3 pt-2 pb-1 border-b-4 border-blue-800 bg-blue-300";

  return (
    <nav className="flex flex-row bg-blue-100 justify-between items-center py-5">
      {routes
        .filter((route) => {
          return route.path === "/" && route.renderLink;
        })
        .map((route, index) => {
          return (
            <NavLink to={route.path} key={index}>
              <LogoSvg className="ml-20 px-1.5 py-1.5" />
            </NavLink>
          );
        })}
      <div className="flex flex-row justify-end w-2/5 mr-20 items-center">
        <div className="flex flex-col justify-around h-fit w-fit mr-5">
          <span className="text-md">Currency:</span>
          <div className="flex flex-row justify-between w-full cursor-pointer mt-1 items-center">
            <IndFlag
              className={`h-fit w-8 ${
                currency === "INR" ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => dispatch(changeCurrency("INR"))}
            />
            <USFlag
              className={`h-fit w-8 ${
                currency === "USD" ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => dispatch(changeCurrency("USD"))}
            />
          </div>
        </div>
        {routes
          .filter((route) => {
            return route.path !== "/" && route.renderLink;
          })
          .map((route, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? activeLinkClasses
                    : "cursor-pointer text-lg mx-2 px-2 pt-2"
                }
                to={route.path}
                key={index}
              >
                {route.name}
              </NavLink>
            );
          })}
      </div>
    </nav>
  );
}

export default NavigationBar;
