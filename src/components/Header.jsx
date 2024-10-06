import logo from '../images/logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="" /> {/* Adjust width and height as needed */}
      </div>
      <h1 className="text-xl text-orange-600  font-bold text-right">MLSA-MIET</h1> {/* Moved the heading outside */}
    </header>
  );
};

export default Header;
