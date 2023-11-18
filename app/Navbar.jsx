
'use client'


import Image from 'next/image';
import React, { useState } from 'react'

const Navbar = () => {

  const [account, setAccount] = useState(false)


  return (
    <>
      <nav className="relative flex justify-between items-center p-3 px-[40px] z-10 m-auto bg-transparent shadow-md  w-[60%] bg-black mt-5 font-corleone rounded-full backdrop-blur-md shadow-black">
        <div>
          <Image width={100} height={100} src="/assets/Study AI.svg" alt="" />
        </div>
        <ul className="text-white flex items-center justify-center gap-x-14">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>How to use</li>
        </ul>

        <div>
          <button className="border-solid border-2 border-white  p-2 px-6 bg-[#511781] rounded-full">
            {!account ? " Connect wallet" : "Welcome"}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar