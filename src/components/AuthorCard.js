import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

const AuthorCard = ({ name, slogon, image, color, instagram, facebook, linkedln }) => {
    return (
        <div className="w-72 md:w-96 h-fit rounded-t-3xl">
            <div className='w-full h-48' style={{ backgroundColor: `${color}` }}>
                <img class="w-full h-full object-cover" src={image} alt={name} />
            </div>
            <div className="">
                <div className='w-full flex flex-col items-center'>
                    <h5 class="mb-1 text-2xl font-bold text-gray-900 dark:text-white pt-12">{name}</h5>
                    <span class="text-sm text-gray-700 dark:text-gray-400 text-center">{slogon}</span>
                </div>
                <div className="flex justify-center gap-7 pt-12 pb-6">
                    <a
                        href="#facebook"
                        className="text-2xl text-blue-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="#twitter"
                        className="text-2xl text-blue-400"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillLinkedin />
                    </a>
                    <a
                        href="#instagram"
                        className="text-2xl text-red-500"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;