import React from 'react'
import Card from '../components/Card'
import Filter from '../components/Filter'
import Image from 'next/image'
import Link from 'next/link'
import Bar from '../components/bar'
import catcss from "../styles/CategoryBar.module.css"
import cardCss from '../styles/Card.module.css'
const Buy = () => {
  return (
    <>
      <div className={catcss.categorybar}>
        <Bar />
        <div className={cardCss.icons}>
          <Link href="/wishlist">
            <a>
              <i className="fa-regular fa-heart wishhover "></i>
              <br />Wishlist &nbsp; </a>
          </Link>
          <Link href="/cartpage">
            <a>
              <i className="bi bi-cart" /><br />Cart
            </a>
          </Link>
        </div>
      </div>
      <div className={cardCss.display}>
        <Filter />
        <div className={cardCss.cards}>
          <div className={cardCss.card}>
            <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={cardCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={cardCss.card}>
            <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={cardCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={cardCss.card}>
            <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={cardCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={cardCss.card}>
            <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={cardCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={cardCss.card}>
            <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={cardCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>

          </div>
          <div className={cardCss.card}>
            <div className={cardCss.Product}>
              <Image src="/metal.png" alt="steel" className={cardCss.cardimg}
                width={400}
                height={200} />
              <div className={cardCss.bottom_right_detail}>
                <small>
                  4.9 <i className="bi bi-star-fill"></i> (1349)
                </small>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
            <div className={cardCss.Product_detail}>
              <div className={cardCss.Product_Title}>
                <h3>Aluminum Scrap</h3>
                <p className={cardCss.wishlist}> <i className="fa-solid fa-heart "></i></p>
              </div>
              <div className={cardCss.Product_Description}>
                <small>Recycled Aluminium scrap from blast furnace.</small>
              </div>
              <ul className={`${cardCss.Product_Quantity} ${cardCss.display}`}>
                <li>1 Ton <small>(min order)</small></li>
                <li className={cardCss.Product_Price}>
                  ₹ 1,39,999
                </li>
              </ul>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Buy