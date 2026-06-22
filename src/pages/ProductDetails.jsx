import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import CartContext from "../components/cartcontext";
import { Link } from "react-router-dom";


export default function ProductDetails({opensidebar}) {


  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );
 const {
  addtocart,
} = useContext(CartContext);
  if (!product) {
    return <h2>Product not found</h2>;
  }

   
  return (
    <>
      <section className={`pt-[200px] px-6 flex gap-8  min-h-screen flex-col w-full ${opensidebar? "ml-[300px]" : "ml-[60px]"} transition-all duration-300`}>
        <div className="border rounded-xl p-4 h-fit flex w-fit items-center ml-20">
        <div>
          <img
            src={product.img}
            alt={product.name}
            className="w-[400px]"
          />
        </div>

        <div className="flex flex-col gap-4 ">
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p>{product.desc}</p>

          <p className="font-bold text-xl">
            ${product.price}
          </p>
            <div className="w-full flex  gap-4  justify-end">
              <Link to="/checkout">
                <button className="text-white bg-black p-4 rounded-xl hover:bg-yellow-800 hover:text-black transition-all cursor-pointer">checkout</button>
              </Link>
          <button className="px-3 py-2 text-white bg-yellow-800 font-bold rounded-xl cursor-pointer hover:bg-black hover:text-white transition-all" onClick={() => {addtocart(product)}}>add to cart</button>
        </div>
        </div>
        </div>
      </section>
    </>
  );
}
