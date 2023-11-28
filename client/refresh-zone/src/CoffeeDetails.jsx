import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export default function CoffeeDetails() {
  //   const [coffee, setCoffee] = useState([]);
  const coffee = useLoaderData();
  const {
    name,
    chef,
    category,
    photo,
    details,
    Taste: taste,
    supplier,
  } = coffee;
  console.log(coffee);
  return (
    <div className="my-12 max-w-4xl mx-auto border-4  bg-orange-100  rounded-lg shadow-2xl">
      <div className="max-w-3xl mx-auto">
        <img className="mx-auto" src={photo} alt="image" />
      </div>
      <div className="text-center my-6 space-y-4 text-lg">
        <h1 className="font-semibold ">
          name:
          <span className="text-slate-500 ml-2">{name}</span>
        </h1>
        <h1 className="font-semibold ">
          Chef:
          <span className="text-slate-500 ml-2">{chef}</span>
        </h1>
        <h1 className="font-semibold ">
          category:
          <span className="text-slate-500 ml-2">{category}</span>
        </h1>
        <h1 className="font-semibold ">
          supplier:
          <span className="text-slate-500 ml-2">{supplier}</span>
        </h1>
        <h1 className="font-semibold ">
          taste:
          <span className="text-slate-500 ml-2">{taste}</span>
        </h1>
        <p className="font-bold text-xl text-blue-800">{details}</p>
        <Link
          className="ml-6 mt-6 bg-orange-700 rounded-md px-6 py-1 my font-bold"
          to="/"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
