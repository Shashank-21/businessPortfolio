import { useSelector } from "react-redux";
import ServiceCard from "./ServiceCard";

function CategoryCard({ category }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className={`border ${
        theme === "light"
          ? "bg-blue-200 border-blue-900"
          : "bg-neutral-800 border-neutral-200"
      } mx-auto my-10 rounded-xl pb-5`}
    >
      <h3
        className={`text-3xl bold text-center mt-0 rounded-t-xl p-5 mb-5 w-full ${
          theme === "light"
            ? "bg-blue-900 text-blue-50"
            : "bg-neutral-200 text-neutral-900"
        }`}
      >
        {category.categoryName}
      </h3>
      {category.services.map((service) => {
        return <ServiceCard service={service} key={service.serviceId} />;
      })}
    </div>
  );
}

export default CategoryCard;
