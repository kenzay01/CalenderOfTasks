import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PersonalPage from "./pages/PersonalPage";
import PageOfSmth from "./pages/PageOfSmth";
import Schedule from "./pages/Schedule";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/registration", element: <RegisterPage /> },
        { path: "/personal/:name", element: <PersonalPage /> },
        { path: "/smth", element: <PageOfSmth /> },
        { path: "/schedule", element: <Schedule /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
