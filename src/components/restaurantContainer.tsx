import React  from "react";
import RestaurantCart from "./restaurantCart";
import useFetch from "../hooks/useFetch";
import useFilter from "../hooks/useFilter";
import { URL } from "../data/data";
import { Link } from "react-router-dom";


const RestaurantContainer: React.FC = () => {

  console.log("Rendering RestaurantContainer");

  const { isLoading, error,data } = useFetch(URL);
  const filterData  =useFilter(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants );

  if (!error && isLoading) {
    return <h1>Loading</h1>;
  }

  if (!isLoading && error) {
    return <h1>{error.message}</h1>;
  }

  if (!isLoading && !error && data && filterData?.length === 0) {
    return <h1>No Result found...</h1>;
  }




  return (
    <>
      {filterData &&
        filterData?.length > 0 &&
        filterData.map((restaurant) => {
          return (
            <Link  key={restaurant?.info.id} to={`restaurant/${restaurant?.info.id}`}>  <RestaurantCart
          
            details={restaurant?.info}
          /> </Link>
           
          );
        })}
    </>
  );
};

export default RestaurantContainer;
