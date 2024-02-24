import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Page/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fragrance",
    element: <h1>Hello Fragrance</h1>
  },
  {
    path: "/bodymist",
    element: <h1>Hello BodyMist</h1>
  },
  {
    path: "/bodymist/vanilla-milk",
    element: <h1>Hello Fragrance</h1>
  },
  {
    path: "/bodymist/chocolate-cookies",
    element: <h1>Hello Fragrance</h1>
  },
  {
    path: "/bodymist/cheese-cake",
    element: <h1>Hello Fragrance</h1>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);