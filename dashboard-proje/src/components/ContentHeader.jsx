import React from 'react'
import { BiSearch } from 'react-icons/bi'
import '../Styles/Content.css'

const ContentHeader = () => {
  return (
    <div className='Content-Header'>
        <h1 className="Header-title">Transactions</h1>
        <div className='search-box'>
        <BiSearch  className='icon'/>
            <input type="text" placeholder='Search anything on Transactions'/>
            
        </div>
    </div>
  )
}

export default ContentHeader