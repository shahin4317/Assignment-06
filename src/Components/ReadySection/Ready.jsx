import React from 'react';

const Ready = () => {
    return (
        <div className='bg-blue-600'>
            <div className='text-center p-6  pt-20 space-y-5'>
                <div className='space-y-3'>
                    <h1 className='text-3xl text-white font-bold'>Ready to Transform Your Workflow?</h1>
                    <p className='text-sm text-gray-400'>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>

                </div>
                <div className='space-x-4 '>
                    <button className='btn rounded-full text-blue-600'>Explore Products</button>
                    <button className='btn rounded-full bg-blue-500 text-white'>View Pricing</button>
                    <div className='pt-3  mb-10'>
                        <p className='text-sm text-gray-400'>14-day free trial • No credit card required • Cancel anytime</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Ready;