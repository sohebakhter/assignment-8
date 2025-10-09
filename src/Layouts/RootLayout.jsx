import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            <div className=' flex-1'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;