import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Parent from "./Parent";
import Login from "../pages/Login"
const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: (
            <Parent>
                <Home />
            </Parent>
          )
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/profile",
          element: (
            <Parent>
                <Profile />
            </Parent>
          )
        }
      ]
    }
  ]);
  

export default router