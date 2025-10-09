import React from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Loader from '../Components/Loader';

const RootLayout = () => {

    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location);


    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            {isNavigation && <Loader></Loader>}
            <div className=' flex-1'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;