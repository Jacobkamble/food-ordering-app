import React,{memo} from "react";
import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../data/data";

interface RestaurantCartProps {
  details: {
    cloudinaryImageId: string;
    name: string;
    cuisines: string[];
    costForTwo: string;
    avgRating: number;
    sla: {
      slaString: string;
    };
  };
}

const RestaurantCart: React.FC<RestaurantCartProps> = ({ details }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { slaString: deliveryTime },
  } = details;

  console.log("rendering card")


  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img
          className="w-full h-48 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <div className="flex items-center mb-2">
            <FaStar scale={5} className="text-yellow-500 mr-1" />
            <span>{avgRating}</span>
          </div>
          <p className="text-gray-700 text-base mb-2">{cuisines.join(", ")}</p>
          <p className="text-gray-700 text-base mb-2">
            Cost for Two: {costForTwo}
          </p>
          <p className="text-gray-700 text-base mb-2">
            Delivery Time: {deliveryTime}{" "}
          </p>
        </div>
        {/* <div className="px-6 pt-4 pb-2 flex justify-between items-center">
        <button
          onClick={() => {}}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div> */}
      </div>
    </>
  );
};

export default memo( RestaurantCart);
