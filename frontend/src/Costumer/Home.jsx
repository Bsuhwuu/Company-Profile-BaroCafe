import React from 'react'
import Hero from './Hero'
import Banner from './Banner'
import Product from './Product'
import Footer from './Footer'
import Testimonials from './Testimoni'
import Galeri from './Galeri'

const Home = () => {
  return (
    <div>
    <Hero />,
    <Banner/>,
    <Galeri />,
    <Product />,
    <Testimonials />,
    <Footer />
    </div>
    
  )
}

export default Home