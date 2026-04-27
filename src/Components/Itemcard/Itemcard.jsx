import React, { use, useState } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';
import Carts from '../Carts/Carts';

const Itemcard = ({ itemPromise, carts, setCarts }) => {
    const items = use(itemPromise)

    const [activeTag, setActiveTag] = useState('item')

    return (
        <div className=''>
            <div className='mb-20'>
                <div className='space-y-4 text-center'>
                    <h2 className='text-3xl font-bold mb-5'>Premium Digital Tools</h2>
                    <p className='text-sm text-gray-400'>Choose from our curated collection of premium digital products <br /> designedto boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center gap-4 pt-4'>
                    <button
                        onClick={() => setActiveTag('item')}
                        className={`btn rounded-full ${activeTag === 'item' ? 'bg-blue-500 text-white' : ''}`}
                    >
                        Products
                    </button>

                    <button
                        onClick={() => setActiveTag('carts')}
                        className={`btn rounded-full ${activeTag === 'carts' ? 'bg-blue-500 text-white' : ''}`}
                    >
                        Cart
                    </button>
                </div>
            </div>
            {/* daynamic contant */}
            <div>

                {/* <AvailableProducts carts={carts} setCarts={setCarts} items={items}></AvailableProducts>

                    <Carts carts={carts}></Carts>
                 */}
                {
                    activeTag == 'item' ? (<AvailableProducts carts={carts} setCarts={setCarts} items={items}></AvailableProducts>) : (<Carts carts={carts} setCarts={setCarts}></Carts>)
                }




            </div>

        </div>
    );
};

export default Itemcard;