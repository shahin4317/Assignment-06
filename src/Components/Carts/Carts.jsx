import React from 'react';

const Carts = ({ carts, setCarts }) => {
    const total = carts.reduce((sum, cart) => sum + cart.price, 0)

    const removedCartItem = (id) => {
        const filterCart = carts.filter(cart => cart.id != id)
        setCarts(filterCart)
    }


    if (carts.length == 0) {
        return (
            <div className='text-center mb-15 bg-base-200 p-10 shadow-md m-15'>
                <h1 className='text-2xl font-bold'>No item is Here</h1>
                <p className='text-sm  text-gray-400'>Please select a item</p>
            </div>
        )
    }
    return (
        <div className='mx-15 space-y-5 bg-base-200 p-8 '>
            <p className='font-bold'>Yor cart is here</p>
            {
                carts.map(cart => (
                    <div key={carts.id} className='flex justify-between bg-base-200 shadow-xl'>

                        <div className='space-y-3 p-5 flex flex-col '>
                            <h1 className='font-semibold'>{cart.name}</h1>
                            <span className='text-sm font-semibold'>Price: {cart.price}</span>
                        </div>
                        <div>
                            <button onClick={() => removedCartItem(cart.id)} className='text-red-600 p-8'>remove</button>
                        </div>
                    </div>



                )

                )
            }

            <div className='mb-10 flex justify-between'>
                <h1 className='font-bold'>Total:</h1>
                <p>{total} </p>
            </div>
            <button className='btn rounded-full bg-blue-500 w-full text-white'>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;