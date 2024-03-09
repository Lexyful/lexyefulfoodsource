import { NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export const Header = ({ handleSearch }) => { // Add handleSearch as a prop
    return (
        <div className="header-container">
            <NavLink to="/">
                <button className="home-click">Home</button>
            </NavLink>
            <h1>Lexyeful Food Source</h1>
            <SearchBar handleSearch={handleSearch} /> {/* Pass handleSearch to SearchBar */}
            <NavLink to="/cart">
                <button className="cart-click">Cart</button>
            </NavLink>
        </div>
    );
};