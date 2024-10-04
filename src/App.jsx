import React from 'react';
import Header from './components/Header';
import Modules from './components/Modules';
import ImagesSection from './components/ImagesSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#ffe9c9]"> {/* Added bg-gray-100 here */}
      <Header />
      <main className="flex-grow">
        <Modules />
        <ImagesSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;