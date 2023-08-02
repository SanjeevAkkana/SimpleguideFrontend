import { useState, useEffect } from 'react'
import axios from 'axios'
import { Tab } from '@headlessui/react'
import { AiOutlineArrowDown, AiOutlineArrowRight } from 'react-icons/ai'
import HomeBlogsCarousel from './carousel/HomeBlogsCarousel'
import combineWords from './CombineWordsFunction'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HomeBlogs = () => {
    const [categories, setCategories] = useState(0);
    const getCategories = async () => {
        const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category`)
        setCategories(data.data)
    }
    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className='p-2 m-2'>
            <div>
                <h1 className="text-center text-3xl md:text-4xl font-medium relative mb-12">
                    <span className="absolute left-0 top-1/2 w-24 h-px bg-blue-500"></span>
                    <span className="relative px-2 font-serif">Topics</span>
                    <span className="absolute right-0 top-1/2 w-24 h-px bg-blue-500"></span>
                </h1>
                <div className="py-16 sm:px-0 hidden sm:flex flex-row justify-center border items-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-white to-blue-500">
                    <Tab.Group>
                        <Tab.List className="w-56 flex space-x-1 p-1 mx-12">
                            {
                                categories
                                    ?
                                    <div className='border-l border-white px-2'>
                                        {categories.map((category) => (
                                            <Tab
                                                key={category._id}
                                                className={({ selected }) =>
                                                    classNames(
                                                        'w-full py-2.5 text-sm font-medium leading-5 text-white text-left px-2',
                                                        'focus:outline-none',
                                                        selected
                                                            ? 'border-white border shadow'
                                                            : 'text-blue-100'
                                                    )
                                                }
                                            >
                                                {category.categoryName}
                                            </Tab>
                                        ))}
                                    </div>
                                    :
                                    <div className='w-full h-full border-l pl-2 flex flex-col gap-2'>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse'></p>
                                    </div>
                            }
                        </Tab.List>
                        <Tab.Panels>
                            {
                                categories
                                    ?
                                    <>
                                        {categories.map((category) => (
                                            <Tab.Panel
                                                key={category._id}
                                                className={classNames(
                                                    ''
                                                )}
                                            >

                                                <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                                                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                                        <img src={category.categoryImage} className="dark:hidden w-[272px] h-56 object-cover" alt={category.categoryName} />
                                                        <div className='p-2'>
                                                            <p className="font-medium text-xl pt-2">{category.categoryName.length > 15 ? <>{category.categoryName.slice(0, 15)}...</> : <>{category.categoryName}</>}</p>
                                                            <p className='text-[12px] text-gray-500 '>{category.categorySlogan.slice(0, 35)} ...</p>
                                                            <p className='py-2 text-[14px]'>{category.categoryDescription.slice(0, 200)} ...</p>
                                                        </div>
                                                        <div className='flex justify-center items-center'>
                                                            <a href={`/topic/${combineWords(category.categoryName)}`} className='p-4 w-fit text-white rounded-full flex gap-x-2 items-center justify-center' style={{ background: `${category.color}` }}><AiOutlineArrowRight /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </>
                                    :
                                    <Tab.Panel>
                                        <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                                            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                                <p className='w-[272px] h-56 bg-gray-300 animate-pulse'></p>
                                                <div className='p-2'>
                                                    <p className='w-full h-12 bg-gray-300 animate-pulse mt-2'></p>
                                                    <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                                    <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                                    <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                                    <p className='w-24 h-10 bg-gray-300 animate-pulse mt-2'></p>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab.Panel>
                            }
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            <div className='sm:hidden block'>
                <div className=''>
                    {
                        categories
                            ?
                            <HomeBlogsCarousel categories={categories} />
                            :
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                    <p className='w-[272px] h-56 bg-gray-300 animate-pulse'></p>
                                    <div className='p-2'>
                                        <p className='w-full h-12 bg-gray-300 animate-pulse mt-2'></p>
                                        <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                        <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                        <p className='w-full h-4 bg-gray-300 animate-pulse mt-2'></p>
                                        <p className='w-24 h-10 bg-gray-300 animate-pulse mt-2'></p>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeBlogs
