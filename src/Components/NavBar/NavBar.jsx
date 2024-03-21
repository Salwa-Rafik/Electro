import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import { CiLocationOn } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser, AiOutlineDown } from "react-icons/ai";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);};

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const truncateTitle = (title) => {
        const words = title.split(" ");
        return words.slice(0, 3).join(" ");
    }; 
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Error fetching categories:', error));
    }, []);

    const fetchProducts = async (category) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
            const data = await response.json();
            setProducts(data.slice(0, 5)); // Limit to first 5 products
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleMouseEnter = async (category) => {
        setShowMenu(true);
        setSelectedCategory(category);
        await fetchProducts(category);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
        setSelectedCategory('');
        setProducts([]);
    };

    return (
        <>
        <div className='lg:hidden sm:block md:block bg-yellow-400'>
            <div className='flex justify-between px-8 py-2'>
                <div className='grid grid-cols-2'>
                <div>
                    <button onClick={toggleSidebar} className="focus:outline-none text-3xl">
                                <HiOutlineBars3 />
                    </button>
                </div>
                    <div className="w-16 h-10">
                        <div className='w-1/4 h-1/4'><Logo /></div>
                    </div>
                </div>
                <div className='grid grid-cols-3 gap-4 text-2xl text-zinc-700'>
                    <a href="#search" className="flex items-center justify-center" onClick={(e) => { e.preventDefault(); toggleSearch(); }}>
                        <FiSearch />
                    </a>
                    <a href="https://electro.madrasthemes.com/my-account/" className="flex items-center justify-center">
                        <AiOutlineUser />
                    </a>
                    <a href="https://electro.madrasthemes.com/shop/" className="flex items-center justify-center">
                        <LiaShoppingBagSolid />
                    </a>
                </div>
            </div>
            {isSearchVisible && (
                <div className="flex justify-center  ">
                    <input type="text" placeholder="Search for products" className="px-4 py-2 w-full border border-gray-400 rounded focus:outline-none" />
                </div>
            )}
        </div>
        
        <div className="hidden lg:block bg-yellow-400">
            <div className="container mx-auto px-8">
                <div className="flex justify-between text-sm text-zinc-700">
                    <div>
                        <div className="mt-2">Welcome to Worldwide Electronics Store</div>
                    </div>
                    <div className="flex justify-between divide-x divide-gray-400 divide-opacity-50 space-x-5 mt-2">
                        <div className="flex items-center px-2">
                            <CiLocationOn /><span className="ml-2">Store Locator</span>
                        </div>
                        <div className="flex items-center px-2">
                            <TbTruckDelivery /><span className="ml-2">Track your order</span>
                        </div>
                        <div className="flex items-center px-2">
                            <LiaShoppingBagSolid /><span className="ml-2">Shop</span>
                        </div>
                        <div className="flex items-center px-2">
                            <AiOutlineUser /><span className="ml-2">My Account</span>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Logo />
                        <button onClick={toggleSidebar} className="focus:outline-none text-3xl">
                            <HiOutlineBars3 />
                        </button>
                    </div>
                    <div className="flex items-center bg-white border rounded-full w-full max-w-xl">
                        <select className="py-2 pl-4 pr-8 bg-transparent border-none focus:outline-none">
                            <option value="">Select Category</option>
                            <option value="computers">Computers</option>
                            <option value="smartphones">Smartphones</option>
                            <option value="speakers">Speakers</option>
                        </select>
                        <input type="text" placeholder="Search for products" className="flex-grow py-2 pl-4 bg-transparent border-none focus:outline-none" />
                        <button className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-r-full focus:outline-none">
                            < FiSearch className="text-white " />
                        </button>
                    </div>
                    <div className="flex justify-between text-2xl text-zinc-700 space-x-8">
                        <a href="https://electro.madrasthemes.com/compare/" title="Compare"><FaCodeCompare /></a>
                        <a href="https://electro.madrasthemes.com/wishlist/" title="Wishlist"><FaRegHeart /></a>
                        <a href="https://electro.madrasthemes.com/my-account/" title="My Account"><AiOutlineUser /></a>
                        <div className="flex items-center">
                            <LiaShoppingBagSolid />
                            <span className="ml-2">0.0$</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-600 border-opacity-30 mt-8">
                <ul className="flex justify-center text-zinc-700 text-lg font-bold">
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className={`relative border-r border-gray-600 border-opacity-30 p-4 ${index === categories.length - 1 ? '' : 'border-gray-200'} last:border-none hover:bg-black hover:bg-opacity-25 flex items-center`}
                            onMouseEnter={() => handleMouseEnter(category)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>{category}</span>
                            <AiOutlineDown className="ml-2 text-sm " />
                            {showMenu && selectedCategory === category && (
                                <div className="absolute top-full left-0 grid grid-cols-3 bg-white border-t-4 border-yellow-400  shadow-md p-4 w-[700px] z-[900] mx-auto ">
                                    {products.map((product, index) => (
                                        <div key={index} className=" space-x-2">
                                            <img src={product.image} alt={truncateTitle(product.title)} className="w-12 h-12" />
                                            <span>{truncateTitle(product.title)}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
}

export default NavBar;