import React, { useState, useRef, useEffect } from "react";
import { ArrowDown } from "../../../public/icons/iconsExport";

interface DropdownProps {
  label?: string;
  options?: { label: string; value: string }[];
  placeHolder?: string;
  value?: { label: string; value: string };
  css?: string;
  textColor?: string;
  borderColor?: string;
  onChange?: (option: { label: string; value: string }) => void;
}

const ReusableDropDown = ({
  options = [],
  css,
  placeHolder,
  textColor,
  borderColor,
  value,
  onChange,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{
    label: string;
    value: string;
  } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: { label: string; value: string }) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={popupRef} className="w-[118px]">
      <div
        className={`flex justify-center relative w-full mt-1 cursor-pointer`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`py-1 px-3 text-xs rounded-md bg-white w-full flex justify-between items-center shadow-md  ${
            textColor && textColor
          } ${css}`}
        >
          {value
            ? value.label
            : selectedOption
            ? selectedOption.label
            : placeHolder
            ? placeHolder
            : "Select option"}

          <ArrowDown className="text-xs text-black" />
        </div>
        {isOpen && (
          <div>
            {options.length > 0 ? (
              <ul
                className={`absolute bg-white rounded shadow-md overflow-hidden text-xs mt-2 ${
                  borderColor ? borderColor : ""
                } top-full left-0 mt-1 z-20 w-full font-medium`}
              >
                {options.map((option) => (
                  <li
                    key={option.label}
                    onClick={() => handleOptionClick(option)}
                    className={`p-2 pl-6 hover:bg-gray-100`}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="absolute bg-white rounded top-1 left-0 z-20 w-full font-medium">
                <div className="p-2 pl-6 text-sm">No Options</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReusableDropDown;
