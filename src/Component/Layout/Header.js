import React, { Fragment } from 'react'
import mealsimage from "../assets/meals.jpg"
import classes from "../Layout/Header.module.css"
import HeaderCarterButton from './HeaderCarterButton'
const Header= (props) =>{
  return (
<Fragment>
<header className={classes.header}>
<h1>React Meals</h1>
<HeaderCarterButton onClick={props.onShowCart}/>
</header>
<div className={classes['main-image']}>
<img src={mealsimage}/>
</div>
</Fragment>
  )
}

export default Header