
import React from 'react'
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';






const Hero = ({  title, paragraph, buttonText, display }) => {
  return (
    <>
      {/* Content */}
      <div className={`flex flex-col justify-between gap-5 text-white `}>
        <div className="">
          <h1
            style={{ color: "rgba(255, 255, 255, 0.72)" }}
            className=" text-[8vw] leading-[100%] my-[2rem] font-loveYa"
          >
            {" "}
            {title}
          </h1>
          <p className="">{paragraph}</p>
        </div>

      {/* Button */}
        <div className="mt-10">
          <ButtonWrapper
            buttonText={buttonText}  
            display={display}
          />
        </div>
      </div>
    </>
  );
}

export default Hero