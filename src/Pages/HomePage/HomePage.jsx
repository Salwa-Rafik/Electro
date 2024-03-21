import React from 'react'
import Sec1 from '../../Components/Sec1/Sec1'
import NavBar from '../../Components/NavBar/NavBar'
import CenterNav from '../../Components/CenterNav/CenterNav'
import Telivision from '../../Components/Telivision/Telivision'
import Music from '../../Components/Music/Music'
import HeaderSlider from '../../Components/HeaderSlider/HeaderSlider'
import TrendingProducts from '../../Components/TrendingProuducts/TrendingProducts'
import BestSeller from '../../Components/BestSellers/BestSeller'
import Footer from '../../Components/Footer/Footer'
import RecentlyViewed from '../../Components/RecentlyViewed/RecentlyViewed'
import BrandsSlider from '../../Components/BrandsSlider/BrandsSlider'

function HomePage() {
  return (
    <div>
        <NavBar/>
        <HeaderSlider/>

        <Sec1/>
        <CenterNav/>
        <Telivision/>
        <Music/>
        <TrendingProducts/>
        <BestSeller/>
        <RecentlyViewed/>
        <BrandsSlider/>
        <Footer/>

    </div>
  )
}

export default HomePage