import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/SignIn'
import Feed from './components/Feed'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/register'} element={<Signup/>}/>
        <Route path={'/login'} element={<Signin/>}/>
        <Route path={'/feed'} element={<Feed/>}/>
      </Routes>
    </BrowserRouter>
  )
}