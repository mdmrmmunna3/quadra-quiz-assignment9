import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imges/quiz.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex justify-between items-center p-4 nav-container text-white'>
            <div onClick={() => setOpen(!open)} className='h-6 w-6 sm:hidden'>
                {
                    open ?
                        <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            <div className='flex justify-center items-center'>
                <img className='h-14 w-14 rounded' src={logo} alt="" />
                <h3 className='lg:text-3xl lg:ml-6 font-bold'>Quadra-Quiz-Contest</h3>
            </div>

            <ul className={`sm:flex justify-center  items-center absolute ml-7 duration-500 ease-in sm:static rounded list-container ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className='link'>
                    <Link to="/">Home</Link>
                </li>

                <li className='link'>
                    <Link to="/topics">Topics</Link>
                </li>

                <li className='link'>
                    <Link to="/statistics">Statistics</Link>
                </li>

                <li className='link'>
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>

        </nav>
    );
};

export default Header;