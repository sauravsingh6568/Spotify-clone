import React from "react";

const MusicPlayer = () => {
  return (
    <div className="fixed bottom-0 w-full h-[72px] bg-black flex justify-between items-center px-4">
      <div className="flex items-center w-1/4 gap-4">
        <img
          src="/assets/album_picture.jpeg"
          className="h-14 w-14 rounded-md"
          alt="Album"
        />
        <div className="text-sm">
          <p className="font-medium leading-4">Daylight</p>
          <a href="#" className="text-xs text-gray-400">
            David Kushner
          </a>
        </div>
        <div className="flex gap-2 ml-4">
          <img src="/assets/album_icon1.png" alt="Heart" />
          <img
            src="/assets/album_icon2.png"
            alt="Options"
            className="h-[30px] w-[30px]"
          />
        </div>
      </div>

      <div className="w-2/4 text-center">
        <div className="flex justify-center items-center gap-6">
          <img
            src="/assets/player_icon1.png"
            alt="Shuffle"
            className="h-4 opacity-70 hover:opacity-100"
          />
          <img
            src="/assets/player_icon2.png"
            alt="Previous"
            className="h-4 opacity-70 hover:opacity-100"
          />
          <img
            src="/assets/player_icon3.png"
            alt="Play"
            className="h-8 opacity-100"
          />
          <img
            src="/assets/player_icon4.png"
            alt="Next"
            className="h-4 opacity-70 hover:opacity-100"
          />
        </div>
        <div className="flex justify-center items-center gap-4 mt-1 text-xs">
          <span>00:00</span>
          <input type="range" min="0" max="100" className="w-[70%] h-1" />
          <span>03:33</span>
        </div>
      </div>

      <div className="flex items-center justify-end w-1/4 gap-2">
        <img src="/assets/controls_icon1.png" className="h-6 w-6" alt="Icon1" />
        <img src="/assets/controld_icon2.png" className="h-6 w-6" alt="Icon2" />
        <img
          src="/assets/controls_icon3.png"
          className="h-5 w-5 opacity-50"
          alt="Icon3"
        />
        <img
          src="/assets/controls_icon4.png"
          className="h-5 w-5 opacity-50"
          alt="Icon4"
        />
        <img src="/assets/controls_icon5.png" className="h-8 w-8" alt="Icon5" />
        <input type="range" min="0" max="100" className="w-20 h-1" />
      </div>
    </div>
  );
};

export default MusicPlayer;
