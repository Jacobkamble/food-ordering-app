import React from "react";
import { CDN_URL } from "../data/data";

// Type for ItemCard
export interface ItemCard {
  card: {
    info: {
      id: string;
      name: string;
      price?: number;
      defaultPrice?: number;
      description: string;
      imageId: string;
    };
  };
}

interface ItemListProps {
  items: ItemCard[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } = item.card.info;
        return (
          <div key={id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span>{name}</span>
                <span> - ₹{(price || defaultPrice) / 100}</span>
              </div>
              <p className="text-xs">{description}</p>
            </div>
            <div className="w-3/12 p-4 relative">
              <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
              <img src={`${CDN_URL}${imageId}`} className="w-full" loading="lazy" alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(ItemList);
