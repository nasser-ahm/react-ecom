import Container from "./Container"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
export default function Footer({ opensidebar}) {
  return (
   <footer className={` border-t-2 py-20 transition-all duration-300 bg-red-200 ${opensidebar ? "ml-[300px]" : "ml-[60px]"} `}>
    <Container>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 justify-center gap-10 ">
            <div className="flex gap-4 flex-col">
                <h3 className="text-red-400 text-4xl font-bold">Nazz <span className="text-black text-4xl">code</span></h3>
                <div className="flex gap-3">
                     <a href="#"><FaFacebook size={30} className="text-red-400 cursor-pointer hover:text-red-800 transition-all duration-[0.4s]"/></a>
                    <a href="#"> <FaInstagram size={30} className="text-red-400 cursor-pointer hover:text-red-800 transition-all duration-[0.4s]" /></a>
                     <a href="#"><FaLinkedin size={30} className="text-red-400 cursor-pointer hover:text-red-800 transition-all duration-[0.4s]" /></a>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold">Services</h3>
                <p>web-development</p>
                <p>responsive-design</p>
                <p>ecom-websites</p>
            </div>
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold">Contact us:</h3>
                <p>email: nasser.ahmedg20@gmail.com</p>
                <p>phone: 021-21-21-23</p>
            </div>
        </div>
    </Container>
   </footer>
  )
}
