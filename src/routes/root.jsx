import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../layout/Header'
import Footer from '@/layout/Footer'

import '../App.css'

function root() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default root