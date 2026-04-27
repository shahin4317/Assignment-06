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

const Navbar = ({ carts }) => {
    const [open, setopen] = useState([false])

    const links = navbarItem.map(route => (<Links route={route} key={route.id}></Links>))
    return (
        <nav className='flex p-5 justify-between  items-center shadow-md'>
            <span className='flex gap-4 items-center' onClick={() => setopen(!open)}>
                {
                    open ? <X className='md:hidden' ></X> :
                        <Menu className='md:hidden'></Menu>}

                <ul className={`space-y-4 lg:hidden absolute duration-1000
                        ${open ? 'top-15' : '-top-50'}`}>
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
                <div className="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                    <span className="badge badge-sm indicator-item">{carts.length}</span>
                </div>
                <button className='btn rounded-full bg-blue-600 text-white'>Get Start</button>
            </div>


        </nav>

    );
};

export default Navbar;