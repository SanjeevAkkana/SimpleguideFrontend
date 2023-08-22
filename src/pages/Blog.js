import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoriesComponent, MainLayout, QuestionCard, Subscribe, combineWords } from '../components';
import { BsDot, BsMenuDown } from 'react-icons/bs';
import { HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi';
import { GrDown } from 'react-icons/gr';
import { Helmet } from 'react-helmet';

const TextSeperate = (text) => {
  const colonIndex = text.indexOf(':');

  if (colonIndex !== -1) {
    const beforeColon = text.slice(0, colonIndex);
    const afterColon = text.slice(colonIndex + 1);

    return (
      <p className='pl-2'>
        <span className="font-bold">{beforeColon}:</span>
        <span>{afterColon}</span>
      </p>
    );
  } else {
    return (
      <div className="flex gap-x-2">
        <div>
          <BsDot size={30} />
        </div>
        <div className=''>
          {text}
        </div>
      </div>
    );
  }
};

const LinkSeperate = (text) => {
  const colonIndex = text.indexOf(':');

  if (colonIndex !== -1) {
    const beforeColon = text.slice(0, colonIndex);
    const afterColon = text.slice(colonIndex + 1);

    return (
      <p className=''>
        <span className="font-bold">{beforeColon} </span>
        <span className='text-blue-500'><a href={afterColon}>{afterColon}</a></span>
      </p>
    );
  } else {
    return (
      <div className="flex gap-x-2">
        <div>
          <BsDot size={30} />
        </div>
        <div className=''>
          <a href={text}>{text}</a>
        </div>
      </div>
    );
  }
};

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(0);

  const getCategories = async () => {
    let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/blog/${id}`);
    setBlog(data.data);
  }

  useEffect(() => {
    getCategories();
  }, [])
  return (
    <MainLayout>
      {
        blog
          ?
          <div className=''>
            <Helmet>
              <title>{blog.title}</title>
              <meta name="description" content={blog.introduction[0].content[0]} />
              <meta name="keywords" content="Author" />
            </Helmet>
            <div className="min-h-screen mx-auto w-full md:w-11/12 lg:w-10/12">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center w-full mx-auto">{blog.title}</h1>
              <img className='w-full mx-auto md:h-96 h-64 object-fill mt-8' src={blog.blogImage} alt={blog.title} />
              <div className='flex items-center py-4 justify-center'>
                <p className='font-medium text-sm'><a href={`/author/${combineWords(blog.author)}`}>{blog.author}</a></p>
                <BsDot />
                <p className='font-medium text-sm'><a href={`/topic/${combineWords(blog.category)}`}>{blog.category}</a></p>
                <BsDot />
                <p className='font-medium text-sm'>{blog.date.slice(0, 10)}</p>
              </div>
              {/* Introduction */}
              <div className="">
                <div className="mx-auto">
                  <div className="py-4">
                    <h1 className="text-2xl font-bold mb-2">Introduction</h1>
                    {blog.introduction[0].content.map((intro) => {
                      return (
                        <p key={intro} className='py-2 text-md'>{intro}</p>
                      )
                    })}
                  </div>
                  {/* Sections */}
                  <div className=''>
                    {blog.sections.map(section => {
                      return (
                        <div key={section._id} className='py-4'>
                          {
                            section.contentType === "text"
                              ?
                              <div className=''>
                                <div className=''>
                                  {
                                    section.image
                                      ?
                                      <img className='px-12 w-full md:h-96 h-64 object-fill rounded-md' src={section.image} alt={section.title} />
                                      :
                                      <></>
                                  }
                                  <p className='text-xl font-bold pt-6'>
                                    {section.title}
                                  </p>
                                  <p>
                                    {section.content.map(para => {
                                      return (
                                        <div key={para}>
                                          <p className='py-4'>{para}</p>
                                        </div>
                                      )
                                    })}
                                  </p>
                                  {
                                    section.link
                                      ?
                                      <p className='py-2'>
                                        {LinkSeperate(section.link)}
                                      </p>
                                      :
                                      <></>
                                  }
                                </div>
                              </div>
                              :
                              <div>
                                <div className=''>
                                  {
                                    section.image
                                      ?
                                      <img className='px-12 w-full md:h-96 h-64 object-fill rounded-md' src={section.image} alt={section.title} />
                                      :
                                      <></>
                                  }
                                  <p className='text-xl font-bold pb-4'>
                                    {section.title}
                                  </p>
                                  <ol>
                                    {section.content.map(para => {
                                      return (
                                        <div key={para} className='py-2'>
                                          <ul>{TextSeperate(`${para}`)}</ul>
                                        </div>
                                      )
                                    })}
                                  </ol>
                                </div>
                              </div>
                          }
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              {/* YoutubeVideo */}
              <div>
                {
                  blog.youtubeVideo
                    ?
                    <div className="my-8">
                      <iframe
                        className="w-full h-64 sm:h-96"
                        src={blog.youtubeVideo}
                        allowFullScreen
                      ></iframe>
                    </div>
                    :
                    <></>
                }
              </div>
              {/* Questions */}
              {
                blog.questions
                  ?
                  <div>
                    <p className='text-2xl font-semibold py-6'>Frequently asked question :-</p>
                    {blog.questions.map((question) => {
                      return (
                        <div key={question.question}>
                          <QuestionCard question={question} />
                        </div>
                      )
                    })}
                  </div>
                  :
                  <></>
              }
            </div>
          </div>
          :
          <div>
            <div className='flex flex-col gap-2'>
              <p className='w-full h-64 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-8 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='w-full h-64 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-8 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='w-full h-64 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-8 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
              <p className='w-full h-4 bg-gray-300 animate-pulse'></p>
            </div>
          </div>
      }
      <div className='mt-6'>
        <CategoriesComponent />
      </div>
      <div className='mt-6'>
        <Subscribe />
      </div>
    </MainLayout >
  )
}

export default Blog
