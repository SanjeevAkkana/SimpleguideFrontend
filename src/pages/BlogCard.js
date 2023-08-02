import React from 'react';
import { AiOutlineArrowRight, AiOutlineRight } from 'react-icons/ai';
import { combineWords } from '../components';

const BlogCard = ({ image, title, author }) => {
    return (
        <>
            <div
                className="bg-white overflow-hidden"
            >
                <img
                    src={image}
                    alt={title}
                    className="w-full h-32 object-cover"
                />
                <div className="p-2">
                    <h3 className="text-lg font-semibold mb-1">
                        <a href={`/topic/${combineWords(title)}`}>
                            {title.slice(0, 8)} . .
                        </a>
                    </h3>
                    <a href={`/topic/${combineWords(title)}`} className='text-blue-500 text-sm'>
                        Learn More
                    </a>
                </div>
            </div>
        </>
    );
};

export default BlogCard;