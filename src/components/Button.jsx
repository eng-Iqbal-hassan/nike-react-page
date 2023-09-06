import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
      $ {fullWidth && "w-full"}
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red  text-white border-coral-red"
    }
    `}
    >
      {label}
      {iconURL && (
        <img src={iconURL} alt="icon" className="rounded-full w-5 h-5 ml-2 " />
      )}
    </button>
  );
};

export default Button;
