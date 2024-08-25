import React from "react";
import { useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const error = useRouteError();
  
  return (
    <>
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">
          {error?.message}||Something went wrong.....
        </h1>
      </div>
    </>
  );
};

export default Error;
