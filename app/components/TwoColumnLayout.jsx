import React from "react";

const TwoColumnLayout = ({ leftChildren, rightChildren }) => {
  return (
    <div className="relative w-full h-full p-[40px] flex gap-[50px] justify-between  my-[5vh] z-10">
      {/* Left Side */}
      <div className="w-[60%] h-full flex justify-between gap-[60px]">
        {leftChildren}
      </div>

      {/* Right Side */}
      <div className="w-[40%] h-full flex justify-end">{rightChildren}</div>
    </div>
  );
};

export default TwoColumnLayout;
