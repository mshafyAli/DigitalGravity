// import Banner from "./Banner"
// import Navbar from "./Navbar"


// const NavBannerBg = () => {
//   return (
//     <div className="bg-[#160919] w-full h-auto">
//         <Navbar/>
//         <Banner/>
//     </div>
//   )
// }

// export default NavBannerBg



// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="path_to_your_video.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
      
//       {/* Overlay content */}
//       <div className="relative z-10 bg-[#160919] bg-opacity-80 w-full h-auto">
//         <Navbar />
//         <Banner />
//       </div>
      
//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;


// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   return (
//     <div className="relative w-full h-auto">
//       {/* Background iframe */}
//       <iframe
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"  
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//         title="background"
//       />

//       {/* Overlay content */}
//       <div className="relative z-10  w-full h-auto">
//         <Navbar />
//         <Banner />
//       </div>

//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;


// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Background iframe */}
//       <iframe
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//         title="background"
//       />

//       {/* Overlay content */}
//       <div className="relative z-10 w-full h-full">
//         <Navbar />
//         <Banner />
//       </div>

//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;


// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background iframe */}
//       <iframe
//         className="absolute top-0 left-0 w-full h-full"
//         src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"
//         frameBorder="0"
//         allow="autoplay; fullscreen"
//         allowFullScreen
//         title="background"
//         style={{ border: "none" }} // Ensures no border is present
//       />

//       {/* Overlay content */}
//       <div className="relative z-10 w-full h-full">
//         <Navbar />
//         <Banner />
//       </div>

//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;


// show only Vedio
// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background iframe */}
//       <div className="absolute top-0 left-0 w-full h-full">
//         <iframe
//           className="w-[100vw] h-[200vh] min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//           title="background"
//           style={{ border: "none" }}
//         />
//       </div>

//       {/* Overlay content */}
//       <div className="relative z-10 w-full h-full">
//         <Navbar />
//         <Banner />
//       </div>

//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;


// this code show vedio only for lg screen and color for small screens

// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background color for mobile and tablet */}
//       <div className="block lg:hidden absolute top-0 left-0 w-full h-full bg-[#160919]"></div>

//       {/* Background iframe - hidden on mobile and tablet, visible on desktop and larger */}
//       <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
//         <iframe
//           className="w-[100vw] h-[200vh] min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//           title="background"
//           style={{ border: "none" }}
          
//         />
//       </div>

//       {/* Overlay content */}
//       <div className="relative z-10 w-full h-full">
//         <Navbar />
//         <Banner />
//       </div>

//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full lg:bg-black lg:opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;








// import { useEffect, useRef } from "react";
// import Banner from "./Banner";
// import Navbar from "./Navbar";

// const NavBannerBg = () => {
//   const iframeRef = useRef(null); // Reference to the iframe element

//   useEffect(() => {
//     const iframe = iframeRef.current;

//     // Create event listener for 'play' event
//     const handlePlay = () => {
//       iframe.classList.remove("loading"); // Remove the loading class (CSS)
//     };

//     // Add event listener to the iframe
//     iframe.addEventListener("play", handlePlay);

//     return () => {
//       // Clean up event listener on component unmount
//       iframe.removeEventListener("play", handlePlay);
//     };
//   }, []); // Run useEffect only once

//   return (
//     <div className="relative w-full min-h-screen overflow-hidden">
//       {/* Background color for mobile and tablet */}
//       <div className="block lg:hidden absolute top-0 left-0 w-full h-full bg-[#160919]"></div>

//       {/* Background iframe - hidden on mobile and tablet, visible on desktop and larger */}
//       <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
//         <iframe
//           className="loading w-[100vw] h-[200vh] min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " // Add "loading" class
//           src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"
//           frameBorder="0"
//           allow="autoplay; fullscreen"
//           allowFullScreen
//           title="background"
//           style={{ border: "none" }}
//           ref={iframeRef} // Assign ref
//         />
//       </div>

//       {/* Overlay content */}
//       <div className="relative z-10 w-full h-full">
//         <Navbar />
//         <Banner />
//       </div>

//       {/* Optional: Dark overlay for better contrast */}
//       <div className="absolute top-0 left-0 w-full h-full lg:bg-black lg:opacity-50 z-0"></div>
//     </div>
//   );
// };

// export default NavBannerBg;

import { useEffect, useState } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const NavBannerBg = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Track when the video is loaded

  useEffect(() => {
    // Add a 'load' event listener to the iframe when it's ready
    const iframe = document.getElementById("background-video");
    iframe.onload = () => setIsVideoLoaded(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background color for mobile and tablet */}
      <div className="block lg:hidden absolute top-0 left-0 w-full h-full bg-[#160919]"></div>

      {/* Background iframe - hidden on mobile and tablet, visible on desktop and larger */}
      <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
        {isVideoLoaded ? null : (
          // Placeholder background while video is loading
          <div className="w-full h-full bg-[#160919]"></div>
        )}

        {/* Iframe is shown only when the video has loaded */}
        <iframe
          id="background-video"
          className={`w-[100vw] h-[200vh] min-w-full min-h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          src="https://www.youtube.com/embed/oULP1f670r8?autoplay=1&mute=1&loop=1&playlist=oULP1f670r8"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="background-video"
          style={{ border: "none" }}
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 w-full h-full">
        <Navbar />
        <Banner />
      </div>

      {/* Optional: Dark overlay for better contrast */}
      <div className="absolute top-0 left-0 w-full h-full lg:bg-black lg:opacity-50 z-0"></div>
    </div>
  );
};

export default NavBannerBg;



