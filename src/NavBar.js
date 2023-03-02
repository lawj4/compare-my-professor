import Rankings from "./Rankings";
import Compare from "./Compare";
import Home from "./Home";
import Add from "./Add";
import { Route, Routes, Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/compare-my-professor/">Home</Link>
        <Link to="/compare-my-professor/rankings">Rankings</Link>
        <Link to="/compare-my-professor/compare">Compare</Link>
        <Link to="/compare-my-professor/add">Add</Link>
      </nav>

      <Routes>
        <Route path="/compare-my-professor/" element={<Home />} />
        <Route path="/compare-my-professor/rankings" element={<Rankings />} />
        <Route path="/compare-my-professor/compare" element={<Compare />} />
        <Route path="/compare-my-professor/add" element={<Add />} />
      </Routes>
    </div>
  );
}
export default NavBar;
