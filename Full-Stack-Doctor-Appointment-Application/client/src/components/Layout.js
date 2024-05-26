import React, { useState } from 'react'
import '../Layout.css'
import {Link, useLocation} from 'react-router-dom'
import doctor from '../doctor.png'
export default function Layout() {

const [collapsed, setCollapsed] = useState(false)
const location = useLocation()
const userMenu=[
    {
        name:'Home',
        path:'/',
        icon:'ri-home-6-fill'
    },
    {
        name:'Profile',
        path:'/profile',
        icon:'ri-profile-fill'
    },
    {
        name:'Appointments',
        path:'/appointments',
        icon:'ri-file-list-3-fill'
    },
    {
        name:'Apply Doctor',
        path:'/applyfordoctor',
        icon:'ri-nurse-fill'
    },
    {
        name:'Logout',
        path:'/login',
        icon:'ri-logout-circle-r-fill'
    }
]
const Admin=[
    {
        name:'Home',
        path:'/login',
        icon:'ri-home-6-fill'
    },
    {
        name:'users',
        path:'/users',
        icon:'ri-user-fill'
    },
    {
        name:'Doctors',
        path:'/doctors',
        icon:'ri-nurse-fill'
    },
  
   
    {
        name:'Profile',
        path:'/profile',
        icon:'ri-profile-fill'
    },
    {
        name:'Logout',
        path:'/logout',
        icon:'ri-logout-circle-r-fill'
    }
]


const menuToBeRendered = userMenu


  return (
    <div className='main '>   

    <div className='d-flex layout'> 
        <div className={`${collapsed ? 'collapsed-sidebar': 'sidebar' }`}>
         
         <div className='sidebar-header'>
                {collapsed ? <img src={doctor} className='doct'/> : <img src={doctor} className='doctt'/>}
         </div>
         <div className='menu'>
            {menuToBeRendered.map((menu)=>{
                const isActive = location.pathname === menu.path
                   return<div className={`d-flex menu-item ${ isActive && 'active-menu-item'}`}>
                     <i className={menu.icon}></i>
                    {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                   </div>
            })}
                
         </div>







        </div>
        <div className='content'>
          <div className='header'>
          {collapsed ? <i className="ri-menu-unfold-3-fill open-icon"onClick={()=>setCollapsed(false)}></i> : <i className="ri-eye-off-fill close-icon" onClick={()=>setCollapsed(true)}></i>}

          <div className='d-flex'>
          <i className="ri-notification-4-fill header-action-icon"></i>
          <Link className='anchor'>Admin</Link>
          </div>
          </div>
          <div className='body'>
            <h1>body</h1>
          </div>
       </div>
    </div>
      
    </div>
  )
}
