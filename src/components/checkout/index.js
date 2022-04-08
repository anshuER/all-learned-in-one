import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, deleteItemFromCart, removeAllItems } from "../../redux/actions/cart/CartActions";

const CheckoutComp = ({cartDisplay}) => {
    console.log('==',cartDisplay.title)
    const CheckoutDispatch=useDispatch();
  return (
    <div>
      <div>
        <figure className="figure">
          <img
            src={cartDisplay.image}
            className="img-thumbnail"
            alt="..."
            style={{ height: "300px" }}
          />
          <div
            className="figure-caption text-left"
            style={{ display: "inline-table", paddingLeft: "20px" }}
          >
            <h3>{cartDisplay.title}</h3>
            <h4>{cartDisplay.price}$</h4>
            <div>
              <span
                style={{
                  color: "black",
                  paddingTop: "10px",
                  paddingRight: "20px",
                  fontSize: "24px",
                }}
                className="fas"
              >
                <span onClick={() => CheckoutDispatch(deleteItemFromCart(cartDisplay))}>
                  &#x2212;
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  {cartDisplay.quantity}
                </span>
                <span
                  onClick={() => CheckoutDispatch(addItemToCart(cartDisplay))}
                  style={{ paddingLeft: "10px" }}
                >
                  &#x2b;
                </span>
              </span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
              onClick={() => CheckoutDispatch(removeAllItems(cartDisplay))}
            >
              Remove item
            </button>
          </div>
        </figure>
      </div>
      <h2>
        ----------------------------------------------------------------------------------------------------------------------
      </h2>
      {/* <label>total={total}</label> */}
    </div>
  );
};

export default CheckoutComp;
