import Slider from "react-slick/lib/slider";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brand1 from "../assets/1.svg";
import brand3 from "../assets/3.svg";
import brand4 from "../assets/4.svg";
import brand5 from "../assets/5.svg";
import brand6 from "../assets/6.svg";
import brand7 from "../assets/7.svg";
import brand8 from "../assets/8.svg";
import brand9 from "../assets/9.svg";
import brand10 from "../assets/10.svg";
import brand11 from "../assets/11.svg";
import brand12 from "../assets/12.svg";
import brand13 from "../assets/13.svg";
import brand14 from "../assets/14.svg";
import brand15 from "../assets/15.svg";
import brand16 from "../assets/16.svg";
import brand17 from "../assets/17.svg";
import brand18 from "../assets/18.svg";
import brand19 from "../assets/19.svg";
import brand20 from "../assets/20.svg";
import brand21 from "../assets/21.svg";
import brand22 from "../assets/22.svg";
import brand23 from "../assets/23.svg";
import brand24 from "../assets/24.svg";
import brand25 from "../assets/25.svg";
import brand26 from "../assets/26.svg";
import brand27 from "../assets/27.svg";
import brand28 from "../assets/28.svg";
import brand29 from "../assets/29.svg";
import brand30 from "../assets/30.svg";
import brand31 from "../assets/31.svg";
import brand32 from "../assets/32.svg";



const brandSectionOne = [
  {id: 1,img: brand1,},

  {
    id: 3,
    img: brand3,
  },
  {
    id: 4,
    img: brand4,
  },
  {
    id: 5,
    img: brand5,
  },
  {
    id: 6,
    img: brand6,
  },
  {
    id: 7,
    img: brand7,
  },
  {
    id: 8,
    img: brand8,
  },
  {
    id: 9,
    img: brand9,
  },
  {
    id: 10,
    img: brand10,
  },
  {
    id: 11,
    img: brand11,
  },
  {
    id: 12,
    img: brand12,
  },
  {
    id: 13,
    img: brand13,
  },
  {
    id: 14,
    img: brand14,
  },
  {
    id: 15,
    img: brand15,
  },
  {
    id: 16,
    img: brand16,
  },
  {
    id: 17,
    img: brand17,
  },
  
 
  
];
const brandSectionTwo =[

    {
        id: 18,
        img: brand18,
      },
    
      {
        id: 19,
        img: brand19,
      },
      {
        id: 20,
        img: brand20,
      },
      {
        id: 21,
        img: brand21,
      },
      {
        id: 22,
        img: brand22,
      },
      {
        id: 23,
        img: brand23,
      },
      {
        id: 24,
        img: brand24,
      },
      {
        id: 25,
        img: brand25,
      },
      {
        id: 26,
        img: brand26,
      },
      {
        id: 27,
        img: brand27,
      },
      {
        id: 28,
        img: brand28,
      },
      {
        id: 29,
        img: brand29,
      },
      {
        id: 30,
        img: brand30,
      },
      {
        id: 31,
        img: brand31,
      },
      {
        id: 32,
        img: brand32,
      },
    
]


const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    swipeToSlide: true,
    draggable: true,
    slidesToShow: 7, 
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots: false, 
    arrows: false, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
    ],
  };


const Brands = () => {
  return (
    <div className="bg-moreLightGray w-full h-auto">
      <div className="w-[90%] mx-auto">
        <h1 className="md:w-1/4 text-2xl pt-12 mx-10 ">We are ready to uplift your <span className="text-primary font-semibold">brand like many others in </span>the past!</h1>

       <div className=" cursor-grab"
       >
      <Slider {...settings}>
      {
            brandSectionOne.map((brand) => (
                <div key={brand.id} >
                    <img src={brand.img} className="w-[10rem] flex items-center h-auto filter grayscale hover:grayscale-0 object-cover transition-transform duration-300"  alt="" />
                </div>
            ))
        }
      </Slider>
       </div>


       <div className="cursor-grab pb-12">
        {
             <Slider {...settings}>
             {
                   brandSectionTwo.map((brand) => (
                       <div key={brand.id} >
                           <img src={brand.img} className="w-[10rem] flex items-center h-auto filter grayscale hover:grayscale-0 object-cover transition-transform duration-300"  alt="" />
                       </div>
                   ))
               }
             </Slider>
        }
       </div>

      </div>
    </div>
  );
};

export default Brands;




// import { motion } from "framer-motion";
// import brand1 from "../assets/1.svg";
// import brand2 from "../assets/2.svg";
// import brand3 from "../assets/3.svg";
// import brand4 from "../assets/4.svg";
// import brand5 from "../assets/5.svg";
// import brand6 from "../assets/6.svg";
// import brand7 from "../assets/7.svg";
// import brand8 from "../assets/8.svg";

// const brandSectionOne = [
//   { id: 1, img: brand1 },
//   { id: 2, img: brand2 },
//   { id: 3, img: brand3 },
//   { id: 4, img: brand4 },
//   { id: 5, img: brand5 },
//   { id: 6, img: brand6 },
//   { id: 7, img: brand7 },
//   { id: 8, img: brand8 },
// ];

// const Brands = () => {
//   return (
//     <div className="bg-moreLightGray w-full h-auto">
//       <div className="w-[90%] mx-auto">
//         <h1 className="w-1/4 text-2xl pt-12 mx-10">
//           We are ready to uplift your{" "}
//           <span className="text-primary font-semibold">brand like many others in </span>
//           the past!
//         </h1>

//         <motion.div
//           className="flex items-center px-6 cursor-grab overflow-hidden"
//           drag="x" // Enable horizontal dragging
//           dragConstraints={{ left: -100, right: 0 }} // Adjust the drag limits for a wider area
//         >
//           {brandSectionOne.map((brand) => ( // Display all images for dragging
//             <motion.div key={brand.id} className=" mx-2 flex-shrink-0">
//               <img
//                 src={brand.img}
//                 className="w-[10rem] h-auto filter grayscale hover:grayscale-0 object-cover transition-transform duration-300"
//                 alt={`Brand ${brand.id}`}
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Brands;
