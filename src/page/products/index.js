import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/product card";
import { getProduct } from "../../redux/actions/products/productsActions";

const Products = () => {
  const productSelector = useSelector((state) => state.product.products);
  //console.log(productSelector)
  const cartSelector=useSelector((stateCart)=>stateCart.cart.cartItems);
  console.log('cart',cartSelector)
  const productDispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((items) => productDispatch(getProduct(items)));
  }, []);
  return (
    <div
      className="row row-cols-1 row-cols-md-5 g-4"
      style={{ paddingTop: "10px" }}
    >
      {productSelector?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
