import React, { useState } from 'react';
import { StarSolid } from "@mynaui/icons-react";

const RatingsStars = () => {
  const maxRating = 5;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (starIndex: number) => {
    setRating(starIndex);
  };

  const handleMouseEnter = (starIndex: number) => {
    setHoverRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => {
        const isFilled = index < (hoverRating || rating);
        return (
          <StarSolid
            key={index}
            onClick={() => handleClick(index + 1)}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            className={`transition-colors duration-200 ease-in-out
              ${isFilled ? 'text-yellow-400' : 'text-[#DED8E5]'}
              hover:text-yellow-500 cursor-pointer
              size-5`}
          />
        );
      })}
    </div>
  );
};

export default RatingsStars;
