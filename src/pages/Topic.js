import axios from 'axios';
import React, { useEffect, useState, Fragment } from 'react'
import { useParams } from 'react-router-dom';
import { CategoriesComponent, MainLayout, Subscribe, combineWords } from '../components';
import { BsFileEarmarkText } from 'react-icons/bs';
import BlogMainCard from './BlogMainCard';
import Helmet from 'react-helmet';

const Topic = () => {

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  let { id } = useParams();

  const [categories, setCategories] = useState(false);
  const [blogs, setBlogs] = useState(false);
  const getCategories = async () => {
    const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category/${id}`)
    setCategories(data.data);
  }

  const getBlogs = async () => {
    const data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs/${id}`)
    setBlogs(data.data)
  }

  useEffect(() => {
    getCategories();
    getBlogs();
  }, [])
  return (
    <MainLayout>
      {
        categories.length > 0
          ?
          categories
            ?
            <div>
              <Helmet>
                <title>{categories[0].categoryName}</title>
                <meta name="description" content={categories[0].categoryDescription} />
                <meta name="keywords" content="blog, topic" />
              </Helmet>

              <div className="">
                {/* Title */}
                <h1 className="text-center text-3xl md:text-4xl font-medium relative">
                  <span className="hidden md:block absolute left-0 top-1/2 w-24 h-px" style={{ backgroundColor: `${categories[0].color}` }}></span>
                  <span className="relative px-2 font-serif" style={{ color: `${categories[0].color}` }}>{categories[0].categoryName}</span>
                  <span className="hidden md:block absolute right-0 top-1/2 w-24 h-px bg-blue-500"></span>
                </h1>

                {/* Description */}
                <p className="text-center text-gray-600 mt-4">
                  {categories[0].categoryDescription}
                </p>
              </div>
              {/* Blogs based on topic. */}
              <div className='w-full py-16'>
                {
                  blogs
                    ?
                    blogs.length > 0
                      ?
                      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {
                          blogs.map((blog) => {
                            return (
                              <div className='my-auto' key={blog._id}>
                                <BlogMainCard
                                  title={blog.title}
                                  category={blog.category}
                                  introduction={blog.introduction[0].content[0]}
                                  author={blog.author}
                                  blogImage={blog.blogImage}
                                  color={categories[0].color}
                                />
                              </div>
                            )
                          })
                        }
                      </div>
                      :
                      <section className="flex flex-col items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-black to-purple-700 py-12">
                        <div className="text-center">
                          <h1 className="text-3xl font-medium text-white mb-2">Oops! No Blogs Found</h1>
                          <p className="text-white mb-8">It seems there are no blogs at the moment.</p>
                          <a
                            href="#topics"
                            className="px-4 py-2 text-white border border-white font-medium backdrop-blur-xl"
                          >
                            Explore More
                          </a>
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
            </div>
            :
            <>
              <div className='w-full h-12 bg-gray-300 animate-pulse'></div>
              <div className='flex flex-col gap-2 mt-2'>
                <p className='w-full h-8 bg-gray-300 animate-pulse'></p>
                <p className='w-full h-8 bg-gray-300 animate-pulse'></p>
                <p className='w-full h-8 bg-gray-300 animate-pulse'></p>
              </div>
            </>
          :
          <section className="flex flex-col items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-black to-purple-700 py-12 mb-12">
            <div className="text-center">
              <h1 className="text-3xl font-medium text-white mb-2">Oops! No Topic Found</h1>
              <p className='mt-8'>
                <a
                  href="#topics"
                  className="px-4 py-2 text-white border border-white font-medium backdrop-blur-xl"
                >
                  Explore More
                </a>
              </p>
            </div>
          </section>
      }
      <div id="topics">
        <CategoriesComponent />
      </div>
      <Subscribe />
    </MainLayout>
  )
}

export default Topic