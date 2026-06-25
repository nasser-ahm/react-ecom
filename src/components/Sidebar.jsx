import { Link } from "react-router-dom"
import { menulinks } from "../data/links"


export default function Sidebar({osb}) {
  
  return (
     <div 
className={`fixed left-0 top-0 bottom-0  bg-black 
transition-all duration-300 ease-in-out z-10 overflow-hidden
${osb ? "w-[300px]" : "w-[0px]"}`}
>
  <div className="flex items-center justify-center">
    <Link to={'/'}>
          <h3 className="text-red-700 text-2xl px-4 font-bold shrink-0 whitespace-nowrap pt-4 ">Nazz<span className="text-white text-2xl shrink-0"> code</span></h3>
    </Link>
  </div>
          <div className="flex justify-between py-4 px-4 w-full mb-32 overflow-hidden flex-shrink-0">
    </div>
    
      <ul className="text-white px-4">
        {menulinks.map((link) => (
          <li key={link.id}>
            <a href="#" className="flex items-center gap-4 py-4">
              <span className="shrink-0">
                {link.icon}
              </span>

              {osb && (
                <span className="whitespace-nowrap">
                  {link.name}
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
   </div>
  )
}
