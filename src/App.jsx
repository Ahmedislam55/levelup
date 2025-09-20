import "flowbite";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import ContactPage from "./components/ContactPage/ContactPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/contact", element: <ContactPage /> },
      ],
    },
  ]);
  return (
    <>
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    </>
  );
}

export default App;
