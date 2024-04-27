import CardBlock from "@/components/CardBlock";
import Player from "@/components/Player";
import SearchBar from "@/components/SearchBar";
import Track from "@/components/Track";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen px-24 py-12 grid grid-rows-[auto,1fr]">
      <div className="grid grid-cols-6 space-x-4 mb-4">
        <CardBlock className="col-span-2 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-center">
            Rav - Library
          </h1>
        </CardBlock>
        <CardBlock className="col-span-4 flex items-center justify-center">
          <SearchBar />
        </CardBlock>
      </div>
      <div className="w-full mb-4 flex justify-stretch items-center">
        <CardBlock className="h-[60vh] w-full grid grid-cols-6 grid-rows-[auto,1fr]">
          <div className="col-span-4
          text-2xl font-semibold text-center">
            <h1 className="mb-4">
              Tracks
            </h1>
          </div>
          <h1 className="col-span-2 mb-4
          text-2xl font-semibold text-center">Info and controls</h1>
          
          <div className="max-h-fit col-span-4 mr-4 pr-2 space-y-2 overflow-y-auto">
            {Array(10).fill(0).map((_, index) => (
              <Track key={index} />
            ))}
          </div>
          <CardBlock variant='bright' className="col-span-2">
            Infooo
          </CardBlock>
        </CardBlock>
      </div>
      <div>
        <CardBlock>
          <Player />
        </CardBlock>
      </div>
    </div>
  );
}
