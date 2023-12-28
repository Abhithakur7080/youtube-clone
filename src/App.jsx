import React from 'react'
import {AppContext} from './context/contextApi'
import Header from './components/Header'
import Feed from './components/Feed'
import SearchReasult from './components/SearchReasult'
import VideoDetails from './components/VideoDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className='flex flex-col h-full'>
          <Header/>
          <Routes>
            <Route path='/' element={<Feed/>}/>
            <Route path='/searchResults/:searchQuery' element={<SearchReasult/>}/>
            <Route path='/video/:id' element={<VideoDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App