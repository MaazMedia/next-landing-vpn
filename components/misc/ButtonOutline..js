import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide p-3 border border-green-500 text-green-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-green-500 hover:text-white-500 transition-all hover:shadow-green ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
