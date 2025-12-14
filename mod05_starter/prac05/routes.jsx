import Home from "./pages/Home";
import Settings from "./pages/Settings";
import ProductAdd from "./pages/ProductAdd";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Settings",
    element: <Settings />,
  },
  {
    path: "/Product",
    children: [
      {
        path: "Add/",
        element: <ProductAdd />,
      },
    ],
  },
];
