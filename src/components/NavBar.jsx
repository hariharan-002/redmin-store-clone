import React, { useState } from 'react';
import logo from '../components/Asset/xiomi.png';
import { FaBars, FaSearch, FaShoppingCart, FaUser, } from 'react-icons/fa';
import '../App.css';
import cart2 from '../components/Asset/cart2.jpg'
import cart14 from '../components/Asset/cart14.jpg'

export const NavBar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className={`navigation ${navOpen ? 'open' : ''}`}>
            <div className='nav-container'>
                <div className='nav-header'>
                    <img src={logo} alt='Xiomi Logo' className='xiomi-logo' />

                    <FaBars className='menu-icon' onClick={toggleNav} />
                </div>
                <ul className={`nav-menu ${navOpen ? 'open' : ''}`}>
                    <li className='nav-item'  active color='orange'>Store</li>
                    <li className='nav-item dropdown'>
                        <button className="dropbtn">Phone</button>
                        <div className={`dropdown-content ${navOpen ? 'open' : ''}`} >
                            <div className='hari'>
                                <h1 href="#">XIOMI </h1>
                                <h1 className='bar'>|</h1>
                                <h1 href="#">Red MI</h1>
                            </div>

                        </div>
                    </li>
                    <li className='nav-item dropdown'>
                        <button className="dropbtn">TV & Smart Home</button>
                        <div className={`dropdown-content-1 ${navOpen ? 'open' : ''}`}>
                        <img src={cart2}  style={{marginLeft:'180px',height:'100px'}}/>
                        
                        <img src={cart14}  style={{marginLeft:'180px',height:'100px'}}/>
                        </div>
                    </li>
                    <li className='nav-item dropdown'>
                        <button className="dropbtn">Tablet</button>
                        <div className={`dropdown-content-2 ${navOpen ? 'open' : ''}`}>
                            <a href="#">Product 1</a>
                            <a href="#">Product 2</a>
                            <a href="#">Product 3</a>
                        </div>
                    </li>
                    <li className='nav-item dropdown'>
                        <button className="dropbtn">Lifestyle</button>
                        <div className={`dropdown-content-3 ${navOpen ? 'open' : ''}`}>
                            <a href="#">Product 1</a>
                            <a href="#">Product 2</a>
                            <a href="#">Product 3</a>
                        </div>
                    </li>
                    <li className='nav-item'>Discover</li>
                    <li className='nav-item'>Support</li>
                    <div className='icon'>
                        <li className='nav-item'><FaSearch /></li>
                        <li className='nav-item'><FaShoppingCart /></li>
                        <li className='nav-item'><FaUser /></li>
                    </div>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
