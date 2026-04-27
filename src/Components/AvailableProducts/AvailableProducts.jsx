import React from 'react';
import Card from '../Card/Card';

const AvailableProducts = ({items, carts,setCarts}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-20 '>
            {
                items.map((item, ind)=>{
                    return(
                     <Card carts={carts} setCarts={setCarts} item={item} key={ind}></Card>
                    )
                })
            }
        </div>
    );
};

export default AvailableProducts;