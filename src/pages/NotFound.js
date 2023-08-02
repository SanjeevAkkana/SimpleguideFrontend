import React from 'react'
import { MainLayout } from '../components'
import PageNotFound from '../assets/PageNotFound.png'

const NotFound = () => {
  return (
    <MainLayout>
        <div className='flex justify-center items-center'>
        <img className='w-full md:w-1/2' src={PageNotFound} alt="Page not found" />
        </div>
    </MainLayout>
  )
}

export default NotFound
