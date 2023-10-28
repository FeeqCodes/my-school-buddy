
import React from 'react'
import Button from './Button';
import ButtonWrapper from './ButtonWrapper';






const Hero = ({  title, paragraph, buttonText }) => {
  return (
    <>
      {/* Content */}
      <div className={`flex flex-col justify-between gap-5 text-white `}>
        <div className="">
          <h1
            style={{ color: "rgba(255, 255, 255, 0.72)" }}
            className="font-airStrike text-[7vw] leading-[100%] mb-[2rem]"
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
          />
        </div>
      </div>
    </>
  );
}

export default Hero