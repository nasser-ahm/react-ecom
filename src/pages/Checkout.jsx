import { useState } from "react"



function Checkout({opensidebar}) {

  const [form, setform] = useState({
    name : "",
    lastname : "",
    email : "",
    phone : "",
    address : "",
  })


  const handlesubmit = (e) => {
    e.preventDefalut();
  }
  return (
   <section className={`${opensidebar? "ml-[300px]" : "ml-[60px]"} pt-20 min-h-screen`}>
    <div className="p-4 m-4 border-1 rounded-xl  items-center w-full">
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
        <div className="flex justify-end w-full pt-10">
          <button className="px-4 py-2 rounded-xl text-white border bg-red-700 cursor-pointer" type="submit">order</button>
        </div>
      </form>
    </div>
   </section>
  )
}

export default Checkout
