import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import { BsCart2 } from "react-icons/bs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { getCartTotalItems } from "../reducer";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
function Header() {
    const [{ user, cart }, dispatch] = useStateValue();

    function handleAuthentication() {
        if (user) {
            signOut(auth);
            dispatch({
                type: "SIGN_OUT",
            });
        }
    }
    // useEffect(() => {
    //     console.log("=========");
    //     console.log(user);
    // }, [user, cart]);

    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <div onClick={handleAuthentication} className="header__options">
                    <span className="header__optionLineOne">
                        Hello {user ? user.email : "Guest"}
                    </span>
                    <NavLink to={!user && "/login"} className="link">
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </NavLink>
                </div>
                <div className="header__options">
                    <span className="header__optionLineOne">Return</span>
                    <NavLink to={"/orders"} className="link">
                        <span className="header__optionLineTwo">& Orders</span>
                    </NavLink>
                </div>
                <div className="header__options">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout" className="link">
                    <div className="header__optionCart">
                        <ShoppingCartIcon className="header__cart" />
                        <span className="header__optionLineTwo header__cartCount">
                            {getCartTotalItems(cart)}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
export default Header;
