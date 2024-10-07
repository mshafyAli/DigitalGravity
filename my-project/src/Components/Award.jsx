import badge1 from "../assets/bagde1.svg";
import badge2 from "../assets/bagde2.svg";
import badge3 from "../assets/bagde3.svg";
import badge4 from "../assets/bagde4.webp";

const Award = () => {
  return (
    <div className="bg-AwardBg w-full bg-cover h-full ">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <div className="md:py-10 py-4">
          
          <h1 className="text-6xl text-white font-bold ">Awards</h1>

          <div className="pt-10 pb-24 flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2 w-full">
              <h1 className="text-white font-bold text-3xl hidden md:block">
                <span className="font-semibold">Digital Gravity, a</span> <br />
                Synonym of Quality, Trust and <br /> Distinction
              </h1>
              <h1 className="text-white font-bold text-3xl block md:hidden">
                <span className="font-semibold">Digital Gravity,a&nbsp;</span>
                Synonym of Quality, Trust and Distinction
              </h1>
              <p className="text-white text-sm pt-2">
                Client satisfaction is one of our top priorities. Our
                consistency, dedication toward work, and constant innovation
                have won us several accolades in the last decade.
                <span className="font-bold">
                  {" "}
                  Hire web designers and web developers in Dubai
                </span>{" "}
                from Digital Gravity to build highly responsive, scalable, and
                robust web applications with a touch of finesse.
              </p>
            </div>

            <div className="flex gap-[2px] md:mt-24 mt-0">
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <img src={badge1} className="w-[6rem]" alt="" />
              </div>
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <img src={badge2} className="w-[6rem]" alt="" />
              </div>
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <img src={badge3} className="w-[6rem]" alt="" />
              </div>
              <div className="bg-white md:w-[8rem] md:h-[8rem] flex items-center justify-center">
                <img src={badge4} className="w-[6rem]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Award;
