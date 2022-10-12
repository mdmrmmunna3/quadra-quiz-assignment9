import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='flex justify-center'>
                <div className=' mb-5 bg-fuchsia-600'>
                    <p className=''>{option}</p>
                </div>
        </div>
    );
};

export default Option;