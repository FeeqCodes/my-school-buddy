


import React from 'react'
import Button from './Button'

const ButtonWrapper = ({buttonText}) => {
  return (
    <button className="relative h-[15rem] bg-transparent">
      <Button
        text="text-transparent"
        blur=""
        bg="bg-white"
        top="top-[5px]"
        buttonText={buttonText}
      />

      <Button
        text="text-black"
        bg="bg-white"
        top="top-[0]"
        buttonText={buttonText}
      />
    </button>
  );
}

export default ButtonWrapper