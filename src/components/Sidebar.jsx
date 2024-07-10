import React, { useState } from "react";
import dsrLogo from "../assets/dsrLogo.jpeg";
import {
  FaArrowCircleLeft,
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaUser,
} from "react-icons/fa";
import { IoMdAddCircle, IoMdLogOut } from "react-icons/io";
import { CiCircleList } from "react-icons/ci";
import { Link } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-slate-50 h-screen p-5 pt-8 relative duration-300`}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <FaArrowCircleLeft color="purple" size={18} />
        </button>
        <div className="flex gap-x-4 items-center justify-start">
          <img
            src={dsrLogo}
            onClick={() => setOpen(!open)}
            className={`cursor-pointer duration-500 h-8 w-8 rounded-full shadow-lg ${
              open && "rotate-[360deg] h-12 w-12"
            }`}
          />
          <h1
            className={`text-purple-500 origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            DSR Secure Tech
          </h1>
        </div>
        <ul className="flex pt-10 flex-col gap-5">
          <li>
            <Link
              to={"/"}
              className="flex rounded-md p-2 shadow-sm cursor-pointer bg-purple-300 hover:text-white text-gray-300 text-sm items-center gap-x-4 select-none"
            >
              <FaHome size={20} color="black" />
              <span
                className={`${
                  open ? "text-xl text-purple-500 font-medium" : "hidden"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li>
            <div
              className="flex rounded-md p-2  cursor-pointer hover:bg-purple-300 hover:text-white text-gray-300 text-sm items-center gap-x-4 select-none"
              onClick={handleDropdown}
            >
              <FaUser size={20} color="black" />
              {open && (
                <h1
                  className={`text-purple-500 font-medium text-xl duration-200 hover:text-black`}
                >
                  Profile
                </h1>
              )}
              {open &&
                (dropdownOpen ? (
                  <FaChevronUp size={18} color="black" className="ml-auto" />
                ) : (
                  <FaChevronDown size={18} color="black" className="ml-auto" />
                ))}
            </div>
            {open && dropdownOpen && (
              <ul className="pl-5">
                <li>
                  <Link
                    to={"/addProfile"}
                    className="flex items-center gap-5 p-2 hover:bg-purple-400 rounded-md select-none"
                  >
                    <IoMdAddCircle size={20} />
                    <span>Add Profile</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/listProfile"}
                    className="flex items-center gap-5 p-2 hover:bg-purple-400 rounded-md select-none"
                  >
                    <CiCircleList size={20} />
                    <span>List Profile</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to={"/logout"}
              className={`flex rounded-md p-2 cursor-pointer bg-red-500 text-gray-300 text-sm hover:bg-red-300 hover:text-red-500 items-center origin-left gap-x-4 ${
                open ? "mt-auto" : "mt-[420px]"
              }`}
            >
              <IoMdLogOut size={20} />
              <span className={`${open ? "text-xl text-slate-200" : "hidden"}`}>
                Log Out
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
