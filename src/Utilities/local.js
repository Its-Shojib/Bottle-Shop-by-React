let getStoredCart = () =>{
    let storedCartString = localStorage.getItem('cart');
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}
let saveCartToLS = cart =>{
    let cartStringifyed = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringifyed);
}

let addToLS = (id) =>{
    let cart = getStoredCart();
    cart.push(id);
    saveCartToLS(cart);
}
const removeFromLS = id => {
    const cart = getStoredCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}
export { addToLS , getStoredCart, removeFromLS}