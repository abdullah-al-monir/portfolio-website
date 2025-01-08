import Title from "../components/Title";

const Education = () => {
  return (
    <div className="overflow-hidden">
      <Title text={"Education"} />
      <div className="text-white container px-5 md:px-20 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:ml-0 ml-10">
          <div
            data-aos="zoom-out-up"
            className="bg-[#144182] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="tracking-widest text-lg title-font font-medium mb-1">
              BSc (2018 - 2024)
            </h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium mb-3 text-[#2EDEF5]">
              Bachelor of Science
            </h1>
            <p className="leading-relaxed mb-3">National University</p>
            <p>Department of Mathematics</p>
          </div>
          <div
            data-aos="zoom-out-up"
            className="bg-[#144182] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="tracking-widest text-lg title-font font-medium mb-1">
              HSC (2017)
            </h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium mb-3 text-[#2EDEF5]">
              Higher Secondary Certificate
            </h1>
            <p className="leading-relaxed mb-3">
              Uttar Kattali Al-Haj Mostofa Hakim Degree College
            </p>
            <p>Science Group</p>
          </div>
          <div
            data-aos="zoom-out-up"
            className="bg-[#144182] p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h2 className="tracking-widest text-lg title-font font-medium mb-1">
              SSC (2015)
            </h2>
            <h1 className="title-font sm:text-2xl text-xl font-medium mb-3 text-[#2EDEF5]">
              Secondary School Certificate
            </h1>
            <p className="leading-relaxed mb-3">
              Bangladesh Railway Govt. High School
            </p>
            <p>Science Group</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;