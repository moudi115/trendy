import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

function Header() {
  return (
    <div className="header">
      
<img className="header__logo" src="https://i.ibb.co/k0Q7hbx/11.jpg" />
 
                <div className='header__search'>

<input className="header__searchInput" type="text" />
<SearchIcon className="header__searchIcon" />
                </div>
    
    
                <div className="header__nav">

                <div className="header__option">
<span className='header__optionLineOne'>hello u</span>
<span className='header__optionLineTwo'>signin</span>
                </div>

                <div className="header__option">
<span className='header__optionLineOne'>return</span>
<span className='header__optionLineTwo'>orders</span>
                </div>

                <div className="header__option">
<span className='header__optionLineOne'>your</span> 
<span className='header__optionLineTwo'>prime</span>   
                </div>
<div className="header__OptionBasket">
    <ShoppingCart /> 
    <span className='header__optionLineOne header__BasketCount'>0</span>
</div>
                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Header
