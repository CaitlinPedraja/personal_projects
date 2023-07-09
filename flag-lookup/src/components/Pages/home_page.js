import React from "react";
import { Routes, Route } from "react-router-dom";
import AllCountries from "../Countries/AllCountries";
import CountriesInfo from "../countriesInfo/CountriesInfo";

export const Home = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/country/:countryName" element={<CountriesInfo />} />
        </Routes>
      </div>
    </>
  );
};
