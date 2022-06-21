import React from 'react'
import navCss from '../styles/Navbar.module.css'

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
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className={navCss.SearchNav}>
                        <input className={navCss.Search} type="search" placeholder="Search" aria-label="Search" />
                        <i class="fa-solid fa-magnifying-glass my-auto mx-3"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Buy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sell</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Scrap</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                        <form className={navCss.Login}>
                            <button type="button" class={navCss.btnLogIn}>Log in <small><i class="fa-solid fa-chevron-right"></i></small> </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar