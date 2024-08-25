import React from "react";
import { CDN_URL } from "../data/data";

interface CartListProps {
  items: [];
}

const CartList: React.FC<CartListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">
          No Items in Cart,Please add item....!!!
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {items.map((item: any) => {
          const { id, name, price, defaultPrice, description, imageId } = item;

          return (
            <div
              key={id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{name}</span>
                  <span> - ₹{(price || defaultPrice) / 100}</span>
                </div>
                <p className="text-xs">{description}</p>
              </div>
              <div className="w-3/12 p-4 relative">
                <img
                  src={`${CDN_URL}${imageId}`}
                  className="w-full"
                  loading="lazy"
                  alt={name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CartList;
