import React from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Banner from './Components/Banner/Banner'

const Root = () => {
  return (
    <>
        <Banner/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root