import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

// Import pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Demo from './pages/Demo';

function App() {

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/"> Home </Link> |{" "}
        <Link to="/contact"> Contact </Link> |{" "}
        <Link to="/request_api"> Demo request </Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/request_api' element={ <Demo /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
