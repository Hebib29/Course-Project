import React from 'react'
import {BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle} from 'react-icons/bi'
import '../Styles/Sidebar-container.css';
const Sidebartwo = () => {
  return (
    <div className='menu'>
    <div className='logo'>
      <h2>Magio</h2>
    </div>

    

    <div className="menu-list">
    <div className='menu-top'>
    <a href="" className="item">
           <BiHome className="icon" />
           Dashboard
       </a>

       <a href="" className="item">
           <BiTask  className="icon"/>
           Transactions
       </a>

       <a href="" className="item">
           <BiSolidReport  className="icon"/>
           İnvoices
       </a>

       <a href="" className="item">
           <BiStats className="icon" />
         My Wallets
       </a>

       <a href="" className="item">
           <BiMessage className="icon" />
          Settings
       </a>
        </div>
      
       
       <div className='menu-bottom'>
       <a href="" className="item">
           <BiHelpCircle  className="icon"/>
           Help
       </a>

       <a href="" className="item">
           <BiHelpCircle  className="icon"/>
          Logout
       </a>
       </div>

      
    </div>
   </div>
  )
}

export default Sidebartwo