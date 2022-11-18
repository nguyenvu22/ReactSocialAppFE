import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Navbar from "./conponents/navbar/Navbar.jsx";
import LeftBar from "./conponents/leftBar/LeftBar.jsx";
import Rightbar from "./conponents/rightBar/Rightbar.jsx";
import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
