import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import down from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import AppsChart from '../Components/AppsChart';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../Components/Loader';
import AppError from '../Components/AppError';

const AppDetails = () => {
    const { id } = useParams();
    const { apps, loader } = useApps();
    const [isInstall, setIsInstall] = useState(false);

    const app = apps.find(a => a.id === Number(id));
    const { image, title, companyName, downloads, ratingAvg, reviews, size, description } = app || {};

    //  if app already installed (ex)
    useEffect(() => {
        const existingList = JSON.parse(localStorage.getItem('install')) || [];
        const isAlreadyInstalled = existingList.some(a => a.id === Number(id));
        setIsInstall(isAlreadyInstalled);
    }, [id]);

    //  Add app to localStorage
    const handleAddToInstall = () => {
        if (!app) {
            toast.error('App data not found!');
            return;
        }

        const existingList = JSON.parse(localStorage.getItem('install')) || [];
        const isDuplicate = existingList.some(a => a.id === app.id);

        if (isDuplicate) {
            toast.warn('Already Installed!');
            return;
        }

        const updatedList = [...existingList, app];
        localStorage.setItem('install', JSON.stringify(updatedList));
        toast.success('App Installed Successfully!');
        setIsInstall(true);
    };

    if (loader) return <Loader />;
    if (!app) return <AppError></AppError>;

    return (
        <div className="max-w-[1440px] mx-auto mt-5 md:mt-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <img className="w-[350px]" src={image} alt={title} />
                <div>
                    <h1 className="font-bold text-3xl">{title}</h1>
                    <p className="py-5">
                        Developed by <span className="text-purple-700 font-semibold">{companyName}</span>
                    </p>

                    <div className="flex gap-6 py-8">
                        <div>
                            <img src={down} alt="downloads" />
                            <p>Downloads</p>
                            <h1 className="font-bold text-4xl">{downloads}M</h1>
                        </div>
                        <div>
                            <img src={rating} alt="rating" />
                            <p>Average Ratings</p>
                            <h1 className="font-bold text-4xl">{ratingAvg}</h1>
                        </div>
                        <div>
                            <img src={review} alt="reviews" />
                            <p>Total Reviews</p>
                            <h1 className="font-bold text-4xl">{reviews}K</h1>
                        </div>
                    </div>

                    <button
                        onClick={handleAddToInstall}
                        disabled={isInstall}
                        className={`btn btn-ghost text-white ${isInstall ? 'bg-gray-400' : 'bg-[#00D390]'}`}
                    >
                        {!isInstall ? `Install Now (${size}MB)` : 'Installed'}
                    </button>
                </div>
            </div>

            {/* Chart */}
            <div className="mt-10">{loader ? <Loader /> : <AppsChart />}</div>

            <div>
                <h1 className="font-bold text-3xl mt-10">Description</h1>
                <p className="mt-4 text-gray-500 text-lg">{description}</p>
            </div>

            <ToastContainer position="top-center" />
        </div>
    );
};

export default AppDetails;
