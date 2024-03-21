import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TopRated() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
      }
    ]
  };

  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 3).join(" ");
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="h-96 my-4">
            <div className="p-4">
                <h3 className="text-sm text-gray-500">{product.category}</h3>
                <h4 className="text-md font-bold text-blue-600">{truncateTitle(product.title)}</h4>
            </div>
            <div className="h-full bg-white overflow-hidden flex flex-col items-center p-8 border-r hover:shadow-md hover:border-none hover:shadow-gray-700">
              <div className='h-48'>
                <img src={product.image} alt={product.title} className="w-auto h-48" />
              </div> 
              <div className="p-4">
                  <p className="text-gray-700">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TopRated;
