import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Page/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Fragrance from './Page/Fragrance';
import Bodymist from './Page/Bodymist';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fragrance",
    element: <Fragrance />
  },
  {
    path: "/bodymist",
    element: <Bodymist/>
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