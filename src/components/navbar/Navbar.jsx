import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';

function Navbar() {

    const [menu, setMenu] = useState("shop");


    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <p>Shoffy</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link className='text-link' to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link className='text-link' to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link className='text-link' to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link className='text-link' to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'> <img src={cart} alt="cart icon" /></Link>

                <div className='nav-cart-count'>0</div>
            </div>
        </div>
    )
}

export default Navbar