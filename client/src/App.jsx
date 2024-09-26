import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import RoutingError from './RoutingError';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import Textbook from './components/Textbook/Textbook';
import Timings from './components/Timings/Timings';
import Contact from './components/Contact/Contact';
import Aboutus from './components/Aboutus/Aboutus';
import Login from './components/login/Login';  // New Login Component
import PrivateRoute from './PrivateRoute';  // Protect routes
import './App.css';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RoutingError />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/login', element: <Login /> },  // Public Login Route
      {
        path: '/catalog',
        element: (
          <PrivateRoute>
            <Catalog />
          </PrivateRoute>
        ),
      },
      {
        path: '/textbook',
        element: (
          <PrivateRoute>
            <Textbook />
          </PrivateRoute>
        ),
      },
      {
        path: '/timings',
        element: (
          <PrivateRoute>
            <Timings />
          </PrivateRoute>
        ),
      },
      { path: '/aboutus', element: <Aboutus /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return (
    <div className="main">
      <RouterProvider router={browserRouter} />
    </div>
  );
}

export default App;
