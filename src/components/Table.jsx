import { FaSearch, FaTrash, FaPencilAlt } from "react-icons/fa";

import React from "react";
const products = [
  {
    id: 1,
    name: "Orange",
    unit_price: 0.9,
    quantity: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Peach",
    unit_price: 0.9,
    quantity: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const columns = ["ID", "Name", "Unit price", "Quantity", ""];

const searchHandler = (e) => {
  e.preventDefault();
  console.log("Searching...");
};
const Table = () => {
  return (
    <div className="shadow-lg p-3 m-3 flex flex-col gap-7 sm:w-1/2 w-full rounded-md">
      <div className="bg-gray-200 flex flex-row-reverse justify-center items-center w-full gap-2 p-2 rounded-lg">
        <FaSearch />
        <input
          type="text"
          placeholder="Search ..."
          prefix={<FaSearch className="text-red-600" />}
          className="w-full bg-inherit focus:outline-none text-[#333]"
        />
      </div>
      <table className="w-full">
        <th className="flex flex-row w-full items [&>td]:w-full bg-[#333] text-white">
          {columns.map((value) => (
            <td className="text-start" key={value}>
              {value}
            </td>
          ))}
        </th>
        <tbody className="w-full">
          {products.map((product) => (
            <tr
              key={product.id}
              className={`w-full flex items-center [&>td]:w-full ${
                product.id % 2 == 0 ? "bg-gray-200" : null
              }`}
            >
              <td >{product.id}</td>
              <td>{product.name}</td>
              <td>{product.unit_price}</td>
              <td>{product.quantity}</td>
              <td className="flex justify-between">
                <FaTrash className="text-red-700 mx-3 cursor-pointer" />
                <FaPencilAlt className="text-blue-700 mx-3 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
