import React, {  useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";

import cartProvider from "./Component/Store/CartProvider";
const App = () => {
 
 const [cartIsShown, setCartShown]=useState(false)
 
 const showCartHandler=()=>{
  setCartShown(true)
 }
 const hideCartHandler=()=>{
  setCartShown(false)
 }
 
  return (
    <cartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </cartProvider>
  );
};

export default App;
