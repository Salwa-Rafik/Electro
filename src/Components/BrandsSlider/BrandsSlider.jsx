import React from 'react'
import Slider from 'react-slick';

function BrandsSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='container mx-auto px-16 my-16'>
        <div className='slider-container border-y'>
        <Slider {...settings}>
        <div>
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest4.png' alt=''></img>
        </div>
        <div>
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest5.png' alt=''></img>
        </div>
        <div>
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest1.png' alt=''></img>
        </div>
        <div>
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest2.png' alt=''></img>
        </div>
        <div>
            <img src='https://electro.madrasthemes.com/wp-content/uploads/2021/03/themeforest3.png' alt=''></img>
        </div>
        </Slider>
        </div>
       
    </div>
  )
}

export default BrandsSlider