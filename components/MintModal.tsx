"use client"
import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MintModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [count, setCount] = useState<number>(0);
  if (!isOpen) return null;

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg relative max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          &#x2715;
        </button>
        <h2 className="text-3xl font-bold text-center mb-4">DapzCoin</h2>
        <div className="flex justify-center">
          <img
            src="main.png" // replace with your image path
            alt="DapzCoin"
            className="mb-4 max-w-xs"
          />
        </div>
        <p className="text-center mb-2">3888 / 10000</p>
        <p className="text-center mb-2">Mint Price: 1 ETH</p>
        <p className="text-center mb-2">Remaining Supply: 2000</p>
        <p className="text-center mb-6">Address: 0xcac2...658e</p>
        <div className="flex items-center justify-center mb-4">
          <button
            onClick={decrement}
            className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mx-2"
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={increment}
            className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-white mx-2"
          >
            +
          </button>
        </div>
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white">
            Mint Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintModal;
