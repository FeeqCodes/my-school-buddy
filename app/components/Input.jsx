import React from "react";

const Input = ({ handleFileChange,  fileInputRef }) => {
  return (
    <>
      <input
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        type="file"
        accept=".jpg"
      />
    </>
  );
};

export default Input;
