import React from "react";
import RootLayout from "./Component/RootLayout/RootLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Error from "./Component/Error/Error";
import Cart from "./Component/Cart/Cart";
import NotFound from "./Component/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/error",
        element: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/notFound",
        element: <NotFound />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
};

export default App;
