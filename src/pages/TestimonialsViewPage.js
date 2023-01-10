import Skeleton from "../components/Skeleton";
import TestimonialCard from "../components/TestimonialCard";
import { useFetchServiceCategoriesQuery } from "../store";
import { extractTestimonials } from "../utils/utility-functions";

function TestimonialsViewPage() {
  const { data, isFetching } = useFetchServiceCategoriesQuery();
  const testimonials = extractTestimonials(data);
  console.log(testimonials);
  return (
    <div className="flex flex-col justify-around items-center flex-wrap w-full">
      <h3 className="text-3xl bold my-5">Testimonials</h3>
      {isFetching ? (
        <Skeleton className="w-2/3 h-20" times={6} />
      ) : (
        testimonials.map((testimonial) => {
          return <TestimonialCard testimonial={testimonial} />;
        })
      )}
    </div>
  );
}

export default TestimonialsViewPage;
