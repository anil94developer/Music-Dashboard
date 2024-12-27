import React, { useState, useRef } from "react";

const SearchableDropdown = ({
  options = [],
  onChange,
  placeholder = "Search...",
  valueKey = "_id",
  labelKey = "name",
  extraParams = {},
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null); // Ref to handle dropdown focus

  // Filter options based on search term
  const filteredOptions = options.filter((option) =>
    option[labelKey]?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  const handleOptionClick = (selectedOption) => {
    onChange(selectedOption, extraParams);
    setSearchTerm(selectedOption[labelKey]);
    setShowDropdown(false); // Close dropdown after selection
  };

  const handleBlur = (e) => {
    if (!dropdownRef.current.contains(e.relatedTarget)) {
      setShowDropdown(false);
    }
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* Search input */}
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setShowDropdown(true)} // Open dropdown on focus
        onBlur={handleBlur} // Close dropdown only when focus leaves the entire component
      />

      {/* Dropdown menu */}
      {showDropdown && (
        <ul className="dropdown-menu show w-100" style={{ maxHeight: "150px", overflowY: "auto" }}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <li key={option[valueKey]}>
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={() => handleOptionClick(option)}
                >
                  {option[labelKey]}
                </button>
              </li>
            ))
          ) : (
            <li>
              <button type="button" className="dropdown-item disabled">
                No options found
              </button>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchableDropdown;
