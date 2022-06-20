import React from 'react';
import '../style.css';

export default function App({ categories, filterItems }) {
  return (
    <div className=" mx-auto my=5 mt-[4rem] ">
      <h1 className="text-4xl font-bold text-center">Our Menu</h1>
      <div className="w-[4rem] bg-[#c59d5f] my-2 h-1 mt-4 mb-6 mx-auto my-auto"></div>
      <div className="flex justify-center gap-[2.5rem]">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              key={index}
              className="p-2  text-[#c59d5f] hover:bg-[#c59d5f] hover:text-white rounded-md
              transition-none	transition-property: none;
              transition-all duration-500"
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
