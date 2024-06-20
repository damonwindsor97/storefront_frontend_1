import React from 'react'
import { Outlet } from 'react-router-dom'

import { Toaster } from "@/components/ui/toaster"


import Header from '../layout/Header'
import Footer from '@/layout/Footer'

import '../App.css'

function root() {
  return (
    <div>
        <Header/>
        <Toaster />
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default root