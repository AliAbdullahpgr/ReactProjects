import React from "react";

const Header = () => {
  return (
    <header className="h-[15%] flex items-center w-full bg-[#1E1F25]">
      <nav className="flex items-center gap-3 p-6">
        <img src="./assets/react.svg" className="w-[40px]" alt="" />
        <span className="text-[32px] font-bold text-blue-300">ReactFacts</span>
      </nav>
    </header>
  )
}

export default Header;