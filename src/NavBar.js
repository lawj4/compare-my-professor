import Rankings from './Rankings';
import Compare from './Compare';
import Home from './Home';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
function NavBar() {

    return (
        <BrowserRouter>
          <nav>

              <Link to="/compare-my-professor/">Home</Link>
              <Link to="/compare-my-professor/rankings">Rankings</Link>
              <Link to="/compare-my-professor/comparisons">Comparisons</Link>

          </nav>
    
          <Routes>
            <Route path="/compare-my-professor/" element={<Home />} />
            <Route path="/compare-my-professor/rankings" element={<Rankings />} />
            <Route path="/compare-my-professor/comparisons" element={<Compare />} />
          </Routes>
        </BrowserRouter>
      )
}
export default NavBar;