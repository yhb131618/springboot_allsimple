import React, { useState } from 'react';
import NavItem from './Sections/NavItem';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
  
    <div className='top-0 fixed-12 text-white bg-gray-900 '>
      <div className='w-full '>
        <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-5 '>
          {/* logo */}
          <div className='flex items-center text-2xl h-14'>
            <img src="/icon.png" width='7%'></img>
          </div>

          {/* menu button */}
          <div className='text-2xl sm:hidden'>
            <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
          </div>

          {/* big screen nav-items */}
          <div className='hidden sm:block'>
            <NavItem />
          </div>

        </div>

        {/* mobile nav-items */}
        <div className='block sm:hidden'>
          {menu && <NavItem mobile />}
        </div>
      </div>
    </div>

  )
}

export default Navbar