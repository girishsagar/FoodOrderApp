import cartContext from "./Cart-Context"


const cartProvider =props=>{


    const addItemCartHandler=(id)=>{

    }
    const removeItemFromCart =(id)=>
    {

    }
const cartContext={
    items:[],
    totalAmount:0,
    addItem: addItemCartHandler,
    removeItem: removeItemFromCart, 
}



return<cartContext.Provider vlaue={cartContext}>{props.children}</cartContext.Provider>
}
export default cartProvider