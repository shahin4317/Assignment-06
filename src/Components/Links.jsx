import React from 'react';

const Links = ({ route }) => {
    return (
        <div>
            <li className='mr-10 hover:bg-green-500'>
                <a href={route.path}>{route.name}</a>
            </li>


        </div>
    );
};

export default Links;