import React from "react";
import { useSelector } from "react-redux";
import CheckoutComp from "../../components/checkout";

const Cart = () => {
  const cartSelector = useSelector((state) => state.cart.cartItems);
  //console.log('=>',cartSelector.name)
  const totalprice = cartSelector.reduce(
    (prev, ini) => prev + ini.quantity*ini.price,
    0
  );

  //console.log('total=',totalprice)
  return (
    <div>
      {cartSelector?.map((cartDisplay) => (
        <CheckoutComp key={cartDisplay.id} cartDisplay={cartDisplay} />
      ))
      }
      <h2>total={totalprice}</h2>
    </div>
  );
};

export default Cart;
