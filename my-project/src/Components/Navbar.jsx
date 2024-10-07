// import {NavLink}  from "react-router-dom";
// import { RiWhatsappFill } from "react-icons/ri";
// import { MdLocalPhone } from "react-icons/md";
// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png"
// // import ServiceHover from "./ServiceHover";

// const Navbar = () => {
//   const [navbarScrolled ,setNavbarScrolled]= useState(false);
//   //  const [showServiceHover, setShowServiceHover] = useState(false);

//   useEffect(()=>{
//     const handleScroll = () =>{
//       if(window.scrollY > 50){
//         setNavbarScrolled(true);
//       }
//       else{
//         setNavbarScrolled(false);
//       }

//     }
//     window.addEventListener("scroll",handleScroll);

//     // Cleanup the event listener when the component unmounts

//     return () => {
//             window.removeEventListener("scroll", handleScroll);
//           };
//   },[])

//   return (
//     <nav className={  ` ${navbarScrolled ? "bg-black bg-opacity-80" : "bg-transparent"} fixed top-0 left-0 w-full z-50 transition-colors duration-300 text-white flex justify-between items-center h-[3.5rem]`}>
//       <div className="flex items-center flex-grow">
//         <div className="bg-darkGray">
//           <img src={logo} className="w-[16rem] h-[3.5rem] pt-2 px-2" alt="logo" />
//         </div>
//       </div>
//       <ul className="hidden md:flex gap-4 flex-grow border border-white justify-center py-2">
//         {/* Navigation Links */}
//         <li>
//           <NavLink to="/" className={({isActive})=> isActive ? " hover:text-primary text-primary text-sm":"hover:text-primary text-sm"}>
//             HOME
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className={({isActive})=> isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             ABOUT
//           </NavLink>
//         </li>
//         {/* onMouseEnter={() => setShowServiceHover(true)} onMouseLeave={() => setShowServiceHover(false)} */}
//         <li  >
//           <NavLink to="/services" className={({isActive})=> isActive ? "hover:text-primary  text-primary text-sm" : "hover:text-primary text-sm"}>
//             SERVICES
//           </NavLink>
//           {/* {showServiceHover && <ServiceHover />}  */}
//         </li>
//         <li>
//           <NavLink to="/case-studies" className={({isActive})=> isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             CASE STUDIES
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/careers" className={({isActive})=> isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             CAREERS
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/blog" className={({isActive})=> isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             BLOG
//           </NavLink>
//         </li>
//       </ul>
//       <div className="flex items-center">
//         {/* Call to action button and contact */}
//         <button className="relative overflow-hidden bg-white w-full max-w-xs h-[3.5rem] text-primary font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-primary before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-white before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <span className="relative z-10 text-base">Speak to an Expert</span>
//         </button>

//         <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <RiWhatsappFill className="relative z-10" size={30} />
//         </button>

//         <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <MdLocalPhone className="relative z-10" size={30} />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { NavLink } from "react-router-dom";
// import { RiWhatsappFill } from "react-icons/ri";
// import { MdLocalPhone } from "react-icons/md";
// import { HiMenu } from "react-icons/hi"; // Import hamburger icon
// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [navbarScrolled, setNavbarScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavbarScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={` ${navbarScrolled ? "bg-black bg-opacity-80" : "bg-transparent"} fixed top-0 left-0 w-full z-50 transition-colors duration-300 text-white flex justify-between items-center h-[3.5rem]`}>
//       <div className="flex items-center flex-grow">
//         <div className="bg-darkGray">
//           <img src={logo} className="w-[16rem] h-[3.5rem] pt-2 px-2" alt="logo" />
//         </div>
//       </div>

//       {/* Hamburger Menu for mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           <HiMenu className="text-white text-2xl" />
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <ul className={`md:flex ${menuOpen ? "flex" : "hidden"} flex-col md:flex-row gap-4 border border-white flex-grow justify-center py-2   top-full left-0 w-full bg-black md:bg-transparent`}>
//         <li>
//           <NavLink to="/" className={({ isActive }) => isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             HOME
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/about" className={({ isActive }) => isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             ABOUT
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/services" className={({ isActive }) => isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             SERVICES
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/case-studies" className={({ isActive }) => isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             CASE STUDIES
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/careers" className={({ isActive }) => isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             CAREERS
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/blog" className={({ isActive }) => isActive ? "hover:text-primary text-primary text-sm" : "hover:text-primary text-sm"}>
//             BLOG
//           </NavLink>
//         </li>
//       </ul>

//       {/* Call to action button and contact */}
//       <div className="hidden md:flex items-center">
//         <button className="relative overflow-hidden bg-white w-full max-w-xs h-[3.5rem] text-primary font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-primary before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-white before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <span className="relative z-10 text-base">Speak to an Expert</span>
//         </button>

//         <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <RiWhatsappFill className="relative z-10" size={30} />
//         </button>

//         <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <MdLocalPhone className="relative z-10" size={30} />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import { NavLink } from "react-router-dom";
// import { RiWhatsappFill } from "react-icons/ri";
// import { MdLocalPhone } from "react-icons/md";
// import { HiMenu } from "react-icons/hi"; // Import hamburger icon
// import { useEffect, useState } from "react";
// import logo from "../assets/logo.png";
// import { IoClose } from "react-icons/io5";

// const Navbar = () => {
//   const [navbarScrolled, setNavbarScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

//   useEffect(() => {
//     const handleScroll = () => {
//       setNavbarScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav
//       className={` ${
//         navbarScrolled ? "bg-black bg-opacity-80" : "bg-black bg-opacity-40"
//       } fixed top-0 left-0 w-full z-50 transition-colors duration-300 text-white flex justify-between items-center h-[3.5rem]`}
//     >
//       <div className="flex items-center flex-grow">
//         <div className="">
//           <img src={logo} className="w-[12rem] h-[3rem] pt-2 px-2" alt="logo" />
//         </div>
//       </div>

//       {/* Hamburger Menu for mobile */}
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setMenuOpen(!menuOpen)}>

//           {
//             menuOpen ? <IoClose className="text-white text-2xl transition-transform duration-300" />: <HiMenu className="text-white text-2xl transition-transform duration-300" />
//           }

          
//         </button>
//       </div>

//       {/* Desktop Navigation Links */}
//       <ul className="hidden md:flex gap-4 flex-grow justify-center py-2">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "hover:text-primary text-primary text-sm"
//                 : "hover:text-primary text-sm"
//             }
//           >
//             HOME
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/about"
//             className={({ isActive }) =>
//               isActive
//                 ? "hover:text-primary text-primary text-sm"
//                 : "hover:text-primary text-sm"
//             }
//           >
//             ABOUT
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/services"
//             className={({ isActive }) =>
//               isActive
//                 ? "hover:text-primary text-primary text-sm"
//                 : "hover:text-primary text-sm"
//             }
//           >
//             SERVICES
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/case-studies"
//             className={({ isActive }) =>
//               isActive
//                 ? "hover:text-primary text-primary text-sm"
//                 : "hover:text-primary text-sm"
//             }
//           >
//             CASE STUDIES
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/careers"
//             className={({ isActive }) =>
//               isActive
//                 ? "hover:text-primary text-primary text-sm"
//                 : "hover:text-primary text-sm"
//             }
//           >
//             CAREERS
//           </NavLink>
//         </li>
//         <li>
//           <NavLink
//             to="/blog"
//             className={({ isActive }) =>
//               isActive
//                 ? "hover:text-primary text-primary text-sm"
//                 : "hover:text-primary text-sm"
//             }
//           >
//             BLOG
//           </NavLink>
//         </li>
//       </ul>

//       {/* Mobile Navigation Links */}


      
//       {menuOpen && (
//         <div className="md:hidden flex flex-col transition-all duration-500 ease-in  items-center bg-black fixed top-[3.5rem] left-0 w-full z-50 p-4">
//           <ul className="flex flex-col gap-4">
//             <li>
//               <NavLink
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "hover:text-primary text-primary text-sm"
//                     : "hover:text-primary text-sm"
//                 }
//               >
//                 HOME
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "hover:text-primary text-primary text-sm"
//                     : "hover:text-primary text-sm"
//                 }
//               >
//                 ABOUT
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/services"
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "hover:text-primary text-primary text-sm"
//                     : "hover:text-primary text-sm"
//                 }
//               >
//                 SERVICES
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/case-studies"
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "hover:text-primary text-primary text-sm"
//                     : "hover:text-primary text-sm"
//                 }
//               >
//                 CASE STUDIES
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/careers"
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "hover:text-primary text-primary text-sm"
//                     : "hover:text-primary text-sm"
//                 }
//               >
//                 CAREERS
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/blog"
//                 onClick={() => setMenuOpen(false)}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "hover:text-primary text-primary text-sm"
//                     : "hover:text-primary text-sm"
//                 }
//               >
//                 BLOG
//               </NavLink>
//             </li>
//           </ul>

//           {/* Call to Action and Contact Buttons */}
//           {/* <div className="flex flex-col gap-2 mt-4">
//             <button className="relative overflow-hidden bg-primary w-full max-w-xs h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-white before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//               <span className="relative z-10 text-base">
//                 Speak to an Expert
//               </span>
//             </button>

//             <div className="flex justify-between">
//               <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//                 <RiWhatsappFill className="relative z-10" size={30} />
//               </button>

//               <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//                 <MdLocalPhone className="relative z-10" size={30} />
//               </button>
//             </div>
//           </div> */}
//         </div>
//       )}

//       {/* Desktop Call to action buttons */}
//       <div className="hidden md:flex items-center gap-2 mr-4">
//         {/* <button className="relative overflow-hidden bg-primary text-white w-full max-w-xs h-[3.5rem]  font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <span className="relative z-10 text-base">Speak to an Expert</span>
//         </button> */}

//         {/* <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <RiWhatsappFill className="relative z-10" size={30} />
//         </button> */}

       
//           <div className="w-[10rem] cursor-pointer group h-[2rem] bg-primary rounded-2xl relative overflow-hidden duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left flex items-center justify-center gap-2">
//             <MdLocalPhone className=" group-hover:text-primary  relative z-10" size={20} />
//             <h1 className="text-sm group-hover:text-primary font-semibold relative z-10">Speak to an Expert</h1>
//           </div>
//           <div className="w-[10rem] cursor-pointer group h-[2rem] bg-primary rounded-2xl relative overflow-hidden duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left flex items-center justify-center gap-2">
//             <RiWhatsappFill className="group-hover:text-primary  relative z-10" size={20} />
//             <h1 className="group-hover:text-primary relative font-semibold z-10">WhatsApp Us</h1>
//           </div>

//           {/* <button className="relative overflow-hidden px-3 bg-primary w-12 h-[3.5rem] text-white font-bold duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left">
//           <MdLocalPhone className="relative z-10" size={30} />
//         </button> */}
        
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { NavLink } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";
import { MdLocalPhone } from "react-icons/md";
import { HiMenu } from "react-icons/hi"; // Import hamburger icon
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  useEffect(() => {
    const handleScroll = () => {
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={` ${
        navbarScrolled ? "bg-black bg-opacity-80" : "bg-black bg-opacity-40"
      } fixed top-0 left-0 w-full z-50 transition-colors duration-300 text-white flex justify-between items-center h-[3.5rem]`}
    >
      <div className="flex items-center flex-grow">
        <div className="">
          <img src={logo} className="w-[12rem] h-[3rem] pt-2 px-2" alt="logo" />
        </div>
      </div>

      {/* Hamburger Menu for mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <IoClose className="text-white text-2xl transition-transform duration-300" />
          ) : (
            <HiMenu className="text-white text-2xl transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex gap-4 flex-grow justify-center py-2">
      <li>
         <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:text-primary text-primary text-sm"
                : "hover:text-primary text-sm"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "hover:text-primary text-primary text-sm"
                : "hover:text-primary text-sm"
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "hover:text-primary text-primary text-sm"
                : "hover:text-primary text-sm"
            }
          >
            SERVICES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              isActive
                ? "hover:text-primary text-primary text-sm"
                : "hover:text-primary text-sm"
            }
          >
            CASE STUDIES
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              isActive
                ? "hover:text-primary text-primary text-sm"
                : "hover:text-primary text-sm"
            }
          >
            CAREERS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "hover:text-primary text-primary text-sm"
                : "hover:text-primary text-sm"
            }
          >
            BLOG
          </NavLink>
        </li>
      </ul>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden flex flex-col transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-black bg-opacity-80 fixed top-[3.5rem] left-0 w-full z-50 p-4 py-6`}
      >
        <ul className="flex flex-col gap-4">
          {/* Repeated links with onClick to close the menu */}
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "hover:text-primary text-primary text-sm"
                  : "hover:text-primary text-sm"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
               <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-primary text-primary text-sm"
                    : "hover:text-primary text-sm"
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-primary text-primary text-sm"
                    : "hover:text-primary text-sm"
                }
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/case-studies"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-primary text-primary text-sm"
                    : "hover:text-primary text-sm"
                }
              >
                CASE STUDIES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/careers"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-primary text-primary text-sm"
                    : "hover:text-primary text-sm"
                }
              >
                CAREERS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "hover:text-primary text-primary text-sm"
                    : "hover:text-primary text-sm"
                }
              >
                BLOG
              </NavLink>
            </li>
          {/* ... Other NavLinks ... */}
        </ul>
      </div>

      {/* Desktop Call to action buttons */}
      <div className="hidden md:flex items-center gap-2 mr-4">
        {/* Your action buttons remain here */}
        <div className="w-[10rem] cursor-pointer group h-[2rem] bg-primary rounded-2xl relative overflow-hidden duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left flex items-center justify-center gap-2">
          <MdLocalPhone className="group-hover:text-primary relative z-10" size={20} />
          <h1 className="text-sm group-hover:text-primary font-semibold relative z-10">Speak to an Expert</h1>
        </div>
        <div className="w-[10rem] cursor-pointer group h-[2rem] bg-primary rounded-2xl relative overflow-hidden duration-500 ease-in-out before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-white before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:text-primary before:transition-transform before:duration-500 before:ease-in-out hover:before:origin-left flex items-center justify-center gap-2">
          <RiWhatsappFill className="group-hover:text-primary relative z-10" size={20} />
          <h1 className="group-hover:text-primary relative font-semibold z-10">WhatsApp Us</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
