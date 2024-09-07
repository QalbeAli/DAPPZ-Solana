import Image from "next/image";
import React from "react";
import JoinNowButton from "@/components/JoinNowButton"
const AboutUs = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="text-center text-6xl font-bold py-10">About Us</div>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto items-center">
          <div className="w-full max-w-3xl space-y-6">
            <h1 className="font-bold text-5xl text-center">
              Fapz: The Dog Dayz
            </h1>
            <p className="font-normal text-2xl text-center">
              Another pathetic moment in front of the filthy screen. While you
              are busy maintaining your algorithm, Dapz is scrolling through
              your X feed. He learns about meme coins and draws inspiration from
              the Shiba and the Wif. Dapz cooks up his plan and barks at you to
              come over. You close incognito mode, put back the tissue and pull
              up your underwear.
            </p>
          </div>
          <div>
            <Image src="/dog1.png" alt="Dog2" width={400} height={400} />
          </div>
        </div>
        <div className="py-10 flex justify-center items-center">
        <JoinNowButton></JoinNowButton>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
