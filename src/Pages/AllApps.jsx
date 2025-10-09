import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../Components/AppCard';
import AppError from '../Components/AppError';
import Loader from '../Components/Loader';

const AllApps = () => {
    const { apps, loader } = useApps();
    const [search, setSearch] = useState('');
    const [loaded, setLoaded] = useState(false);
    const term = search.trim().toLocaleLowerCase()

    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps;


    const handleLoader = (e) => {
        setLoaded(true)
        setSearch(e.target.value);
        setTimeout(() => {
            setLoaded(false);
        }, 500);
    }

    if (loader) return <Loader></Loader>;
    if (searchedApps.length === 0) return <AppError></AppError>;

    return (
        <div>
            <div className='mt-5 md:mt-20 text-center'>
                <h1 className='font-bold text-3xl md:text-5xl'>Our All Applications</h1>
                <p className='mt-4 text-lg text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='max-w-[1440px] mx-auto mt-10 md:flex justify-between items-center'>
                <h1 className='font-semibold text-2xl'>({searchedApps.length})Apps Found</h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>

                    <input value={search} onChange={handleLoader} type="search" placeholder="Search" />
                </label>
            </div>
            {loaded ? <Loader></Loader> :
                <div className='mt-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        searchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
            }

        </div>
    );
};

export default AllApps;