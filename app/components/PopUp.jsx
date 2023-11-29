import React from "react";

const PopUp = ({ popUp }) => {
  return (
    <>
      {popUp && (
        <div
          style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
          className="absolute w-[15rem] h-[20rem] bg-white p-10 transition-all duration-300 backdrop-blur-md backdrop-filter"
        >
          <p className="font-loveYa text-sm">This is How to use The App</p>
        </div>
      )}
    </>
  );
};

export default PopUp;
