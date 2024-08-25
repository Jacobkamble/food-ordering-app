import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MENU_API } from "../data/data";
import Error from "./Error";
import Loading from "./Loading";
import RestaurantCategory from "./restaurantCategory";

const RestaurantMenu: React.FC = () => {
  const { resId } = useParams();
  const API_URL = MENU_API + resId;
  const { isLoading, error, data } = useFetch(API_URL);
  const [showIndex, setShowIndex] = useState<null | number>(null);

  const handleClick = (userIndex: number) => {
    setShowIndex(userIndex);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const restaurantInfo = data?.data?.cards?.[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">No menu data available</h1>
      </div>
    );
  }

  const { name, cuisines, costForTwoMessage } = restaurantInfo;


  const categories =
    data?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (cate: any) => {
        return (
          cate.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {Array.isArray(cuisines)
          ? cuisines.join(", ")
          : "Cuisines not available"}{" "}
        - {costForTwoMessage}
      </p>

      {categories?.map((category: any, index: number) => {
        console.log(category, "dwjdj");
        return (
          <RestaurantCategory
            handleClick={() => handleClick(index)}
            showItems={showIndex === index}
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
