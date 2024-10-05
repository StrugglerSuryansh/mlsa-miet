import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12 mr-2" /> {/* Adjust width and height as needed */}
        <h1 className="text-xl font-bold">MLSA-MIET</h1>
      </div>
      <button 
        onClick={() => document.getElementById('modules').scrollIntoView({ behavior: 'smooth' })}
        className="bg-[#f97432] text-white px-4 py-2 rounded hover:bg-[#f96324] transition duration-200" // Added hover effect and transition
        aria-label="Go to Modules Section" // Improved accessibility
      >
        MLSA-MIET
      </button>
    </header>
  );
};

export default Header;
