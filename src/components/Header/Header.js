import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
                <Link to='/'><img className='h-14 w-14 rounded' src={logo} alt="" /></Link>
                <Link to='/'><h3 className='lg:text-3xl lg:ml-4 font-bold'>Quadra-Quiz-Contest</h3></Link>
            </div>

            <ul className={`sm:flex justify-center  items-center absolute ml-7 duration-500 ease-in sm:static rounded list-container ${open ? 'top-6' : 'top-[-120px]'}`}>
                <li className='link'>
                    <NavLink to="/home" className={({isActive}) => isActive ? 'active' : undefined}>Home</NavLink>
                </li>
                <li className='link'>
                    <NavLink to="/topics">Topics</NavLink>
                </li>

                <li className='link'>
                    <NavLink to="/statistics">Statistics</NavLink>
                </li>

                <li className='link'>
                    <NavLink to="/blog">Blog</NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default Header;