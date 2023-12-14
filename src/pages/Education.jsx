import Title from "../components/Title";
import { JackInTheBox } from "react-awesome-reveal";
const Education = () => {
  return (
    <div className="overflow-hidden">
      <Title text={"Education"} />
      <div className="text-white ">
        <div className="container px-5 md:px-20  mx-auto">
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 w-full lg:w-1/3 ">
              <JackInTheBox>
                <div className="h-full  bg-[#144182] px-8  py-16 rounded-2xl text-center relative flex justify-center flex-col">
                  <h2 className="tracking-widest text-lg title-font font-medium  mb-1">
                    SSC (2015)
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3">
                    Secondary School Certificate
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Bangladesh Railway Govt. High School
                  </p>
                  <p>Science Group</p>
                </div>
              </JackInTheBox>
            </div>

            <div className="p-4 w-full lg:w-1/3">
              <JackInTheBox>
                <div className="h-full bg-[#144182] px-8  py-16 rounded-2xl  text-center relative flex justify-center flex-col">
                  <h2 className="tracking-widest text-lg title-font font-medium  mb-1">
                    HSC (2017)
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3">
                    Higher Secondary Certificate
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Uttar Kattali Al-Haj Mostofa Hakim Degree College
                  </p>
                  <p>Science Group</p>
                </div>
              </JackInTheBox>
            </div>
            <div className="p-4 w-full lg:w-1/3">
              <JackInTheBox direction="up">
                <div className="h-full  py-16 bg-[#144182] px-8 rounded-2xl text-center relative flex justify-center flex-col">
                  <h2 className="tracking-widest text-lg title-font font-medium  mb-1">
                    BSc (2018 - present)
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium  mb-3">
                    Bachelor of Science
                  </h1>
                  <p className="leading-relaxed mb-3">National University</p>
                  <p>Department of Mathematics</p>
                </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
