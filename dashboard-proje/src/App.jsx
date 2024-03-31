import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import './App.css';


import Raportlist from './components/Raportlist'
import Listcontent from './components/Listcontent'
import Cards from './components/Cards'
import Login from './components/Login'
import Loginsidebar from './components/Loginsidebar'


function App() {
  

  return (
    <div className="Content-all">
     <div className="Dashboard">
  <Sidebar />
  
  <div className="Dashboard-content">
    <Content />
  </div>
  
   </div>

   <div className="contenttwo">
    <Sidebar />
    <div className='Raport-content'>
    <Listcontent />
    </div>
   
   </div>

   
   
<div className="card-content">
  <Sidebar />



<div className="cards">
<Cards />
</div>

</div>




<div className='login-content'>
  <Sidebar />

  <div>
    <Loginsidebar />
  </div>
</div>

<Login />
    </div>
  
  )
}

export default App
