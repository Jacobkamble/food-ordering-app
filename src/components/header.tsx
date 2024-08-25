import React, { ChangeEvent, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { searchFilter } from "../redux/features/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
 const {isOnline}= useOnlineStatus();
 const items=useSelector((state:any)=>state.cart.cartItems);
 console.log(items,"items")

  const dispatch=useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
   dispatch( searchFilter(value));
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              src={
                "https://cdn.logojoy.com/wp-content/uploads/2018/05/30151557/1516.png"
              }
              alt="Logo"
              className="h-12"
            />
          </Link>
        </div>

        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-1 rounded shadow-md">
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="text-gray-700 hover:text-gray-900">
         Online Status : {isOnline?"✅":"🔴"}
        </div>

        <div className="text-gray-700 hover:text-gray-900">
          <Link to="/cart">
            <FaShoppingCart size={24} /> {(items.length)}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
