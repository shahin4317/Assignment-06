
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 text-white text-center'>
            

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4 sm:px-6 md:px-10 lg:px-16 py-10 '>
                
                {/* Logo */}
                <div className='space-y-5'>
                    <h2 className='text-2xl md:text-3xl font-bold'>DigiTools</h2>
                    <p className='text-sm text-gray-400'>
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                {/* Product */}
                <div className='space-y-3'>
                    <p className='text-lg font-semibold'>Product</p>
                    <p className='text-sm text-gray-400'>Features</p>
                    <p className='text-sm text-gray-400'>Pricing</p>
                    <p className='text-sm text-gray-400'>Templates</p>
                    <p className='text-sm text-gray-400'>Integrations</p>
                </div>


                <div className='space-y-3'>
                    <p className='text-lg font-semibold'>Link</p>
                    <p className='text-sm text-gray-400'>Blog</p>
                    <p className='text-sm text-gray-400'>Careers</p>
                    <p className='text-sm text-gray-400'>Press</p>
                </div>

   
                <div className='space-y-3'>
                    <p className='text-lg font-semibold'>Resources</p>
                    <p className='text-sm text-gray-400'>Documentation</p>
                    <p className='text-sm text-gray-400'>Help Center</p>
                    <p className='text-sm text-gray-400'>Community</p>
                    <p className='text-sm text-gray-400'>Contact</p>
                </div>

                <div className='space-y-3'>
                    <p className='text-lg font-semibold'>Social Links</p>
                    <div className='flex gap-3'>
                       
                    </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 px-4 sm:px-6 md:px-10 lg:px-16 pb-6 gap-3'>
                <p>© 2026 Digitools. All rights reserved.</p>

                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;