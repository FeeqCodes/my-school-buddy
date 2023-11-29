


import React from 'react'

const Button = ({ buttonText, top, blur, bg, text }) => {
  return (
    <div 
      className={` font-airStrike absolute py-4 px-12  shadow shadow-black border-[2px] border-black rounded-[20px]  ${top} ${blur} ${bg} ${text} flex justify-center hover:top-[0px] transition-all duration-200 `}>
      {buttonText}
    </div>
  );
}

export default Button