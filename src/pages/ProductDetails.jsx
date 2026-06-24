import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import CartContext from "../components/cartcontext";


export default function ProductDetails({opensidebar}) {


  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );
 const {
        cart,
        addtocart,
        increaseQuantity,
        decreaseQuantity,
} = useContext(CartContext);
  if (!product) {
    return <h2>Product not found</h2>;
  }
  const quantity = cart.find(item => item.id === Number(id))?.quantity || 0;
   
  return (
    <>
      <section className={`pt-[60px]  flex   min-h-screen flex-col  ${opensidebar? "ml-[300px]" : "ml-[60px]"} transition-all duration-300`}>
        <div className=" flex w-full items-center  justify-center flex-1 max-md:flex-col">
        <div className="w-[50%] md:w-1/2 justify-center flex">
          <img
            src={product.img}
            alt={product.name}
            className="w-[600px] h-[400px] object-contain p-4"
          />
        </div>

        <div className="flex flex-col gap-4 w-[50%] md:w-1/2 ">
          <h1 className="text-6xl max-md:text-xl">
            {product.name}
          </h1>

          <p className="text-2xl mt-6 max-md:text-xl">{product.desc}</p>

          <p className="font-bold text-3xl mt-4 max-md:text-xl">
            ${product.price}
          </p>
          </div>
          </div>
            <div className="flex justify-end gap-4 items-center m-4">
              {quantity > 0 && ( 
                <>
              <button className="text-xl cursor-pointer" onClick={() => {decreaseQuantity(product.id)}}>-</button>
              <span>{quantity}</span>
              <button className="cursor-pointer" onClick={() => {increaseQuantity(product.id)}}>+</button>
              </>
              )}
              <button className="text-white rounded-xl font-bold px-4 py-2 hover:bg-red-400 bg-red-700 cursor-pointer" onClick={() => {addtocart(product)}}>add to cart</button>
            </div>
      </section>
    </>
  );
}
