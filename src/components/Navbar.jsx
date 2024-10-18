import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = ({ theme, setTheme }) => {
  return (
    <>
      {theme ? (
        <div className="flex justify-between bg-zinc-900 p-5">
          <h1 className="text-4xl ml-3 text-white font-barlow font-black italic tracking-tight">
            MS-DOCS
          </h1>
          <button
            className="bg-blue-500 w-[2.5rem] flex justify-center items-center rounded-full active:scale-[0.9]"
            onClick={() => {
              setTheme(!theme);
            }}
          >
            <MdDarkMode color="white" size={"2rem"} />
          </button>
        </div>
      ) : (
        <div className="flex justify-between bg-blue-500 p-5">
          <h1 className="text-4xl ml-3 text-white font-barlow font-black italic tracking-tight">
            MS-DOCS
          </h1>
          <button
            className="bg-amber-500 w-[2.5rem] flex justify-center items-center rounded-full active:scale-[0.9]"
            onClick={() => {
              setTheme(!theme);
            }}
          >
            {theme ? (
              <MdDarkMode color="white" size={"2rem"} />
            ) : (
              <MdLightMode color="white" size={"2rem"} />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
