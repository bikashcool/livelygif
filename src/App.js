import Random from "./Components/Random";
import Tag from "./Components/Tag";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[linear-gradient(90deg,_rgba(171,119,84,1)_3%,_rgba(67,134,194,1)_27%,_rgba(174,212,202,1)_73%,_rgba(130,218,177,0.93)_100%)] overflow-x-hidden items-center">
      <h1 className="bg-[linear-gradient(90deg,_rgba(88,74,64,1)_3%,_rgba(55,77,97,1)_28%,_rgba(47,97,84,1)_73%,_rgba(90,179,138,0.93)_100%)] text-white rounded-lg w-11/12 text-center mt-[40px] py-3 px-10 text-3xl font-bold">
        RANDOM GIFS GENERATOR
      </h1>
      <div className="flex flex-col w-full items-center">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
