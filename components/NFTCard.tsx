import React from "react";
import NFTCardGrid from "@/components/NFTCardGrid"; // Adjust the path as needed

const nftData = [
  {
    id: 1,
    title: "Equilibrium #3429",
    description: "Our Equilibrium collection promotes balance and calm.",
    price: "0.041 ETH",
    timeLeft: "3 days left",
    image: "/image-equilibrium.jpg", // Update with the actual image path
    creatorAvatar: "/image-avatar.png", // Update with the actual avatar image path
    creatorName: "Jules Wyvern",
  },
  {
    id: 2,
    title: "Harmony #4532",
    description: "Harmony brings peace and balance to the world of NFTs.",
    price: "0.025 ETH",
    timeLeft: "5 days left",
    image: "/image-equilibrium.jpg", // Update with actual image path
    creatorAvatar: "/image-avatar.png", // Update with actual avatar image path
    creatorName: "Alex Green",
  },
  {
    id: 3,
    title: "Serenity #6524",
    description: "Serenity, a journey to tranquility.",
    price: "0.033 ETH",
    timeLeft: "2 days left",
    image: "/image-equilibrium.jpg", // Update with actual image path
    creatorAvatar: "/image-avatar.png", // Update with actual avatar image path
    creatorName: "Sophia White",
  },
  // Add more items as needed (for 3 lines, you'll need at least 9 items)
  {
    id: 4,
    title: "NFT Title #4",
    description: "Description for NFT 4.",
    price: "0.055 ETH",
    timeLeft: "1 day left",
    image: "/image-equilibrium.jpg",
    creatorAvatar: "/image-avatar.png",
    creatorName: "Creator 4",
  },
  {
    id: 4,
    title: "NFT Title #4",
    description: "Description for NFT 4.",
    price: "0.055 ETH",
    timeLeft: "1 day left",
    image: "/image-equilibrium.jpg",
    creatorAvatar: "/image-avatar.png",
    creatorName: "Creator 4",
  },
  {
    id: 4,
    title: "NFT Title #4",
    description: "Description for NFT 4.",
    price: "0.055 ETH",
    timeLeft: "1 day left",
    image: "/image-equilibrium.jpg",
    creatorAvatar: "/image-avatar.png",
    creatorName: "Creator 4",
  },
  {
    id: 4,
    title: "NFT Title #4",
    description: "Description for NFT 4.",
    price: "0.055 ETH",
    timeLeft: "1 day left",
    image: "/image-equilibrium.jpg",
    creatorAvatar: "/image-avatar.png",
    creatorName: "Creator 4",
  },
  {
    id: 4,
    title: "NFT Title #4",
    description: "Description for NFT 4.",
    price: "0.055 ETH",
    timeLeft: "1 day left",
    image: "/image-equilibrium.jpg",
    creatorAvatar: "/image-avatar.png",
    creatorName: "Creator 4",
  },
  {
    id: 4,
    title: "NFT Title #4",
    description: "Description for NFT 4.",
    price: "0.055 ETH",
    timeLeft: "1 day left",
    image: "/image-equilibrium.jpg",
    creatorAvatar: "/image-avatar.png",
    creatorName: "Creator 4",
  },
  // Add more for rows 2 and 3...
];

const HomePage = () => {
  return (
    <div className="min-h-screen p-6 flex justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-36">
        {nftData.map((nft) => (
          <NFTCardGrid
            key={nft.id}
            title={nft.title}
            description={nft.description}
            price={nft.price}
            timeLeft={nft.timeLeft}
            image={nft.image}
            creatorAvatar={nft.creatorAvatar}
            creatorName={nft.creatorName}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
