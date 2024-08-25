import React from "react";

import { useSelector } from "react-redux";
import CartList from "../components/cartList";

const Cart: React.FC = () => {
  const items = useSelector((state: any) => state.cart.cartItems);
  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <CartList items={items} />
      </div>
    </>
  );
};

export default Cart;
