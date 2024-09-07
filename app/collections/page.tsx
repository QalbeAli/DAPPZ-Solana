import NFTCard from "@/components/NFTCard";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import React from "react";

const words = `We Have The Best Collections Of Unique NFTs`;

const Collections = () => {
  return (
    <>
      <div className="pt-32 bg-[#dd986f]">
        <div>
          <div className="w-full text-center mx-auto max-w-6xl py-4 text-7xl font-bold">
          <TextGenerateEffect words={words} />
          </div>
          <NFTCard />
        </div>
      </div>
    </>
  );
};

export default Collections;
