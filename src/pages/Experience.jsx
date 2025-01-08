import { useEffect, useState } from "react";
import Title from "../components/Title";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/experiences.json")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[100vh]">
        loading
        {/* <Spinner className="h-10 w-10 text-center text-secondary" /> */}
      </div>
    );
  }

  return (
    <div className="my-20 container mx-auto p-5 md:px-20 text-white">
      <Title text={"Experience"} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 md:ml-0 ml-10">
        {experiences.map((experience, idx) => (
          <div
            key={idx}
            className="shadow-md rounded-lg bg-[#144182] p-5 hover:shadow-lg hover:scale-101 transition duration-300 border border-gray-700"
          >
            <div className="flex space-x-3">
              <FaBriefcase className="text-3xl lg:text-4xl text-[#2EDEF5]" />
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#2EDEF5]">
                {experience.role}
              </h1>
            </div>
            <div className="space-y-5 mt-5">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white">
                {experience.company}
              </h2>
              <p className="text-md md:text-lg lg:text-xl text-gray-100">
                {experience.startDate} - {experience.endDate}
              </p>
              <ul className="list-disc ml-5 space-y-2 text-gray-100">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;