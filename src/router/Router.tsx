import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Results from "../pages/Results";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/travel-route/" element={<Home />} />
        <Route path="/travel-route/results/" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
