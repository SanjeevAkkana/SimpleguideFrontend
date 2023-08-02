import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Author, Blog, IntroPage, NotFound, Services, Topic } from './pages'
import Programs from './pages/Programs'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<IntroPage/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/author/:id' element={<Author/>} />
      <Route path='/topic/:id' element={<Topic/>} />
      <Route path='/blog/:id' element={<Blog/>} />
      <Route path='/programs' element={<Programs/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
