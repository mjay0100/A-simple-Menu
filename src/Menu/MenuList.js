import React from 'react';
import '../style.css';

export default function App({ id, img, header, price, desc }) {
  return (
    <div>
      <article key={id} className="grid grid-cols-2 gap-4 mx-5 my-5">
        <img
          className="object-cover h-[200px] w-full border-4 border-solid border-[#c59d5f] rounded-lg"
          src={img}
          alt=""
        />
        <div>
          <header className="flex justify-between mb-5 border-b border-[#617d98] border-solid">
            <h2 className="text-lg font-semibold  mb-3">{header}</h2>
            <h2 className="mb-3 text-[#c59d5f]">{price}</h2>
          </header>
          <p className="text-[#617d98]">{desc}</p>
        </div>
      </article>
    </div>
  );
}
