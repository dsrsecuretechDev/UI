import React from "react";
import { Link } from "react-router-dom";

function AddProfile() {
  return <div className="bg-slate-300 h-fit p-5 rounded-xl gap-5"> 
    <h1 className="text-2xl text-center">Add Profile</h1>
    <form action="">
      <div className="flex flex-col gap-5 mt-5">

      <input type="text" placeholder="Enter Username" className="bg-transparent outline-none border-b-2 border-purple-300"/>
      <input type="number" placeholder="Enter Age" className="bg-transparent outline-none border-b-2 border-purple-300"/>
      <input type="text" placeholder="Enter Description" className="bg-transparent outline-none border-b-2 border-purple-300"/>
      </div>
      <Link to={"/listProfile"} className="block bg-purple-400 rounded-lg p-1 w-full mt-5 hover:bg-purple-300 hover:scale-105 transition-transform text-center">Submit</Link>
    </form>
  </div>;
}

export default AddProfile;
