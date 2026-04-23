import React from 'react';
import BannerImg from '../../assets/assets/products/banner.png';

const Banner = () => {
    return (
        <div className='px-4 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row items-center pt-10 lg:pt-20 mb-10 gap-10'>
            
            {/* right side (text) */}
            <div className='w-full  space-y-4 text-center lg:text-left'>
                <p className='text-blue-600 text-sm rounded-full'>
                    New: AI-Powered Tools Available
                </p>

                <h1 className='text-4xl  font-extrabold'>
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className='text-gray-500 text-sm '>
                    Access premium AI tools, design assets, templates, and productivity <br />software—all in one place. Start creating faster today. <br />Explore Products


                </p>

                <div className='flex gap-3 justify-center lg:justify-start'>
                    <button className='btn bg-blue-600 rounded-full text-white'>
                        Explore
                    </button>
                    <button className='btn border-blue-600 rounded-full'>
                        Watch now
                    </button>
                </div>
            </div>
            {/* left side (image) */}
            <div className='w-full lg:w-1/2 flex justify-center'>
                <img src={BannerImg} alt="" className='w-full max-w-xl lg:max-w-full'/>
            </div>
        </div>
    );
};

export default Banner;