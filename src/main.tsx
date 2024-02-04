import './styles/main.module.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Archive, Dashboard, ErrorPage, Home, Settings } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
  {
    path: 'archive',
    element: <Archive />,
  },
  {
    path: 'settings',
    element: <Settings />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root'),
);
