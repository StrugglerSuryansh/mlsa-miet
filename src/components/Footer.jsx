import React from 'react';
import logo2 from '../images/logo2.png';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo2} alt="Logo" className="w-12 h-12 mr-2" />
          <span className="text-xl font-bold">MLSA MIET</span>
        </div>
        
        <div className="text-center mb-4 md:mb-0">
          <h3 className="font-semibold mb-2">Follow us on our socials:</h3>
          <div className="flex justify-center space-x-4">
            <span>LinkedIn</span>
            <span>Instagram</span>
            <span>X</span>
            <span>Whatsapp</span>
            <span>Commudle</span>
          </div>
        </div>
        
        <div className="text-right">
          <p><b>Address</b>  : <br />  Delhi-Roorkee Highway, <br />  Baghpat Bypass <br />  Meerut</p>
          <p> <b>Contact Number:</b> <br /> 8057296589</p>
         
         
        </div>
      </div>
      
      {/* Added made with love message */}
      <div className="text-center mt-4">
        <p>Made with <>💓</> by Suryansh</p>
      </div>
    </footer>
  );
};

export default Footer;
