import { FaSearch, FaTrash, FaPencilAlt } from "react-icons/fa";
import React, { useContext, useReducer, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import formReducer from "../hooks/form_reducer";

const Table = () => {
  const { setSelectedProduct, products, asyncSearch, asyncDelete } =
    useContext(ProductContext);

  const [data, setData] = useReducer(formReducer, "");

  const columns = ["ID", "Name", "Unit price", "Quantity", ""];

  const textChangeHandler = (e) => {
    if (e.target.value == "") {
      asyncSearch("");
    }
    setData(e);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    asyncSearch(data.name || "");
  };

  return (
    <div className="shadow-lg p-3 m-3 flex flex-col gap-7 rounded-md w-full md:w-1/2">
      <form
        onSubmit={searchHandler}
        className="bg-gray-200  justify-center items-center w-full p-2 rounded-lg"
      >
        <fieldset className="flex flex-row-reverse gap-5">
          <button type="submit">
            <FaSearch className="cursor-pointer" />
          </button>
          <input
            type="text"
            value={data.name || ""}
            name="name"
            onChange={textChangeHandler}
            placeholder="Search ..."
            className="w-full bg-inherit focus:outline-none text-[#333]"
          />
        </fieldset>
      </form>
      <table className="w-full">
        <thead>
          <tr className="flex flex-row w-full items [&>th]:w-full bg-[#333] text-white">
            {columns.map((value) => (
              <th className="text-start" key={value}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="w-full">
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`w-full flex items-center [&>td]:w-full ${
                index % 2 != 0 ? "bg-gray-200" : null
              }`}
            >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.unit_price}</td>
              <td>{product.quantity}</td>
              <td className="flex justify-between">
                <FaTrash
                  onClick={() => {
                    asyncDelete(product.id);
                  }}
                  className="text-red-700 mx-3 cursor-pointer"
                />
                <FaPencilAlt
                  onClick={() => {
                    setSelectedProduct(product);
                  }}
                  className="text-blue-700 mx-3 cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
