import React from 'react';
import accountpic from "../../assets/assets/products/user.png"
import ProductImg from "../../assets/assets/products/package.png"
import rocketImg from "../../assets/assets/products/rocket.png"
const DigitalTools = () => {
    return (
        <div>
           
            <div className='text-center'>
                <h1 className='text-3xl font-bold '>Get Started in 3 Steps</h1>
                <p className='text-sm text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
            </div>



      
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 m-20 p-10'>
                <div className='relative card bg-base-200 shadow-sm space-y-5 p-5 items-center'>
                    <span className='absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full'>
                        1
                    </span>
                    <div className='pt-15'>
                        <img className='' src={accountpic} alt="" />
                    </div>
                    <div className='space-y-2'>

                        <h2 className='text-xl font-semibold text-center'>Create Account</h2>
                        <p className='text-sm text-center text-gray-500 mb-10'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                </div>
                <div className='card bg-base-200 shadow-sm space-y-5 p-5 items-center'>
                    <span className='absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full'>
                        2
                    </span>

                    <div className='pt-15'>
                        <img className='' src={ProductImg} alt="" />
                    </div>
                    <div className='space-y-2'>

                        <h2 className='text-xl font-semibold text-center'>Choose Products</h2>
                        <p className='text-sm text-center text-gray-500  mb-10'>Browse our catalog and select the tools <br />  that fit your needs.</p>
                    </div>
                </div>
                <div className='card bg-base-200 shadow-sm space-y-5 p-5 items-center'>
                    <span className='absolute top-3 right-3 bg-blue-600 text-white text-sm px-3 py-1 rounded-full'>
                        3
                    </span>

                    <div className='pt-15'>
                        <img className='' src={rocketImg} alt="" />
                    </div>
                    <div className='space-y-2'>

                        <h2 className='text-xl font-semibold text-center'>Start Creating</h2>
                        <p className='text-sm text-center text-gray-500 mb-10'>Download and start using your premium <br />   tools immediately.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DigitalTools;