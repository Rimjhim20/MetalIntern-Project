import React from 'react'

const wishlistbar = () => {
  return (
    <div className="categorybar">

<div className="dropdown">
    <button className="dropbtn">All Categories
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
      <a href="#">STEEL</a>
      <a href="#">ALUMINIUM</a>
      <a href="#">COPPER</a>
      <a href="#">AUTOPARTS</a>
    </div>
  </div> 
  <a href="#">STEEL &emsp; |</a>
  <a href="#">ALUMINIUM  &emsp; |</a>
  <a href="#">COPPER &emsp; |</a>
  <a href="#">AUTOPARTS </a>

  <div className='icons'>

  <a href="#">Wishlist &nbsp;</a>
  <a href="#">Cart</a>
  </div>
  
</div>
  )
}

export default wishlistbar