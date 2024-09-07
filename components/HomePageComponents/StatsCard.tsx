import React from "react";

type StatsCardProps = {
  stats: {
    mintableSupply: number;
    totalSupply: number;
    holders: number;
    burnedAmount: number;
  };
};

const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <div className="">
      <div className="flex justify-center w-full max-w-5xl mx-auto py-6 px-4 rounded-lg ">
        {/* Adjust the grid to be responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center border-2 py-6 text-white w-full">
          <div>
            <h3 className="text-4xl font-bold">
              {stats.mintableSupply.toLocaleString()}
            </h3>
            <p>Remaining Mintable Supply</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              {stats.totalSupply.toLocaleString()}
            </h3>
            <p>Remaining Total Supply</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              {stats.holders.toLocaleString()}
            </h3>
            <p>Holders Number</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">
              {stats.burnedAmount.toLocaleString()}
            </h3>
            <p>Total Amount Burned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
