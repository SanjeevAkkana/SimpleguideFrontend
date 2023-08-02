import React, { useState, useEffect } from 'react'
import { FaInstagram, FaYoutube, FaMedium } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import Navbar from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion';

const MainLayout = ({ children }) => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='bg-white'>
            <div className="fixed z-20 backdrop-blur-lg p-4 bottom-0 right-0 flex items-center gap-6">
                <a href="https://www.youtube.com/@simple_guide" className="text-red-500" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.instagram.com/_simpleguide_/" className="text-red-700" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={24} />
                </a>
                <a href="https://medium.com/@simpleguidechannel" className="text-black" target="_blank" rel="noopener noreferrer">
                    <BsMedium size={24} />
                </a>
            </div>
            <div className='sticky h-full w-full top-0 py-4 z-50 bg-white px-2 border-b'>
                <Navbar />
            </div>
            <div className='py-8 lg:px-24 md:px-16 px-4 mx-auto'>
                {children}
            </div>
            <div className='w-full'>
                <Footer />
            </div>
        </motion.div>
    )
}

export default MainLayout
