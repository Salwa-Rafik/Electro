import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
function Music() {
    const [products, setProducts] = useState([]);
    const [currentSlide, setCurrentSlide] = React.useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products/");
                const data = await response.json();
                setProducts(data);
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

    return (
        <div className='container mx-auto px-16'>
            <div className="flex justify-between border-b border-gray-300 mt-8 mb-8">
                <span className="text-2xl text-zinc-600 border-b-2 border-yellow-400">Music</span>
            </div>
            <div className="slider-container">
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id}>
                            <div className="flex justify-between bg-white h-40 m-0.5 ">
                                <div>
                                    <img src={product.image} alt={product.title} className="h-20 w-auto m-8 pr-8" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-sm text-gray-500">{product.category}</h3>
                                    <h4 className="text-md font-bold text-blue-600">{truncateTitle(product.title)}</h4>
                                    <p className="text-gray-700">${product.price}</p>
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
