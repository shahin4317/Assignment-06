
import React from 'react';

const Ready = () => {
    return (
        <div className='bg-blue-600'>
            <div className='text-center px-4 py-10 md:py-16 lg:py-20 space-y-5'>

                <div className='space-y-3'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-bold'>
                        Ready to Transform Your Workflow?
                    </h1>

                    <p className='text-xs md:text-sm text-gray-300'>
                        Join thousands of professionals who are already using Digitools to work smarter. <br />
                        Start your free trial today.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-3 justify-center items-center'>
                    <button className='btn w-full md:w-auto rounded-full text-blue-600'>
                        Explore Products
                    </button>

                    <button className='btn w-full md:w-auto rounded-full bg-blue-500 text-white'>
                        View Pricing
                    </button>
                </div>

                <div className='pt-3'>
                    <p className='text-xs md:text-sm text-gray-300'>
                        14-day free trial • No credit card required • Cancel anytime
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Ready;