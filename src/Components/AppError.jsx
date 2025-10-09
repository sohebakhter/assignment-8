import React from 'react';
import appError from '../assets/App-Error.png'
import useApps from '../Hooks/useApps';
import Loader from './Loader';

const AppError = () => {

    const { loader } = useApps();

    if (loader) {
        return <Loader></Loader>;
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img src={appError} alt="" />
            <h1 className='font-semibold text-5xl mt-10'>OPPS!! APP NOT FOUND</h1>
            <p className='text-xl text-gray-400 mt-3'>The App you are requesting is not found on our system.  please try another apps</p>

            <a href="/allapps">
                <button className='btn btn-ghost block mx-auto mt-5 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</button>
            </a>

        </div>
    );
};

export default AppError;