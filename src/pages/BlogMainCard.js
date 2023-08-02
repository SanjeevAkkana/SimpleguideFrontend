import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { combineWords } from '../components'

const BlogMainCard = ({blogImage,title,category,color,author,introduction}) => {
    return (
        <div className="backdrop-blur-sm overflow-hidden max-w-md mx-auto">
            <div className="relative">
                <img
                    className="w-full h-48 object-cover"
                    src={blogImage}
                    alt={title}
                />
                <div className="absolute top-4 left-4 backdrop-blur-lg text-white py-1 px-2 flex items-center justify-center">
                    <span className="text-sm font-medium">
                        <a href={`/topic/${combineWords(category)}`}>
                            {category}
                        </a>
                    </span>
                </div>
                <div className="absolute bottom-4 right-4 backdrop-blur-lg text-white py-1 px-2 flex items-center justify-center">
                    <span className="text-sm font-medium">
                        <a href={`/author/${combineWords(author)}`}>
                            {author}
                        </a>
                    </span>
                </div>
            </div>
            <div className="py-6">
                <h2 className="text-2xl font-bold mb-4">
                    <a href={`/blog/${combineWords(title)}`}>
                        {title.slice(0, 30)} . . .
                    </a>
                </h2>
                <p className="mb-4">
                    {introduction.slice(0, 150)} . . .
                </p>
                <p>
                    <a
                        href="#"
                        style={{ color: `${color}` }}
                    >
                        <a href={`/blog/${combineWords(title)}`} className='flex gap-x-2 items-center'>
                            Read More <AiOutlineArrowRight />
                        </a>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default BlogMainCard