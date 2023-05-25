import React from "react";
// import CountryLookUp from "./CountryLookUp";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-500 bg-[rgb(242,242,242)] w-full  ">
      {/* <div className="border-b px-8 py-3 ">
        <CountryLookUp />
      </div> */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0 ">
        <ul className="flex items-center space-x-6 ">
          <li className="footer-link">About</li>
          <li className="footer-link">Advertising</li>
          <li className="footer-link">Business</li>
          <li className="footer-link">How Search Works</li>
        </ul>
        <ul className="flex items-center space-x-6 ">
          <li className="footer-link">Privacy</li>
          <li className="footer-link">Terms</li>
          <li className="footer-link">Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
