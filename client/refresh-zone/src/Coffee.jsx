import React from "react";
import { Link } from "react-router-dom";

export default function Coffee({ coffee }) {
  const {
    name,
    chef,
    category,
    photo,
    details,
    Taste: taste,
    supplier,
  } = coffee;
  return (
    <div className="grid grid-cols-6 bg-slate-100 rounded-lg shadow-xl py-4 items-center justify-center">
      <div className="col-span-2">
        <img className="px-2 rounded-md" src={photo} alt="photo" />
      </div>
      <div className="col-span-3 text-gray-700 mx-2 text-xs font-bold">
        <p>name: {name}</p>
        <p>chef: {chef}</p>
        <p>category: {category}</p>
      </div>
      <div className="col-span-1 flex flex-col items-center justify-center ">
        <Link className="text-red-600 font-bold text-4xl" to="">
          X
        </Link>
        <Link
          to={`/coffee/${coffee._id}`}
          className="text-green-600 font-bold text-2xl"
        >
          Details
        </Link>
        <Link className="text-yellow-600 font-bold text-2xl" to="">
          Edit
        </Link>
      </div>
    </div>
  );
}
