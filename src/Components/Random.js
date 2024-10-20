import React from "react";
import Loader from "./Loader";
import useGif from "../hooks/useGif";
const Random = () => {

  const {gif, loading, fetchData} = useGif();
  return (
    <div className="w-1/2 bg-[#3f564894] gap-y-5 mt-[15px] border border-black rounded-lg flex flex-col items-center">
      <h1 className="text-2xl mt-[15px] underline uppercase font-semibold">
        A Random GIF
      </h1>
      {loading ? <Loader /> : <img src={gif} alt="random-gif" width="450" />}
      <button
        className="w-[80%] bg-[#95b39e] px-8 py-[0.375rem] border border-black rounded-lg text-xl mb-[20px]"
        onClick={() => fetchData()}
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
