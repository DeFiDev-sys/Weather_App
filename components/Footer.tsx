import React from "react";

const Footer = () => {
  return (
    <footer className='min-h-[80px] border-t-2 flex justify-center items-center text-center'>
      <span>Copyright © {new Date().getFullYear()} DeFiDev-sys</span>
    </footer>
  );
};

export default Footer;
