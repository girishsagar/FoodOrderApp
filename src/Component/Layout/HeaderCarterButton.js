import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/Cart-Context";
import classes from "./HeaderCarterButton.module.css";
const HeaderCarterButton = (props) => {
  const [btnHighLighted, setbtnHiglighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // const {items}= cartCtx

  const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbtnHiglighted(true);
    const times = setTimeout(() => {
      setbtnHiglighted(false);
    }, 300);
    return () => {
      clearTimeout(times);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCarterButton;
