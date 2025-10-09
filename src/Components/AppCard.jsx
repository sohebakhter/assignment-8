import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoDownload } from 'react-icons/go';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { ratingAvg, downloads, image, title, companyName, id } = app;
    return (
        <Link to={`/app/${id}`}>
            <div className="card bg-base-100  shadow-lg hover:scale-105 transition ease-in-out ">
                <figure className='p-5 h-[316px]'>
                    <img className='rounded-xl'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title} - {companyName}

                    </h2>

                    <div className="card-actions justify-between">
                        <div className="badge text-[#00D390] bg-[#F1F5E8]">
                            <span><GoDownload /></span>
                            {downloads}M</div>
                        <div className="badge text-[#FF8811] bg-[#FFF0E1]">
                            <span><FaStar /></span> {ratingAvg}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;