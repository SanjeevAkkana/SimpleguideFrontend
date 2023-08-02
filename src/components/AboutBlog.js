import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { SlArrowUp } from 'react-icons/sl';
import { Tab, Disclosure } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const AboutBlog = () => {
    let [categories] = useState({
        Features: [
            {
                id: 1,
                title: 'Multiple blog writing capabilities',
            },
            {
                id: 2,
                title: "Web design services",
            },
            {
                id: 3,
                title: "Web development services",
            },
            {
                id: 4,
                title: "App development services",
            },
            {
                id: 5,
                title: "Content creation services",
            },
        ],
        Benifits: [
            {
                id: 1,
                title: 'Professional and high-quality blog writing services',
            },
            {
                id: 2,
                title: 'Expert web design and development services',
            },
            {
                id: 3,
                title: 'Seamless app development for various platforms',
            },
            {
                id: 4,
                title: 'Engaging and informative content creation for websites',
            },
            {
                id: 5,
                title: "Opportunity to learn various topics through the blog",
            },
        ],
    })
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-2 m-2 pb-12'>
            <div className='w-full'>
                <Tab.Group>
                    <Tab.List className="flex space-x-1 bg-blue-500/20 p-1">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-white-100 hover:bg-white/[0.12] hover:text-blue-800'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white p-3',
                                    'ring-white border-2 border-white-400'
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 hover:bg-gray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5 flex gap-x-2 items-center">
                                                <AiFillStar className="text-green-500" /> {post.title}
                                            </h3>
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <div className="w-full bg-white">
                <div>
                    <Tab.Group>
                    <Tab.List className="">
                        <Tab
                            className="p-2 text-xl font-semibold"
                        >
                            Frequently asked question :-
                        </Tab>
                        </Tab.List>
                    </Tab.Group>
                </div>
                <div className="w-full bg-white mt-3">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between items-center bg-white-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-white-500 focus-visible:ring-opacity-75">
                                    <span>What is Simple Guide?</span>
                                    <SlArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } text-white-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    A simple guide is a concise and user-friendly resource that provides clear instructions or information on a specific topic or process.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between bg-white-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-white-500 focus-visible:ring-opacity-75">
                                    <span>Why Simple Guide?</span>
                                    <SlArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } text-white-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    A simple guide offers a straightforward and accessible approach to understanding a topic or completing a task, making it easier for individuals to grasp and apply the information effectively.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between bg-white-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-white-500 focus-visible:ring-opacity-75">
                                    <span>What services do you offer?</span>
                                    <SlArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            }  text-white-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    We offer comprehensive services in web development, app development, and content creation, providing tailored solutions to enhance your online presence and drive business growth.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between bg-white-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-white-500 focus-visible:ring-opacity-75">
                                    <span>Do you offer technical support?</span>
                                    <SlArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } text-white-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Yes.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between bg-white-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-white-500 focus-visible:ring-opacity-75">
                                    <span>How can I contact the Simple Guide?</span>
                                    <SlArrowUp
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } text-white-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                You can contact the Simple Guide at +917075972027 or via email at simpleguidechannel@gmail.com
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </div>
    )
}

export default AboutBlog
