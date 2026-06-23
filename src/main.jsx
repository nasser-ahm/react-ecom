import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CartProvider } from './components/cartcontext.jsx';
createRoot(document.getElementById('root')).render(
   <StrictMode>
    <CartProvider>
    <BrowserRouter basename="/react-ecom">
      <App />
    </BrowserRouter>
    </CartProvider>
  </StrictMode>
)
