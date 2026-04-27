import React, { use } from 'react';
import Pcard from './Pcard';

const PricingCard = ({pricingCardPromise}) => {
    const cardItem = use(pricingCardPromise)
    const data = cardItem.plans
   
    
    return (
        <div>
            <div className='text-center mb-7 space-y-3'>
                <h2 className='text-2xl font-bold '>Simple, Transparent Pricing</h2>
                <p className='text-sm text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* card */}
            <div className=' grid md:grid-cols-1 lg:grid-cols-3 '>
                {
                    data.map(cardItems =>{
                        
                        return(
                            <Pcard key={cardItems.id} cardItems={cardItems}></Pcard>
                
                        )

                    })
                }
               
            </div>
        </div>
    );
};

export default PricingCard;