import { useSelector } from "react-redux";

function ServicesPage() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`${theme} h-screen`}>
      <div className="flex flex-col justify-center items-center py-5">
        <h3 className="text-4xl bold">Services Offered</h3>
      </div>
    </div>
  );
}

export default ServicesPage;
