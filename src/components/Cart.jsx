import { X } from "lucide-react";
import CartContext from "./cartcontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


export default function Cart({oc, soc}) {
    const {
  cart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  totalPrice
} = useContext(CartContext);
const navigate = useNavigate();
  return (
     <div className={`fixed top-0 bottom-0 w-[300px] bg-black text-white transition-all duration-300 z-50 ${oc ? "right-0" : "-right-[300px]"} flex flex-col `}>
  <div className="flex justify-between p-4">
    <h3>Total Price: ${totalPrice}</h3>
    <X onClick={() => soc(!oc)} className="cursor-pointer" />
  </div>
    <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar">
  {cart.map((item) => (
    <div key={item.id} className="flex items-center gap-2 p-4 w-full justify-between">
      <div className="rounded-xl">
      <img
        src={item.img}
        alt={item.title}
        className="w-[80px] h-[100px] object-cover "
      />
      </div>
      <div className="flex flex-col">
        <h4>{item.title}</h4>

        <div className="flex items-center gap-2">
          <button
            onClick={() => increaseQuantity(item.id)}
            className="bg-white text-black px-2 cursor-pointer"
          >
            +
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() => decreaseQuantity(item.id)}
            className="bg-white text-black px-2 cursor-pointer"
          >
            -
          </button>

          <button
            onClick={() => deleteItem(item.id)}
            className="bg-red-500 px-2 cursor-pointer"
          >
            x
          </button>
        </div>
      </div>
    </div>
  ))}
  </div>
  <div className="flex w-full">
    <button className="w-[50%] px-4 py-2 bg-gray-400 text-black cursor-pointer" onClick={() => soc(!oc)}>Close</button>
  
    <button className="w-[50%] px-4 py-2 bg-orange-500 text-white cursor-pointer" onClick={() => navigate("/checkout")}>Checkout</button>
    
  </div>
</div>
  )
}
