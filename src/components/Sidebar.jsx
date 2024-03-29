import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from "../data/data/dummy"
  
const Sidebar = () => {
  const activeMenu = true;
  const activeLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md m-2';
  const normalLink = 'flex item-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-black text-md text-gary-700 drak:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
  return (
    <div className='ml-3 h-screen md:ovelflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between item-center'>
        <Link to="/" onClick={()=>{}} className='item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiShopware className='mt-1'/> <span>shoppy</span>
        </Link>
        <TooltipComponent content="Menu" position='BottomCenter'>
          <button type='button' onClick={()=>{}} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block '>
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>

      </div>
      <div className='mt-10'>
        { links.map((item) => (
          <div key={item.title}>
            <p className='text-gray-400 m-3 mt-4 uppercase'>
            {item.title}
            </p>
            {item.links.map((Link) => (
              <NavLink to={`/${Link.name}`} key={Link.name} onClick={()=>{}} className={({isActive}) => isActive? activeLink: normalLink}>
                {Link.icon}
                <span className='capitalize'>
                    {Link.name}
                </span>
              </NavLink>
            ))}
          </div>
        ))}
      </div>
      </>)}

    </div>
  )
}

export default Sidebar