import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({ title, releaseDate, rating, image }) => {
  return (
  
    <div className="w-52 bg-slate-200 rounded-lg shadow-md overflow-hidden relative m-2 dark:bg-slate-600">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-72 object-cover " />
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center ">
          <span>{rating}</span>
          <FaStar className="ml-2" />
        </div>
      </div>
      <div className="p-3 text-center">
        <h3 className="text-lg font-medium truncate dark:text-white">{title}</h3>
        <p className="text-gray-500 text-sm dark:text-white">{releaseDate}</p>
      </div>
    </div>
  );
};

export default Card;
