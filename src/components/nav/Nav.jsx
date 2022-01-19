import React from 'react'
import hotelLogo from '../../assets/hotels.png'
// import './Nav.css'

const Nav = () => {
    return (
        // 與react本身的js衝突所以沒有效果
        // 就導入react bootstrap 重構吧
        <header className="header-nav">
            <nav class="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src={hotelLogo} alt="hotel logo" />Hotels
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collpse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Contact</a>
                            </li>
                        </ul>
                        <a href="#booking" class="ml-3 book btn btn-primary btn-style">Book Now</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav
