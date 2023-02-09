import { createRef } from "react";
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

  return (
    <div ref={result.nodeRef} className="page">
      {currentOutlet}
    </div>
  );
}
export default NavigationPage;
