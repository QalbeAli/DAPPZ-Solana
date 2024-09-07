import React from "react";

const Roadmap = () => {
  return (
    <section className="bg-dark-gradient py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold  mb-12">Roadmap</h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-6">
          
          {/* Phase 1 */}
          <div className="flex-1 text-left">
            <h3 className="text-xl font-bold text-white text-center md:text-left">Phase 1: Conceptualize</h3>
            <p className="text-sm  mt-2 text-center md:text-left">
              Complete proof of concept, game tokenomics, whitepaper, and testing.
            </p>
          </div>

          {/* Line */}
          <div className="w-20 md:w-32 h-2 bg-purple-400 my-4 md:my-0"></div>

          {/* Phase 2 */}
          <div className="flex-1 text-left">
            <h3 className="text-xl font-bold text-white text-center md:text-left">Phase 2: Introduction</h3>
            <p className="text-sm  mt-2 text-center md:text-left">
              Complete website launch, enable minting activities, engagement, and onboard team for scalability.
            </p>
          </div>

          {/* Line */}
          <div className="w-20 md:w-32 h-2 bg-purple-400 my-4 md:my-0"></div>

          {/* Phase 3 */}
          <div className="flex-1 text-left">
            <h3 className="text-xl font-bold text-white text-center md:text-left">Phase 3: Integrate</h3>
            <p className="text-sm  mt-2 text-center md:text-left">
              Build defi tools for lending and borrowing, infrastructure expansion, and expand product offering.
            </p>
          </div>

          {/* Line */}
          <div className="w-20 md:w-32 h-2 bg-purple-400 my-4 md:my-0"></div>

          {/* Phase 4 */}
          <div className="flex-1 text-left">
            <h3 className="text-xl font-bold text-white text-center md:text-left">Phase 4: Brand Growth</h3>
            <p className="text-sm  mt-2 text-center md:text-left">
              Expand brand reach and presence, establish market position, and increase community reach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
