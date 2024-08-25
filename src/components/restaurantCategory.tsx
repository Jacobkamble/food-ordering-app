import React from "react";
import ItemList from "./itemList";

 interface ItemCard {
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

interface RestaurantCategoryProps {
  data: {
    title: string;
    itemCards: ItemCard[];
  };
  showItems: boolean;
  handleClick: () => void;
}

const RestaurantCategory: React.FC<RestaurantCategoryProps> = ({ data, showItems, handleClick }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div onClick={handleClick} className="flex justify-between cursor-pointer">
        <span className="font-bold text-lg">{data.title}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} label="Add +" />}
    </div>
  );
};

export default React.memo(RestaurantCategory);
