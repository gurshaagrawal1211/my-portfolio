import React, { useEffect } from 'react'
import gsap, { Circ, Expo } from 'gsap'
const Banner = () => {

useEffect(()=>{gsap.to(".topheading, .banner-center-animation ",{
        y:"-100%",
        duration:2,
        delay:1,
        ease:Expo.easeInOut,
        opacity:0,
        
        
    })
    gsap.to(".green",{
        height:"100%",
        top:0,
        duration:1,
        delay:2,
        ease:Expo.easeInOut
    })
    gsap.to(".green",{
        height:"0",
        duration:1,
        delay:4,
        ease:Expo.easeInOut
    })
    
      gsap.to(".loader",{
          height:"0",
          duration:2,
          delay:4,
          ease:Expo.easeInOut
      })
    
},[])
    
  return (
    <>
        <div className='main w-full m-0 p-0'>
            <div className='loader w-full h-screen bg-slate-950 text-white '>
                <div className='topheading absolute top-10 left-1/2 transform translate-x-[-50%] uppercase text-xs  flex items-center flex-col'>
                    <h5>Portfolio</h5>
                    <h5>&copy;GurshaAgrawal</h5>
                </div>
                <h1 className='banner-center-animation  absolute top-1/2 transform translate-x-[-50%] translate-y-[-50%] left-1/2 text-4xl font-semibold'>Gursha <span className='text-green-600'>Agrawal</span> is a</h1>
            </div>
            <div className='green absolute w-full h-0 bg-green-600 top-full'></div>
        </div>
    </>
  )
}

export default Banner