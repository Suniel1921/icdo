import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/home/Home'
import Layout from './components/layout/Layout'
import Banner from './components/banner/Banner'

const App = () => {
  return (
    <>
    <Router>
    <Banner/>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </Router>
    
      
    </>
  )
}

export default App
