import { PanelLeftClose } from "lucide-react"
import { menulinks } from "../data/links"
export default function Sidebar({osb, hcf}) {
  
  return (
     <div className={`fixed left-0 top-[60px] h-[calc(100vh-60px)]  bg-black transition-all duration-300 ease-in-out  ${osb ? "w-[300px]" : "w-[60px]"} `}>
          <div className="flex justify-between py-4 px-4 w-full mb-32 overflow-hidden flex-shrink-0">
          <PanelLeftClose className="text-white cursor-pointer shrink-0" onClick={hcf}/>
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
