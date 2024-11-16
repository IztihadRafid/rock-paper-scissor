import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home.jsx';
import HowToPlay from './Components/HowToPlay.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    
  },
  {
    path: '/howtoplay',
    element: <HowToPlay></HowToPlay>
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router} />
    
  </StrictMode>,
)
