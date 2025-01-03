import React from "react";

const Filter = () => {
  return (
    <div className="bg-white p-[16px] w-full rounded-lg grid grid-cols-3 gap-[16px]">
      <label htmlFor="">
        <span>Filter Name</span>
        <input type="text" placeholder="Filter by Name" />
      </label>

      <label htmlFor="">
        <span>Filter Brand</span>
        <input type="text" placeholder="Filter by Brand" />
      </label>

      <label htmlFor="">
        <span>Filter Budget</span>
        <input type="text" placeholder="Filter by Budget" />
      </label>
    </div>
  );
};

export default Filter;
