import React from 'react'
import cartCss from '../styles/Cart.module.css'
import Card from "../components/CartCard"
import Image from 'next/image'
const cartpage = () => {
  return (
    <div>
<div className={cartCss.wrapper}>
		<div className={cartCss.project}>
			<div className={cartCss.shop}>
            <div className={cartCss.display}>
		<h2>Selected Items</h2>
        <button type="button" className="btn btn-outline-primary"><i className="fa-solid fa-heart redcolor "></i>Add more items from wishlist</button>
        </div>
        <div className={cartCss.box}>
					<img src="/metal.png"/>
						<div className={cartCss.content}>
						<h3>Aluminium Scrap</h3>
						<p className="unit">Quantity  <span>Tons</span></p>
                        <h4> 1,39,999</h4>
                        <p>Delivered by <span> 18 june 2022</span></p>
                         <button className={cartCss.btn2}>Remove</button>
					</div>
				</div>
                <div className={cartCss.box}>
					<img src="/metal.png"/>
						<div className={cartCss.content}>
						<h3>Aluminium Scrap</h3>
						<p className="unit">Quantity  <span>Tons</span></p>
                        <h4> 1,39,999</h4>
                        <p>Delivered by <span> 18 june 2022</span></p>
                         <button className={cartCss.btn2}>Remove</button>
					</div>
				</div>
				<div className={cartCss.box}>
					<img src="/metal.png"/>
						<div className={cartCss.content}>
						<h3>Aluminium Scrap</h3>
						<p className="unit">Quantity  <span>Tons</span></p>
                        <h4> 1,39,999</h4>
                        <p>Delivered by <span> 18 june 2022</span></p>
                         <button className={cartCss.btn2}>Remove</button>
					</div>
				</div>
			</div>
           
			<div className={cartCss.rightbar}>
                <h2>PRICE DETAILS <small>(3 items)</small></h2>
                <hr/>
				<p><span>Total MRP</span> <span>₹1,39,999</span></p>
				
				<p><span>Convenience Fee</span> <span>₹1,39,999</span></p>
				
				<p><span>Delivery Fee</span> <span>₹1,39,999</span></p>
				<hr/>
				<p><span>Total</span> <span>₹1,39,999</span></p>
                <button className={cartCss.button}>Continue to select address</button>
			</div>
		</div>
	</div>


<h2 className={cartCss.Title}>  Would you like to add any of these :</h2>
<div className={cartCss.Card}>
<Card/>
<Card/>
</div>
    </div>
  )
}

export default cartpage