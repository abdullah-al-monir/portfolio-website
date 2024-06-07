import { useEffect, useState } from "react";
import Title from "../components/Title";
import { FaCheckSquare } from "react-icons/fa";
import { SyncLoader } from "react-spinners";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [setLoading]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        <SyncLoader
          color="#36d7b7"
          className="h-10 w-10 text-center text-secondary"
        />
      </div>
    );
  }
  return (
    <div className="container mx-auto p-5 md:px-20 text-white overflow-hidden">
      <Title text={"Services"} />
      <div className="space-y-20 md:ml-0 ml-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex  md:items-center justify-between max-w-[1000px] mx-auto flex-col gap-10 my-5 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <img
              className="h-[300px] md:h-[500px] lg:h-96 rounded-2xl"
              src={service.img}
              alt=""
            />
            <div className="space-y-5 max-w-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#2EDEF5]">
                {service.title}
              </h1>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li className="flex gap-2 items-start" key={idx}>
                    <FaCheckSquare className="text-secondary text-green-600 text-xl min-w-5 mt-1" />
                    <p>{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
