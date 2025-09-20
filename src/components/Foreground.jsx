import React, { useRef } from "react";
import Cards from "./Cards";

const Foreground = ({ data, onDelete }) => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full p-8 flex flex-wrap gap-8 overflow-y-auto"
    >
      {data.length === 0 ? (
        <div className=" w-full h-full">
          <p className="text-zinc-400 text-lg font-medium mb-2">
            No documents uploaded yet
          </p>
          <p className="text-zinc-600 text-sm">
            Click the <span className="text-blue-400">upload button</span> to
            add your first document.
          </p>
        </div>
      ) : (
        data.map((item, idx) => (
          <Cards
            key={idx}
            data={item}
            reference={ref}
            onDelete={() => onDelete(idx)}
          />
        ))
      )}
    </div>
  );
};

export default Foreground;
