import React, { useState } from 'react';
import '../style.css';
import { content } from './data';
import MenuList from './MenuList';
import Category from './Category';

const allCategories = ['All', ...new Set(content.map((item) => item.category))];

export default function App() {
  const [items, setItems] = useState(content);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == 'All') {
      setItems(content);
      return;
    }
    const newList = content.filter((item) => item.category == category);
    setItems(newList);
  };

  return (
    <>
      <Category categories={categories} filterItems={filterItems} />
      <div className="main my-3 mx-auto max-w-[1170px]  justify-center gap-4 w-[90vw] grid grid-cols-1 md:grid-cols-2 p-5">
        {items.map((content) => {
          return <MenuList {...content} />;
        })}
      </div>
    </>
  );
}
