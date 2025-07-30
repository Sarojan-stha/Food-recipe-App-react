import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favourites from "./pages/Favourites";
import Home from "./pages/home";
import Details from "./pages/details";
import Root from "./commponents/root/Root";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "favourites",
        element: <Favourites />,
      },
      {
        path: "/recipe-item/:id",
        element: <Details />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
