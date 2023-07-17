import React from 'react';
import { createRoot, ReactDOM } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Detail from './pages/detail/Detail'
import Cart from './pages/cart/Cart'

import Intro from './pages/intro/Intro'
import Shipping from './pages/shipping/Shipping'

const container = document.getElementById('root');
const root = createRoot(container);
const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/login', element: <Login />},
  {path: '/register', element: <Register />},
  {path: '/bakery/:id', element: <Detail />},
  {path: '/cart', element: <Cart />},
  {path: '/intro', element: <Intro />},
  {path: '/shipping', element: <Shipping />},
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
