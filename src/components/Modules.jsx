import React from 'react';

const Modules = () => {
  return (
    <section id="modules" className="flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold mb-10 text-orange-500">Modules to Cover</h2>
      <div className="space-y-6 w-full max-w-md">
        <button 
          className="block w-full bg-orange-500 text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-orange-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Module 1
        </button>
        <button 
          className="block w-full bg-orange-500 text-white text-xl font-semibold text-center py-6 px-8 rounded-xl shadow-lg hover:bg-orange-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Module 2
        </button>
      </div>
      <button 
        className="mt-12 bg-orange-500 text-white text-lg font-medium px-8 py-4 rounded-xl shadow-md hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit your details here, and stand a chance to win exciting prizes
      </button>
    </section>
  );
};

export default Modules;