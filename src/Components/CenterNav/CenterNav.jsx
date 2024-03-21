import React, { useState } from 'react';
import Featured from '../Featured/Featured';
import OnSale from '../OnSale/OnSale';
import TopRated from '../TopRated/TopRated';

function CenterNav() {
  const [selectedTab, setSelectedTab] = useState('featured');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <nav className='container mx-auto px-8' >
      <ul className='flex justify-center  text-zinc-700 text-lg  border-b border-gray-600 border-opacity-30'>
        <li onClick={() => handleTabClick('featured')} className={selectedTab === 'featured' ? 'border-b border-yellow-400 font-bold px-4' : 'px-4'}>
          Featured
        </li>
        <li onClick={() => handleTabClick('on-sale')} className={selectedTab === 'on-sale' ? 'border-b border-yellow-400 font-bold px-4' : 'px-4'}>
          On Sale
        </li>
        <li onClick={() => handleTabClick('top-rated')} className={selectedTab === 'top-rated' ? 'border-b border-yellow-400 font-bold px-4' : 'px-4'}>
          Top Rated
        </li>
      </ul>
    
      {selectedTab === 'featured' && <Featured />}
      {selectedTab === 'on-sale' && <OnSale />}
      {selectedTab === 'top-rated' && <TopRated />}
    </nav>
  );
}



export default CenterNav;