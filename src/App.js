import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { useEffect } from "react";
import NavigationPage from "./pages/NavigationPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.querySelector("#root");
    for (let existingTheme of root.classList)
      root.classList.remove(existingTheme);
    root.classList.add(theme);
  }, [theme]);

  const routeFromElements = createRoutesFromElements(
    <Route path="/" element={<NavigationPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="admin" element={<AdminPage />} />
    </Route>
  );
  const router = createBrowserRouter(routeFromElements);

  return <RouterProvider router={router} />;
}

export default App;
