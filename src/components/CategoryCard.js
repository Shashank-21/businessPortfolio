import ServiceCard from "./ServiceCard";

function CategoryCard({ category }) {
  return (
    <div className="border bg-blue-100 border-blue-900 mx-auto my-10 rounded-xl pb-5">
      <h3 className="text-3xl bold text-center mt-0 rounded-t-xl p-5 mb-5 w-full bg-blue-300">
        {category.categoryName}
      </h3>
      <p className="text-xl text-center mx-20">
        {category.categoryDescription && category.categoryDescription}
      </p>
      <div className="flex flex-row justify-around flex-wrap mx-5">
        {category.services.map((service) => {
          return <ServiceCard service={service} key={service.serviceId} />;
        })}
      </div>
    </div>
  );
}

export default CategoryCard;
