import React from 'react';
import './Header.css'
import { GoSearch } from "react-icons/go";
import { RiAdminLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1>BOOKShop</h1>
                    <div className="header-input">
                        <input type="text" placeholder='Search here' />
                        <GoSearch className='search' />
                    </div>
                    <div className="header-admin-korzina">
                        <SlBasket />
                        <RiAdminLine />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;


