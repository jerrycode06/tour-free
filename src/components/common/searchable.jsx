import React, { useState } from "react";

const SearchableInput = ({ data,onSelect }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [focused, setFocused] = useState(false);

  const filteredItems = data.filter((item) =>
    item.airport_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); 
    onSelect(e.target.value)
  };


  const handleAddItem = (item) => {
    setSearchTerm(item); 
    onSelect(item)
    setFocused(false);  
  };


  const handleInputBlur = () => {
    if (searchTerm && !filteredItems.length) {
      setSearchTerm(searchTerm); 
      onSelect(searchTerm)
    }
    setFocused(false); 
  };

  return (
    <div className="w-full flex">
      <div className="relative w-full">
        <input
          type="text"
          value={searchTerm }
          onChange={handleSearchChange}
          placeholder="Search airport"
          className="border rounded p-2 mb-2"
          style={{ width: "100%" }}
          onFocus={() => setFocused(true)}
          onBlur={handleInputBlur}
        />

        {focused && (
          <ul className="border bg-white text-black rounded p-2 max-h-96 overflow-y-auto absolute z-10">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <li
                  key={index}
                  className="p-1 border-b last:border-none cursor-pointer"
                  onMouseDown={() =>
                    handleAddItem(`${item.airport_name}, ${item.city}, ${item.country}`)
                  }
                >
                  {item.airport_name}, {item.city}, {item.country}
                </li>
              ))
            ) : (
              <p className="p-1 text-gray-500">No matches found</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchableInput;
