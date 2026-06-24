import { useState } from "react"
import CartContext from "../components/cartcontext";
import { useContext } from "react";

function Checkout({opensidebar}) {

  const [form, setform] = useState({
    name : "",
    lastname : "",
    email : "",
    phone : "",
    address : "",
  })


  const handlesubmit = (e) => {
    e.preventDefault();
  }

  const {
        cart,
       totalPrice,
       increaseQuantity,
        decreaseQuantity,
        deleteItem,
} = useContext(CartContext);

  return (
   <section className={`${opensidebar? "ml-[300px]" : "ml-[60px]"} pt-20 min-h-screen`}>
    <div className="p-4 m-4 border-1 rounded-xl ">
      <div className="flex flex-col">
        <h3 className="font-bold mb-2 text-2xl">Creat order</h3>
        <p>plz fill the form to create order</p>
      </div>
      <form className="flex flex-col" onSubmit={handlesubmit}>
        <div className="flex gap-6 w-full">
          <div className="flex flex-col gap-2 w-[50%]">
            <label htmlFor="name">name :</label>
            <input value={form.name} required onChange={(e) => setform({...form, name : e.target.value })} type="text"  id="name" placeholder="enter your name" className="border rounded-s px-2 py-2 "/>
          </div>
          <div className="flex flex-col gap-2 w-[50%]">
            <label htmlFor="last-name">last name :</label>
            <input value={form.lastname} required onChange={(e) => setform({...form , lastname: e.target.value})} type="text" placeholder="enter your last name" className="border rounded-s px-2 py-2"/>
          </div>
        </div>
        <label htmlFor="email" className="mt-4">email :</label>
        <input value={form.email} required onChange={(e) => setform({...form , email: e.target.value})} type="email" placeholder="enter your email" className="border rounded-s px-2 py-2 my-2"/>
        <div className="flex gap-2 w-full flex-col">
        <label htmlFor="phone-number" className="">phone number</label>
        <input value={form.phone} required onChange={(e) => setform({...form , phone: e.target.value})} type="text" placeholder="enter your phone number" className="border rounded-s px-2 py-2 mb-2 w-full"/>
        </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="Address">Address :</label>
        <textarea value={form.address} required onChange={(e) => setform({...form , address: e.target.value})} type="text" placeholder="enter your address" className="border rounded-s px-2 py-2 mb-2 w-full"/>
        </div>
        <div className="flex justify-end w-full pt-10 items-center gap-2">
          <button className="px-4 py-2 rounded-xl text-white border bg-red-700 cursor-pointer font-bold hover:bg-red-500 transition-all duration-300" type="submit">order</button>
          <p className="font-bold text-xl text-red-400">total price :${totalPrice}</p>
        </div>
      </form>
      <div className="pt-10 gap-4 flex flex-col">
      {cart.map(item => (
        <div className="flex gap-4 items-center border rounded-xl w-fit p-4" key={item.id}>
          <div className="w-[300px] h-[200px]">
            <img src={item.img} alt="cart img" className="w-[100%] h-full object-contain"/>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl ">{item.name}</h2>
              <div className="flex gap-4">
              <p className="font-bold text-xl">price :${item.price * item.quantity}</p>
              </div>
               <div className="flex gap-2 items-center justify-center text-2xl">
                <button className=" px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => {decreaseQuantity(item.id)}}>-</button>
                <span>{item.quantity}</span>
                <button className=" px-2 py-1 hover:bg-gray-100 cursor-pointer" onClick={() => {increaseQuantity(item.id)}}>+</button>
                <button className=" bg-red-700 text-white px-2 py-1 rounded-md hover:bg-red-600 transition cursor-pointer text-sm" onClick={() => {deleteItem(item.id)}}>x</button>
              </div>
              </div>
        </div>
      ))}
      </div>
    </div>
   </section>
  )
}

export default Checkout
