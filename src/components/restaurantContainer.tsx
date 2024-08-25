import React from "react";
import RestaurantCart from "./restaurantCart";
import useFetch from "../hooks/useFetch";
import useFilter from "../hooks/useFilter";
import { URL } from "../data/data";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import withPromoptedLabel from "./withPromptedLabel";
const PromotedCart = withPromoptedLabel(RestaurantCart);

const RestaurantContainer: React.FC = () => {
  const { isLoading, error, data } = useFetch(URL);
  const filterData = useFilter(
    data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );

  console.log("Rendering RestaurantContainer", filterData);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  if (!isLoading && !error && data && filterData?.length === 0) {
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">No Result found...</h1>
      </div>
    );
  }

  return (
    <>
      {filterData &&
        filterData?.length > 0 &&
        filterData.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info.id}
              to={`restaurant/${restaurant?.info.id}`}
            >
              {!restaurant?.info?.veg ? (
                <PromotedCart details={restaurant?.info} />
              ) : (
                <RestaurantCart details={restaurant?.info} />
              )}
            </Link>
          );
        })}
    </>
  );
};

export default RestaurantContainer;
