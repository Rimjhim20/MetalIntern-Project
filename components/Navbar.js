import React from 'react'
import navCss from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    // let location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
                <div className="container-fluid">
                    <div className="branding">
                        <a className="navbar-brand" href="#">
                            <img src='/Metal_Station_Logo.png' alt="" style={{ height: '50px' }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className={navCss.SearchNav}>
                        <input className={navCss.Search} type="search" placeholder="Search" aria-label="Search" />
                        <i className="fa-solid fa-magnifying-glass my-auto mx-3"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"
                                 href="/buy"><a>Buy</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="/product">
                                    <a>Sell </a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><a>Scrap</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><a>Blog</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#"><a>About Us</a></Link>
                            </li>
                        </ul>
                        <form className={navCss.Login}>
                            <button type="button" className={navCss.btnLogIn}>Log in <small>
                                <i className="fa-solid fa-chevron-right"></i></small> </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar