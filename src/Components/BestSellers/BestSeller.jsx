import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdAddShoppingCart } from "react-icons/md";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function BestSeller() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isHovered, setIsHovered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const categoryData = await categoryResponse.json();
        setCategories(categoryData);

        const productResponse = await fetch("https://fakestoreapi.com/products/");
        const productData = await productResponse.json();
        setProducts(productData);
        setIsHovered(new Array(productData.length).fill(false));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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

  const settings = {
    customPaging: function(i) {
      return (
        <div>
             <div >
          <img src={products[5].image} alt={`Product ${i + 1}`}  className="w-full "/>
        </div>
        </div>
       
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto px-16">
        <div className="flex justify-between border-b border-gray-300 mt-8 mb-8 pt-8">
          <div className="text-2xl text-zinc-600 border-b-2 border-yellow-400">
            Bestsellers
          </div>
          <div>
            <ul className="flex justify-between">
              {categories.slice(0, 3).map((category, index) => (
                <li className="mr-8 text-zinc-600 text-lg" key={index}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 gap-4">
            <div className="md:col-span-2 col-span-3 grid md:grid-cols-3 grid-cols-2 gap-1 my-8">
              {products.slice(0, 6).map((product, index) => (
                <div key={product.id} className="bg-white hover:shadow-2xl"  onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
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
            </div>
            {/* Display one product in 1/3 section */}
            <div className="my-8 hidden md:block">
              {products.slice(5, 6).map((product,index) => (
                <div key={product.index} className="bg-white h-full " onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                  {/* Display product details */}
                  <div className="p-4">
                    <h2 className="text-sm text-gray-500">{product.category}</h2>
                    <h4 className="text-md font-bold text-blue-600">
                      {product.title}
                    </h4>
                  </div>
                  <div className="slider-container mt-40 p-8">
                    <Slider {...settings}>
                      <div >
                        <img src={products[5].image} alt={`Product 1`} />
                      </div>
                      <div>
                        <img src={products[5].image} alt={`Product 2`} />
                      </div>
                      <div>
                        <img src={products[5].image} alt={`Product 3`} />
                      </div>
                     
                    </Slider>
                  </div>
                  <div className="flex justify-between mt-4 text-lg   p-8">
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSeller;