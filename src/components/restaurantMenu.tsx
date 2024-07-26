import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { MENU_API } from "../data/data";

const RestaurantMenu: React.FC = () => {
  const { resId } = useParams();
//   const API_URL = MENU_API + resId;
//   const { isLoading, error, data } = useFetch(API_URL);

//   if (!error && isLoading) {
//     return <h1>Loading</h1>;
//   }

//   if (!isLoading && error) {
//     return <h1>{error.message}</h1>;
//   }


  console.log(resId);
  return <></>;
};

export default RestaurantMenu;
