import { useSelector } from "react-redux";

function ServiceType({ type }) {
  const currency = useSelector((state) => state.currency);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="flex flex-col justify-around">
      <div className="flex flex-row justify-between">
        <span>{type.type}</span>
        <span>
          {currency === "INR" ? `₹${type.rateINR}` : `$${type.rateUSD}`}
        </span>
      </div>
      {type.specialOffers && <div>Special offers: {type.specialOffers}</div>}
      {type.samples && type.samples[0] && (
        <ul>
          {type.samples.map((sample, index) => {
            return (
              <li>
                <a href={sample.link} key={index}>
                  {sample.text}
                </a>
              </li>
            );
          })}
        </ul>
      )}
      {type.testimonials && type.testimonials[0] && (
        <ul>
          {type.testimonials.map((testimonial, index) => {
            return (
              <li key={index}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.title}</p>
                <p>{testimonial.testimonial}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default ServiceType;
