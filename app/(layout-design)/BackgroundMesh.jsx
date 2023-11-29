import React from 'react'

const BackgroundMesh = () => {
  return (
    <>
      {/* Absolute items */}
      <div className=" absolute m-auto  w-[95vw] h-full blur-[150px] overflow-hidden">
        <div className="absolute top-[10%] w-[450px] right-[10%] h-[450px] bg-[#6107A8]  "></div>
        <div className="absolute top-0 w-[500px] left-[10%] h-[500px] bg-[#092AA1]  rounded-full"></div>
        <div className="absolute top-[-20%] w-[450px] left-[30%] h-[450px] bg-[#120f0f]  rounded-full"></div>
        <div className="absolute top-[30%] w-[500px] left-[30%] h-[500px] bg-[#1A223F]  rounded-full"></div>
      </div>
    </>
  );
}

export default BackgroundMesh