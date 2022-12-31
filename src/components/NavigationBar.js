import { CiDark, CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../svg/logo.svg";
import { ReactComponent as LogoSvgDark } from "../svg/logo-dark.svg";

function NavigationBar({ routes, theme, handleThemeChange }) {
  const activeLinkClasses = `cursor pointer text-xl mx-1 px-3 pt-2 pb-1 border-b-4 ${
    theme === "light"
      ? "border-blue-800 bg-blue-300"
      : "border-gray-200 bg-gray-700"
  }`;

  return (
    <nav
      className={`flex flex-row ${
        theme === "light" ? "bg-blue-100" : "bg-[#111111]"
      } justify-between items-center py-5`}
    >
      {routes
        .filter((route) => {
          return route.path === "/" && route.renderLink;
        })
        .map((route, index) => {
          return (
            <NavLink to={route.path} key={index}>
              {theme === "light" ? (
                <LogoSvg className="ml-20 px-1.5 py-1.5" />
              ) : (
                <LogoSvgDark className="ml-20 px-1.5 py-1.5" />
              )}
            </NavLink>
          );
        })}
      <div className="flex flex-row justify-end w-2/5 mr-20 items-center">
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
                    : "cursor pointer text-lg mx-2 px-2 pt-2"
                }
                to={route.path}
                key={index}
              >
                {route.name}
              </NavLink>
            );
          })}
        {theme === "light" ? (
          <CiLight
            className="cursor-pointer text-4xl mx-3 hover:scale-110 hover:duration-300"
            onClick={handleThemeChange}
          />
        ) : (
          <CiDark
            className="cursor-pointer text-4xl mx-3 hover:scale-110 hover:duration-300"
            onClick={handleThemeChange}
          />
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
