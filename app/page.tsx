import AboutUs from "@/components/HomePageComponents/AboutUs";
import Collections from "@/components/HomePageComponents/Collections";
import Faq from "@/components/HomePageComponents/Faq";
import HeroSection from "@/components/HomePageComponents/HeroSection";
import Roadmap from "@/components/HomePageComponents/Roadmap";
import StatsCard from "@/components/HomePageComponents/StatsCard";
import NFTCard from "@/components/NFTCard";
import NFTCard2 from "@/components/NFTCardGrid";
import Image from "next/image";
import {useAccount} from "wagmi"
// Web3

import { Account } from '@/components/Web3Componentts/Account'
import { WalletOptions } from '@/components/Web3Componentts/WalletOptions'

export default function Home() {

  const stats = {
    mintableSupply: 30000,
    totalSupply: 30000,
    holders: 30000,
    burnedAmount: 30000,
  };

  const collectionsData = [
    { id: 1, imageUrl: '/dog1.png', title: 'Fapz' },
    { id: 2, imageUrl: '/dog2.png', title: 'Bagz' },
    { id: 3, imageUrl: '/dog3.png', title: 'Clapz' },
    { id: 4, imageUrl: '/dog4.png', title: 'Dapz' },
  ];


  function ConnectWallet() {
    const { isConnected } = useAccount()
    if (isConnected) return <Account />
    return <WalletOptions />
  }


  return (
    <>
      <HeroSection />
      <ConnectWallet />
      <AboutUs />
      <StatsCard stats={stats} />
      <Collections collections={collectionsData} />
      <Roadmap />
      <Faq />
    </>
  );
}
