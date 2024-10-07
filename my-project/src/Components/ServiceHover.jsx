
const ServiceHover = () => {
  return (
    <div className="absolute top-[3.5rem] left-0 w-full bg-purple-600 text-white p-4 transition-transform ease-in-out duration-300 h-[16rem] shadow-lg">
      <h3 className="font-bold text-lg">Our Services</h3>
      <ul>
        <li className="hover:underline">Web Development</li>
        <li className="hover:underline">Mobile Apps</li>
        <li className="hover:underline">Digital Marketing</li>
        <li className="hover:underline">UI/UX Design</li>
      </ul>
    </div>
  )
}

export default ServiceHover