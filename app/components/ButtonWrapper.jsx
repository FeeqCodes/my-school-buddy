import React from "react";
import Button from "./Button";
// import Input from "./Input";


const ButtonWrapper = ({
  buttonText,
  display,
  endpoint,
  handleSubmit,
  handleButtonClick
}) => {

  


  return (
    <>
      <button
        onClick={handleButtonClick}
        className={`relative h-[15rem] bg-transparent ${display} p-button-success`}
      >
        <Button
          text="text-transparent"
          blur=""
          bg="bg-white"
          top="top-[0px]"
          buttonText={buttonText}
        />

        <Button
          text="text-black"
          bg="bg-white"
          top="top-[-5px]"
          buttonText={buttonText}
        />
      </button>
    </>
  );
};

export default ButtonWrapper;
