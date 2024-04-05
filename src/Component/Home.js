import React from "react";

function Home(props) {
  console.warn("home",props)
 
  return (
    <div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://s7d1.scene7.com/is/image/dish/2020-apple-iphone-12-black-front?$ProductBase$&fmt=webp" />
        </div>
        <div className="text-wrapper item">
          <span>I-phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "i Phone 11" })
            }
          >
            Add to Cart
          </button>

          <button className="remove-cart-btn"
            onClick={() =>
              props.removeToCartHandler()
            }
          >
           Remove to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
