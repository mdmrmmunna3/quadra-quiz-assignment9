import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imges/quiz.png';
import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 nav-container text-white'>
            <div className='flex justify-center items-center'>
                <img className='w-14 h-14 rounded' src={logo} alt="" />
                <h3 className='text-3xl ml-3 font-bold'>Quadra-Quiz</h3>
            </div>
            <div className='link'>
                <Link to="/">Home</Link>
                <Link to="/topics">Topics</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </div>
    );
};

export default Header;