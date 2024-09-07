import React from "react";

interface NFTCardProps {
  title: string;
  description: string;
  price: string;
  timeLeft: string;
  image: string;
  creatorAvatar: string;
  creatorName: string;
}

const NFTCardGrid: React.FC<NFTCardProps> = ({
  title,
  description,
  price,
  timeLeft,
  image,
  creatorAvatar,
  creatorName,
}) => {
  return (
    <div className="max-w-xs bg-gray-800 text-white rounded-xl overflow-hidden shadow-lg p-5">
      {/* NFT Image */}
      <div className="relative">
        <img
          src={image} // Dynamic image
          alt={title}
          className="w-full h-60 object-cover rounded-lg"
        />
      </div>

      {/* NFT Title */}
      <h2 className="text-lg font-semibold mt-4">{title}</h2>

      {/* NFT Description */}
      <p className="text-gray-400 text-sm mt-2">{description}</p>

      {/* Price and Time Info */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1">
          <img
            src="/icon-ethereum.svg" // Replace with Ethereum icon path
            alt="Ethereum"
            className="w-3 h-4"
          />
          <span className="font-semibold text-green-400">{price}</span>
        </div>
        <div className="flex items-center space-x-1 text-gray-400 text-sm">
          <img
            src="/icon-clock.svg" // Replace with clock icon path
            alt="Clock"
            className="w-4 h-4"
          />
          <span>{timeLeft}</span>
        </div>
      </div>

      {/* Buy Now Button */}
      <button className="w-full mt-4 bg-[#d8a371] hover:bg-[#b07e57] text-white font-semibold py-2 rounded-lg">
        Buy Now
      </button>

      {/* Creator Info */}
      <div className="border-t border-gray-700 mt-4 pt-4 flex items-center space-x-2">
        <img
          src={creatorAvatar} // Dynamic creator avatar
          alt={creatorName}
          className="w-8 h-8 rounded-full"
        />
        <p className="text-sm text-gray-400">
          Creation of <span className="text-white">{creatorName}</span>
        </p>
      </div>
    </div>
  );
};

export default NFTCardGrid;
