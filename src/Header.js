import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

const Header = () => {
  const [{ basket, user, searchProduct }, dispatch] = useStateValue();
  const [product, setProduct] = useState("");

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  console.log(product);
  console.log(searchProduct);

  const handleChange = (e) => {
    setProduct(e.target.value);
    dispatch({
      type: "ADD_SEARCH_INPUT",
      inputValue: product.toLowerCase(),
    });
  };

  // const handleSearchInput = (e) => {
  //   // e.preventDefault();
  //   dispatch({
  //     type: 'ADD_SEARCH_INPUT',
  //     inputValue: product.toLowerCase(),
  //   })
  // }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon"
        />
      </Link>
      <div class="header__search">
        <input
          type="text"
          value={product}
          class="header__searchInput"
          onChange={handleChange}
        />
        <button class="header__search__button">
          <SearchIcon
            className="header__searchIcon"
            onClick={handleChange}
            type="submit"
          />
        </button>
      </div>
      <div class="header__nav">
        <Link to={!user && "/login"} class="header__link">
          <div onClick={handleAuthentication}>
            <div class="header__option">
              <span class="header__optionLineOne">
                {user ? `Hello ${user.email}` : "Hello Guest"}
              </span>

              <span class="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </div>
        </Link>
        <Link to="/orders" class="header__link">
          <div class="header__option">
            <span class="header__optionLineOne">Returns</span>
            <span class="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div class="header__option">
          <span class="header__optionLineOne">Your</span>
          <span class="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div class="header__optionBasket">
            <ShoppingBasketIcon />
            {/* ? optional chaining so if there is an error or basket is undefined it won't break the entire system */}
            <span class="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
