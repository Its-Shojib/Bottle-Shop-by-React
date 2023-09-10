import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLS, getStoredCart,removeFromLS } from "../../Utilities/local";
import Cart from "../Cart/Cart";

const Bottoles = () => {
    let [bottles, setBottles] = useState([]);
    let [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    useEffect(()=>{
       if(bottles.length > 0){
        let storedCart = getStoredCart();
        let savedCart = [];
        for(let id of storedCart){
            let bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                savedCart.push(bottle)
            }
        }
        setCart(savedCart);
       }

    },[bottles])

    let handleAddToCart = bottle => {
        let newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id)
    }
    const handleRemoveCart = id => {
        // visual cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        // remove from LS 
        removeFromLS(id);
    }
    return (
        <div >
            <h1 className="text-center">Bottle Available:{bottles.length}</h1>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart}></Cart>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    bottles.map(bottle =>
                        <Bottle
                            key={bottle.id}
                            bottle={bottle}
                            handleAddToCart={handleAddToCart}>
                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottoles;