import React from "react";

const Faq = () => {
  return (
    <section className="bg-dark-gradient py-20">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Question 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-left border-4 border-transparent border-image-gradient">
            <h3 className="text-lg font-bold text-white mb-2">
              What blockchain is Battle Eden on?
            </h3>
            <p className="text-sm text-gray-400">
              Battle Eden is currently on the Ethereum blockchain because of its dominance within the NFT ecosystem.
            </p>
          </div>

          {/* Question 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-left border-4 border-transparent border-image-gradient">
            <h3 className="text-lg font-bold text-white mb-2">
              Do I get my money back if I don’t use my Eden Pass?
            </h3>
            <p className="text-sm text-gray-400">
              Once an Eden Pass is purchased, you can either redeem its underlying backing or sell it on the secondary market at your own price.
            </p>
          </div>

          {/* Question 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-left border-4 border-transparent border-image-gradient">
            <h3 className="text-lg font-bold text-white mb-2">
              Is Battle Eden gambling?
            </h3>
            <p className="text-sm text-gray-400">
              Battle Eden is a digital collectible that grants you ownership of entry into a battle based on randomized selection. Participate-to-earn.
            </p>
          </div>

          {/* Question 4 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-left border-4 border-transparent border-image-gradient">
            <h3 className="text-lg font-bold text-white mb-2">
              Can I just hold my battle pass without participating?
            </h3>
            <p className="text-sm text-gray-400">
              Battle Eden can be held, redeemed, staked, used as exclusive access, and used as collateral for borrowing.
            </p>
          </div>

          {/* Question 5 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-left border-4 border-transparent border-image-gradient">
            <h3 className="text-lg font-bold text-white mb-2">
              Who controls the reward price?
            </h3>
            <p className="text-sm text-gray-400">
              Smart contracts ensure that no one can have access or exploit the rewards, and blockchain makes all transactions transparent. See docs.
            </p>
          </div>

          {/* Question 6 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-md text-left border-4 border-transparent border-image-gradient">
            <h3 className="text-lg font-bold text-white mb-2">
              How do I collaborate with Battle Eden?
            </h3>
            <p className="text-sm text-gray-400">
              Reach out through our collaboration form or our social channels. We will ensure to go through the requests as quickly as we can.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
