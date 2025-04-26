"use client";

import { useState } from "react";
import { Search, ChevronDown, Check } from "lucide-react";

const filterOptions = ["AI", "Media", "Analytics", "Security"];

export function Searchz() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (option: string) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative flex items-start justify-between gap-3 w-full">
      {/* Search Input */}
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={16} />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      {/* Filter Button */}
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="flex items-center gap-1 px-4 py-2 border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition whitespace-nowrap"
        >
          Filter
          <ChevronDown size={16} />
        </button>

        {/* Dropdown */}
        {open && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-md z-10 overflow-hidden">
          <ul className="text-sm text-gray-700">
            {filterOptions.map((option) => (
              <li
                key={option}
                className="flex items-center px-4 py-2 hover:bg-gray-50 cursor-pointer"
                onClick={() => toggleOption(option)}
              >
                <input
                  type="checkbox"
                  checked={selected.includes(option)}
                  readOnly
                  className="mr-2 accent-blue-500"
                />
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}

      </div>
    </div>
  );
}
