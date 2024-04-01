import React from "react";

function Home() {
  return (
    <div className="App">
      <div className="add-to-cart">
        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" />
      </div>
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
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
