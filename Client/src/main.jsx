import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Home from "./Home/Home";
import './index.css';
import LoginFinal from "./Login/Login";
import Registration from "./Registration/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home/>
    ),
  },
  {
    path: "registation",
    element: <Registration/>,
  },
  {
    path: "login",
    element: <LoginFinal/>
  },
]);

createRoot(document.getElementById("root")).render(
<ChakraProvider>  <RouterProvider router={router} /> </ChakraProvider>

);
