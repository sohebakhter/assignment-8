import React from 'react';
import logo from '../assets/logo.png'

const Loader = () => {
    return (
        <div className='flex justify-center items-center mt-10'>
            <div className='flex'>
                <span className='font-bold text-6xl'>L</span>
                <img className='w-20 h-20 animate-[spin_1s_linear_infinite]' src={logo} alt="" />
                <span className='font-bold text-6xl'>oading</span>
            </div>
        </div>
    );
};

export default Loader;