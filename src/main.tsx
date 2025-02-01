import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <App /> }, // Login Page (Home)
  { path: "/signup", element: <SignUp /> } // Sign Up Page
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
