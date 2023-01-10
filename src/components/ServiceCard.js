import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useFetchServiceCategoriesQuery } from "../store";
import { changeSelectedService } from "../store";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function ServiceCard({ service }) {
  const navigate = useNavigate();
  const { data } = useFetchServiceCategoriesQuery();
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const serviceList = [];
  const categoryList = [];
  for (let category of data) {
    for (let serviceItem of category.services) {
      serviceList.push(serviceItem.serviceName);
      categoryList.push(category.categoryName);
    }
  }
  const testimonialToDisplay = service.testimonials.filter(
    (testimonial, index) => {
      return index === activeIndex;
    }
  )[0];
  const currency = useSelector((state) => state.currency);
  const [hasEnoughContent, setHasEnoughContent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (
      !!service.serviceDescription +
      !!service.specialOffers +
      service.samples.length +
      service.testimonials.length
    )
      setHasEnoughContent(true);
  }, [service]);

  const handleExpansionClick = () => {
    setIsOpen((v) => !v);
  };

  const handleBookingClick = () => {
    dispatch(
      changeSelectedService({
        serviceName: service.serviceName,
        categoryName: categoryList[serviceList.indexOf(service.serviceName)],
      })
    );
    navigate("/contact");
  };

  const handleTestimonialClick = () => {
    dispatch(
      changeSelectedService({
        serviceName: service.serviceName,
        categoryName: categoryList[serviceList.indexOf(service.serviceName)],
      })
    );
    navigate("/testimonials/give");
  };

  const openButton = isOpen ? (
    <GoChevronUp onClick={handleExpansionClick} />
  ) : (
    <GoChevronDown onClick={handleExpansionClick} />
  );

  return (
    <div className="flex flex-col justify-around rounded-xl px-5 py-5 my-5 w-2/5 h-fit bg-blue-300 shadow-xl">
      <div className="flex flex-row justify-between text-2xl">
        <h4 className="bold mx-auto">{service.serviceName}</h4>
        {hasEnoughContent && openButton}
      </div>
      <h4 className="text-2xl mt-5 mx-auto">
        Price:{" "}
        {currency === "INR" ? `₹${service.rateINR}` : `$${service.rateUSD}`}{" "}
        <span className="ml-1">{service.rateUnit}</span>
      </h4>
      {isOpen && (
        <div className="m-2 flex flex-col justify-around">
          {service.serviceDescription && (
            <p className="text-lg">{service.serviceDescription}</p>
          )}
          {service.specialOffers && (
            <div className="text-xl w-fit mx-auto mt-5 bg-blue-900 text-white p-3 rounded-lg shadow-lg">
              {service.specialOffers}
            </div>
          )}
          {service.samples[0] && (
            <div className="mt-3 text-center">
              <h4 className="text-xl bold">Samples:</h4>
              <ul>
                {service.samples.map((sample, index) => {
                  return (
                    <li key={index} className="my-3 text-lg">
                      {index + 1}.{" "}
                      <a href={sample.link} target="_blank" rel="noreferrer">
                        {sample.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {service.testimonials[0] && (
            <div>
              <h4 className="text-xl bold mt-4">
                Here's what the customers have to say:
              </h4>
              <div className="px-10 py-5 rounded-lg my-3 w-4/5 m-auto bg-blue-900 text-blue-50 shadow-lg">
                <p>{testimonialToDisplay.testimonial}</p>
                <p className="mt-3 mr-2 text-2xl bold">
                  {testimonialToDisplay.name}
                </p>
                <p className="mr-2">- {testimonialToDisplay.designation}</p>
              </div>
              <div className="flex flex-row justify-center">
                {service.testimonials
                  .filter((testimonial) => testimonial.isShown)
                  .map((testimonial, index) => {
                    return (
                      <div
                        className={`h-5 w-5 mx-3 rounded-full shadow-md ${
                          index === activeIndex ? "bg-blue-900" : "bg-blue-500"
                        }`}
                        onClick={() => {
                          setActiveIndex(index);
                        }}
                      />
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        <Button
          className="mt-10 text-lg w-3/5 mx-5"
          primary
          onClick={handleBookingClick}
        >
          Book Now!
        </Button>
        <Button
          className="mt-5 text-xs w-fit mx-5"
          secondary
          onClick={handleTestimonialClick}
        >
          Give Testimonial
        </Button>
      </div>
    </div>
  );
}
export default ServiceCard;
