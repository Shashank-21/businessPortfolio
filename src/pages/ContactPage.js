import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import {
  useAddServiceRequestMutation,
  useFetchServiceCategoriesQuery,
  changeSelectedService,
  changeCurrency,
} from "../store";
import { getCountryCallingCode } from "libphonenumber-js";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedService = useSelector((state) => {
    return state.selectedService;
  });
  const countries = ["IN", "US"];
  const countryCodeOptions = countries.map((country) => {
    const countryCode = getCountryCallingCode(country);
    return {
      label: `${country} +${countryCode}`,
      value: `+${countryCode}`,
    };
  });
  const [addServiceRequest] = useAddServiceRequestMutation();
  const { data } = useFetchServiceCategoriesQuery();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [code, setCode] = useState({});
  const [contactError, setContactError] = useState(false);
  const [datePicked, setDatePicked] = useState("");
  const [timePicked, setTimePicked] = useState("");
  const [infoText, setInfoText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const serviceList = [];
  const categoryList = [];
  const reducedCategoryList = [];
  if (data) {
    for (let category of data) {
      for (let serviceItem of category.services) {
        serviceList.push({
          label: serviceItem.serviceName,
          value: serviceItem.serviceName,
          serviceCategory: category.categoryName,
        });
        categoryList.push({
          label: category.categoryName,
          value: category.categoryName,
        });
        if (
          reducedCategoryList.find((element) => {
            return element.label === category.categoryName;
          })
        ) {
          continue;
        } else {
          reducedCategoryList.push({
            label: category.categoryName,
            value: category.categoryName,
          });
        }
      }
    }
  }

  const onOptionChange = (option) => {
    if (
      serviceList.find((element) => {
        return element.value === option.value;
      })
    ) {
      dispatch(
        changeSelectedService({
          serviceName: option.value,
          categoryName:
            categoryList[
              serviceList.findIndex((element) => element.value === option.value)
            ].value,
        })
      );
    } else if (
      categoryList.find((element) => {
        return element.value === option.value;
      })
    ) {
      if (option.value === selectedService.categoryName) return;
      else {
        dispatch(
          changeSelectedService({
            serviceName: "",
            categoryName: option.value,
          })
        );
      }
    }
  };

  const handleDateChange = (event) => {
    setDatePicked(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTimePicked(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleContactChange = (event) => {
    setContact(event.target.value);
  };
  const handleCodeChange = (selectedCode) => {
    setCode(selectedCode);
    if (code === "IN") dispatch(changeCurrency("INR"));
    else if (code === "US") dispatch(changeCurrency("USD"));
  };
  const handleInfoTextChange = (event) => {
    setInfoText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!contact.match("[0-9]{10}")) {
      setContactError(true);
      return;
    }
    if (contact.match("[0-9]{10}")) {
      setContactError(false);
    }
    const requestData = {
      name,
      email,
      phone: `${code.value}-${contact}`,
      date: datePicked,
      time: timePicked,
      ...selectedService,
      additionalInformation: infoText,
    };

    const updatedData = data
      .filter(
        (category) => category.categoryName === selectedService.categoryName
      )
      .map((category) => {
        return {
          ...category,
          services: category.services.map((service) => {
            if (service.serviceName !== selectedService.serviceName) {
              return service;
            } else {
              if (!service.requests) {
                return { ...service, requests: [requestData] };
              } else {
                return {
                  ...service,
                  requests: [...service.requests, requestData],
                };
              }
            }
          }),
        };
      })[0];
    addServiceRequest({ category: selectedService.categoryName, updatedData });
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-around">
      <h3 className="text-5xl bold py-5 mt-5 text-center">Contact Me!</h3>
      <form
        className="flex flex-col justify-around items-center border-2 border-blue-500 bg-blue-300 container mx-auto my-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col justify-between items-center px-10 py-5 border border-blue-900 my-5 w-11/12 rounded-lg">
          <h4 className="text-2xl bold w-full text-center">Your Details</h4>
          <div className="flex flex-row items-center justify-between mx-5 mb-5 w-full">
            <div className="flex flex-row items-center justify-around mx-5 mb-5 w-2/5">
              <label className="text-xl mr-5">Name</label>
              <input
                type="text"
                onChange={handleNameChange}
                value={name}
                className="h-12 w-full px-2 border border-gray-900"
              />
            </div>
            <div className="flex flex-row items-center justify-around mx-5 my-5 w-2/5">
              <label className="text-xl mr-5">Email</label>
              <input
                type="text"
                onChange={handleEmailChange}
                value={email}
                className="h-12 w-full px-2 border border-gray-900"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-around mx-5 mt-5 w-2/5">
            <label className="text-xl mr-5 w-40">Contact No</label>
            <div
              className={`flex flex-row justify-start h-12 w-full border ${
                contactError ? "border-red-600" : "border-gray-900"
              }`}
            >
              <Dropdown
                className="w-1/3 bg-white"
                options={countryCodeOptions}
                value={code}
                onChange={handleCodeChange}
              />
              <input
                type="tel"
                onChange={handleContactChange}
                value={contact}
                className="px-3 h-full w-2/3 text-xl"
              />
            </div>
          </div>
          {contactError && (
            <p className="text-red-600 text-sm">
              Phone number must be of 10 digits!
            </p>
          )}
        </div>
        <div className="flex flex-row justify-between items-center w-11/12">
          <div className="flex flex-col justify-around py-5 my-5 w-2/5 border border-blue-900 rounded-lg">
            <div className="flex flex-row justify-around items-center w-full">
              <p className="my-5 text-xl">Select Category</p>
              <Dropdown
                onChange={onOptionChange}
                value={reducedCategoryList.find(
                  (category) => category.value === selectedService.categoryName
                )}
                options={reducedCategoryList}
              />
            </div>
            <div className="flex flex-row justify-around items-center w-full">
              <p className="my-5 text-xl px-3">Select Service</p>
              <Dropdown
                onChange={onOptionChange}
                value={serviceList.find(
                  (service) => service.value === selectedService.serviceName
                )}
                options={serviceList.filter((service) =>
                  service.serviceCategory.includes(selectedService.categoryName)
                )}
              />
            </div>
          </div>
          <div className="flex flex-col justify-around py-5 my-5 w-2/5 border border-blue-900 items-center rounded-lg">
            <h4 className="text-2xl bold my-3">
              When's a good time to call you?
            </h4>
            <div className="flex flex-row justify-around items-center my-3 w-full">
              <div className="flex flex-row justify-around items-center">
                <label className="text-xl mr-3">Date</label>
                <input
                  className="h-12 w-40 px-2 text-center border border-gray-900"
                  type="date"
                  onChange={handleDateChange}
                  value={datePicked}
                />
              </div>
              <div className="flex flex-row justify-around items-center">
                <label className="text-xl mr-3">Time</label>
                <input
                  className="h-12 w-40 text-center px-2 border border-gray-900"
                  type="time"
                  onChange={handleTimeChange}
                  value={timePicked}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around w-11/12 border border-blue-900 rounded-lg">
          <h4 className="text-2xl bold text-center my-5">
            Additional Information
          </h4>
          <textarea
            className="mx-5 mb-5 border border-gray-900 rounded-lg text-xl p-2 h-40"
            value={infoText}
            onChange={handleInfoTextChange}
          />
        </div>
        <Button
          primary={!isSubmitted}
          success={isSubmitted}
          className="my-5 mx-auto"
        >
          Submit
        </Button>
      </form>
      {isSubmitted && (
        <div className="text-green-800 text-lg text-center w-full my-5">
          Thank you! I will be in touch with you soon!
        </div>
      )}
    </div>
  );
}

export default ContactPage;
