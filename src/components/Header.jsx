const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 ">
        <div className="flex items-center">
          <img src="/api/placeholder/50/50" alt="Logo" className="w-12 h-12 mr-2" />
          <h1 className="text-xl font-bold">Company Name</h1>
        </div>
        <button 
          onClick={() => document.getElementById('modules').scrollIntoView({ behavior: 'smooth' })}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Modules
        </button>
      </header>
    );
  };

  export default Header;