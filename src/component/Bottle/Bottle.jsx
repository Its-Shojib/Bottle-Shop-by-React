const Bottle = ({ bottle,handleAddToCart }) => {
    let { name, img, price,seller,stock,ratings,ratingsCount } = bottle;

    return (
        <div>
            <div className="card bg-stone-500">
                <figure className="px-5 pt-5">
                    <img src={img} alt="" className="rounded-3xl h-72 w-full" />
                </figure>
                <h2 className="text-2xl font-bold text-center text-black">{name}</h2>
                <p className="text-center text-lg text-white">Price: {price}</p>
                <span className="text-center text-black text-xl">Seller: {seller} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Stock: {stock}</span> <br />
                <span className="text-center text-black text-xl">Rating: {ratings}/5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Rating Count: {ratingsCount}</span>
                <span className="w-full text-center py-3"><button onClick={()=>handleAddToCart(bottle)} className=" bg-blue-400 text-white px-5 py-2 rounded-lg">Buy Now!</button></span>
            </div>
        </div>
    );
};

export default Bottle;