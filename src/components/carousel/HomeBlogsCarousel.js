import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { AiOutlineArrowRight } from 'react-icons/ai'

function combineWords(line) {
    var words = line.split(" "); // Split the line into words using space as the separator
    var combinedString = words.join("-");
    return combinedString;
}

const HomeBlogsCarousel = ({ categories }) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
    return (
        <div key={categories._id} className="embla" ref={emblaRef}>
            <div className="embla__container">
                {categories.map((category) => {
                    return (
                        <div key={category._id} className="embla__slide py-6">
                            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default HomeBlogsCarousel
