import React from "react";

function Header(props) {
 console.warn(props.data);
  return (
    <div className="App">
      <div className="add-to-cart">
        <span className="cart-count">{props.data.length}</span>
        <img src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA=" />
      </div>
    </div>
  );
}

export default Header;
