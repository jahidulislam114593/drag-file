import React from "react";

const Background = () => {
  return (
    <div className="fixed z-[2] w-full h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
      <div className="absolute top-[5%] py-6 flex justify-center w-full font-semibold text-2xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-200">
        Documents
      </div>

      <h1 className="absolute top-1/2 left-1/2 text-[12vh] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -translate-x-1/2 -translate-y-1/2 leading-none tracking-tight drop-shadow-lg">
        Resume.
      </h1>

      <div className="absolute w-72 h-72 bg-blue-600/30 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
    </div>
  );
};

export default Background;
