import React, { useState } from 'react'
import AppDev from '../assets/AppDevelopment.png';
import WebDev from '../assets/WebDevelopment.png';
import ContentCreator from '../assets/ContentCreation.png';
import { AiOutlineArrowRight } from 'react-icons/ai';


const HomeServices = () => {
    const services = [
        {
            id: 1,
            name: "Professional Web Development Services",
            content: [
                "Our web development service offers professional and customized solutions to help businesses establish a strong online presence."
            ],
            image: WebDev
        },
        {
            id: 2,
            name: "Professional Content Creation Services",
            content: [
                "Our Content Creation service delivers meticulously crafted, formal content to captivate audiences and elevate your brand's image."
            ],
            image: ContentCreator
        },
        {
            id: 3,
            name: "Professional App Development Services",
            content: [
                "We offer professional app development services, creating customized applications to meet your business needs and enhance user experiences."
            ],
            image: AppDev
        }
    ]
    return (
        <div className='p-2 m-2 pt-12'>
            <h1 className="text-center text-3xl md:text-4xl font-medium relative mb-12">
                    <span className="absolute left-0 top-1/2 w-24 h-px bg-blue-500"></span>
                    <span className="relative px-2 font-serif">Services</span>
                    <span className="absolute right-0 top-1/2 w-24 h-px bg-blue-500"></span>
                </h1>
            <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {services.map((service) => {
                    return (
                        <div key={service.id} className='px-2 py-6'>
                            <img className='h-56 w-full object-cover' src={service.image} alt={service.name} />
                            <div className='p-2'>
                                <h5 className="text-xl font-medium py-2 tracking-tight text-gray-900 dark:text-white">
                                    <p>
                                        {service.name}
                                    </p>
                                </h5>
                                <p className="text-md text-gray-700 dark:text-gray-400">
                                    <p>
                                        {service.content}
                                    </p>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeServices
