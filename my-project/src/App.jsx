import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import StickyBtn from "./Components/StickyBtn";
import CaseStudies from "./Pages/CaseStudies";
import Services from "./Pages/Services";

const App = () => {
  return (
    <Router>
      <div className="">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/services" element={<Services />} />


        </Routes>
        <StickyBtn/>
      </div>
    </Router>
  );
};

export default App;

