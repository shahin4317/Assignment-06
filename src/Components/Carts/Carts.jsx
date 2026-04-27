import React from 'react';

const Carts = ({carts}) => {
    if(Carts.length ==0 ){
        return(
            <div>
                <h1>No item is here</h1>
            </div>
        )
    }
    return (
        <div>
            {
                carts.map(cart =>{
                    <div>
                        <h1>{cart.name}</h1>
                    </div>
                })
            }
        </div>
    );
};

export default Carts;