import React from 'react';

const Pcard = ({cardItems}) => {
    
    
    return (
        <div>
            <div>
                <h2>{cardItems.name}</h2>
                <p>{cardItems.description}</p>
            </div>
        </div>
    );
};

export default Pcard;