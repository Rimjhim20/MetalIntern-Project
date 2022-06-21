import React from 'react'
import homeCss from '../styles/Home.module.css'
import metal from '../public/metal.png'
const Home = () => {
    return (
        <>
            <div className={homeCss.home}>
                {/* Home Left Part */}
                <div className={homeCss.HomeLeft}>
                    {/* Home Heading */}
                    <div className={homeCss.HomeText}>
                        <h3 className='text-muted text-center' style={{ fontSize: '40px' }}>Your One-Stop</h3>
                        <h3 className='text-muted text-center' style={{ fontSize: '40px' }}> Station for </h3>
                        <h1 className='text-secondary text-center' style={{ fontSize: '60px' }}>Trading <span className='text-primary' style={{ fontWeight: 'bold' }}>Scrap</span> </h1>
                        <h3 className='text-info text-center' style={{ fontSize: '40px' }}>metal <span className='text-secondary'>&</span> vehicle</h3>
                    </div>
                    {/* Home Image */}
                    <div className={homeCss.HomeImage}>
                        <img className={homeCss.Image} src='/metal.png' alt="" />
                    </div>
                </div>

                {/* Home Right Part */}
                <div className={homeCss.HomeRight}>
                    <button type="button" className={homeCss.btnHomeRight}>Buy Scrap</button><hr />
                    <button type="button" className={homeCss.btnHomeRight}>Sell Scrap</button>
                    <p>Trusted by 50,000+ customers</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum esse ducimus sunt iste molestiae necessitatibus, placeat quo cum ut consequuntur.</p>
                </div>
            </div>
            <div className={homeCss.HomeRecommendation}>
                <div className={homeCss.Recommendation}>
                    <div className={homeCss.Recommendation_inside}>
                        <img className={homeCss.RecommendationImage} src='/metal.png' alt="" />
                        <a className='mx-auto my-auto' href="/"><p>Buy Scrap</p></a>
                    </div>
                    <p className={homeCss.RecommmendationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, distinctio ab. Repudiandae consequuntur distinctio quod.</p>
                </div>
                <div className={homeCss.Recommendation}>
                    <div className={homeCss.Recommendation_inside}>
                        <img className={homeCss.RecommendationImage} src='/metal.png' alt="" />
                        <a className='mx-auto my-auto' href="/"><p>Buy Scrap</p></a>
                    </div>
                    <p className={homeCss.RecommmendationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, distinctio ab. Repudiandae consequuntur distinctio quod.</p>
                </div>
                <div className={homeCss.Recommendation}>
                    <div className={homeCss.Recommendation_inside}>
                        <img className={homeCss.RecommendationImage} src='/metal.png' alt="" />
                        <a className='mx-auto my-auto' href="/"><p>Buy Scrap</p></a>
                    </div>
                    <p className={homeCss.RecommmendationText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, distinctio ab. Repudiandae consequuntur distinctio quod.</p>
                </div>
            </div>



            {/* Why Choose US  */}
            <div className={homeCss.whyChooseUs}>
                <div className={homeCss.Title} >
                    <p className={homeCss.TitleHeading}>Why Choose Us ?</p>
                </div>
                <div className={homeCss.HomeChooseUs}>
                    <div className={homeCss.ChooseUs}>
                        <div className={homeCss.ChooseUs_inside}>
                            <img className={homeCss.ChooseUsImage} src='/metal.png' alt="" />
                            <a className='mx-auto my-auto' href="/"><p>Buy Scrap</p></a>
                        </div>
                        <p className='px-2 py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                    </div>
                    <div className={homeCss.ChooseUs}>
                        <div className={homeCss.ChooseUs_inside}>
                            <img className={homeCss.ChooseUsImage} src='/metal.png' alt="" />
                            <a className='mx-auto my-auto' href="/"><p>Buy Scrap</p></a>
                        </div>
                        <p className='px-2 py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                    </div>
                    <div className={homeCss.ChooseUs}>
                        <div className={homeCss.ChooseUs_inside}>
                            <img className={homeCss.ChooseUsImage} src='/metal.png' alt="" />
                            <a className='mx-auto my-auto' href="/"><p>Buy Scrap</p></a>
                        </div>
                        <p className='px-2 py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                    </div>
                </div>
            </div>

            {/* How It Works  */}
            <div className={homeCss.HowItWorks}>
                <div className={homeCss.Title} >
                    <p className={homeCss.TitleHeading}>How It Works</p>
                </div>
                <div className={homeCss.HomeWork}>
                    <div className={"my-4" && homeCss.Work}>
                        <div className={homeCss.Work_inside}>
                            <p className={homeCss.workinsidehead} href="/">Add Name</p>
                            <img className={homeCss.WorkImage} src='/metal.png' alt="" />
                        </div>
                        <p className='px-2 py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                    </div>
                    <div className={"my-4" && homeCss.Work}>
                        <div className={homeCss.Work_inside}>
                            <p className={homeCss.workinsidehead} href="/">Add Name</p>
                            <img className={homeCss.WorkImage} src='/metal.png' alt="" />
                        </div>
                        <p className='px-2 py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                    </div>
                    <div className={"my-4" && homeCss.Work}>
                        <div className={homeCss.Work_inside}>
                            <p className={homeCss.workinsidehead} href="/">Add Name</p>
                            <img className={homeCss.WorkImage} src='/metal.png' alt="" />
                        </div>
                        <p className='px-2 py-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                    </div>
                </div>
            </div>

            {/* Featured Product  */}
            <div className={"mx-2" && homeCss.FeatureProduct}>
                <div className={homeCss.Title && homeCss.Product_Head} >
                    <p className={homeCss.TitleHeading}>Featured Products</p>
                    <button className={homeCss.SectionSearch}>View All Products <small><i className="fa-solid fa-chevron-right"></i></small> </button>
                </div>
                <div className={homeCss.HomeProduct}>
                    <div className={"my-4" && homeCss.ProductSection}>
                        <div className={homeCss.Product_inside}>
                            <div className={homeCss.Product}>
                                <img className={homeCss.ProductImage} src='/metal.png' alt="" />
                                <div className={homeCss.wish_top_right}>
                                    <p className={homeCss.wish}><i className="fa-solid fa-heart" role='button'></i></p>
                                </div>
                                <div className={homeCss.bottom_right_detail}>
                                    <small>
                                        4.9 <i className="star fa-solid fa-star"></i> (1349)
                                    </small>
                                </div>
                            </div>
                            <div className={homeCss.Product_detail}>
                                <div className={homeCss.Product_Title}>
                                    <h3>Aluminum Scrap</h3>
                                </div>
                                <div className={homeCss.Product_Description}>
                                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, itaque.</small>
                                </div>
                                <div className={homeCss.Product_Quantity}>
                                    <p>1 Ton <small>(min order)</small></p>
                                </div>
                                <div className={homeCss.Product_Price}>
                                    &#x20B9; 1,39,999
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"my-4" && homeCss.ProductSection}>
                        <div className={homeCss.Product_inside}>
                            <div className={homeCss.Product}>
                                <img className={homeCss.ProductImage} src='/metal.png' alt="" />
                                <div className={homeCss.wish_top_right}>
                                    <p className={homeCss.wish}><i className="fa-solid fa-heart" role='button'></i></p>
                                </div>
                                <div className={homeCss.bottom_right_detail}>
                                    <small>
                                        4.9 <i className="star fa-solid fa-star"></i> (1349)
                                    </small>
                                </div>
                            </div>
                            <div className={homeCss.Product_detail}>
                                <div className={homeCss.Product_Title}>
                                    <h3>Aluminum Scrap</h3>
                                </div>
                                <div className={homeCss.Product_Description}>
                                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, itaque.</small>
                                </div>
                                <div className={homeCss.Product_Quantity}>
                                    <p>1 Ton <small>(min order)</small></p>
                                </div>
                                <div className={homeCss.Product_Price}>
                                    &#x20B9; 1,39,999
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"my-4" && homeCss.ProductSection}>
                        <div className={homeCss.Product_inside}>
                            <div className={homeCss.Product}>
                                <img className={homeCss.ProductImage} src='/metal.png' alt="" />
                                <div className={homeCss.wish_top_right}>
                                    <p className={homeCss.wish}><i className="fa-solid fa-heart" role='button'></i></p>
                                </div>
                                <div className={homeCss.bottom_right_detail}>
                                    <small>
                                        4.9 <i className="star fa-solid fa-star"></i> (1349)
                                    </small>
                                </div>
                            </div>
                            <div className={homeCss.Product_detail}>
                                <div className={homeCss.Product_Title}>
                                    <h3>Aluminum Scrap</h3>
                                </div>
                                <div className={homeCss.Product_Description}>
                                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, itaque.</small>
                                </div>
                                <div className={homeCss.Product_Quantity}>
                                    <p>1 Ton <small>(min order)</small></p>
                                </div>
                                <div className={homeCss.Product_Price}>
                                    &#x20B9; 1,39,999
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Abous Us  */}
            <div className={"mx-2" && homeCss.AboutUs}>
                <div className={homeCss.Title} >
                    <p className={homeCss.TitleHeading}>About Us</p>
                </div>
                <div className={homeCss.HomeAbout}>
                    <div className={"my-4" && homeCss.AboutUsSection}>
                        <div className={homeCss.AboutUs_inside}>
                            <p className={homeCss.AboutUsHeading}>Lorem, ipsum.</p>
                        </div>
                        <div className={homeCss.AboutUsInfo}>
                            <img className={homeCss.AboutUsImage} src='/metal.png' alt="" />
                            <p className='px-2 py-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                        </div>

                    </div>
                    <div className={"my-4" && homeCss.AboutUsSection}>
                        <div className={homeCss.AboutUs_inside}>
                            <p className={homeCss.AboutUsHeading}>Lorem, ipsum.</p>
                        </div>
                        <div className={homeCss.AboutUsInfo}>
                            <img className={homeCss.AboutUsImage} src='/metal.png' alt="" />
                            <p className='px-2 py-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorem sed eveniet dolor ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor aliquid illo molestias quaerat labore natus sapiente, error facere nesciunt incidunt nemo hic reprehenderit.</p>
                        </div>

                    </div>
                </div>
            </div>



            {/* Browse By Category  */}
            <div className={homeCss.BrowseByCategory}>
                <div className={homeCss.CategoryHead} >
                    <p className={homeCss.TitleHeading}>Browse By Category</p>
                    <button className={homeCss.SectionSearch}>View All Cateegories <small><i className="fa-solid fa-chevron-right"></i></small> </button>
                </div>
                <div className={homeCss.HomeCategory}>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                    <div className={homeCss.CategorySection}>
                        <div className={homeCss.Category_inside}>
                            <img className={homeCss.CategoryImage} src='/metal.png' alt="" />
                            <a className={homeCss.CategoryName} href="/"><p className='text-center'>Category Name</p></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial  */}
            <div className={homeCss.Testimonial}>
                <div className={homeCss.Title} >
                    <p className={homeCss.TitleHeading}>Testimonials</p>
                </div>
                <div className={homeCss.HomeTestimonial}>
                    <div className={homeCss.TestimonialSection}>
                        <div className={homeCss.TestimonialImage}>
                            <img className={homeCss.Testimonialimg} src='/metal.png' alt="" />
                        </div>
                        <div className={homeCss.TestimonialInfo}>
                            <p className={homeCss.TestimonialText}>
                                <small> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at fugiat eius, ea, excepturi eveniet numquam odit deleniti nisi eum error quo veritatis assumenda.</small>
                            </p>
                        </div>
                        <div className={homeCss.TestimonialName}>
                            <h4 className={homeCss.Tname}>Name Of Testimonial</h4>
                        </div>
                    </div>
                    <div className={homeCss.TestimonialSection}>
                        <div className={homeCss.TestimonialImage}>
                            <img className={homeCss.Testimonialimg} src='/metal.png' alt="" />
                        </div>
                        <div className={homeCss.TestimonialInfo}>
                            <p className={homeCss.TestimonialText}>
                                <small> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at fugiat eius, ea, excepturi eveniet numquam odit deleniti nisi eum error quo veritatis assumenda.</small>
                            </p>
                        </div>
                        <div className={homeCss.TestimonialName}>
                            <h4 className={homeCss.Tname}>Name Of Testimonial</h4>
                        </div>
                    </div>
                    <div className={homeCss.TestimonialSection}>
                        <div className={homeCss.TestimonialImage}>
                            <img className={homeCss.Testimonialimg} src='/metal.png' alt="" />
                        </div>
                        <div className={homeCss.TestimonialInfo}>
                            <p className={homeCss.TestimonialText}>
                                <small> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi at fugiat eius, ea, excepturi eveniet numquam odit deleniti nisi eum error quo veritatis assumenda.</small>
                            </p>
                        </div>
                        <div className={homeCss.TestimonialName}>
                            <h4 className={homeCss.Tname}>Name Of Testimonial</h4>
                        </div>
                    </div>
                </div>
            </div>




            {/* Helping Customer  */}
            <div className={homeCss.HelpingCustomer}>
                <div className={homeCss.Title} >
                    <p className={homeCss.TitleHeading}>We Will Be Happy To Help</p>
                    <p className={homeCss.HelpingNote}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quo?</p>
                </div>
                <div className={homeCss.HomeHelpingCustomer}>
                    <div className={homeCss.HelpingCustomerSection}>
                        <div className={homeCss.HelpingCustomerInside1}>
                            <div className={homeCss.HelpingCall}>
                                <div className={homeCss.CallIcon}>
                                    <i className="fa-solid fa-headset HelpingIcon"></i>
                                </div>
                                <div className={homeCss.CallNumberAndNote}>
                                    <h3>Call us at <span style={{color:"#EB3349"}}>+91  938  140  0582</span> </h3>
                                    <p>Speak with one of our customer support executive</p>
                                </div>
                            </div>
                            <div className={homeCss.HelpingFaq}>
                                <div className={homeCss.FaqIcon}>
                                    <i className="fa-solid fa-file-circle-question HelpingIcon" ></i>
                                </div>
                                <div className={homeCss.FaqHeadAndNote}>
                                    <h3>View <span style={{color:"#EB3349"}}> FAQ’s </span></h3>
                                    <p>Find answers to frequently asked questions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={homeCss.HelpingCustomerSection}>
                        <div className={homeCss.HelpingCustomerInside2}>
                            <div className={homeCss.HelpingTitleHead}>
                                <p className={homeCss.HelpingTitle}>Want To Sell a scrap vehicle?</p>
                            </div>
                            <div className={homeCss.HelpingSell}>
                                <div className={homeCss.HelpingSellImage}>
                                    <img className={homeCss.HelpingSellImg} src='/metal.png' alt="" />
                                </div>
                                <div className={homeCss.HelpingSellInfo}>
                                    <button className={homeCss.HelpingSellButton}>Sell Scrap Vehicle</button>
                                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptates nisi nam, aliquid quae placeat eligendi accusantium maxime soluta deserunt qui enim, tempora reiciendis!</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home