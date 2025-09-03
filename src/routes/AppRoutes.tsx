import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "../screens/Home/Home";
import Breathing from "../screens/Breathing/Breathing";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breathing/:id" element={<Breathing />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
