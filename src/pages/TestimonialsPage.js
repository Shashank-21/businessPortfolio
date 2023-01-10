import { useOutlet } from "react-router-dom";
import TestimonialOptions from "../components/TestimonialOptions";

function TestimonialsPage() {
  const testimonialsOutlet = useOutlet();
  return (
    <div className="my-5 flex flex-col items-center justify-between">
      {testimonialsOutlet}
      <TestimonialOptions />
    </div>
  );
}

export default TestimonialsPage;
