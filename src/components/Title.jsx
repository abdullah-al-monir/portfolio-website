import { Bounce } from "react-awesome-reveal";
const Title = ({ text }) => {
  return (
    <div className="text-center mb-20 uppercase overflow-hidden">
      <Bounce>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#88afdd] font-semibold tracking-widest">
          {text}
        </h2>
      </Bounce>
    </div>
  );
};

export default Title;
