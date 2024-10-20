import React, { useState } from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";
const Tag = () => {
  const [tag, setTag] = useState('book');

  const {gif, loading, fetchData} = useGif(tag);

  return (
    <div className="w-1/2 bg-[#835e5e] gap-y-5 mt-[35px] mb-[25px] border border-black rounded-lg flex flex-col items-center">
      <h1 className="text-2xl mt-[15px] underline uppercase font-semibold">
        Random {tag} GIF
      </h1>
      {loading ? <Loader /> : <img src={gif} alt="random-gif" width="450" />}

      <input
        type="text"
        className="w-[80%] bg-[#8b7373]  px-8 py-[0.375rem] rounded-lg text-xl border border-black mb-[2px] text-center"
        value={tag}
        placeholder="Explore GIFS"
        onChange={(event) => setTag(event.target.value)}
      />

      <button
        className="w-[80%]  bg-[#b353538d] px-8 py-[0.375rem] border border-black rounded-lg text-xl mb-[20px]"
        onClick={() => fetchData(tag)}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
