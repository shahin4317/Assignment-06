import React from 'react';
import Features from '../Features/Features';


const Card = ({ item ,carts, setCarts }) => {
    const { name, description, price, period, icon, tagType,features } = item

    const addToCart = (item)=>{
        
        
        setCarts([...carts,item])
        console.log(item);
    }
    return (
        <div className="card bg-base-100 shadow-sm space-y-5 p-10">
            <div className='absolute top-3 right-3 bg-blue-400 text-white text-sm px-3 py-1 rounded-full'>
                <h2 className=''>{tagType}</h2>
            </div>
            <div>
                <img src={icon} alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-sm text-gray-600'>{description}</p>
                <h3> <span className='text-2xl font-bold'>{price}</span> / <span className='text-sm text-gray-600'>{period}</span></h3>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {
                        features.map((feature ,index)=> <li key={index}>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            
                            <span>{feature} </span>
                        </li>)
                    }

                </ul>
            </div>
            {/*  */}
            <button onClick={() =>addToCart(item)} className='btn btn-primary rounded-full'>Buy Now</button>
        </div>
    );
};

export default Card;