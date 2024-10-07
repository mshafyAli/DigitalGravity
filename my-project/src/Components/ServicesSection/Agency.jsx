import webIcon from "../../assets/webIcon.svg";
import appIcon from "../../assets/appIcon.svg";
import digitalIcon from "../../assets/digitalIcon.svg";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import uiIcon from "../../assets/uiIcon.svg";
import ecommerceIcon from "../../assets/ecommerceIcon.svg";
import brandingIcon from "../../assets/brandingIcon.svg";
import videoIcon from "../../assets/videoIcon.svg";
import resourceIcon from "../../assets/resourceIcon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    icon: webIcon,
    title: "Web Development",
    description: "High performance mobile apps for your business.",
  },
  {
    icon: appIcon,
    title: "Mobile Application",
    description: "High performance mobile apps for your business.",
  },
  {
    icon: digitalIcon,
    title: "Digital Marketing",
    description: "Strategies to boost your conversions & ROI done by gurus.",
  },
  {
    icon: uiIcon,
    title: "UI/UX Design",
    description: "Strategies to boost your conversions & ROI done by gurus.",
  },
  {
    icon: ecommerceIcon,
    title: "Ecommerce Development",
    description: "Strategies to boost your conversions & ROI done by gurus.",
  },
  {
    icon: brandingIcon,
    title: "Branding & Design",
    description: "Strategies to boost your conversions & ROI done by gurus.",
  },
  {
    icon: videoIcon,
    title: "Video Production",
    description: "Strategies to boost your conversions & ROI done by gurus.",
  },
  {
    icon: resourceIcon,
    title: "Resource Management",
    description: "Strategies to boost your conversions & ROI done by gurus.",
  },
];

const settings = {
  infinite: true,
  speed: 400,
  autoplay: true,
  swipeToSlide: true,
  draggable: true,
  slidesToShow: 4,
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
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Agency = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-12">
      <div className="md:flex items-start flex-col md:flex-row justify-start gap-10 hidden">
        <div className="md:w-1/3 w-full ">
          <h1 className="md:text-4xl text-2xl font-semibold">
            A Full-Service{" "}
            <span className="text-primary">Creative Digital Agency</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4  pt-4">
          {" "}
          {/* Add flex and gap for consistent spacing */}
          {services.map((service, index) => (
            <div key={index} className="group">
              {" "}
              {/* Ensure relative positioning */}
              <div className="py-6 px-4 bg-lightGray  md:h-[16rem] h-auto group-hover:bg-white group-hover:shadow-md cursor-pointer transition-all duration-300">
                <div className="bg-lightGray group-hover:bg-primary w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300">
                  <img
                    src={service.icon}
                    className="w-8 h-8"
                    alt={service.title}
                  />
                </div>
                <h1 className="font-bold text-base pt-2">{service.title}</h1>
                <p className="text-[#7C7C7C] py-4">{service.description}</p>

                <div className="group">
                  <button className="w-8 h-8 text-white  rounded-full bg-primary p-2 hover:bg-white  hover:text-primary shadow-md">
                    <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden md:block block">
        <h1 className="md:text-4xl text-2xl font-semibold">
          A Full-Service{" "}
          <span className="text-primary">Creative Digital Agency</span>
        </h1>
        <Slider {...settings} className="mt-4">
          {services.map((service, index) => (
            <div key={index} className="group">
              {" "}
              {/* Ensure relative positioning */}
              <div className="py-6 px-4 bg-lightGray  md:h-[16rem] h-auto group-hover:bg-white group-hover:shadow-md cursor-pointer transition-all duration-300">
                <div className="bg-lightGray group-hover:bg-primary w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300">
                  <img
                    src={service.icon}
                    className="w-8 h-8"
                    alt={service.title}
                  />
                </div>
                <h1 className="font-bold text-base pt-2">{service.title}</h1>
                <p className="text-[#7C7C7C] py-4">{service.description}</p>

                <div className="group">
                  <button className="w-8 h-8 text-white  rounded-full bg-primary p-2 hover:bg-white  hover:text-primary shadow-md">
                    <HiMiniArrowLongRight className="transform transition-transform duration-200 group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Agency;
