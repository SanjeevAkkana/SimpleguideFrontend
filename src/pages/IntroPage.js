import React from 'react'
import { AboutBlog, HomeBlogs, HomeHeroSection, HomeServices, MainLayout, Navbar, Subscribe } from '../components'
import BlogCard from './BlogCard'

const IntroPage = () => {
  return (
    <MainLayout>
        <HomeHeroSection/>
        <HomeBlogs/>
        <HomeServices/>
        <AboutBlog/>
        <Subscribe/>
    </MainLayout>
  )
}

export default IntroPage
