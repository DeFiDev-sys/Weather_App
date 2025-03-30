import React from "react";
import { ModeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className='min-h-[60px] border-b-2 flex justify-between items-center px-6'>
      <h2>Weather Forecast v0.1</h2>
      <ModeToggle />
    </header>
  );
};

export default Header;
