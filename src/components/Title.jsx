const Title = ({ text }) => {
  return (
    <div
      data-aos="flip-up"
      className="text-center  my-14 uppercase overflow-hidden"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#88afdd] font-semibold tracking-widest">
        {text}
      </h2>
    </div>
  );
};

export default Title;
