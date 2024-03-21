import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../Button/Button";

function HeaderSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    afterChange: (index) => setCurrentSlide(index), // Update current slide index
    customPaging: (index) => (
      <div
        className={` ${
          currentSlide === index
            ? "bg-yellow-500 w-7 h-2"
            : "bg-gray-400 mx-2 w-2 h-2"
        } rounded-full absolute bottom-10`}
      ></div>
    ),
  };

  return (
    <div
      className="slider-wrapper overflow-hidden"
      style={{
        backgroundImage: "url('https://electro.madrasthemes.com/wp-content/uploads/2016/02/HomeV3ProductBackground.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="slider-container relative">
        <Slider {...settings}>
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-2">
              <div className="py-4 md:py-16">
                <h3 className="text-cyan-500 text-sm md:text-md font-semibold uppercase font-roboto mb-2 md:mb-4">
                  shop to get what you love
                </h3>
                <div className="w-full md:w-11/12 uppercase font-sans text-lg md:text-5xl text-gray-700 mb-4 md:mb-12">
                  <p>TimePieces that </p>
                  <p>make a statement</p> up to{" "}
                  <span className="font-bold">40 %</span>
                </div>
                <Button>Start Buying</Button>
              </div>
              <div className="relative flex justify-center md:justify-end sm:justify-start">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png"
                  alt=""
                  className="w-3/4 md:w-full h-auto absolute bottom-0"
                />
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-2 ">
              <div className="py-4 md:py-16">
                <h3 className="text-cyan-500 text-sm md:text-md font-semibold uppercase font-roboto mb-2 md:mb-4">
                  under favourable Smartwatches
                </h3>
                <div className="w-full md:w-11/12 uppercase font-sans text-lg md:text-5xl text-gray-700 mb-4 md:mb-12">
                  <p>The New </p>
                  <p>Standard</p> up to{" "}
                  <span className="font-bold">40 %</span>
                </div>
                <Button>Start Buying</Button>
              </div>
              <div className="relative flex justify-center md:justify-end sm:justify-start">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/Smartwatchess.png"
                  alt=""
                  className="w-3/4 md:w-full h-auto absolute bottom-0"
                />
              </div>
            </div>
          </div>
          <div className="container px-4 md:px-8">
            <div className="grid grid-cols-2 ">
              <div className="py-4 md:py-16">
                <h3 className="text-cyan-500 text-sm md:text-md font-semibold uppercase font-roboto mb-2 md:mb-4">
                  shop to get what you love
                </h3>
                <div className="w-full md:w-11/12 uppercase font-sans text-lg md:text-5xl text-gray-700 mb-4 md:mb-12">
                  <p>TimePieces that </p>
                  <p>make a statement</p> up to{" "}
                  <span className="font-bold">40 %</span>
                </div>
                <Button>Start Buying</Button>
              </div>
              <div className="relative flex justify-center md:justify-end sm:justify-start sm:ml-20">
                <img
                  src="https://electro.madrasthemes.com/wp-content/uploads/2019/01/Sounddevice.png"
                  alt=""
                  className="w-3/4 md:w-full h-auto absolute bottom-0"
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default HeaderSlider;
