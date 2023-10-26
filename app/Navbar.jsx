



import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className=" flex justify-between p-6 px-16 z-10 m-auto bg-transparent shadow-lg   w-full">
        <div>Study AI</div>
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