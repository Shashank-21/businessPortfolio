function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col bg-blue-200 shadow-xl w-2/3 m-5 rounded-xl">
      <div className="m-5">
        <div className="p-2 text-sm text-blue-50 bg-blue-900 rounded shadow-md w-fit">
          {testimonial.service}
        </div>
        <div className="w-11/12 mx-auto my-5 text-xl">
          "{testimonial.testimonial}"
        </div>
        <div className="flex flex-col justify-start items-center w-fit mx-10">
          <span className="text-3xl bold my-2">-{testimonial.name}</span>
          <span className="text-xl ">{testimonial.designation}</span>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;
