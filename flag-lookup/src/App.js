import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/contacts";
import { Home } from "./components/Pages/home_page";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
