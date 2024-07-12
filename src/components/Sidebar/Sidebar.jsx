import React, { useState } from "react";
import dsrLogo from "../../assets/dsrLogo.jpeg";
import profile from "../../assets/profile.jpg";
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
        } bg-gray-900 text-gray-100 h-screen p-5 pt-8 relative duration-300`}
      >
        <button
          className={`absolute cursor-pointer ${
            open ? "-right-3" : "-right-1.5 border-2"
          } top-9 w-7 border-gray-900
            rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          <FaArrowCircleLeft color="white" size={20} />
        </button>
        <div className="flex gap-x-4 items-center justify-start">
          <img
            src={dsrLogo}
            onClick={() => setOpen(!open)}
            className={`cursor-pointer duration-500 h-8 w-8 rounded-full shadow-lg ${
              open && "rotate-[360deg] h-12 w-12 opacity-90"
            }`}
          />
          <h1
            className={`text-green-400 select-none origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            DSR Secure Tech
          </h1>
        </div>
        <br />
        <div className="h-[1px] w-full bg-gray-700 rounded-lg"></div>
        <ul className="flex pt-10 flex-col gap-5">
          <li>
            <Link
              title="Dashboard"
              to={"/"}
              className="flex rounded-md p-2 shadow-sm cursor-pointer hover:text-slate-200 bg-gray-800 hover:bg-green-500 text-sm items-center gap-x-4 select-none"
            >
              <FaHome size={20} color="gray" />
              <span
                className={`${
                  open ? "text-xl text-gray-200 font-normal" : "hidden"
                }`}
              >
                Dashboard
              </span>
            </Link>
          </li>
          <li className="relative">
            <div
              className="flex rounded-md p-2 cursor-pointer hover:bg-green-500 text-gray-100 text-sm items-center gap-x-4 select-none"
              onClick={handleDropdown}
            >
              <FaUser size={20} color="gray" />
              {open && (
                <h1
                  className={`font-normal text-xl text-gray-200 duration-200 hover:text-white`}
                >
                  Profile
                </h1>
              )}
              {open &&
                (dropdownOpen ? (
                  <FaChevronUp size={18} color="gray" className="ml-auto" />
                ) : (
                  <FaChevronDown size={18} color="gray" className="ml-auto" />
                ))}
            </div>
            {(dropdownOpen || (!open && dropdownOpen)) && (
              <div
                className={`${
                  open
                    ? "pl-5"
                    : "absolute left-20 top-0 bg-gray-900 p-2 rounded-md shadow-lg z-10"
                }`}
              >
                <ul>
                  <li>
                    <Link
                      to={"/addProfile"}
                      className="flex items-center gap-5 p-2 hover:bg-green-500 rounded-md select-none"
                    >
                      <IoMdAddCircle size={20} />
                      <span>Add Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/listProfile"}
                      className="flex items-center gap-5 p-2 hover:bg-green-500 rounded-md select-none"
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
          className={`absolute bottom-5 left-5 h-auto flex items-center justify-between gap-x-4 ${
            open ? "bg-gray-700 w-[250px]" : "bg-red-500 opacity-90"
          } transition-colors shadow-md p-1 rounded-lg`}
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
              className="hover:text-red-500 "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
