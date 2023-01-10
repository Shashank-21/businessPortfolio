export const getCategoriesAndServicesList = (data) => {
  const serviceList = [];
  const categoryList = [];
  const reducedCategoryList = [];
  if (!data) return { serviceList, categoryList, reducedCategoryList };
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
  return { serviceList, categoryList, reducedCategoryList };
};

export const getServiceRequestData = (data, selectedService, requestData) => {
  return data
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
};
export const getTestimonialData = (data, selectedService, testimonialData) => {
  return data
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
            if (!service.testimonials) {
              return {
                ...service,
                testimonials: [{ ...testimonialData, isShown: true }],
              };
            } else {
              return {
                ...service,
                testimonials: [
                  ...service.testimonials,
                  {
                    ...testimonialData,
                    isShown: service.testimonials.length < 3,
                  },
                ],
              };
            }
          }
        }),
      };
    })[0];
};

export const extractTestimonials = (data) => {
  if (!data) return;
  const testimonials = [];
  for (let category of data) {
    for (let service of category.services) {
      for (let testimonial of service.testimonials) {
        testimonials.push({
          category: category.categoryName,
          service: service.serviceName,
          ...testimonial,
        });
      }
    }
  }
  return testimonials;
};
