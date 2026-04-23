import React from 'react';

const Rating = () => {
    return (
        <div className='flex  bg-blue-600 gap-40 justify-center p-15 mb-10'>
            <div>
                <h3 className='text-3xl font-bold text-white'>50K+</h3>
                <p className='text-sm text-white'>Active Users  </p>
            </div>
            <div>
                <h3 className='text-3xl font-bold text-white'>200+</h3>
                <p className='text-sm text-white'>Premium Tools</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold text-white'>4.9</h3>
                <p className='text-sm text-white'>Rating</p>
                
            </div>
            
        </div>
    );
};

export default Rating;