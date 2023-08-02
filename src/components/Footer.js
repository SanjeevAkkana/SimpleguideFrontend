import React from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

const Footer = () => {
    return (

        <footer className="bg-white dark:bg-gray-900 py-8 p-4">
            <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
                <div className="flex flex-wrap justify-between gap-8 ">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="/services" className="">Services</a>
                            </li>
                            <li className="mb-4">
                                <a href="/programs" className="">Programs</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://www.instagram.com/_simpleguide_/" className=" ">Instagram</a>
                            </li>
                            <li className='mb-4'>
                                <a href="https://www.youtube.com/@simple_guide" className="">Youtube</a>
                            </li>
                            <li>
                                <a href="https://medium.com/@simpleguidechannel" className="">Medium</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="mailto:simpleguidechannel@gmail.com" className="">simpleguidechannel@gmail.com</a>
                            </li>
                            <li>
                                <p className="">+917075972027</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="">Simple Guide</a>. All Rights Reserved.
                </span>
            </div>
        </footer>

    );
};

export default Footer;