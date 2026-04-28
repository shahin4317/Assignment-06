import React from 'react';

const Rating = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-center bg-blue-500 gap-6 sm:gap-10 md:gap-20 px-4 py-10 sm:py-12 md:py-16 mb-10 text-center'>
            
            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>50K+</h3>
                <p className='text-sm text-white'>Active Users</p>
            </div>

            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>200+</h3>
                <p className='text-sm text-white'>Premium Tools</p>
            </div>

            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white'>4.9</h3>
                <p className='text-sm text-white'>Rating </p>
            </div>

        </div>
    );
};

export default Rating;