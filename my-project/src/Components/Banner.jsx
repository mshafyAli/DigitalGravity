
// import { FaFacebookF, FaBehance } from "react-icons/fa";
// import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
// import { BsLinkedin } from "react-icons/bs";
// import { IoLogoYoutube } from "react-icons/io";
// import { HiMiniArrowLongRight } from "react-icons/hi2";

// const Banner = () => {
//   return (
//     <div className="w-full  h-auto flex items-center">
//       <div className="md:w-[80%] w-full mx-auto py-12 md:py-[8rem] ">
//         <div className="md:flex justify-between items-center md:pt-0 pt-20">
//           <div className="md:flex gap-2 flex-col hidden">
//             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//               <FaFacebookF color="white" size={15} />
//             </div>
//             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//               <FaXTwitter color="white" size={15} />
//             </div>
//             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//               <FaSquareInstagram color="white" size={15} />
//             </div>
//             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//               <BsLinkedin color="white" size={15} />
//             </div>
//             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//               <IoLogoYoutube color="white" size={15} />
//             </div>
//             <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//               <FaBehance color="white" size={15} />
//             </div>
//           </div>

//           <div className="md:text-right text-center">
//             <h1 className="text-primary font-bold text-3xl md:text-6xl lg:text-7xl">
//               CONNECTING BRANDS
//             </h1>
//             <h1 className="font-bold text-white text-2xl md:text-6xl lg:text-7xl">
//               WITH GLOBAL
//             </h1>
//             <h1 className="font-bold text-white text-2xl md:text-6xl lg:text-7xl">
//               AUDIENCES
//             </h1>
//           </div>
//         </div>

//         <div className="text-white mt-2 w-[50%] px-20">
//           <p className="text-sm">
//             You have an idea, we have the talent and resources to turn it into a
//             reality. Digital Gravity is a globally recognized digital agency
//             elevating brands through ground-breaking user experience and
//             disruptive digital products.
//           </p>
//           <div className="flex group gap-2 items-center mt-4">
//             <h1 className="cursor-pointer">Let&apos;s Talk</h1>
//             {/* <button className=" "><div className="w-8 h-8 rounded-full bg-primary p-2 hover:bg-white hover:text-primary transform transition-transform duration-200 hover:translate-x-1 hover:translate-y-1 hover:rotate-45"><HiMiniArrowLongRight className="" /></div></button> */}
//             <button className="w-8 h-8  rounded-full bg-primary p-2 group-hover:bg-white group-hover:text-primary">
//             <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
//           </button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;



import { FaFacebookF, FaBehance } from "react-icons/fa";
import { FaXTwitter, FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
import { SiTrustpilot } from "react-icons/si";


const Banner = () => {
  return (
    <div className="w-full h-auto flex items-center">
      <div className="md:w-[80%] w-full mx-auto py-12 md:py-[8rem]">
        <div className="md:flex justify-between items-center md:pt-0 pt-[8rem]">
          {/* Social Media Icons */}
          <div className="md:flex gap-2 flex-col hidden">
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <FaFacebookF color="white" size={15} />
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <FaXTwitter color="white" size={15} />
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <FaSquareInstagram color="white" size={15} />
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <BsLinkedin color="white" size={15} />
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <IoLogoYoutube color="white" size={15} />
            </div>
            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
              <FaBehance color="white" size={15} />
            </div>
          </div>

          {/* Main Text */}
          <div className="md:text-right text-center mt-4 md:mt-0">
            <h1 className="text-primary font-bold text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              CONNECTING BRANDS
            </h1>
            <h1 className="font-bold text-white text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
              WITH GLOBAL
            </h1>
            <h1 className="font-bold text-white text-2xl md:text-5xl lg:text-6xl xl:text-7xl">
              AUDIENCES
            </h1>
          </div>
        </div>

        {/* Description and Button */}
        <div className=" mt-2 w-full md:w-[50%] px-4 md:px-20">
          <p className="text-sm text-white md:text-base text-center md:text-start pt-14 md:pt-0">
            You have an idea, we have the talent and resources to turn it into a
            reality. Digital Gravity is a globally recognized digital agency
            elevating brands through ground-breaking user experience and
            disruptive digital products.
          </p>

          <div className="flex justify-center md:justify-start gap-4  text-white">
                <div className="bg-[#00000080] md:w-44 h-16 p-2 rounded-md border border-white">
                  <div className="flex items-center justify-between h-full">
                    <div>
                    < SiTrustpilot  className="w-8 h-8 md:w-9 md:h-9 text-primary" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <h1 className="text-base font-bold">4.9</h1>
                        <div className="flex">
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarHalfOutline color="#E85F2A" />
                        </div>
                      </div>
                      <h1 className="text-sm">UK Top Writers</h1>
                    </div>
                  </div>
                </div>

                <div className="bg-[#00000080]  md:w-44 h-16 p-2 rounded-md border border-white">
                  <div className="flex items-center justify-between h-full">
                    <div>
                     
                      < SiTrustpilot  className="w-8 h-8 md:w-9 md:h-9 text-primary" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <h1 className="text-base font-bold">4.8</h1>
                        <div className="flex">
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarSharp color="#E85F2A" />
                          <IoStarHalfOutline color="#E85F2A" />
                        </div>
                      </div>
                      <h1 className="text-sm">TrustPilot</h1>
                    </div>
                  </div>
                </div>

             
              </div>


          <div className="flex text-white group gap-2 items-center md:justify-start justify-center mt-4 py-8 md:py-0 ">
            <h1 className="cursor-pointer">Let&apos;s Talk</h1>
            <button className="w-8 h-8 rounded-full bg-primary p-2 group-hover:bg-white group-hover:text-primary">
              <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
