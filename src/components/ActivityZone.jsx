import React from 'react';
import girl from '../images/girl.png';

const ActivityZone = () => {
  return (
    <div id='ImagesSection' className="min-h-screen  flex flex-col p-8">
      <header className="flex justify-between items-center mb-8">
       
      </header>
      
      <main className="flex-grow flex items-center justify-between">
        <div className="w-1/3">
          <img src={girl} alt="3D Character" className="w-full" />
        </div>
        
        <div className="w-2/3 pl-8">
          <h1 className="text-orange-500 text-5xl font-bold mb-4">The Activity Zone</h1>
          <button className="bg-orange-300 text-white px-6 py-2 rounded-full flex items-center">
            October 24 - December 24
            {/* You can add a down arrow here as a simple text or an emoji if needed */}
          </button>
        </div>
      </main>
      
      <footer className="text-center mt-8">
        <p className="text-gray-600">Button: On Click, scroll down to next section</p>
      </footer>
    </div>
  );
};

export default ActivityZone;
