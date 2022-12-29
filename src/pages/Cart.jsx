import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/cart/CartProduct";
import { getAllCartProducts } from "../store/slices/cart.slice";
import "./styles/Cart.css"

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCartProducts());
  }, []);
  return (
    <main className="cart">
      <section className="cart__list">
        {cart.map((cartProduct) => (
          <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
        ))}
      </section>
    </main>
  );
};

export default Cart;
