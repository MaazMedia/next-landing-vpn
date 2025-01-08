import React from "react";
// import { Tooltip } from "@nextui-org/react";

const ButtonPrimary = ({
  children,
  addClass,
  variant,
  tooltipContent = "Kickstart your academic journey",
  icon: Icon, // Add icon prop
}) => {
  const baseClass =
    "py-3 lg:py-4 px-12 lg:px-16 font-semibold rounded-lg transition-all outline-none ";
  const primaryClass = "text-white-500 bg-green-500 hover:shadow-green-md ";
  const outlineClass =
    "text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white-500 ";
  const buttonClass =
    baseClass +
    (variant === "outline" ? outlineClass : primaryClass) +
    addClass;
  return (
    <button className={buttonClass}>
      {Icon && <Icon className="mr-2" />} {/* Render icon if provided */}
      {children}
    </button>
  );
};

export default ButtonPrimary;
