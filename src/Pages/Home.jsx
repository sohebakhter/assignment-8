import React from 'react';
import playStore from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'
import hero from '../assets/hero.png'
import useApps from '../Hooks/useApps';
import { Link } from 'react-router';
import AppCard from '../Components/AppCard';
import Loader from '../Components/Loader';

const Home = () => {
    const { apps, loader } = useApps();
    const slicedApps = apps.slice(0, 8);
    //-----------------------------------------

    return (
        <div>
            <div>
                <h1 className='font-bold text-7xl text-center mt-10'>We Build <br /> <span className='text-[#632EE3] '>Productive</span> Apps</h1>
                <p className='text-gray-500 text-center mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className=' flex justify-center items-center gap-4 mt-10'>
                    <Link to='https://play.google.com/'>
                        <button className='btn '>
                            <img src={playStore} alt="" />
                            Google Play
                        </button>
                    </Link>
                    <Link to='https://www.apple.com/app-store/'>
                        <button className='btn'>
                            <img src={appStore} alt="" />
                            App Store
                        </button>
                    </Link>
                </div>
            </div>

            <div className='flex justify-center items-center mt-10'>
                <img src={hero} alt="" />
            </div>

            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-center p-3 md:p-20'>
                <h1 className='font-bold text-4xl'>Trusted by Millions, Built for You</h1>
                <div className='max-w-[1440px] mx-auto flex justify-evenly items-center mt-3 md:mt-10'>
                    <div className='md:space-y-4'>
                        <p>Total Downloads</p>
                        <h1 className='font-bold text-3xl md:text-5xl'>29.9M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='md:space-y-4'>
                        <p>Total Reviews</p>
                        <h1 className='font-bold text-3xl md:text-5xl'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='md:space-y-4'>
                        <p>Active Apps</p>
                        <h1 className='font-bold text-3xl md:text-5xl'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
            {/* ---------------------------------------data load */}
            <div className='mt-10'>
                <h1 className='text-center font-bold text-4xl'>Trending Apps</h1>
                <p className='text-center mt-4'>Explore All Trending Apps on the Market developed by us</p>

                {loader ? <Loader></Loader> :
                    <div className='mt-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {
                            slicedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                        }
                    </div>
                }

                <Link to='/allapps'>
                    <button className='btn btn-ghost block mx-auto mt-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Show All</button>
                </Link>

            </div>
        </div>
    );
};

export default Home;