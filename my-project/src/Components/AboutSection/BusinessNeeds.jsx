// import icon1 from "../../assets/icon1.svg";
// import icon2 from "../../assets/icon2.svg";
// import icon3 from "../../assets/icon3.svg";
// import icon4 from "../../assets/icon4.svg";
// import icon5 from "../../assets/icon5.svg";
// import icon6 from "../../assets/icon6.svg";
// import icon7 from "../../assets/icon7.svg";
// import icon8 from "../../assets/icon8.svg";
// import icon9 from "../../assets/icon9.svg";
// import icon10 from "../../assets/icon10.svg";
// import icon11 from "../../assets/icon11.svg";
// import icon12 from "../../assets/icon12.svg";
// import icon13 from "../../assets/icon13.svg";
// import icon14 from "../../assets/icon14.svg";
// import icon15 from "../../assets/icon15.svg";
// import icon16 from "../../assets/icon16.svg";
// import icon17 from "../../assets/icon17.svg";
// import icon18 from "../../assets/icon18.svg";
// import icon19 from "../../assets/icon19.svg";
// import icon20 from "../../assets/icon20.svg";
// import icon21 from "../../assets/icon21.svg";
// import icon22 from "../../assets/icon22.svg";
// import icon23 from "../../assets/icon23.svg";
// import icon24 from "../../assets/icon24.svg";
// import icon25 from "../../assets/icon25.svg";
// import icon26 from "../../assets/icon26.svg";
// import icon27 from "../../assets/icon27.svg";

// const icons1 = [
//   icon1,
//   icon2,
//   icon3,
//   icon4,
//   icon5,
//   icon6,
//   icon7,
//   icon8,
//   icon9,
//   icon10,
//   icon11,
//   icon12,
//   icon13,
//   icon14,
 
// ];

// const icons2 = [
//   icon15,
//   icon16,
//   icon17,
//   icon18,
//   icon19,
//   icon20,
//   icon21,
//   icon22,
//   icon23,
//   icon24,
//   icon25,
//   icon26,
//   icon27,
//   icon1,
  
// ];

// const BusinessNeeds = () => {
//   return (
//     <div className="bg-[#0A0014] w-full h-auto pb-12">
//       <div className="py-6 text-white text-center w-1/2 mx-auto">
//         <h1 className="  font-bold  text-3xl">
//           Futuristic Technology Unique to All <br /> Business Needs
//         </h1>
//         <p className="pt-2 text-sm">
//           We are experts with highly innovative and cutting-edge digital
//           technology, built exclusively around your business vision.
//         </p>
//       </div>
    

//       <SmallVideoCarousel/>
//       <SmallVideoCarousel2 />
//     </div>
//   );
// };

// export default BusinessNeeds;



// const SmallVideoCarousel = () => {
//   const carouselIcons = [...icons1, ...icons1];

//   return (
//   <div className="overflow-clip">
//      <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
//       {carouselIcons.map((icon, index) => (

//         <div key={index} className="">
//             <div
          
//           className="bg-white w-[4rem] h-[4rem] rounded-lg flex justify-center items-center "
//         >

//           <img src={icon} className="w-12 h-12" alt="icons" />
//         </div>
//         </div>
        
//       ))}
//     </div>
//   </div>
//   );


// }


// const SmallVideoCarousel2 = () => {
//   const carouselIcons = [...icons2, ...icons2];

//   return (
//   <div className="overflow-clip mt-3">
//      <div className="animate-carousel-move relative left-[var(--carousel-offset,0px)] flex gap-3">
//       {carouselIcons.map((icon, index) => (

//         <div key={index} className="">
//             <div
          
//           className="bg-white w-[4rem] h-[4rem] rounded-lg flex justify-center items-center "
//         >

//           <img src={icon} className="w-12 h-12" alt="icons" />
//         </div>
//         </div>
        
//       ))}
//     </div>
//   </div>
//   );
  

// }


import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import icon5 from "../../assets/icon5.svg";
import icon6 from "../../assets/icon6.svg";
import icon7 from "../../assets/icon7.svg";
import icon8 from "../../assets/icon8.svg";
import icon9 from "../../assets/icon9.svg";
import icon10 from "../../assets/icon10.svg";
import icon11 from "../../assets/icon11.svg";
import icon12 from "../../assets/icon12.svg";
import icon13 from "../../assets/icon13.svg";
import icon14 from "../../assets/icon14.svg";
import icon15 from "../../assets/icon15.svg";
import icon16 from "../../assets/icon16.svg";
import icon17 from "../../assets/icon17.svg";
import icon18 from "../../assets/icon18.svg";
import icon19 from "../../assets/icon19.svg";
import icon20 from "../../assets/icon20.svg";
import icon21 from "../../assets/icon21.svg";
import icon22 from "../../assets/icon22.svg";
import icon23 from "../../assets/icon23.svg";
import icon24 from "../../assets/icon24.svg";
import icon25 from "../../assets/icon25.svg";
import icon26 from "../../assets/icon26.svg";
import icon27 from "../../assets/icon27.svg";

const icons1 = [
  icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10,
  icon11, icon12, icon13, icon14,
];

const icons2 = [
  icon15, icon16, icon17, icon18, icon19, icon20, icon21, icon22, icon23,
  icon24, icon25, icon26, icon27,
];

const BusinessNeeds = () => {
  return (
    <div className="bg-[#0A0014] w-full h-auto pb-12">
      <div className="py-6 text-white text-center md:w-1/2 w-[90%] mx-auto">
        <h1 className="font-bold text-3xl hidden md:block">
          Futuristic Technology Unique to All <br /> Business Needs
        </h1>
        <h1 className="font-bold text-2xl block md:hidden">
          Futuristic Technology Unique to All Business Needs
        </h1>
        <p className="pt-2 md:text-sm text-base">
          We are experts with highly innovative and cutting-edge digital
          technology, built exclusively around your business vision.
        </p>
      </div>
      <SmallVideoCarousel />
      <SmallVideoCarousel2 />
    </div>
  );
};

export default BusinessNeeds;

const SmallVideoCarousel = () => {
  const carouselIcons = [...icons1, ...icons1, ...icons1]; // Loop back to icons1 after icons2

  return (
    <div className="overflow-clip">
      <div className="animate-carousel-move md:animate-carousel-moveMd flex gap-3">
        {carouselIcons.map((icon, index) => (
          <div key={index} className="">
            <div className="bg-white w-[5rem] h-[5rem] rounded-lg flex justify-center items-center">
              <img src={icon} className="w-16 h-16" alt={`icon-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmallVideoCarousel2 = () => {
  const carouselIcons = [...icons2, ...icons2, ...icons2]; // Loop back to icons2 after icons1

  return (
    <div className="overflow-clip mt-3">
      <div className="animate-carousel-move md:animate-carousel-moveMd flex gap-3">
        {carouselIcons.map((icon, index) => (
          <div key={index} className="">
            <div className="bg-white w-[5rem] h-[5rem] rounded-lg flex justify-center items-center">
              <img src={icon} className="w-16 h-16" alt={`icon-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



