import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import Sidebar from "./components/Sidebar";
import {useState} from "react";
import { menulinks } from "./data/links";
import Footer from "./components/Footer";
function App() {
  const [opensidebar, setopensidebar] = useState(true);

  return (
    <>
      <Navbar
        opensidebar={opensidebar}
        setopensidebar={setopensidebar}
      />

      <Sidebar
        links={menulinks}
        osb={opensidebar}
        hcf={() => setopensidebar(!opensidebar)}
      />
    <Routes>
      <Route
  path="/"
  element={<Home opensidebar={opensidebar} setopensidebar={setopensidebar}  />}
/>

<Route
  path="/Products"
  element={<Products opensidebar={opensidebar} setopensidebar={setopensidebar}  />}
/>

<Route
  path="/Product/:id"
  element={<ProductDetails opensidebar={opensidebar} setopensidebar={setopensidebar} />}
/>

<Route
  path="/Checkout"
  element={<Checkout opensidebar={opensidebar} setopensidebar={setopensidebar}  />}
/>
    </Routes>
    <Footer opensidebar={opensidebar} setopensidebar={setopensidebar}/>
    </>
    
  );
}

export default App;
