import React from 'react';

const Carts = ({ carts }) => {
    const total = carts.reduce((sum, cart) => sum + cart.price, 0)


    if (carts.length == 0) {
        return (
            <div>
                <h1>No item is Here</h1>
            </div>
        )
    }
    return (
        <div className='mx-15 space-y-5 '>
            <p className='text-center'>Yor cart is here</p>
            {
                carts.map(cart => (
                    <div key={carts.id}>
                        <div className='space-y-3 p-5 flex flex-col bg-base-200 shadow-2xl'>
                            <h1>{cart.name}</h1>
                            <span>{cart.description}</span>
                        </div>
                    </div>


                )

                )
            }

            <div className='mb-10'>
                <h1 className='text-3xl font-bold'>all sum ${total} </h1>
            </div>
        </div>
    );
};

export default Carts;