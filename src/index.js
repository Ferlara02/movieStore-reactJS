import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import { router } from './router/index';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm1QNjhNQpcRA8kSreccuB1hlXDpIXXy0",
  authDomain: "movie-store-react-js.firebaseapp.com",
  projectId: "movie-store-react-js",
  storageBucket: "movie-store-react-js.appspot.com",
  messagingSenderId: "1036411345532",
  appId: "1:1036411345532:web:8b73f516cc61e7241707f9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);


