import { BsLinkedin } from "react-icons/bs";
import { FaBehance } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import heroFormBg from "../../assets/heroFormBg.svg";
import { useState } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Banner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [textArea, setTextArea] = useState("");

  return (
    <div className="w-[90%] mx-auto pt-20">
      <div className=" flex flex-col md:flex-row justify-between ">
        {/* left side container */}
        <div className="">
          <div className="flex items-center justify-start gap-10">
            {/* left side  */}

            <div className="md:flex flex-col hidden justify-center items-center  pt-4">
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent text-white flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <FaBehance
                    className=" duration-500 ease-in-out text-white group-hover:text-primary"
                    size={15}
                  />
                </div>

                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <IoLogoYoutube
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2"></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <BsLinkedin
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <FaSquareInstagram
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                  <FaXTwitter
                    className="text-white duration-500 ease-in-out group-hover:text-primary"
                    size={15}
                  />
                </div>
                <div className="w-[1px] h-8 bg-white mb-2 "></div>
              </div>
              <div className="group rounded-full w-8 h-8 bg-transparent flex justify-center items-center duration-500 ease-in-out hover:bg-white">
                <BsLinkedin
                  className="text-white duration-500 ease-in-out group-hover:text-primary"
                  size={15}
                />
              </div>

              {/* <div className="flex flex-col items-start justify-end mt-4 h-full">
                <h1 className="text-white uppercase transform rotate-90 origin-bottom">
                  SOCIALIZE 
                </h1>
              </div> */}
            </div>

            {/* right side */}
            <div className="md:w-1/2 w-full">
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Our Digital Services Create Lovely Projects & Deliver Memorable
                Experiencesf
              </h1>
            </div>
          </div>
        </div>

        {/* right side */}
        {/* md:relative z-10 md:-top-[35rem] */}
        <div className="py-8">
          <img
            src={heroFormBg}
            className="bg-darkGray relative hidden  -right-[3.95rem] md:w-[600px] md:h-[600px]"
            alt="heroFormBg"
          />
          <div className="bg-white md:w-[400px] md:h-[500px] w-full h-full  px-8 py-6">
            <h1 className="font-bold text-xl">Speak to an Expert</h1>
            <p className="text-sm mt-4">
              if you have any RFP requirement please share with us at&nbsp;
              <span className="text-primary">
                discover@digitalgravity.ae
              </span>{" "}
              and if you are looking for a career related enquiry please check
              our <span className="text-primary">Career</span> section.
            </p>
            <div>
              <form action="" className="">
                <div className="relative h-10 w-full my-3">
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`block w-full h-full text-sm border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:ring-0 focus:border-black peer`}
                  />
                  <label
                    className={`absolute left-0 bottom-2 text-gray-500 text-[10px] transition-all duration-300 pointer-events-none
            peer-focus:bottom-8 peer-focus:text-gray-500 
            ${name ? "bottom-8 text-[10px]" : ""}`}
                  >
                    Your Name*
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                    <div
                      className={`h-full w-full  transform origin-center scale-x-0 transition-transform duration-300 
              peer-focus:scale-x-100 ${name ? "scale-x-100" : ""}`}
                    />
                  </div>
                </div>
                <div className="relative h-10 w-full my-3">
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full h-full text-sm border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:ring-0 focus:border-black peer`}
                  />
                  <label
                    className={`absolute left-0 bottom-2 text-gray-500 text-[10px] transition-all duration-300 pointer-events-none
      peer-focus:bottom-8 peer-focus:text-gray-500 peer-focus:text-[10px]
      ${email ? "bottom-8 text-[10px]" : ""}`}
                  >
                    Your Email*
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                    <div
                      className={`h-full w-full transform origin-center scale-x-0 transition-transform duration-300 
        peer-focus:scale-x-100 ${email ? "scale-x-100" : ""}`}
                    />
                  </div>
                </div>

                <div className="relative h-10 w-full my-3">
                  <input
                    type="number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full h-full border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:ring-0 focus:border-black peer"
                  />
                  <label
                    className={`absolute left-0 bottom-2 text-gray-500 text-[10px] transition-all duration-300 pointer-events-none peer-focus:bottom-8 peer-focus:text-gray-500  ${
                      phone ? "bottom-8 text-[10px]" : ""
                    }`}
                  >
                    Phone Number*
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                    <div
                      className={`h-full w-full transform origin-center scale-x-0 transition-transform duration-300 
        peer-focus:scale-x-100 ${phone ? "scale-x-100" : ""}`}
                    />
                  </div>
                </div>

                <div className="relative h-10 w-full my-3">
                  <textarea
                    required
                    value={textArea}
                    onChange={(e) => setTextArea(e.target.value)}
                    className="block w-full h-14 border-0 border-b border-gray-400 bg-transparent focus:outline-none focus:ring-0 focus:border-black peer"
                  />
                  <label
                    className={`absolute left-0 bottom-2 text-gray-500 text-[10px] transition-all duration-300 pointer-events-none peer-focus:bottom-8 peer-focus:text-gray-500 ${
                      textArea ? "bottom-8 text-[10px]" : ""
                    }`}
                  >
                    Your Message*
                  </label>
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-transparent">
                    <div
                      className={`h-full w-full transform origin-center scale-x-0 transition-transform duration-300 
      peer-focus:scale-x-100 ${textArea ? "scale-x-100" : ""}`}
                    />
                  </div>
                </div>

                <div className="group cursor-pointer flex items-center gap-2 mt-10">
                  <h2 className="hover:bg-white group-hover:text-primary text-base font-semibold">
                    Send
                  </h2>
                  <button className="w-8 h-8 text-white group rounded-full bg-primary p-2 group-hover:bg-white group-hover:text-primary hover:text-primary shadow-md">
                    <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
