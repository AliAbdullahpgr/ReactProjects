import React from "react";

const Header = () => {
    return (
        <header className="header p-2 gap-2 w-full flex justify-center items-center">
            <img className="w-12 h-14" src="./assets/chef-claude-icon.png" alt="" />
            <h1 className="font-normal">Chef Claude</h1>
        </header>
    )
}
export default Header;