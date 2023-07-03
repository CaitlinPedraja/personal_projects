import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { home_page } from "./components/Pages/home_page";
import { About } from "./components/Pages/About";
import { contacts } from "./components/Pages/contacts";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<home_page />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<contacts />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;