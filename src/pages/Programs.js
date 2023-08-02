import React, { useState, useEffect } from 'react'
import Program from '../assets/programs.png';
import { MainLayout, Subscribe, combineWords } from '../components';
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ProgramCard = ({ image, title, description, completed, contactEmail, contactNumber, duration, endDate, organizer, registrationLink, registrationPrice, startDate, winPrice }) => {
    return (
        <div className="">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={image}
                    alt={title}
                />
            </div>
            <div className="py-6 px-2">
                <h2 className="text-2xl font-bold mb-4">
                    <a href={`${registrationLink}`}>
                        {title}
                    </a>
                </h2>
                <p className="mb-4">
                    {description.slice(0, 150)} . . .
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Starting Date:- </span> {startDate.slice(0, 10)}
                </p>
                <p className="mb-4">
                    <span className='font-medium'>End Date:- </span> {endDate.slice(0, 10)}
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Status:- </span> {completed}
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Duration:- </span> {duration}
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Registration Price:- </span> {registrationPrice} rs
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Rewards:- </span> {winPrice} rs
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Organizer:- </span> {organizer}
                </p>
                <p className="mb-4">
                    For any queries or inquiries, please do not hesitate to contact us.
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Email:- </span> {contactEmail}
                </p>
                <p className="mb-4">
                    <span className='font-medium'>Phone number:- </span> {contactNumber}
                </p>
                <p className='px-4 py-2 border-blue-500 border w-fit'>
                    <a
                        href="#"
                        style={{ color: `blue` }}
                    >
                        <a href={`${registrationLink}`} className='flex gap-x-2 items-center'>
                            Want to join <AiOutlineArrowRight />
                        </a>
                    </a>
                </p>
            </div>
        </div>
    )
}

const Programs = () => {
    const [programs, setPrograms] = useState(0);
    const getPrograms = async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/program`);
        setPrograms(data.data)
    }
    useEffect(() => {
        getPrograms();
    }, [])
    return (
        <MainLayout>
            <div>
                <div className='flex lg:flex-row flex-col-reverse p-2 items-center justify-center'>
                    <div className='lg:w-1/2'>
                        <p className='font-bold text-3xl pb-4'>Join Our Exciting Programs</p>
                        <p className='font-medium'>
                            Participate in our exciting programs and win amazing prizes! Each program is designed to
                            provide a unique and enriching experience for all participants. Don't miss out on the
                            opportunity to learn, grow, and have fun with us.
                        </p>
                        <p className='font-medium mt-12 px-4 py-2 hover:text-white bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 w-fit'><a href="#programs">Explore more</a></p>
                    </div>
                    <div className='lg:w-1/2 w-full block'>
                        <img src={Program} className='w-full h-full object-cover' alt='TeachImage' />
                    </div>
                </div>
            </div>
            <div className='w-full py-6 px-2' id="programs">
                {
                    programs
                        ?
                        programs.length > 0
                            ?
                            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                                {programs.map((program) => {
                                    return (
                                        <div key={program._id} className=''>
                                            <ProgramCard
                                                title={program.title}
                                                description={program.description}
                                                image={program.image}
                                                completed={program.completed}
                                                contactEmail={program.contactEmail}
                                                contactNumber={program.contactNumber}
                                                duration={program.duration}
                                                endDate={program.endDate}
                                                organizer={program.organizer}
                                                registrationLink={program.registrationLink}
                                                registrationPrice={program.registrationPrice}
                                                startDate={program.startDate}
                                                winPrice={program.winPrize}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <section className="flex flex-col items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-black to-purple-700 py-12">
                                <div className="text-center">
                                    <h1 className="text-3xl font-medium text-white mb-2">No programs right now!</h1>
                                    <p className='mt-8 text-white'>
                                        Subscribe to our Newsletter, We will reach you when program starts.
                                    </p>
                                </div>
                            </section>
                        :
                        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                            <div className='w-full h-full'>
                                <p className='w-full h-48 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-48 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-48 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                        </div>
                }
            </div>
            <Subscribe />
        </MainLayout>
    )
}

export default Programs
