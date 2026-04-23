// import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Links from './Links';
import shaopingCart from '../assets/assets/products/shopping-cart.png'
import { useState } from 'react';

const navbarItem = [
    { id: 1, name: "Products", path: "/products" },
    { id: 2, name: "Features", path: "/features" },
    { id: 3, name: "Pricing", path: "/pricing" },
    { id: 4, name: "Testimonials", path: "/testimonials" },
    { id: 5, name: "FAQ", path: "/faq" }
];

const Navbar = () => {
    const [open, setopen] =useState([false])

    const links = navbarItem.map(route => (<Links route={route} key={route.id}></Links>))
    return (
        <nav className='flex p-5 justify-between  items-center shadow-md'>
            <span className='flex gap-4 items-center' onClick={() => setopen(!open)}>
                {
                    open ? <X className= 'md:hidden' ></X>:
                    <Menu className='md:hidden'></Menu>}

                    <ul className={`space-y-4 lg:hidden absolute duration-1000
                        ${open ? 'top-15': '-top-50' }`}>
                            {links}

                        </ul>
                        <h3 className='text-2xl text-blue-500 font-semibold'>DigiTools</h3>
                

            </span>
            <ul className='md:flex hidden gap-5'>
                {
                    links
                }
            </ul>

                <div className='flex gap-3 items-center'>
                    <p className='flex gap-2'> <img src={shaopingCart} alt="" />Login</p>
                    <button className='btn rounded-full bg-blue-600 text-white'>Get Start</button>
                </div>


        </nav>

    );
};

export default Navbar;