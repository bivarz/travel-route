import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Results from "../pages/Results";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="results/" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
