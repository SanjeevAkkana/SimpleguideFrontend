import React, { useEffect, useState } from 'react'
import { CategoriesComponent, MainLayout, Subscribe, combineWords, AuthorCard } from '../components'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BlogMainCard from './BlogMainCard';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Author = () => {

  const { id } = useParams()
  const [author, setAuthor] = useState(0);
  const [blogs, setBlogs] = useState(0);
  const [categories, setCategories] = useState(0);

  const getCategories = async () => {
    let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/category/${id}`);
    setCategories(data.data);
  }

  const getAuthor = async () => {
    let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/author/${id}`);
    setAuthor(data.data)
  }

  const authorBlogs = async () => {
    let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/blogs/author/${id}`);
    setBlogs(data.data)
  }

  useEffect(() => {
    getAuthor();
    authorBlogs();
    getCategories();
  }, [])
  return (
    <MainLayout>
      {/* Home Hero Section  */}
      {
        author.length>0
          ?
          author
          ?
          <div>
              <Helmet>
                <title>{author[0].name}</title>
                <meta name="description" content={author[0].aboutAuthor} />
                <meta name="keywords" content="Author" />
                <link rel="icon" href={author[0].authorImage} type="image/png" />
              </Helmet>
            <div className="">
              {/* Title */}
              <h1 className="text-center text-3xl md:text-4xl font-medium relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-24 h-px" style={{ backgroundColor: `${author[0].color}` }}></span>
                <span className="relative px-2 font-serif" style={{ color: `${author[0].color}` }}>{author[0].name}</span>
                <span className="hidden md:block absolute right-0 top-1/2 w-24 h-px bg-blue-500"></span>
              </h1>

              {/* Description */}
              <p className="text-center text-gray-600 mt-4">
                {author[0].aboutAuthor}
              </p>
              <div className="flex justify-center gap-7 pt-4">
                {
                  author[0].facebookUrl
                    ?
                    <a
                      href={author[0].facebookUrl}
                      className="text-2xl text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                    :
                    <></>
                }
                {
                  author[0].linkedinUrl
                    ?
                    <a
                      href={author[0].linkedinUrl}
                      className="text-2xl text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                    :
                    <></>
                }
                {
                  author[0].instagramUrl
                    ?
                    <a
                      href={author[0].instagramUrl}
                      className="text-2xl text-red-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                    :
                    <></>
                }
              </div>
            </div>
            {/* Blogs written by author */}
            <div className='my-12'>
              {
                blogs
                  ?
                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                      blogs.map((blog) => {
                        let category = categories ? categories.map(category => category.categoryName == blog.category) : "";
                        return (
                          <div className='' key={blog._id}>
                            <BlogMainCard
                              title={blog.title}
                              category={blog.category}
                              introduction={blog.introduction[0].content[0]}
                              author={blog.author}
                              blogImage={blog.blogImage}
                              color={author[0].color}
                            />
                          </div>
                        )
                      })
                    }
                  </div>
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
            <h1 className="text-3xl font-medium text-white mb-2">Oops! No Author Found</h1>
            <p className='mt-12'>
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

export default Author