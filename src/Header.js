import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import './header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

const Header = () => {
  const [{ basket }] = useStateValue()

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon'
        />
      </Link>
      <div class='header__search'>
        <input type='text' class='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div class='header__nav'>
        <div class='header__option'>
          <span class='header__optionLineOne'>Hello Guest</span>
          <span class='header__optionLineTwo'>Sign In</span>
        </div>
        <div class='header__option'>
          <span class='header__optionLineOne'>Returns</span>
          <span class='header__optionLineTwo'>& Orders</span>
        </div>
        <div class='header__option'>
          <span class='header__optionLineOne'>Your</span>
          <span class='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div class='header__optionBasket'>
            <ShoppingBasketIcon />
            {/* ? optional chaining so if there is an error or basket is undefined it won't break the entire system */}
            <span class='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
