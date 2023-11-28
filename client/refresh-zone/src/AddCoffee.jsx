import React from "react";

export default function AddCoffee() {
  return (
    <div className="max-w-4xl mx-auto bg-amber-200 px-4 py-2 shadow-xl rounded-lg">
      <h1 className="font-bold text-center my-6 text-5xl">Add A NEW COFFEE</h1>
      <p className="w-3/4 mx-auto text-center font-semibold text-slate-700 my-6">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form className="space-y-6">
        <div className="flex items-center  max-w-3xl mx-auto gap-2 ">
          <h1 className="flex flex-col w-full">
            Name:{" "}
            <input
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="name"
              placeholder="coffee name"
            />{" "}
          </h1>
          <h1 className="flex flex-col w-full">
            Chef:{" "}
            <input
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="Chef"
              placeholder="coffee chef"
            />{" "}
          </h1>
        </div>
        <div className="flex items-center  max-w-3xl mx-auto gap-2 ">
          <h1 className="flex flex-col w-full">
            Supplier:{" "}
            <input
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="supplier"
              placeholder="Supplier"
            />{" "}
          </h1>
          <h1 className="flex flex-col w-full">
            taste:{" "}
            <input
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
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="category"
              placeholder="category"
            />{" "}
          </h1>
          <h1 className="flex flex-col w-full">
            details:{" "}
            <input
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
              className="w-full rounded-md px-4 py-2"
              type="text"
              id="photo"
              placeholder="photoUrl"
            />
          </h1>
        </div>
        <button className="bg-yellow-950 w-3/4 ml-16 my-6 text-lg font-semibold text-white  py-4 rounded-lg">
          Add Photo
        </button>
      </form>
    </div>
  );
}
