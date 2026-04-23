import React from 'react';

const PremiumToolsSection = () => {
    return (
        <div className=''>
            <div className='space-y-4 text-center'>
                <h2 className='text-3xl font-bold'>Premium Digital Tools</h2>
                <p className='text-sm text-gray-400'>Choose from our curated collection of premium digital products <br /> designedto boost your productivity and creativity.</p>
            </div>
            <div className='flex justify-center gap-4 pt-4'>
                <button className='btn bg-blue-600 rounded-full text-white '>Products</button>
                <button className='btn rounded-full border-blue-500'>Cart</button>

            </div>

        </div>
        
    );
};

export default PremiumToolsSection;