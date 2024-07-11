import React from "react";
import { Link } from "react-router-dom";

function AddProfile() {
  return (
    <div className="bg-white shadow-lg p-8 rounded-2xl w-96 mx-auto mt-10">
      <h1 className="text-3xl text-center font-semibold text-purple-600">
        Add Profile
      </h1>
      <form action="" className="mt-6">
        <div className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Enter Username"
            className="bg-gray-100 outline-none border-b-2 border-purple-300 p-2 rounded-md focus:border-purple-500 transition-colors"
          />
          <input
            type="number"
            placeholder="Enter Age"
            className="bg-gray-100 outline-none border-b-2 border-purple-300 p-2 rounded-md focus:border-purple-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Enter Description"
            className="bg-gray-100 outline-none border-b-2 border-purple-300 p-2 rounded-md focus:border-purple-500 transition-colors"
          />
        </div>
        <Link
          to={"/listProfile"}
          className="block bg-purple-600 text-white rounded-lg p-2 w-full mt-6 hover:bg-purple-700 hover:scale-105 transition-transform text-center"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}

export default AddProfile;
