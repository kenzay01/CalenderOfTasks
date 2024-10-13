import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PersonalPage from "./pages/PersonalPage";
import PageOfSmth from "./pages/PageOfSmth";
import Schedule from "./pages/Schedule";
function App() {
  // const userData = {
  //   username: "John",
  //   fullname: "John Doe",
  //   age: 25,
  //   occupation: "Student",
  //   email: "dasdasd@gmail.com",
  //   phone: "1234567890",
  //   telegram: "@adsdad",
  //   imgUrl:
  //     "https://img.freepik.com/free-photo/view-of-3d-cool-modern-bird_23-2150946453.jpg",
  // };
  const userData = null;
  const userKey = !!userData;
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root userKey={userKey} userData={userData} />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/registration", element: <RegisterPage /> },
        {
          path: "/personal/:name",
          element: <PersonalPage userData={userData} />,
        },
        { path: "/smth", element: <PageOfSmth /> },
        { path: "/schedule", element: <Schedule userKey={userKey} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
