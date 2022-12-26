import { CiDark, CiLight } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../svg/logo.svg";
import { ReactComponent as LogoSvgDark } from "../svg/logo-dark.svg";

function NavigationBar({ routes, theme, handleThemeChange }) {
  const activeLinkClasses = `cursor pointer text-lg px-4 py-2 border-b-2 ${
    theme === "light"
      ? "border-teal-800 bg-teal-200"
      : "border-teal-200 bg-teal-800"
  }`;

  return (
    <nav
      className={`flex flex-row ${theme} justify-between items-center pt-5 tracking-tight`}
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
                    : "cursor pointer text-lg px-4 py-2"
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
