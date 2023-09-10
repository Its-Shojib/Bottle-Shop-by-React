const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
            <h3 className="text-center">Cart: {cart.length}</h3>
            <div className="grid grid-cols-10 gap-5 h-32 bg-white my-5 overflow-y-auto">
                {
                    cart.map(bottle => 
                    <div key={bottle.id}>
                        <img className="w-20 my-1" src={bottle.img} alt="" />
                        <button className="bg-red-400 text-sm rounded-lg text-white px-3 py-2" onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Cart;