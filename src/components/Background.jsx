import React, { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Card from "./Card";

const Background = ({ theme, setPopup, popup, arr, DelNote}) => {
  const reference = useRef(null);

  return (
    <>
      {theme ? (
        <div
          className="bg-zinc-800 w-full h-[95vh] flex justify-center items-center relative"
          ref={reference}
        >
          <h1 className="text-9xl font-barlow text-center font-black text-zinc-700 tracking-tight">
            DOCS AREA
          </h1>
          <button
            className="absolute top-[1%] right-[4%] active:scale-[0.9]"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            <IoMdAddCircle size={"3rem"} className="text-blue-500" />
          </button>

          <div className="absolute top-[10%] left-[5%] flex flex-wrap gap-3">
            {arr.noteArr.length > 0
              ? arr.noteArr.map((e, index) => (
                  <Card
                    heading={e.head}
                    description={e.desc}
                    key={index}
                    theme={theme}
                    ref={reference} // Passing the reference here
                    delIndex={index}
                    DelNote={DelNote}
                  />
                ))
              : null}
          </div>
        </div>
      ) : (
        <div
          className="bg-zinc-300 w-full h-[95vh] flex justify-center items-center relative"
          ref={reference}
        >
          <h1 className="text-9xl font-barlow text-center font-black text-zinc-400 tracking-tight">
            DOCS AREA
          </h1>
          <button
            className="absolute top-[1%] right-[4%] active:scale-[0.9]"
            onClick={() => {
              setPopup(!popup);
            }}
          >
            <IoMdAddCircle size={"3rem"} className="text-amber-500" />
          </button>

          <div className="absolute top-[10%] left-[5%] flex flex-wrap gap-3">
            {arr.noteArr.length > 0
              ? arr.noteArr.map((e, index) => (
                  <Card
                    heading={e.head}
                    description={e.desc}
                    key={index}
                    theme={theme}
                    ref={reference} // Passing the reference here
                    delIndex={index}
                    DelNote={DelNote}
                  />
                ))
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default Background;
