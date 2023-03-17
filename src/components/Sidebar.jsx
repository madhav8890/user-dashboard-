import React from 'react'
import {Link, NavLink} from "react-router-dom";
import {SiShopware} from "react-icons/si";
import {MdOutlineCancel} from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from "../data/data/dummy"
  
const Sidebar = () => {
  const activeMenu = true;
  return (
    <div className='ml-3 h-screen md:ovelflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
      <div className='flex justify-between item-center'>
        <Link to="/" onClick={()=>{}} className='item-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
          <SiShopware/> <span>shoppy</span>
        </Link>

      </div>
      </>)}

    </div>
  )
}

export default Sidebar