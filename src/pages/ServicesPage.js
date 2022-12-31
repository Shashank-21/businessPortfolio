import { useSelector } from "react-redux";
import CategoryCard from "../components/CategoryCard";

function ServicesPage() {
  const theme = useSelector((state) => state.theme);
  const serviceCategories = useSelector((state) => state.serviceCategories);
  return (
    <div className={`${theme}`}>
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-4xl bold">Services</h3>
        <div className="container">
          {serviceCategories.map((category) => {
            return (
              <CategoryCard category={category} key={category.categoryId} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
