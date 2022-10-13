
import React from 'react'
import "./Navbar.css"



const Navbar =()=>{



    return(
      <>
      <div className="navcontainer">
    <div className="nav">
  <p>logo</p>
<form className="navform">
    <input type="text"  placeholder="what are you looking for"  className="navInput" />
    <button className='btn btn-default'>
    <i className="bi bi-search"></i>
    </button>
    
</form>
    </div>
   
  
<div className="dropdown">
  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <i className="bi bi-person-circle"></i>   signIn
  </button>
 
  <ul className="dropdown-menu">
    <li className="dropdownItem"><a className="dropdown-item" > Sign out</a></li>
    
  </ul>
</div>
</div>
      </>
    )
 
  }
 


// 

export default Navbar