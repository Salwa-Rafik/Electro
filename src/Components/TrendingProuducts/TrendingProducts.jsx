import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function TrendingProducts() {
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
    slidesToShow: 4,
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
          currentSlide === index
            ? "bg-yellow-500 w-7 h-2"
            : "bg-gray-400 mx-2 w-2 h-2"
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
      <div className="flex justify-between border-b border-gray-300 mt-8 mb-8">
        <span className="text-2xl text-zinc-600 border-b-2 border-yellow-400">
          Trending Products
        </span>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={product.id}>
              <div
                className="flex justify-between bg-white m-0.5 hover:shadow-2xl"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mr-8">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-20 w-auto m-8"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm text-gray-500">{product.category}</h3>
                  <h4 className="text-md font-bold text-blue-600">
                    {truncateTitle(product.title)}
                  </h4>
                  <div className="flex justify-between mt-4 text-lg">
                    <div className="text-gray-600">
                      <p>${product.price}</p>
                    </div>
                    <div
                      className={`${
                        isHovered[index] ? "bg-yellow-400" : "bg-gray-200"
                      } text-center text-lg ml-8 p-2 rounded-full text-white`}
                    >
                      <MdAddShoppingCart />
                    </div>
                  </div>
                  <div
                    className={`${
                      isHovered[index] ? "flex justify-between" : "hidden"
                    } 'flex justify-between mt-4 text-gray-300 border-t border-gray-300'`}
                  >
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TrendingProducts;
