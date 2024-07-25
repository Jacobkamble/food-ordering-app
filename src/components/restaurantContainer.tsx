import React  from "react";
import RestaurantCart from "./restaurantCart";
import useFetch from "../hooks/useFetch";
import useFilter from "../hooks/useFilter";
import { URL } from "../data/data";


const RestaurantContainer: React.FC = () => {
  const { isLoading, error,data } = useFetch(URL);
  const filterData  =useFilter(data);

  if (!error && isLoading) {
    return <h1>Loading</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  if (!isLoading && !error && data && filterData.length === 0) {
    return <h1>No Result found...</h1>;
  }

  return (
    <>
      {filterData &&
        filterData.length > 0 &&
        filterData.map((restaurant) => {
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
