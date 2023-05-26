import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Service from './pages/Service';
import Cart from './pages/Cart';
import Login from './component/Login';
import Register from './component/Register'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Service",
    element: <Service />,
  },
  {
    path: "Shop",
    element: <Shop />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
