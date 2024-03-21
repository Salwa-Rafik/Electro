import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function RecentlyViewed() {
  const [products, setProducts] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        setProducts(data);
        setIsHovered(new Array(data.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (index) => setCurrentSlide(index),
    customPaging: (index) => (
        <div
        className={`${
            currentSlide === index ? "bg-yellow-500 w-7 h-2" : "bg-gray-400 mx-2 w-2 h-2"
        } rounded-full`}
    ></div>
    ),
  };

  const truncateTitle = (title) => {
    const words = title.split(" ");
    return words.slice(0, 1).join(" ");
  };

  const handleMouseEnter = (index) => {
    setIsHovered((prevState) => prevState.map((state, i) => i === index));
  };

  const handleMouseLeave = () => {
    setIsHovered((prevState) => prevState.map(() => false));
  };

  return (
    <div className="container mx-auto px-16">
      <div className="flex justify-between border-b border-gray-300 mt-8 mb-16">
        <span className="text-2xl text-zinc-600 border-b-2 border-yellow-400">
          Recently Viewed
        </span>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((product, index) => (
              <div key={product.id} className="bg-white border-r mr-8 hover:border-none hover:shadow-2xl"  onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
              <div className="p-4">
                <h3 className="text-sm text-gray-500">
                  {product.category}
                </h3>
                <h4 className="text-md font-bold text-blue-600">
                  {truncateTitle(product.title)}
                </h4>
              </div>
              <div className="h-full overflow-hidden flex flex-col items-center p-4 ">
                <div className="h-auto">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-auto h-40"
                  />
                </div>
                <div className="flex justify-between mt-4 text-lg">
                  <div className="text-gray-600">
                    <p>${product.price}</p>
                  </div>
                  <div className={`${isHovered[index] ? "bg-yellow-400" : "bg-gray-200"} text-center text-lg ml-8 p-2 rounded-full text-white`}>
                    <MdAddShoppingCart />
                  </div>
                </div>
                <div className={`${isHovered[index] ? "flex justify-between" : "hidden"} flex justify-between mt-4 text-gray-300 border-t border-gray-300`}>
                  <div className="flex items-center">
                    <span className="ml-2">Wishlist</span>
                    <FaRegHeart />
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">Compare</span>
                    <FaCodeCompare />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    

    
      <div className="overflow-x-auto mb-8 mt-16">
        <div className="flex space-x-6 md:space-x-0 md:grid md:grid-cols-2 gap-2 ">
            <div className="w-full flex  flex-shrink-0 w-full md:w-auto h-auto "><img src="	https://electro.madrasthemes.com/wp-content/uploads/2018/10/two-banner-1.jpg" alt=""/></div>
            <div className="w-full flex  flex-shrink-0 w-full md:w-auto h-auto "><img src="https://electro.madrasthemes.com/wp-content/uploads/2018/10/two-banner-2.jpg" alt=""/></div>
        </div>
      </div>


    </div>
  );
}

export default RecentlyViewed;
