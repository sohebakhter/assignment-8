import React, { useEffect, useState } from 'react';
import { GoDownload } from 'react-icons/go';
import { FaStar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import useApps from '../Hooks/useApps';
import Loader from '../Components/Loader';


const InstalledApp = () => {
    const { loader } = useApps();
    //এটাই local add হলে সেই local data এখানে দেখানো হবে। (get from local storage)
    const [installed, setInstalled] = useState([]);
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('install'))
        if (savedList) setInstalled(savedList);
    }, [])

    const sortedItem = (() => {
        if (sortOrder === 'downloads-asc') {
            return [...installed].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'downloads-desc') {
            return [...installed].sort((a, b) => b.downloads - a.downloads)
        } else {
            return installed
        }
    }
    )()

    //local storage remove here
    const handleRemove = (id) => {
        const existingList = JSON.parse(localStorage.getItem('install'))
        const updatedList = existingList.filter(app => app.id !== id)
        setInstalled(updatedList);
        localStorage.setItem('install', JSON.stringify(updatedList))
        toast.success('Uninstall Successfully!');
    }

    return (
        <div>
            <div className='mt-5 md:mt-20 text-center'>
                <h1 className='font-bold text-3xl md:text-5xl'>Your Installed Apps</h1>
                <p className='mt-4 text-lg text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='max-w-[1440px] mx-auto mt-10'>
                <div className='md:flex justify-between'>
                    <h1 className='font-semibold text-xl'>{sortedItem.length} Apps Found</h1>
                    {/* sort এখানে করা হয়েছে */}
                    <select className='select select-bordered' value={sortOrder} onChange={e => setSortOrder(e.target.value)} >
                        <option value="none">Sort by Downloads</option>
                        <option value="downloads-asc">Low - High</option>
                        <option value="downloads-desc">High - Low</option>
                    </select>
                </div>
                {
                    loader ? <Loader></Loader> : sortedItem.map(ins =>
                        ins ? (<div key={ins.id} className='flex justify-between items-center border-1 border-gray-200 md:p-3 rounded-xl mt-4'>
                            <div className='flex items-center gap-4 '>
                                <img className='w-[80px] rounded-xl' src={ins.image} alt="" />
                                <div className='space-y-3'>
                                    <h1 className='font-medium md:text-xl'>{ins.title}: {ins.companyName}</h1>
                                    <div className="card-actions ">
                                        <div className="badge text-[#00D390] bg-[#F1F5E8]">
                                            <GoDownload />{ins.downloads}
                                            M</div>
                                        <div className="badge text-[#FF8811] bg-[#FFF0E1]">
                                            <FaStar />{ins.ratingAvg} </div>
                                        <div>
                                            <h1>{ins.size} MB</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleRemove(ins.id)} className='btn btn-ghost bg-[#00D390] text-white'>Uninstall</button>
                        </div>) : null
                    )
                }
            </div>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default InstalledApp;