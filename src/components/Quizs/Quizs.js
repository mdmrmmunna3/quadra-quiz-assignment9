import React from 'react';
import { Link } from 'react-router-dom';
import './Quizs.css';

const Quizs = ({ quiz }) => {

    const { id, name, logo, total } = quiz;
    return (
        <div>
            <div className='mt-7 mb-3 p-2 sm:w-full rounded border-gray-200 shadow-md'>
                <img className='sm:h-44 h-17 w-full rounded-md' style={{ backgroundColor: '#2c3e50' }}  src={logo} alt="" />
                <div className='flex justify-between mt-2 font-semibold text-cyan-600'>
                    <h2>{name}</h2>
                    <p>Total: {total}</p>
                </div>
                {
                    <Link to={`/quiz/${id}`}>
                        <button className='mt-4 text-white font-bold w-full py-2 rounded btn-color' >Start Quiz </button>
                    </Link>

                }
            </div>
        </div>
    );
};

export default Quizs;