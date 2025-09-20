import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { motion } from "framer-motion";

const Cards = ({ data, reference, onDelete }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = data.fileUrl;
    link.download = data.name;
    link.click();
  };
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.2}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex flex-shrink-0 w-60 h-72 rounded-[30px] text-white p-5 overflow-hidden px-8 py-10 bg-zinc-900/90"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight font-semibold mt-5">{data.name}</p>
      <div className="footer absolute bottom-0 left-0 w-full">
        <div className="flex justify-between px-8 py-3 mb-3 items-center text-sm font-medium text-zinc-400">
          <p>{data.size}</p>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex justify-center items-center hover:bg-zinc-700 cursor-pointer">
            {/* {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />} */}
            <IoClose onClick={onDelete} />
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className="tag w-full py-4 flex justify-center items-center cursor-pointer
              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
              hover:from-pink-500 hover:via-purple-500 hover:to-blue-500
              transition-all duration-300 shadow-lg shadow-purple-800/30"
            onClick={handleDownload}
          >
            <h3 className="font-semibold flex items-center gap-2">
              <LuDownload size="1em" /> {data.tag.tagText}
            </h3>
          </div>
        )}

        {/* {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 flex justify-center items-center hover:cursor-pointer ${
              data.tag.tagColor === "green"
                ? "bg-green-600 hover:bg-green-700"
                : data.tag.tagColor === "red"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <h3>{data.tag.tagText}</h3>
          </div>
        )} */}
      </div>
    </motion.div>
  );
};

export default Cards;
