import React from 'react'
import TeachImage from '../assets/Teach.png';
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function combineWords(line) {
    var words = line.split(" "); // Split the line into words using space as the separator
    var combinedString = words.join("-");
    return combinedString;
}

const HomeHeroSection = () => {
    return (
        <div className='p-2'>
            <div className='flex lg:flex-row flex-col-reverse items-center justify-center'>
                <div className='lg:w-1/2'>
                    <p className='font-bold text-3xl pb-4'>Welcome to <span className='text-blue-500 font-serif'>Simple Guide</span></p>
                    <p className='font-medium'>
                    Explore the world of  <span className='text-blue-500 font-serif'>Simple Guide</span> and uncover captivating stories, insightful articles, and valuable resources to inspire and empower you.
                    </p>
                    <>
                        <div className="">
                            <p className='hover:text-white my-6 md:my-12 px-4 py-2 bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 w-fit'>
                            <Link
                                to={`/author/${combineWords("Simple Guide")}`}
                                className="font-medium"
                            >
                                Explore with us
                            </Link>
                            </p>
                        </div>
                    </>
                </div>
                <div className='lg:w-1/2 w-full block'>
                    <img src={TeachImage} className='w-full h-full object-cover' alt='TeachImage' />
                </div>
            </div>
        </div>
    )
}

export default HomeHeroSection;