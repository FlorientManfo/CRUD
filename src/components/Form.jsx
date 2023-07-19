import { React, useState, useReducer } from "react";
import { json } from "react-router-dom";

const Form = () => {
  const formReducer = (state, event) => {
    return { ...state, [event.target.name]: event.target.value };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  const handleReset = (e) => {
    
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="sm:w-1/2 w-full shadow-md rounded-md p-3 m-3 flex flex-col justify-center items-start self-center gap-7 text-xl text-[#333] capitalize"
      >
        <fieldset className="w-full">
          <label htmlFor="name" className="flex flex-col gap-3 w-full">
            <h3>Name</h3>
            <input
              type="text"
              onChange={setFormData}
              value={formData.name}
              name="name"
              className="bg-gray-200 p-2 rounded-md w-full"
            />
          </label>
        </fieldset>
        <fieldset className="w-full">
          <label htmlFor="unit_price" className="flex flex-col gap-3 w-full">
            <h3>Unit price</h3>
            <input
              type="number"
              onChange={setFormData}
              name="unit_price"
              step="0.1"
              value={formData.unit_price}
              className="bg-gray-200 p-2 rounded-md w-full"
            />
          </label>
        </fieldset>
        <fieldset className="w-full">
          <label htmlFor="quantity" className="flex flex-col gap-3 w-full">
            <h3>Quantity</h3>
            <input
              type="number"
              step="1"
              value={formData.quantity}
              onChange={setFormData}
              name="quantity"
              className="bg-gray-200 p-2 rounded-md w-full"
            />
          </label>
        </fieldset>
        <div className="bg-gray-100 h-0.5 w-full" />
        <div className="flex flex-row justify-between w-full">
          <button
            type="reset"
            className="p-1 border border-red-700 text-red-700 text-red-700 w-1/3"
          >
            Reset
          </button>
          <button
            type="submit"
            className="p-1 border border-blue-700 text-blue-700 w-1/3"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
