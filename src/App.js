import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import NavigationPage from "./pages/NavigationPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import SigninPage from "./pages/SignInPage";

function App() {
  const routeFromElements = createRoutesFromElements(
    <Route path="/" element={<NavigationPage />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="sign-in" element={<SigninPage />} />
    </Route>
  );
  const router = createBrowserRouter(routeFromElements);

  return <RouterProvider router={router} />;
}

export default App;
