import React, { forwardRef } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

// Using forwardRef to pass ref to the DOM element
const Card = forwardRef(({ theme, heading, description, delIndex, DelNote }, ref) => {
  return (
    <>
      {theme ? (
        <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.1 }}
          className="relative top-[20%] left-3 w-[14rem] min-h-[10rem] shadow-lg flex flex-col bg-zinc-900 p-3 rounded-[30px] pb-10" // Added bottom padding
        >
          <h1 className="font-barlow font-black italic text-white text-3xl mb-5">
            {heading}
          </h1>
          <p className="text-fuchsia-300 tracking-tight leading-tight flex-grow">
            {description}
          </p>
          <button
            className="absolute bottom-3 right-3 active:scale-[0.9]"
            onClick={() => {
              DelNote(delIndex);
            }}
          >
            <FaDeleteLeft size={"2rem"} color="white" />
          </button>
        </motion.div>
      ) : (
        <motion.div
          drag
          dragConstraints={ref}
          whileDrag={{ scale: 1.1 }}
          className="relative top-[20%] left-3 w-[14rem] min-h-[10rem] shadow-lg flex flex-col bg-zinc-100 p-3 rounded-[30px] pb-10" // Added bottom padding
        >
          <h1 className="font-barlow font-black italic text-zinc-900 text-3xl mb-5">
            {heading}
          </h1>
          <p className="text-violet-600 tracking-tight leading-tight flex-grow">
            {description}
          </p>
          <button
            className="absolute bottom-3 right-3 active:scale-[0.9]"
            onClick={() => {
              DelNote(delIndex);
            }}
          >
            <FaDeleteLeft size={"2rem"} color="#F59E0B" />
          </button>
        </motion.div>
      )}
    </>
  );
});

export default Card;
