import Container from "./Container"
import {  ShoppingBag } from "lucide-react";
import { Menu } from "lucide-react";
import { useState } from "react";
import Cart from "./cart";
import { Link } from "react-router-dom";
import { products } from "../data/products";


function Navbar() {
const [openmenu, setopenmenu] = useState(false);
const [opencart, setopencart] = useState(false);
const [search, setSearch] = useState("");
const links = [{
    name:"Home",
    id:1,
    link: "/",
},
{
    name:"products",
    id:2,
    link:'/products'
},
];
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <>
        <nav className="bg-black py-4 h-[60px] fixed w-full top-0 left-0 right-0 z-10">
        <Container>
            <div className="nav flex justify-between w-full items-center">
                <Link to={"/"}>
                <h3 className="text-white text-2xl font-bold"><span className="text-red-700">Nazz </span>code</h3>
                </Link>
                  <div className="relative">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className=" p-1 w-[300px]  bg-white rounded-xl max-md:w-[200px] max-sm:w-[120px]"
            />

            {search && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg border z-50">
                {filteredProducts.map((product) => (
                    <div
                    key={product.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                    {product.name}
                    </div>
                ))}
                </div>
            )}
            </div>
                {/*desktop nav menu */}
                <ul className="flex gap-3 max-sm:hidden">
                    {links.map((link) => (
                        <li key={link.id} className="text-white "><Link to={link.link} className=" rounded-full px-4 py-2 hover:bg-red-500 transition-all duration-[0.4s]">{link.name}</Link></li>
                    ))}
                    <li>
                            <ShoppingBag className="text-red-400 cursor-pointer" onClick={() => { setopencart(!opencart)}}/>
                        </li>
                    </ul>
                    {/*phone nav menu */}
                   <Menu className="sm:hidden cursor-pointer text-white" onClick={() => (setopenmenu(!openmenu))}/>
                </div>
                {openmenu &&
                   <ul className="flex gap-6 sm:hidden fixed flex-col bg-green-200 w-full left-0 top-17 px-5 py-4 rounded-xl items-center transiton-all">
                    {links.map((link) => (
                        <li key={link.id} className="text-white "><Link to={link.link} className="bg-red-700 rounded-full px-4 py-2 hover:bg-red-500 transition-all">{link.name}</Link></li>
                    ))}
                    <li>
                            <ShoppingBag className="text-red-400 cursor-pointer"  onClick={() => { setopencart(!opencart)}}/>
                        </li>
                    </ul>}
        </Container>
        </nav>
        {/*card */}
        <Cart oc={opencart} soc={setopencart}/>
       
   </>
  )
}

export default Navbar
