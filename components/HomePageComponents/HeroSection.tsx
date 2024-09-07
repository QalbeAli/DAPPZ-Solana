"use client"
import Image from "next/image";
import React, { useState } from "react";
import MintModal from "../MintModal";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="py-36 ">
        <div className="flex flex-col md:flex-row   justify-around items-center">
          <div className="image-container">
            <Image src="/main.png" alt="HeroLogo" width={700} height={700} />
          </div>
          <div className=" w-full max-w-3xl space-y-6">
            <h1 className="text-7xl font-bold text-center md:text-left">
              DAPZ COIN
            </h1>
            <p className="text-xl text-center md:text-left p-1">
              Dapz is ur perfect dog best fren. He is loyal and loving while you
              are a crypto meme degenerate. He has seen you go through it all.
              He sees you when you are chasing the bagz but always left hodling
              the bagz. Countless encounters with scammers, rug pullers and
              exclusion from alpha groups.
            </p>
            <div className="space-x-12  flex justify-center md:justify-start  items-center">
              {/* <SocialsButton></SocialsButton> */}
              <button onClick={openModal} className="mint-button ">
                Mint Now
              </button>
              <MintModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
