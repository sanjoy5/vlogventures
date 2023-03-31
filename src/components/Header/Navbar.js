import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="container">
                <div className="logo text-gradient">VlogVentures</div>
                <div className="user_img">
                    <img src="images/user.jpg" alt="" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar