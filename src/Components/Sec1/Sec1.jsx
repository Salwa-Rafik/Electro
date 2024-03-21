import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { LuRefreshCcw } from "react-icons/lu";
import { SlTag, SlLike } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Sec1() {
  return (
    <div className="container mx-auto px-8 mt-16 p-8">
      <div className=" overflow-x-auto mb-8">
        <div className="flex space-x-6 md:space-x-0 md:grid md:grid-cols-3 gap-8 ">
          <div className="w-full flex bg-gray-100 flex-shrink-0 w-full md:w-auto h-auto p-4">
            <div className=" w-1/2">
              <img
                loading="lazy"
                className="h-15 w-full"
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/cameras-2.png"
                alt=""
              />
            </div>
            <div className=" w-1/2 text-gray-700 pl-4">
              <div className="w-1/2 uppercase font-sans leading-tight">
                Catch hottest <strong>Deals</strong> in Cameras Category
              </div>
              <div className="font-bold mt-4 flex items-center">
                {" "}
                <span className="pr-2">Shop now</span>{" "}
                <IoIosArrowDroprightCircle className="text-yellow-400 text-xl" />
              </div>
            </div>
          </div>

          <div className="w-full flex bg-gray-100 flex-shrink-0 w-full md:w-auto h-auto p-4">
            <div className=" w-1/2">
              <img
                loading="lazy"
                className="h-15 w-full"
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/Desktop-2.png"
                alt=""
              />
            </div>
            <div className=" w-1/2 text-gray-700 pl-4 uppercase font-sans leading-tight">
              <div>
                The New <strong>360 Cameras</strong>
              </div>

              <div className="font-bold mt-4 flex flex-col items-baseline leading-none">
                <span className="font-normal">From</span>
                <div className="flex items-baseline">
                  <span className="text-2xl">$</span>
                  <span className="text-3xl">750</span>
                  <sup className="text-md">99</sup>
                  <IoIosArrowDroprightCircle className="text-yellow-400 text-xl ml-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex bg-gray-100 flex-shrink-0 w-full md:w-auto h-auto p-4">
            <div className=" w-1/2">
              <img
                loading="lazy"
                className="h-15 w-full"
                src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/laptop-2.png"
                class="attachment-full size-full"
                alt=""
              />
            </div>
            <div className=" w-1/3 text-gray-700 pl-4">
              <div className="uppercase font-sans leading-tight">
                Tablets , smartphones <strong>And More</strong>
              </div>
              <div className="mt-4 flex items-center">
                <div className="flex flex-col leading-none ">
                  <span>Up</span>
                  <span>To</span>
                </div>
                <div className="flex items-baseline font-bold ml-2">
                  <span className="text-4xl ">70</span>
                  <sup className="text-sm">%</sup>
                </div>
                <IoIosArrowDroprightCircle className="text-yellow-400   text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-md border-gray-600 border-opacity-30 flex justify-between px-8 p-4 overflow-x-auto">
        <div className="flex justify-between border-r p-2">
          <TbTruckDelivery className="text-3xl text-yellow-400 mr-4" />
          <div className="lg:text-md md:text-sm sm:text-xs">
            <h3>Free Delivery</h3>
            <p>from $50</p>
          </div>
        </div>
        <div className="flex justify-between border-r p-2">
          <SlLike className="text-3xl text-yellow-400 mr-4" />
          <div className="lg:text-md md:text-sm sm:text-xs">
            <h3>Free Delivery</h3>
            <p>from $50</p>
          </div>
        </div>
        <div className="flex justify-between border-r p-2">
          <LuRefreshCcw className="text-3xl text-yellow-400 mr-4" />
          <div  className="lg:text-md md:text-sm sm:text-xs">
            <h3>Free Delivery</h3>
            <p>from $50</p>
          </div>
        </div>
        <div className="flex justify-between border-r p-2 ">
          <GiReceiveMoney className="text-3xl text-yellow-400 mr-4" />
          <div  className="lg:text-md md:text-sm sm:text-xs">
            <h3>Free Delivery</h3>
            <p>from $50</p>
          </div>
        </div>
        <div className="flex justify-between ">
          <div>
            <SlTag className="text-3xl text-yellow-400 mr-4" />
          </div>
          <div  className="lg:text-md md:text-sm sm:text-xs">
            <h3>Free Delivery</h3>
            <p>from $50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec1;
