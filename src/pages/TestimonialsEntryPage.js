import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import {
  useAddDataMutation,
  useFetchServiceCategoriesQuery,
  changeSelectedService,
} from "../store";
import {
  getCategoriesAndServicesList,
  getTestimonialData,
} from "../utils/utility-functions";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";

function TestimonialsEntryPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedService = useSelector((state) => state.selectedService);

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [addTestimonial] = useAddDataMutation();
  const { data } = useFetchServiceCategoriesQuery();

  const { serviceList, categoryList, reducedCategoryList } =
    getCategoriesAndServicesList(data);

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleDesignationChange = (event) => {
    setDesignation(event.target.value);
  };
  const handleTestimonialChange = (event) => {
    setTestimonial(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const testimonialData = { name, designation, testimonial, isShown: false };
    addTestimonial({
      category: selectedService.categoryName,
      updatedData: getTestimonialData(data, selectedService, testimonialData),
    });
    setIsSubmitted(true);
    setTimeout(() => {
      navigate("/testimonials");
    }, 2000);
  };

  return (
    <div className="flex flex-col justify-between items-center w-full">
      <h3 className="text-3xl bold my-3">Have you worked with me?</h3>
      <form
        className="flex flex-col justify-around items-center bg-blue-200 shadow-xl w-11/12 mx-auto my-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl bold my-10">
          A testimonial from you will be helpful, and very much appreciated!
        </p>
        <div className="flex flex-row items-center justify-around w-11/12 my-5">
          <div className="flex flex-row justify-start w-2/5 items-center">
            <label className="mr-5 text-xl">Name</label>
            <input
              type="text"
              onChange={handleNameChange}
              value={name}
              className="h-12 w-full px-2 border border-gray-900"
            />
          </div>
          <div className="flex flex-row justify-start w-2/5 items-center">
            <label className="mr-5 text-xl">Designation</label>
            <input
              type="text"
              onChange={handleDesignationChange}
              value={designation}
              className="h-12 w-full px-2 border border-gray-900"
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center w-11/12 my-5">
          <div className="flex flex-row justify-center items-center w-full">
            <p className="my-5 text-xl mr-5">Select Category</p>
            <Dropdown
              onChange={onOptionChange}
              value={reducedCategoryList.find(
                (category) => category.value === selectedService.categoryName
              )}
              options={reducedCategoryList}
            />
          </div>
          <div className="flex flex-row justify-center items-center w-full">
            <p className="my-5 text-xl mr-5">Select Service</p>
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

        <div className="flex flex-col justify-around items-center w-11/12">
          <h4 className="text-2xl bold text-center mt-10">Testimonial</h4>
          <textarea
            className="mx-5 my-5 border border-gray-900 rounded-lg text-xl p-2 h-40 w-full"
            value={testimonial}
            onChange={handleTestimonialChange}
          />
        </div>
        <Button primary={!isSubmitted} success={isSubmitted} className="mb-5">
          Submit
        </Button>
      </form>
      {isSubmitted && (
        <div className="text-green-800 text-lg text-center w-full my-5">
          Thank you for your kind words!
        </div>
      )}
    </div>
  );
}

export default TestimonialsEntryPage;
