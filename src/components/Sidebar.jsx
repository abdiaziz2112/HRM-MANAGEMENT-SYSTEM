import React from 'react'
import {FaBars, FaHome, FaHotel, FaUserAlt, FaUserFriends, FaUserPlus} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
    const menuItem = [
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/Employee",
            name:"Employee",
            icon:<FaUserPlus/>
        },
        {
            path:"/Attendence",
            name:"Attendence",
            icon:<FaUserFriends/>
        },
        {
            path:"/Holidays",
            name:"Holidays",
            icon:<FaHotel/>
        },
        {
            path:"/Finance",
            name:"Finance",
            icon:<FaUserAlt/>
        }
    ]
  return (
    <div className='container'>
        <div className='sidebar'>

            <div className='top_sections'>
                <h1 className='logo'>Dashbaord</h1>
                
                <div className="bars">
                    <FaBars/>
                </div>

            </div>
            {
                menuItem.map((item,index) =>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="Active">
                        <div className="icon">{item.icon}</div>
                        <div className="linktext">{item.name}</div>

                    </NavLink>
                ))
            }

        </div>
        <main>{children}</main>

    </div>
  )
}

export default Sidebar