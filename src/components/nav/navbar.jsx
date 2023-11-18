import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = ({ handleInputChange, query }) => {
    return (
        <div className="navbar">
            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="Search..."
                />
            </div>
            <div className="links">
                <Link to="/"> Shop </Link>
                <Link to="/cart"> Cart </Link>
                {/* <Link to="/account"> Account </Link> */}
            </div>
        </div>
    );
};
