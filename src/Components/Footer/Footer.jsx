
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
                    <div className='flex gap-3 sm:ml-30 lg:ml-20'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>

                    </div>
                </div>
            </div>
         
            <br />

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