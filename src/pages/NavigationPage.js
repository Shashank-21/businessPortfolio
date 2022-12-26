import { createRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../store";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useOutlet, useLocation } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

function NavigationPage() {
  const routes = [
    { name: "home", path: "/", nodeRef: createRef(), renderLink: true },
    { name: "About", path: "/about", nodeRef: createRef(), renderLink: true },
    {
      name: "Services",
      path: "/services",
      nodeRef: createRef(),
      renderLink: true,
    },
    {
      name: "Contact",
      path: "/contact",
      nodeRef: createRef(),
      renderLink: true,
    },
    { name: "Admin", path: "/admin", nodeRef: createRef(), renderLink: false },
  ];

  const location = useLocation();
  const currentOutlet = useOutlet();
  const result = routes.find((route) => route.path === location.pathname) ?? {};
  console.log(result);

  const dispatch = useDispatch();
  const theme = useSelector((state) => {
    return state.theme;
  });

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(changeTheme(newTheme));
  };
  return (
    <div>
      <NavigationBar
        routes={routes}
        theme={theme}
        handleThemeChange={handleThemeChange}
      />
      <SwitchTransition>
        <CSSTransition
          key={location.key}
          nodeRef={result.nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
          <div ref={result.nodeRef} className="page">
            {currentOutlet}
          </div>
        </CSSTransition>
      </SwitchTransition>
      {location.pathname !== "/" && <Footer theme={theme} />}
    </div>
  );
}
export default NavigationPage;
