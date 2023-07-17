import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import './Nav.css';
import logo from '../../image/white-logo.png'

function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logOut = (e) => {
        e.preventDefault();
        Cookies.remove('token');
        window.location.href = '/login'
    }

    return (
            <nav>
                <div className='logo'>
                <i className={`fa-solid fa-bars mobile mobile-bar ps-3 fs-4 ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}></i>
                    <img className='logo-img' src={logo} alt='Logo'></img>
                    <i className='pe-4'></i>
                </div>
                
                    {isMenuOpen && (
                        <ul className='mobile open'>
                            <li><Link className='a' to={'/'}>Shop</Link></li>
                            <li><Link className='a' to={'/intro'}>Giới thiệu</Link></li>
                            <li><Link className='a' to={'/shipping'}>Giao hàng</Link></li>
                            <li><Link className='a' to={'/cart'}>Giỏ hàng</Link></li>
                        </ul>
                    )}
                
                <ul className='desktop'>
                    <li><Link className='a' to={'/'}>Shop</Link></li>
                    <li><Link className='a' to={'/intro'}>Giới thiệu</Link></li>
                    <li><Link className='a' to={'/shipping'}>Giao hàng</Link></li>
                    <li><Link className='a' to={'/cart'}>Giỏ hàng</Link></li>
                    <li><a className='a' onClick={(e) => logOut(e)}>Đăng xuất</a></li>
                </ul>
            </nav>
    )
}

export default Nav