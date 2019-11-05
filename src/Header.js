import React from "react";
import Logo from "./Logo";
import User from "./User";

const Header = () => {
    return (
        <div className="banner">
            <Logo></Logo>
            <User></User>
        </div>
    );
};

export default Header;