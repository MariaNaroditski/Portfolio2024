import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Resume from "../Resume/Resume";
import About from "../About/About";
import ContactMePage from "../ContactMePage/ContactMePage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/contact" element={<ContactMePage />} />
    </Routes>
  );
};

export default Routing;
