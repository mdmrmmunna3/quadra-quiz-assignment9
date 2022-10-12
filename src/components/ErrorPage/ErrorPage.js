import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col min-h-[400px] justify-center items-center '>
                <h1 className='text-2xl'>Ops! An Error Ocurred! </h1>
                <p><span>404 Not Found</span></p>
                <Link to='/'><p className='text-blue-500'>Please Go to the Home Page!</p></Link>
            </div>
        </div>
    );
};

export default ErrorPage;