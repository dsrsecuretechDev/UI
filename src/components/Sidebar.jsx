import React, { useState } from "react";
import dsrLogo from "../assets/dsrLogo.jpeg";
import profile from "../assets/profile.jpg";
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
            className={`text-purple-500 select-none origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            DSR Secure Tech
          </h1>
        </div>
        <br />
        <div className="h-[1px] w-full bg-slate-500 rounded-lg"></div>
        <ul className="flex pt-10 flex-col gap-5">
          <li>
            <Link
              title="Dashboard"
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
          <li className="relative group">
            <div
              className="flex rounded-md p-2 cursor-pointer hover:bg-purple-300 hover:text-white text-gray-300 text-sm items-center gap-x-4 select-none"
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
            {!open && (
              <div className="absolute left-20 top-0 hidden group-hover:block bg-slate-50 p-2 rounded-md shadow-lg z-10">
                <ul>
                  <li>
                    <Link
                      to={"/addProfile"}
                      className="flex items-center gap-2 p-2 hover:bg-purple-400 rounded-md select-none"
                    >
                      <IoMdAddCircle size={20} />
                      <span>Add Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/listProfile"}
                      className="flex items-center gap-2 p-2 hover:bg-purple-400 rounded-md select-none"
                    >
                      <CiCircleList size={20} />
                      <span>List Profile</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div
          className={`absolute bottom-5 left-5  h-auto flex items-center justify-between gap-x-4 ${
            open ? "bg-slate-200 w-[250px]" : "bg-red-500"
          } transition-colors shadow-md  p-1 rounded-lg`}
        >
          {open && (
            <div className="flex items-center gap-4">
              <img
                src={profile}
                alt="User"
                className="h-8 w-8 rounded-full select-none"
              />
              <span className="text-lg select-none">User Name</span>
            </div>
          )}

          <Link
            title="Log Out"
            to={"/logout"}
            className="flex items-center p-2 cursor-pointer text-gray-300 text-sm rounded-full"
          >
            <IoMdLogOut
              size={22}
              color={open ? "gray" : "white"}
              className="hover:text-red-500"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
