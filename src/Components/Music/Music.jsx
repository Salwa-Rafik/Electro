import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
function Music() {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = React.useState(0);
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
        infinite: true,
        slidesToShow: 3,
        dots: true,
        speed: 500,
        rows: 2,
        slidesPerRow: 1,
        afterChange: (index) => setCurrentSlide(index),
        customPaging: (index) => (
            <div
                className={`${
                    currentSlide === index ? "bg-yellow-500 w-7 h-2" : "bg-gray-400 mx-2 w-2 h-2"
                } rounded-full`}
            ></div>
        ),
        responsive: [
            {
              breakpoint: 1024, // Medium screens and above
              settings: {
                slidesToShow: 1,
                rows: 1,
                slidesPerRow: 1,
              },
            },
            {
              breakpoint: 640, // Small screens
              settings: {
                slidesToShow: 1,
                rows: 6,
                slidesPerRow: 1,
              },
            },
          ],
      
    };

    const truncateTitle = (title) => {
        const words = title.split(" ");
        return words.slice(0, 3).join(" ");
    };
    const handleMouseEnter = (index) => {
        setIsHovered((prevState) => prevState.map((state, i) => i === index));
      };
    
      const handleMouseLeave = () => {
        setIsHovered((prevState) => prevState.map(() => false));
      };
    return (
        <div className='container mx-auto px-16'>
            <div className="flex justify-between border-b border-gray-300 mt-8 mb-8">
                <span className="text-2xl text-zinc-600 border-b-2 border-yellow-400">Music</span>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {products.map((product,index) => (
                        <div key={product.id}>
                            <div className="flex justify-between bg-white h-40 m-0.5 " onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                                <div>
                                    <img src={product.image} alt={product.title} className="h-20 w-auto m-8 pr-8" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm text-gray-500">{product.category}</h3>
                                    <h4 className="text-md font-bold text-blue-600">{truncateTitle(product.title)}</h4>
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

export default Music;
