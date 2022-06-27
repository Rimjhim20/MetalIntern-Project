import React from 'react'
import Image from 'next/image'
import allcatcss from "../styles/AllCategory.module.css"
const AllCategory = () => {
    return (
        <div>
            <br />
            <h2 className={allcatcss.title}>All Categories</h2>
            <div className={allcatcss.cards}>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                    <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                       width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className={allcatcss.card}>
                    <Image src="/metal.png" alt="steel" className='prodimg'
                        width={120}
                        height={120} />
                      <div className={allcatcss.content}>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default AllCategory