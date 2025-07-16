import React from "react";

const MainContent = () => {
  return (
    <div className="bg-[#121212] flex-1 rounded-xl overflow-auto px-6 py-4 mx-2">
      <div className="sticky top-0 bg-[#121212] flex justify-between items-center py-4">
        <div className="flex gap-2">
          <img src="/assets/backward_icon.png" alt="Back" />
          <img
            src="/assets/forward_icon.png"
            alt="Forward"
            className="hidden md:block"
          />
        </div>
        <div className="flex gap-4 items-center">
          <button className="hidden md:block bg-white text-black font-bold py-1 px-4 rounded-full">
            Explore Premium
          </button>
          <button className="bg-black text-white font-bold py-1 px-4 rounded-full border border-white flex items-center">
            <i className="fa-regular fa-circle-down mr-2"></i> Install App
          </button>
          <i className="fa-regular fa-user text-xl"></i>
        </div>
      </div>

      <Section title="Recently Played" cards={["card1img.jpeg"]} />
      <Section
        title="Trending Now Near You"
        cards={["card2img.jpeg", "card3img.jpeg", "card4img.jpeg"]}
      />
      <Section
        title="Featured Charts"
        cards={["card5img.jpeg", "card6img.jpeg", "card1img.jpeg"]}
      />

      <div className="flex items-center justify-center h-40">
        <div className="w-11/12 h-1/2 border-t border-white opacity-50"></div>
      </div>
    </div>
  );
};

const Section = ({ title, cards }) => (
  <div>
    <h2 className="text-xl font-bold mt-4">{title}</h2>
    <div className="flex flex-wrap">
      {cards.map((src, i) => (
        <div key={i} className="bg-[#232323] w-36 rounded-md p-4 m-2">
          <img src={`/assets/${src}`} alt={src} className="rounded-md w-full" />
          <p className="font-semibold mt-2">Top 50 Global</p>
          <p className="text-sm opacity-80">
            Your daily updates of the most played...
          </p>
        </div>
      ))}
    </div>
  </div>
);

export default MainContent;
