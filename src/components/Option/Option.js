import React from 'react';

const Option = ({ option }) => {
    return (
        <div className='flex justify-center '>
            <div className='w-3/4 md:w-3/4 lg:w-2/4 mb-5 py-2 rounded-lg' style={{ backgroundColor: '#0F3443' }}>
                <p className='text-center text-white font-semibold'>{option}</p>
            </div>
        </div>
    );
};

export default Option;