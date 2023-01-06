import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Dropdown({ options, value, onChange, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) {
        return;
      }
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (selectedOption) => {
    setIsOpen(false);
    onChange(selectedOption);
  };
  const renderedOptions = options.map((option, index) => {
    return (
      <div
        className={`w-full text-center hover:bg-blue-200 ${
          !className && "text-xl"
        } cursor-pointer my-2 p-2`}
        onClick={() => handleOptionClick(option)}
        key={index}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div
      ref={divElement}
      className={`${
        !className && "w-80 h-12 bg-blue-50 border border-blue-500"
      } relative  ${className}`}
    >
      <div
        className={`h-full flex justify-between items-center cursor-pointer my-auto`}
        onClick={handleClick}
      >
        <p className={`ml-5 ${!className && "text-xl"}`}>
          {value?.value ? value.label : ""}
        </p>
        <GoChevronDown className="text-xl mr-2" />
      </div>
      {isOpen && (
        <div className="absolute flex flex-col z-10 justify-around items-center top-full bg-blue-50 w-full border border-blue-500">
          {renderedOptions}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
