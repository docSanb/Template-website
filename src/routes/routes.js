import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../components/namedComponents";
import Home from "../pages/Home";
import LogBook from "../pages/LogBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/logbook',
        element: <LogBook />
      },
      {
        path:'/medications',
        element: <LogBook />
      },
      {
        path: '/healthinfo',
        element: <LogBook />
      }
    ],
  },
]);
