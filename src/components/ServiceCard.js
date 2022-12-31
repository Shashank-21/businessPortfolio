import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useSelector } from "react-redux";
import ServiceType from "./ServiceType";

function ServiceCard({ service }) {
  console.log(service);
  const theme = useSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div
      className={`w-4/5 text-xl mx-auto my-5 p-5 flex flex-row justify-between flex-wrap items-center rounded-lg ${
        theme === "light"
          ? "bg-blue-300 text-gray-900"
          : "bg-neutral-600 text-gray-50"
      }`}
      onClick={handleClick}
    >
      <h4 className="bold">{service.serviceName}</h4>
      {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      {isOpen && (
        <div className="w-full p-3 flex flex-col justify-between">
          <p>{service.serviceDescription}</p>
          <div className="mt-5">
            <h3 className="text-lg bold">Prices:</h3>
            <div>
              {service.serviceCategories.map((type, index) => {
                return <ServiceType key={index} type={type} />;
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ServiceCard;
