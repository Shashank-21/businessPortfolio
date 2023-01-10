import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";

function TestimonialOptions() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="my-5 flex flex-row justify-center items-center">
      {location.pathname !== "/testimonials" && (
        <Button
          primary
          className="mx-5"
          onClick={() => navigate("/testimonials")}
        >
          View Testimonials
        </Button>
      )}
      {location.pathname !== "/testimonials/give" && (
        <Button
          primary
          className="mx-5"
          onClick={() => navigate("/testimonials/give")}
        >
          Give a Testimonial
        </Button>
      )}
    </div>
  );
}

export default TestimonialOptions;
