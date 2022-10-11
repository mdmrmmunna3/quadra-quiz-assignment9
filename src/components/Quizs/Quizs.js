import React from 'react';
import { Link } from 'react-router-dom';

const Quizs = ({ quizData }) => {

    const { id, name, logo, total } = quizData;
    return (
        <div>
            <div className='mt-7 p-2 sm:w-full rounded border-gray-200 shadow-md'>
                <img className='sm:h-44 h-17 w-full rounded-md'  src={logo} alt="" />
                <div className='flex justify-between mt-2 font-semibold text-cyan-600'>
                    <h2>{name}</h2>
                    <p>Total: {total}</p>
                </div>
                {/* {
                    <Link >
                        <button className='mt-4 text-white font-bold w-full py-2 rounded' >Start Practice</button>
                    </Link>

                } */}
            </div>
        </div>
    );
};

export default Quizs;