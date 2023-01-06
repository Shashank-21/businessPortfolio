import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
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
  console.log(currency);
  const [hasEnoughContent, setHasEnoughContent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(
      !!service.serviceDescription +
        !!service.specialOffers +
        service.samples.length +
        service.testimonials.length
    );
    if (
      !!service.serviceDescription +
      !!service.specialOffers +
      service.samples.length +
      service.testimonials.length
    )
      setHasEnoughContent(true);
  }, [service]);

  console.log(testimonialToDisplay);

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

  const openButton = isOpen ? (
    <GoChevronUp onClick={handleExpansionClick} />
  ) : (
    <GoChevronDown onClick={handleExpansionClick} />
  );

  return (
    <div className="flex flex-col justify-around border rounded-xl px-5 py-5 my-5 w-2/5 h-fit bg-blue-300 border-blue-900">
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
            <div className="text-xl w-fit mx-auto mt-5 bg-blue-900 text-white p-3">
              {service.specialOffers}
            </div>
          )}
          {service.samples[0] && (
            <Fragment>
              <h4 className="text-lg">Samples:</h4>
              <ul>
                {service.samples.map((sample, index) => {
                  return (
                    <li key={index}>
                      <a href={sample.link}>{sample.title}</a>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          )}
          {service.testimonials[0] && (
            <div>
              <h4 className="text-xl bold mt-4">
                Here's what the customers have to say:
              </h4>
              <div className="px-10 py-5 rounded-lg my-3 w-4/5 m-auto bg-blue-900 text-blue-50">
                <p>{testimonialToDisplay.feedback}</p>
                <p className="mt-3 mr-2 text-2xl bold">
                  {testimonialToDisplay.name}
                </p>
                <p className="mr-2">- {testimonialToDisplay.designation}</p>
              </div>
              <div className="flex flex-row justify-center">
                {service.testimonials.map((testimonial, index) => {
                  return (
                    <div
                      className={`h-5 w-5 mx-3 rounded-full ${
                        index === activeIndex ? "bg-blue-900" : "bg-blue-400"
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
      <Button
        className="mt-10 text-lg w-fit mx-auto"
        primary
        onClick={handleBookingClick}
      >
        Book Now!
      </Button>
    </div>
  );
}
export default ServiceCard;
