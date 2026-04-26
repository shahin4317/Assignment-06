import React, { use, useState } from 'react';
import AvailableProducts from '../AvailableProducts/AvailableProducts';

const Itemcard = ({ itemPromise }) => {
    const items = use(itemPromise)

    const [selectedType, setSelectedType] = useState(["avilable"])

    return (
        <div className=''>
            <div className='mb-20'>
                <div className='space-y-4 text-center'>
                    <h2 className='text-3xl font-bold mb-5'>Premium Digital Tools</h2>
                    <p className='text-sm text-gray-400'>Choose from our curated collection of premium digital products <br /> designedto boost your productivity and creativity.</p>
                </div>
                <div className='flex justify-center gap-4 pt-4'>
                    <button
                        onClick={() => setSelectedType("available")}
                        className={`btn ${selectedType === "available" ? "bg-blue-600 rounded-full text-white" : "btn border-blue-600 rounded-full"} mr-3`}>Products</button>

                    <button
                        onClick={() => setSelectedType("Selected")}
                        className={`btn ${selectedType === "Selected" ? "bg-blue-600 rounded-full text-white" : "btn rounded-full border-blue-600 "}`}>Card</button>
                </div>
            </div>
            {
                <AvailableProducts items={items}></AvailableProducts>
            }
        </div>
    );
};

export default Itemcard;