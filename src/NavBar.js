import Rankings from './Rankings';
import Compare from './Compare';
import Home from './Home';
import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
function NavBar() {

    return (
        <BrowserRouter>
          <nav>

              <Link to="/">Home</Link>
              <Link to="/rankings">Rankings</Link>
              <Link to="/compare">Comparisons</Link>

          </nav>
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </BrowserRouter>
      )
}
export default NavBar;