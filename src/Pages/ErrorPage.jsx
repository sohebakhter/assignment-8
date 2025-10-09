import React from 'react';
import errorPage404 from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img src={errorPage404} alt="" />
            <h1 className='font-semibold text-5xl mt-10'>Oops, page not found!</h1>
            <p className='text-xl text-gray-400 mt-3'>The page you are looking for is not available.</p>
            <Link to='/'>
                <button className='btn btn-ghost block mx-auto mt-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;