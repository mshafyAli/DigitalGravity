// import { BsLinkedin } from "react-icons/bs"
// import { FaBehance, FaFacebookF } from "react-icons/fa"
// import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6"
// import { IoLogoYoutube } from "react-icons/io"
// import social1 from "../assets/social1.webp"
// import social2 from "../assets/social2.webp"
// import social3 from "../assets/social3.webp"
// import social4 from "../assets/social4.webp"
// import social5 from "../assets/social5.webp"
// import social6 from "../assets/social6.webp"
// import social7 from "../assets/social7.webp"
// import social8 from "../assets/social8.webp"
// import social9 from "../assets/social9.webp"

// const Social = () => {
//   return (
//     <div className="bg-lightGray w-full h-auto mt-16">
//             <div className="w-[90%] mx-auto">
//                <div className="py-12">
//                <h4 className="text-center text-2xl">GET SOCIAL</h4>
//                 <h1 className="text-center text-4xl">Join the conversation</h1>
//                 <div className="flex justify-center items-center gap-4 pt-4">
//                     <FaXTwitter color="black" size={20}/>
//                     <FaFacebookF color="black" size={20}/>
//                     <FaSquareInstagram color="black" size={20}/>
//                     <IoLogoYoutube color="black" size={20}/>
//                     <BsLinkedin color="black" size={20}/>
//                     <FaBehance color="black" size={20}/>

//                 </div>
//                </div>

//                <div className="flex flex-wrap justify-center pb-12">
//                     <img src={social1} className="w-[30rem] h-[15rem] object-cover" alt="" />
//                     <img src={social2} className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social3}  className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social4}  className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social5}  className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social6}  className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social7}  className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social8}  className="w-[15rem] h-[15rem] object-cover" alt="" />
//                     <img src={social9}  className="w-[15rem] h-[15rem] object-cover" alt="" />

//                </div>
//             </div>
//     </div>
//   )
// }

// export default Social

import { BsLinkedin } from "react-icons/bs";
import { FaBehance, FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import social1 from "../assets/social1.webp";
import social2 from "../assets/social2.webp";
import social3 from "../assets/social3.webp";
import social4 from "../assets/social4.webp";
import social5 from "../assets/social5.webp";
import social6 from "../assets/social6.webp";
import social7 from "../assets/social7.webp";
import social8 from "../assets/social8.webp";
import social9 from "../assets/social9.webp";

const Social = () => {
  return (
    <div className="bg-lightGray w-full h-auto mt-16">
      <div className="w-[90%] mx-auto">
        <div className="py-12">
          <h4 className="text-center text-2xl">GET SOCIAL</h4>
          <h1 className="text-center text-4xl">Join the conversation</h1>
          <div className="flex justify-center items-center  pt-4">
            <div className="group rounded-full w-10 h-10 bg-lightGray flex justify-center items-center duration-500 ease-in-out hover:bg-primary">
              <FaXTwitter
                className="text-black duration-500 ease-in-out group-hover:text-white"
                size={20}
              />
            </div>

            <div className="group rounded-full w-10 h-10 bg-lightGray flex justify-center items-center duration-500 ease-in-out hover:bg-primary">
              <FaFacebookF
                className="text-black duration-500 ease-in-out group-hover:text-white"
                size={20}
              />
            </div>
            <div className="group rounded-full w-10 h-10 bg-lightGray flex justify-center items-center duration-500 ease-in-out hover:bg-primary">
              <FaSquareInstagram
                className="text-black duration-500 ease-in-out group-hover:text-white"
                size={20}
              />
            </div>
            <div className="group rounded-full w-10 h-10 bg-lightGray flex justify-center items-center duration-500 ease-in-out hover:bg-primary">
              <IoLogoYoutube
                className="text-black duration-500 ease-in-out group-hover:text-white"
                size={20}
              />
            </div>
            <div className="group rounded-full w-10 h-10 bg-lightGray flex justify-center items-center duration-500 ease-in-out hover:bg-primary">
              <BsLinkedin
                className="text-black duration-500 ease-in-out group-hover:text-white"
                size={20}
              />
            </div>

            <div className="group rounded-full w-10 h-10 bg-lightGray flex justify-center items-center duration-500 ease-in-out hover:bg-primary">
              <FaBehance
                className="text-black duration-500 ease-in-out group-hover:text-white"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-0 flex-wrap pb-12">
          <img
            src={social1}
            className="md:w-[40%] w-full h-[15rem] object-cover"
            alt=""
          />
          <img
            src={social2}
            className="md:w-[20%] w-[50%]  h-[15rem] object-cover"
            alt=""
          />
          <img
            src={social3}
            className="md:w-[20%] w-[50%] h-[15rem] object-cover"
            alt=""
          />
          <img
            src={social4}
            className="md:w-[20%] w-[50%] h-[15rem] object-cover"
            alt=""
          />
          <img src={social5} className="md:w-1/5 w-1/2 h-[15rem] object-cover" alt="" />
          <img src={social6} className="md:w-1/5 w-1/2 h-[15rem] object-cover" alt="" />
          <img src={social7} className="md:w-1/5 w-1/2 h-[15rem] object-cover" alt="" />
          <img src={social8} className="md:w-1/5 w-1/2 h-[15rem] object-cover" alt="" />
          <img src={social9} className="md:w-1/5 w-1/2 h-[15rem] object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Social;
