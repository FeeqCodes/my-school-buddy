import Image from "next/image";
import React from "react";

const SearchBox = () => {
  return (
    <>
      {/* Box */}
      <div
        style={{ backgroundColor: "rgba(255, 255, 255, 0.63)" }}
        className="z-[10] absolute w-[30vw] h-[70vh] p-[2rem] flex items-end rounded-[15px]  shadow-inner shadow-gray-900"
      >
        <div className="relative w-full h-auto  justify-items-end">
        
          <input className="p-6 w-full h-8 rounded-[20px] border-2 border-[#CCC1C1] shadow-md shadow-black text-black" 
            placeholder="Send A Message"
          />
          <Image width={20} height={10} alt="" src="/assets/send vector.png" className="absolute top-[30%] right-4">

          </Image>
        </div>
      </div>
    </>
  );
};

export default SearchBox;
