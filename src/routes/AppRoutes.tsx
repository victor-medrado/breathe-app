import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../screens/Home/Home";
import Breathing from "../screens/Breathing/Breathing";
import About from "../screens/About/About";

const AppRoutes = () => {
  return (
    <Router basename="/breathe-app/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breathing/:id" element={<Breathing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
