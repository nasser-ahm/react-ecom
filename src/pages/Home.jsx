import { menulinks } from "../data/links";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import banner1 from "../assets/banner-1.jpeg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.avif";
import Container from "../components/Container";
import { products } from "../data/products";
import { MdOutlineShoppingCart } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import CartContext from "../components/cartcontext";
import { Link } from "react-router-dom";



function Home({opensidebar, setopensidebar}) {



   


   function handleClosefunction () {
    setopensidebar(!opensidebar)
   };
   const { addtocart } = useContext(CartContext);
  return (
    
    <section className="min-h-full ">
   {/*side bar */}
   <Sidebar links={menulinks} osb={opensidebar} hcf={handleClosefunction}/>
   {/*content */}
   <div className={`content min-h-screen transition-all duration-300 ease-in-out ${opensidebar ? "md:ml-[300px]" : "md:ml-[0px]"} bg-white relative `}>
    <div className="h-[600px] ">
     <Swiper 
      className="h-full"
      modules={[Navigation, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          src={banner1}
          alt="Banner1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>

       <SwiperSlide>
        <img
          src={banner2}
          alt="Banner2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>

       <SwiperSlide>
        <img
          src={banner3}
          alt="Banner3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
    </div>
    <div className="py-30">
    <Container>
        <div className=" w-fit mb-6  border-b-2 ">
          <h3 className="text-5xl  text-black">All products</h3>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 ">  
         {products.map((product) => (
          
          <div className="rounded-xl  border-2 hover:border-red-400 shadow transition-all duration-[0.3s]">
            
            <div className="relative">
              <Link to={`/product/${product.id}`}>
            <img src={product.img} alt="product img" className="w-full h-[240px] object-cover p-2 hover:scale-105 transition-all duration-[0.3s] cursor-pointer rounded-xl" />
            </Link>
            <button className="absolute top-0 right-0 text-black text-4xl  rounded-bl-[20px] bg-gray-200 rounded-tr-xl border-b-2 border-l-2 hover:scale-105 cursor-pointer transiton-all duration-300 " onClick={() => {addtocart(product)}}><MdOutlineShoppingCart/></button>
            </div>
            
            <div className="bg-gray-100 w-full p-2 rounded-xl">
            <h3 className="text-2xl text-red-400 mb-4 font-bold">{product.name}</h3>
            <p>{product.desc}</p>
            <span>{product.price}$</span>
            </div>
          </div>
         ))}
        </div>
      </Container>
      </div>
       <div className="pb-20">
    <Container>
        <div className=" w-fit mb-6  border-b-2 ">
          <h3 className="text-5xl  text-black">best sellers</h3>
        </div>
         <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-4 ">  
         {products.map((product) => (
          
          <div className="rounded-xl  border-2 hover:border-red-400 shadow transition-all duration-[0.3s]" key={product.id}>
            <div className="relative group">
              <Link to={`/product/${product.id}`}>
            <img src={product.img} alt="product img" className="w-full h-[240px] object-cover p-2 hover:scale-105 transition-all duration-[0.3s] cursor-pointer rounded-xl" />
            </Link>
            <button onClick={() => {addtocart(product)}} className="absolute top-0 right-0 text-black text-4xl  rounded-bl-[20px] bg-gray-200 rounded-tr-xl border-b-2 border-l-2 hover:scale-105 cursor-pointer transiton-all duration-300 "><MdOutlineShoppingCart/></button>
            </div>
            <div className="bg-gray-100 w-full p-2 rounded-xl">
            <h3 className="text-2xl text-red-400 mb-4 font-bold">{product.name}</h3>
            <p>{product.desc}</p>
            </div>
          </div>
         ))}
        </div>
      </Container>
      </div>
   </div>
   
  
    </section>
  
    
  )
}

export default Home
