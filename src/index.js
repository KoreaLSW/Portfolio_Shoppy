import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProductMen from './pages/ProductMen';
import ProductWomen from './pages/ProductWomen';
import ProductAccessories from './pages/ProductAccessories';
import ProductAll from './pages/ProductAll';
import MyCart from './pages/MyCart';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductAdd from './pages/ProductAdd';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, path: '/', element: <Home /> },
            {
                path: '/shop/ProductAll',
                element: <ProductAll />,
            },
            {
                path: '/shop/ProductMan',
                element: <ProductMen />,
            },
            {
                path: '/shop/ProductWomen',
                element: <ProductWomen />,
            },
            {
                path: '/shop/ProductAccessories',
                element: <ProductAccessories />,
            },
            {
                path: '/shop/ProductAdd',
                element: <ProductAdd />,
            },
            {
                path: '/shop/ProductDetail/:id',
                element: <ProductDetail />,
            },
            {
                path: '/MyCart',
                element: <MyCart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
