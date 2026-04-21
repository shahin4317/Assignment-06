// import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Links from './Links';


const navbarItem = [
    { id: 1, name: "Products", path: "/products" },
    { id: 2, name: "Features", path: "/features" },
    { id: 3, name: "Pricing", path: "/pricing" },
    { id: 4, name: "Testimonials", path: "/testimonials" },
    { id: 5, name: "FAQ", path: "/faq" }
];

const Navbar = () => {
   
    const links = navbarItem.map(route => (<Links route={route} key={route.id}></Links>))
    return (
        <nav className='flex justify-between mx-10'>
            
            


        </nav>
    );
};

export default Navbar;