import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "./HomePage";
import Login from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/account/sign-in",
        element: <Login />,
      },
    ],
  },
]);

export default router;
