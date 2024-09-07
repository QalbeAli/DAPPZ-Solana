import React from "react";
import ViewMoreButton from "../ViewMoreButton";

type CollectionItem = {
  id: number;
  imageUrl: string;
  title: string;
};

type CollectionProps = {
  collections: CollectionItem[];
};

const Collections: React.FC<CollectionProps> = ({ collections }) => {
  return (
    <div className="bg-gray-900 py-10 ">
      <h2 className="text-center text-4xl font-bold mb-10 text-white">
        Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center items-center max-w-7xl px-4 md:px-0 mx-auto">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          >
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <img
                src={collection.imageUrl}
                alt={collection.title}
                className="w-full h-72 object-cover rounded-md"
              />
              <p className="mt-4 text-center text-white text-lg font-semibold">
                {collection.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
      <ViewMoreButton  />
      </div>
    </div>
  );
};

export default Collections;
