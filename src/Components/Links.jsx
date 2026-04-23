import React from 'react';

const Links = ({ route }) => {
    return (
        <div>
            <li className=' hover:bg-blue-600'>
                <a href={route.path}>{route.name}</a>
            </li>


        </div>
    );
};

export default Links;