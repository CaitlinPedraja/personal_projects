import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/contacts";
import CountriesInfo from "./components/countriesInfo/CountriesInfo";
import  AllCountries  from "./components/Countries/AllCountries"
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<AllCountries />} />
            <Route path="/country/:countryName" element={<CountriesInfo />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
