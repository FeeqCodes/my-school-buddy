



import Image from 'next/image';
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-between p-6 px-[40px] z-10 m-auto bg-transparent shadow-lg  w-full font-airLaser">
        <div>
          <Image width={100} height={100} src="/assets/Study AI.svg" alt="" />
        </div>
        <ul className="text-white flex items-center justify-center gap-x-24">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Connect</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar