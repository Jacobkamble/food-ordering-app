import React from 'react';
import { useRouteError } from 'react-router-dom';


const Error :React.FC= () => {
   const error= useRouteError()
   console.log(error)
  return (
    <>
      
      <h1>Something went wrong.....</h1>
    </>
  )
}

export default Error
