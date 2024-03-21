import React, { useState, useEffect } from 'react'
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaFacebook, FaWhatsapp, FaPinterest, FaLinkedin, FaInstagram, FaYoutube, FaWifi } from "react-icons/fa";
import Logo from '../Logo/Logo';

function Footer() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div>
                <div className="w-full px-4 pt-16">
                    {/* Disclosure components */}
                </div>
            </div>
            <div className='bg-gray-50'>
                <div className='container mx-auto px-8 lg:px-16'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-16'>
                        <div className='col-span-1'>
                            <Logo className="w-20 h-20" />
                            <div className='flex pt-8'>
                                <div className='p-2 mr-4 text-4xl text-yellow-400'>
                                    <TfiHeadphoneAlt />
                                </div>
                                <div className='leading-none'>
                                    <p className='text-md text-gray-600'>Got Questions ? Call Us 24/7!</p>
                                    <p className='text-xl text-zinc-600'>(800) 8001-8588, (0600) 874 548</p>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <p className='text-lg text-zinc-600 font-bold'>Contact Info</p>
                                <p className='text-md text-gray-600'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            </div>
                            <div className='grid grid-cols-7 gap-0.2 text-3xl text-center text-gray-500 mt-8'>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-blue-800'><FaFacebook /></a>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-green-500'><FaWhatsapp /></a>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-red-700'><FaPinterest /></a>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-sky-600'><FaLinkedin /></a>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-orange-500'><FaInstagram /></a>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-red-500'><FaYoutube /></a>
                                <a href='https://themeforest.net/user/madrasthemes/portfolio' className='hover:text-orange-500'><FaWifi /></a>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-lg text-zinc-600 font-bold'>Find It Fast</p>
                            <div className='mt-8'>
                                {categories.map((category, index) => (
                                    <div key={index}>
                                        <a
                                            className="text-md text-gray-600"
                                            href='gvhvjhv'
                                        >
                                            {category}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <p className='text-lg text-zinc-600 font-bold'>About Us</p>
                            <div className='mt-8'>
                                <div className="text-md text-gray-600"><a href='https://themeforest.net/user/madrasthemes/portfolio'>About</a></div>
                                <div className="text-md text-gray-600"><a href='https://themeforest.net/user/madrasthemes/portfolio'>Contact</a></div>
                                <div className="text-md text-gray-600"><a href='https://themeforest.net/user/madrasthemes/portfolio'>Wishlist</a></div>
                                <div className="text-md text-gray-600"><a href='https://themeforest.net/user/madrasthemes/portfolio'>Compare</a></div>
                                <div className="text-md text-gray-600"><a href='https://themeforest.net/user/madrasthemes/portfolio'>FAQ</a></div>
                                <div className="text-md text-gray-600"><a href='https://themeforest.net/user/madrasthemes/portfolio'>Store Directory</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200'>
                    <div className='container mx-auto px-8 lg:px-16 mt-16'>
                        <div className='flex justify-between py-2 text-zinc-600'>
                            <p>&copy;<span className='font-bold'>Electro</span>-All Rights Reserved</p>
                            <img src="https://electro.madrasthemes.com/wp-content/uploads/2021/03/patment-icon1.png" alt=""/>
                        </div>    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;