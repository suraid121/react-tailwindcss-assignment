import { useState, useRef, useEffect } from "react";
import Button from "../reusable-components/Button";

const Header = ({title , heading}) => {
  const [sortBy, setSortBy] = useState("Date modified");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Date modified", "Name", "Size"];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="flex items-center justify-between bg-soft-gray-nav-bg p-4 flex-col md:flex-row">
  
      <div className="flex flex-col mb-2">
        <span className="text-sm text-mid-gray-text">{title}</span>
        <h3 className="text-xl font-bold text-dark-gray-text">{heading}</h3>
      </div>


      <div className="flex items-center gap-3 flex-wrap justify-start ">
        {/* Search box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search incident"
            className="pl-9 pr-4 py-2 rounded-md border border-light-border bg-light-gray-bg text-sm text-mid-gray-text placeholder:text-mid-gray-text shadow-sm focus:outline-none focus:ring-1 focus:ring-light-border"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mid-gray-text">
            <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor"
              className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 
                1 0 5.196 5.196a7.5 7.5 0 0 0 
                10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* Sort By Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-4 py-2 rounded-md border border-light-border text-sm bg-light-gray-bg text-gray-700 hover:bg-gray-300 whitespace-nowrap shadow-sm cursor-pointer"
          >
            Sort By: {sortBy}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-light-gray-bg border border-light-border rounded-md shadow-md z-20">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSortBy(option);
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-sm text-mid-gray-text hover:bg-gray-300 cursor-pointer transition-all"
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cypher AI Button */}
        <Button title="Cypher AI"  />
      </div>
    </section>
  );
};

export default Header;
