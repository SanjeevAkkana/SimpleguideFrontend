import React, { useState, useEffect } from 'react'
import BlogCard from '../pages/BlogCard'
import axios from 'axios';
import { AiOutlineArrowRight } from 'react-icons/ai';

const CategoriesComponent = () => {
    const [categories, setCategories] = useState(0);
    const getCategories = async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category`)
        setCategories(data.data)
 
    }
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <>
            <div className='mx-auto w-full mb-8'>
                <h1 className="text-center text-3xl md:text-4xl font-medium relative">
                    <span className="absolute left-0 top-1/2 w-24 h-px bg-blue-500"></span>
                    <span className="relative px-2 font-serif"> Topics </span>
                    <span className="absolute right-0 top-1/2 w-24 h-px bg-blue-500"></span>
                </h1>
            </div>
            <div>
                {
                    categories
                        ?
                        <div className='py-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                            {categories.map((category) => {
                                return (
                                    <div
                                        key={category._id}
                                    >
                                        <BlogCard
                                            image={category.categoryImage}
                                            title={category.categoryName}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        :
                        <div className='py-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4'>
                            <div className='w-full h-full'>
                                <p className='w-full h-24 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-24 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-24 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-24 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-24 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                            <div className='w-full h-full'>
                                <p className='w-full h-24 bg-gray-300 animate-pulse'></p>
                                <p className='w-full h-8 bg-gray-300 animate-pulse mt-2'></p>
                                <p className='w-24 h-4 bg-gray-300 animate-pulse mt-2'></p>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default CategoriesComponent
