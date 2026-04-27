import React from 'react';

const Pcard = ({ cardItems }) => {
    const { name, description, price, billing, features,buttonText } = cardItems



    return (
        <div className='m-15 '>
            <div className=' space-y-3 bg-base-200 shadow-sm p-5 min-h-90 rounded-xl'>
                <div>
                    <h2 className='text-xl font-bold'>{name}</h2>
                    <p className='text-sm text-gray-500'>{description}</p>

                </div>
                <div>
                    <h2 className=''> <span className='text-xl font-bold'>{price}</span>/<span className='text-sm text-gray-500'>{billing}</span></h2>

                </div>
                <div>
                    <ul>
                        {
                            features.map((feature, index) =>
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>{feature} </span>
                                </li>)
                        }
                    </ul>
                </div>
                    <button className='btn w-full bg-blue-600 rounded-full text-white '>{buttonText}</button>


            </div>
        </div>
    );
};

export default Pcard;