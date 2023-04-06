import React, { useState } from 'react'
import {FaBars, FaHome} from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUserPlus} from 'react-icons/fi'
import {TbMoneybag} from 'react-icons/tb'
import {MdSchedule} from 'react-icons/md'
import {TfiPieChart} from 'react-icons/tfi'
import {BiLogOutCircle} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = ()=> setIsOpen(!isOpen);
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon:<AiOutlineHome/>
        },
        {
            path:"/Employee",
            name:"Employee",
            icon:<FiUserPlus/>
        },
        {
            path:"/Attendence",
            name:"Attendence",
            icon:<TfiPieChart/>
        },
        {
            path:"/Holidays",
            name:"Schedule",
            icon:<MdSchedule/>
        },
        {
            path:"/Finance",
            name:"Finance",
            icon:<TbMoneybag/>
        }
        /* {
            path:"/Logout",
            name:"Logout",
            icon:<BiLogOutCircle/>
        } */
    ]
  return (
    <div className='container'>
        <div style={{width:isOpen? "320px" : "50px"}} className='sidebar'>

            <div  className='top_sections'>
                <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Dashboard</h1>
                
                <div style={{marginLeft: isOpen ? "10px":"0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>

            </div>
            {
                menuItem.map((item,index) =>(
                    <NavLink to={item.path} key={index} 
                        className="link" activeclassName="Active">

                        <div className="icon">{item.icon}</div>
                        <div style={{
                        display: isOpen ? "block" : "none"
                        }}  className="linktext">{item.name}</div>

                    </NavLink>
                ))
            }

        </div>
        <main>{children}</main>

    </div>
  )
}

export default Sidebar