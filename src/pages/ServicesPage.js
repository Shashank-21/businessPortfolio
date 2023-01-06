import CategoryCard from "../components/CategoryCard";
import Skeleton from "../components/Skeleton";
import { useFetchServiceCategoriesQuery } from "../store";

function ServicesPage() {
  const { data, isError, isFetching } = useFetchServiceCategoriesQuery();
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-4xl bold">Services</h3>
        <div className="container">
          {isFetching && (
            <div className="h-screen">
              <Skeleton className="w-full h-10" times={10} />
            </div>
          )}
          {data &&
            data.map((category) => {
              return (
                <CategoryCard category={category} key={category.categoryId} />
              );
            })}
          {isError && (
            <div className="w-full text-center p-5 text-5xl">
              Oh no there has been an error!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;
