import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const coffee = useLoaderData();
  const [formData, setFormData] = useState(coffee);
  const {
    name,
    chef,
    category,
    photo,
    details,
    Taste: taste,
    supplier,
  } = coffee;
  //   console.log(coffee);
  const formDataHandle = (e) => {
    e.preventDefault();
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const submitFormData = (e) => {
    e.preventDefault();
    // /coffee/edit/:id

    fetch(`http://localhost:3000/coffee/edit/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("successfull");
          navigate("/");
        }
      });
  };
  console.log(formData);
  return (
    <div className="max-w-4xl mx-auto bg-amber-200 px-4 py-2 shadow-xl rounded-lg">
      <h1 className="font-bold text-center my-6 text-5xl">update {name} </h1>

      <form onSubmit={submitFormData} className="space-y-6">
        <div className="flex items-center  max-w-3xl mx-auto gap-2 ">
          <h1 className="flex flex-col w-full">
            Name:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={name}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="name"
              placeholder="coffee name"
            />{" "}
          </h1>
          <h1 className="flex flex-col w-full">
            Chef:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={chef}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="chef"
              placeholder="coffee chef"
            />{" "}
          </h1>
        </div>
        <div className="flex items-center  max-w-3xl mx-auto gap-2 ">
          <h1 className="flex flex-col w-full">
            Supplier:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={supplier}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="supplier"
              placeholder="Supplier"
            />{" "}
          </h1>
          <h1 className="flex flex-col w-full">
            taste:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={taste}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="Taste"
              placeholder="coffee Taste"
            />{" "}
          </h1>
        </div>
        <div className="flex items-center  max-w-3xl mx-auto gap-2 ">
          <h1 className="flex flex-col w-full">
            Category:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={category}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="category"
              placeholder="category"
            />{" "}
          </h1>
          <h1 className="flex flex-col w-full">
            details:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={details}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="details"
              placeholder="details"
            />{" "}
          </h1>
        </div>
        <div className="flex items-center  max-w-3xl mx-auto gap-2 ">
          <h1 className="flex flex-col w-full">
            Category:{" "}
            <input
              onChange={formDataHandle}
              defaultValue={photo}
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="photo"
              placeholder="photoUrl"
            />
          </h1>
        </div>
        <button className="bg-yellow-950 w-3/4 ml-16 my-6 text-lg font-semibold text-white  py-4 rounded-lg">
          update
        </button>
      </form>
    </div>
  );
}
