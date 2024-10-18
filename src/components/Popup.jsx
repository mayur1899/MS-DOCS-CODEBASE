import React from "react";
import { motion } from "framer-motion";

const Popup = ({ theme, head, des, out, addNote }) => {
  const validateAndAddNote = () => {
    // Check for empty fields
    if (head.heading.trim() === "" || des.desc.trim() === "") {
      alert("Both heading and description fields cannot be empty.");
      return;
    }

    // Check word count for heading and description
    const headingWordCount = head.heading.trim().split(/\s+/).length;
    const descriptionWordCount = des.desc.trim().split(/\s+/).length;

    if (headingWordCount > 5) {
      alert("Heading should not exceed 5 words.");
      return;
    }

    if (descriptionWordCount > 50) {
      alert("Description should not exceed 50 words.");
      return;
    }

    // If all validations pass, add the note
    out.setPopup(!out.popup);
    addNote(head.heading, des.desc);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      {theme ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto w-[20rem] h-[13rem] bg-slate-950 rounded-md shadow-lg shadow-zinc-950 flex flex-col p-5 gap-2 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Enter note heading"
            className="text-center p-1 font-barlow font-bold rounded-md shadow-sm shadow-zinc-800"
            value={head.heading}
            onChange={(e) => {
              head.setHeading(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter note description"
            className="text-center p-1 font-barlow font-bold rounded-md shadow-sm shadow-zinc-800"
            value={des.desc}
            onChange={(e) => {
              des.setDesc(e.target.value);
            }}
          />
          <button
            onClick={validateAndAddNote}
            className="bg-blue-500 text-white font-barlow font-bold w-[10rem] h-[2rem] rounded-md active:scale-[0.98]"
          >
            Add Note
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto z-50 w-[20rem] h-[13rem] bg-blue-500 rounded-md shadow-lg shadow-zinc-600 flex flex-col p-5 gap-2 justify-center items-center"
        >
          <input
            type="text"
            placeholder="Enter note heading"
            className="text-center p-1 font-barlow font-bold rounded-md shadow-md shadow-zinc-600"
            value={head.heading}
            onChange={(e) => {
              head.setHeading(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Enter note description"
            className="text-center p-1 font-barlow font-bold rounded-md shadow-md shadow-zinc-600"
            value={des.desc}
            onChange={(e) => {
              des.setDesc(e.target.value);
            }}
          />
          <button
            onClick={validateAndAddNote}
            className="bg-amber-500 text-white font-barlow font-bold w-[10rem] h-[2rem] rounded-md active:scale-[0.98] shadow-md shadow-zinc-600"
          >
            Add Note
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Popup;
