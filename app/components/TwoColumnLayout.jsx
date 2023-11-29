import React from "react";

const TwoColumnLayout = ({ leftChildren, rightChildren, alignment }) => {
  return (
    <div
      className={`relative w-full h-auto py-[40px] flex gap-[5rem] justify-between   my-[5vh] z-10 ${
        alignment ? "items-start" : "items-center"
      }`}
    >
      {/* Left Side */}
      <div className="w-[60%] h-full flex justify-between gap-[20px]">
        {leftChildren}
      </div>

      {/* Right Side */}
      <div className="w-[40%] h-full flex justify-end">{rightChildren}</div>
    </div>
  );
};

export default TwoColumnLayout;
