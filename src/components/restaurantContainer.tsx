import React from "react";
import RestaurantCart from "./restaurantCart";
import useFetch from "../hooks/useFetch";
import { URL } from "../data/data";

const RestaurantContainer: React.FC = () => {
  const { isLoading, data, error } = useFetch(URL);



  if (!error  && isLoading) {
    return <h1>Loading</h1>;
  }

  if (!isLoading  && error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((restaurant) => {
          return (
            <RestaurantCart
              key={restaurant?.info.id}
              details={restaurant?.info}
            />
          );
        })}
    </>
  );
};

export default RestaurantContainer;
