import React from 'react';
import { Link } from 'react-router-dom';

// ai means inside the ant design icons
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import './header.css';

export const Header = () => {
    return (
        <header>

            <div className='header-container'>
                <div className='logo'>
                    <Link to ="/">
                    <img src="./images/instagram_logo.png" />
                    </Link>
                </div>
                <div className='search-bar'>
                    <div className='search'>
                    <input type="text" placeholder='search' />
                    <AiOutlineSearch className='search-icon'/>
                    </div>
                </div>

                <div className='nav'>
                        <AiOutlineSearch size={28} className='search-icon-nav'/>
                        <Link to="/"><AiOutlineHome size={28} /></Link>
                        <Link to="/Chandan536"><AiOutlineUser size={28} /></Link>
                    </div>
            </div>
        </header>
    )
}