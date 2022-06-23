import React from 'react'
import Image from 'next/image'
import Bar from "../components/bar"
const product = () => {
  return (
    <>
    <Bar/>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/metal.png" class="d-block w-100" alt="steel" width={400}
            height={200} />
        </div>
        <div className="carousel-item">
          <Image src="/metal1.jpeg" class="d-block w-100" alt="steel"
            width={400}
            height={200} />
        </div>
        <div className="carousel-item">
          <Image src="/metal2.jpg" class="d-block w-100" alt="steel" width={400}
            height={200} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    <div className='textp'>
        <h2>Aluminium Scrap</h2>
        <p>Recycled Aluminium scrap from blast furnace.</p>
      
          <li className="ton">1 Ton (Min Order)</li>

          <p>Measurement</p>
          <p>Length:10 meters</p>
          <p>Diameters:10 meters</p>

          <li className="pricep">₹1,39,999</li>
         
       
      </div>
      <button className="button">Add to Cart</button>
      <button className="button ">Buy Now</button>
      </>

      
  
  )
}

export default product