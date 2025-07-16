import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[340px] rounded-xl bg-black m-2 flex flex-col">
      {/* Navigation Section */}
      <div className="bg-[#121212] rounded-xl py-4 px-3">
        <div className="flex items-center gap-4 opacity-100 py-2">
          <i className="fa-solid fa-house text-xl"></i>
          <a href="#" className="text-sm text-white">
            Home
          </a>
        </div>
        <div className="flex items-center gap-4 opacity-70 hover:opacity-100 py-2">
          <i className="fa-solid fa-magnifying-glass text-xl"></i>
          <a href="#" className="text-sm text-white">
            Search
          </a>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] rounded-xl mt-2 p-3 flex flex-col justify-start flex-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/assets/library_icon.png"
              alt="Library"
              className="h-4 w-5"
            />
            <a href="#" className="text-sm text-white">
              Your Library
            </a>
          </div>
          <div className="flex gap-3 text-lg text-white">
            <i className="fa-solid fa-plus opacity-70 hover:opacity-100"></i>
            <i className="fa-solid fa-arrow-right opacity-70 hover:opacity-100"></i>
          </div>
        </div>

        <div className="mt-4">
          <div className="bg-[#232323] rounded-lg p-4 mb-4">
            <p className="text-base font-medium">Create your first playlist</p>
            <p className="text-sm opacity-90">It's easy, we'll help you</p>
            <button className="bg-white text-black rounded-full font-bold mt-3 px-4 py-1 text-sm">
              Create playlist
            </button>
          </div>

          <div className="bg-[#232323] rounded-lg p-4">
            <p className="text-base font-medium">
              Let's find some podcasts to follow
            </p>
            <p className="text-sm opacity-90">
              We'll keep you updated on new episodes
            </p>
            <button className="bg-white text-black rounded-full font-bold mt-3 px-4 py-1 text-sm">
              Browse podcasts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
