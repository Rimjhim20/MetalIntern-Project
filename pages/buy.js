import React from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import Bar from '../components/bar'
import catcss from "../styles/CategoryBar.module.css"
import cardCss from '../styles/Card.module.css'
const Buy = () => {
  return (
    <>
      <div className={catcss.categorybar}>
        <Bar />
        <div className={cardCss.icons}>
          <a href="/wishlist"><i className="fa-regular fa-heart wishhover "></i><br />Wishlist &nbsp;</a>
          <a href="/cartpage"><i className="bi bi-cart" /><br />Cart</a>
        </div>
      </div>
      <div className={cardCss.display}>
        <Filter />
        <div className={cardCss.displaycol}>
          <Card />
          <Card />
        </div>
      </div>
    </>


  )
}

export default Buy