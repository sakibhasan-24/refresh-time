import React, { useEffect, useState } from "react";
import Coffee from "./Coffee";

export default function AllCoffee() {
  const [allCoffee, setAllCoffee] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => setAllCoffee(data));
  }, []);
  return (
    <div className="max-w-3xl mx-auto my-6 text-center  ">
      <h1 className="text-4xl font-bold my-6">
        avaiable coffee {allCoffee.length}
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
        {allCoffee.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
}
