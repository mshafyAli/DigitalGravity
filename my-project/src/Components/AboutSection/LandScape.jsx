// import AboutLaptop from "../../assets/AboutLaptop.webp"
// import AboutMobile from "../../assets/AboutMobile.webp"
// const LandScape = () => {
//   return (
//     <div className="w-full h-[400px] mt-24">
//       <div className="bg-lightGray w-full h-auto">
        
//         <div className=" ">
//         <div className="pl-[7rem] pt-12 pb-10 w-1/2">
//           <h1 className="font-bold text-2xl pr-10">
//             We Pilot You to Take on the Digital Landscape
//           </h1>
//           <p className="text-sm pt-2 text-[#7C7C7C]">
//             At Digital Gravity, we have leading industry professionals and
//             state-of-the-art technology to ensure your business and brands lifts
//             up on the digital front. Our approach is highly strategic and
//             carefully executed to transform your business the way you want,
//             guaranteeing incredible results and maximum profit.
//           </p>
//         </div>

           
//         </div>

//       </div>
//       <div className="grid grid-cols-2 w-1/2 relative z-50 ml-auto -top-[18rem] shadow-md ">
//                 <div className="bg-white  h-[12rem] py-12 px-4"> 
//                     <h1 className="font-bold text-base">We are <span className="text-primary ">Different</span></h1>
//                     <p className="text-sm pt-4 text-[#7C7C7C]">Our creative expertise and approach take-off from where others left for greater outcome.</p>
//                 </div>
//                 <div className="bg-darkGray h-[12rem]">
//                     <img src={AboutLaptop} className="relative -top-[3rem]" alt="AboutLaptop" />
//                 </div>
//                 <div className="bg-primary  h-[9rem]">
//                     <img src={ AboutMobile} className="" alt=" AboutMobile" />
//                 </div>
//                 <div className="bg-[#E7E7E7]  h-[9rem] px-4 py-4">
//                 <h1 className="font-bold text-base">Our <span className="text-primary ">Inventive</span>Style</h1>
//                     <p className="text-sm pt-4 text-[#7C7C7C]">
//                     We take your business as our own and give it just the makeover you want for the digital world. </p>
//                 </div>
//             </div>
//     </div>
//   );
// };

// export default LandScape;



import AboutLaptop from "../../assets/AboutLaptop.webp";
import AboutMobile from "../../assets/AboutMobile.webp";

const LandScape = () => {
  return (  
    <div className="w-full md:h-[400px] h-auto  mt-24">
      <div className="bg-lightGray w-full h-auto">
        <div className="flex flex-col md:flex-row">
          <div className="px-4 md:pl-[7rem] pt-8 md:pt-12 pb-10 md:w-1/2">
            <h1 className="font-bold text-2xl  md:pr-10 pr-0">
              We Pilot You to Take on the Digital Landscape
            </h1>
            <p className="md:text-sm text-base pt-2 text-[#7C7C7C]">
              At Digital Gravity, we have leading industry professionals and
              state-of-the-art technology to ensure your business and brands
              lifts up on the digital front. Our approach is highly strategic and
              carefully executed to transform your business the way you want,
              guaranteeing incredible results and maximum profit.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-3/4 lg:w-1/2 relative z-10 ml-auto  md:-top-[18rem] md:shadow-md   md:px-0">
        {/* First box */}
        <div className="bg-white h-[12rem]  py-8 px-4">
          <h1 className="font-bold md:text-base text-xl">
            We are <span className="text-primary">Different</span>
          </h1>
          <p className="md:text-sm text-base pt-4 text-[#7C7C7C]">
            Our creative expertise and approach take off from where others left
            for greater outcomes.
          </p>
        </div>

        {/* Image box with laptop */}
        <div className="bg-darkGray h-[12rem] flex justify-center items-center">
          <img
            src={AboutLaptop}
            className="relative -top-8 md:-top-[3rem] w-[80%] md:w-auto"
            alt="AboutLaptop"
          />
        </div>

        {/* Image box with mobile */}
        <div className="bg-primary md:h-[9rem] h-auto flex justify-center items-center md:items-start">
          <img
            src={AboutMobile}
            className="w-[80%]  md:w-auto"
            alt="AboutMobile"
          />
        </div>

        {/* Last box */}
        <div className="bg-[#E7E7E7]   h-[9rem] px-4 py-4">
          <h1 className="font-bold md:text-base text-xl">
            Our <span className="text-primary">Inventive</span> Style
          </h1>
          <p className="md:text-sm text-base pt-4 text-[#7C7C7C]">
            We take your business as our own and give it just the makeover you
            want for the digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandScape;
