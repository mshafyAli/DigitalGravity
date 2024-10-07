// import worth1 from '../assets/worth1.webp'
// import worth2 from '../assets/worth2.webp'
// import worth3 from '../assets/worth3.webp'
// import worth5 from '../assets/worth5.webp'
// import worth6 from '../assets/worth6.webp'


// const WorthData = [
//     { id: 1, image: worth1, alt: "Project 1", title: "Digital Marketing", description: "Arabic SEO: Guide To Running A Successful SEO Campaign In Dubai" },
//     { id: 2, image: worth2, alt: "Project 2", title: "Digital Marketing", description: "Influencer Marketing Trends For 2024: A Complete Influencer Marketing Guide For Marketers" },
//     { id: 3, image: worth3, alt: "Project 3", title: "Ecommerce", description: "A Detailed Overview on Facebook for WooCommerce" },
//     { id: 4, image: worth5, alt: "Project 4", title: "DG NEWS", description: "GITEX Global 2022: A look into the Future of Modern Middle East" },
//     { id: 5, image: worth6, alt: "Project 5", title: "UI/UX", description: "UX Audit Checklist For Every Business" },
   
//     // { id: 6, image: worth6, alt: "Project 5", title: "CryptoSouk", description: "Developing a user-friendly interface for a business with dedicated efforts to the real estate industry." },
    
// ];


// const Worth = () => {
//   return (
//     <div className="bg-moreLightGray w-full h-[600px] py-12">

// <div className="pl-24 mb-8">
//         <h1 className="text-4xl md:text-6xl  font-bold">Our Work</h1>
//       </div>

// <div className='flex items-center gap-2'>
// {
//     WorthData.map((item) => (
//         <div key={item.id} className= "min-w-[20rem]">
//             <img src={item.image} alt={item.alt} className=" h-[16rem]" />
//             <div className='flex justify-between items-center gap-8 py-2'>
//                 <h1 className="text-[10px] font-bold text-[#7C7C7C] ">{item.title}</h1>
//                 <p className="text-[10px] text-black">{item.description}</p>
//             </div>
//         </div>
//     ))
// }
// </div>


//     </div>
//   )
// }

// export default Worth

// import { motion } from "framer-motion"; 
// import worth1 from '../assets/worth1.webp';
// import worth2 from '../assets/worth2.webp';
// import worth3 from '../assets/worth3.webp';
// import worth5 from '../assets/worth5.webp';
// import worth6 from '../assets/worth6.webp';
// import { PiHandGrabbingBold } from "react-icons/pi";


// const WorthData = [
//   { id: 1, image: worth1, alt: "Project 1", title: "Digital Marketing", description: "Arabic SEO: Guide To Running A Successful SEO Campaign In Dubai" },
//   { id: 2, image: worth2, alt: "Project 2", title: "Digital Marketing", description: "Influencer Marketing Trends For 2024: A Complete Influencer Marketing Guide For Marketers" },
//   { id: 3, image: worth3, alt: "Project 3", title: "Ecommerce", description: "A Detailed Overview on Facebook for WooCommerce" },
//   { id: 4, image: worth5, alt: "Project 4", title: "DG NEWS", description: "GITEX Global 2022: A look into the Future of Modern Middle East" },
//   { id: 5, image: worth6, alt: "Project 5", title: "UI/UX", description: "UX Audit Checklist For Every Business" },
// ];

// const Worth = () => {
//   return (
//     <div className="bg-moreLightGray w-full h-auto py-12 overflow-hidden"> 
//       <div className="pl-24 mb-8">
//         <h1 className="text-4xl md:text-6xl font-bold">Worth A Read</h1>
//       </div>

//       {/* Container is draggable */}
//       <motion.div 
//         className="flex items-center gap-4  cursor-grab" 
//         drag="x" // Enable horizontal dragging
//         dragConstraints={{ right: 0, left: -600 }} // Limit drag movement
//         dragElastic={0.2} // Drag resistance
//       >
//         {
//           WorthData.map((item) => (
//             <motion.div 
//               key={item.id} 
//               className="w-[20rem] h-[22rem] flex-shrink-0"
//             >
//               <img 
//                 src={item.image} 
//                 alt={item.alt} 
//                 className="w-full h-[20rem] object-cover filter transition-transform duration-300 pointer-events-none" 
//               />
//               <div className='flex justify-between items-center gap-10 py-2'>
//                 <h1 className="text-[10px] font-bold text-[#7C7C7C]">{item.title}</h1>
//                 <p className="text-[10px] text-black">{item.description}</p>
//               </div>
//             </motion.div>
//           ))
//         }
//       </motion.div>

           

//             <div>
//             <motion.div 
//           className=" mt-6"
//           animate={{ x: [-20, 20, -20] }} 
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//         >
//           <PiHandGrabbingBold className="mx-auto text-2xl" />
//         </motion.div>

//         <h4 className="text-[10px] text-[#7C7C7C] text-center">Drag to see more</h4>
//             </div>

//     </div>
//   );
// };

// export default Worth;



import { motion } from "framer-motion"; 
import worth1 from '../assets/worth1.webp';
import worth2 from '../assets/worth2.webp';
import worth3 from '../assets/worth3.webp';
import worth5 from '../assets/worth5.webp';
import worth6 from '../assets/worth6.webp';
import { PiHandGrabbingBold } from "react-icons/pi";

const WorthData = [
  { id: 1, image: worth1, alt: "Project 1", title: "Digital Marketing", description: "Arabic SEO: Guide To Running A Successful SEO Campaign In Dubai" },
  { id: 2, image: worth2, alt: "Project 2", title: "Digital Marketing", description: "Influencer Marketing Trends For 2024: A Complete Influencer Marketing Guide For Marketers" },
  { id: 3, image: worth3, alt: "Project 3", title: "Ecommerce", description: "A Detailed Overview on Facebook for WooCommerce" },
  { id: 4, image: worth5, alt: "Project 4", title: "DG NEWS", description: "GITEX Global 2022: A look into the Future of Modern Middle East" },
  { id: 5, image: worth6, alt: "Project 5", title: "UI/UX", description: "UX Audit Checklist For Every Business" },
];

const Worth = () => {
  return (
    <div className="bg-moreLightGray w-full h-auto py-12 overflow-hidden"> 
      <div className="pl-24 mb-8">
        <h1 className="text-4xl md:text-6xl font-bold">Worth A Read</h1>
      </div>

      {/* Container is draggable */}
      <motion.div 
        className="flex items-center gap-4 cursor-grab"
        drag="x" // Enable horizontal dragging
        dragConstraints={{ right: 0, left: -2000 }} // Limit drag movement
        dragElastic={0.2} // Drag resistance
        initial={{ x: 0 }} // Start position
      >
        {/* Duplicate the WorthData to create a seamless effect */}
        {[...WorthData, ...WorthData].map((item) => (
          <motion.div 
            key={item.id} 
            className="w-[20rem] h-[22rem] flex-shrink-0"
          >
            <img 
              src={item.image} 
              alt={item.alt} 
              className="w-full h-[20rem] object-cover filter transition-transform duration-300 pointer-events-none" 
            />
            <div className='flex justify-between items-center gap-10 py-2'>
              <h1 className="text-[10px] font-bold text-[#7C7C7C]">{item.title}</h1>
              <p className="text-[10px] text-black">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div>
        <motion.div 
          className="mt-6"
          animate={{ x: [-20, 20, -20] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <PiHandGrabbingBold className="mx-auto text-2xl" />
        </motion.div>

        <h4 className="text-[10px] text-[#7C7C7C] text-center">Drag to see more</h4>
      </div>
    </div>
  );
};

export default Worth;


