import React from 'react';
import type { SVGProps } from 'react';

interface BookmarkIconProps extends SVGProps<SVGSVGElement> {
  isBookmarked: boolean;
}

const BookmarkIcon: React.FC<BookmarkIconProps> = ({ isBookmarked, ...rest }) => {
  const fillColor = isBookmarked ? '#A2EF8C' : '#FFFFFF'; // Green if pinned, white if not

  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M6.50547 17.6937C5.98516 18.0319 5.3125 17.6397 5.3125 16.9991V4.49131C5.3125 4.08506 5.575 3.75537 5.89844 3.75537H14.1016C14.425 3.75537 14.6875 4.08506 14.6875 4.49131V16.9991C14.6875 17.6397 14.0148 18.0319 13.4945 17.6944L10.4117 15.6929C10.2894 15.6127 10.1463 15.5701 10 15.5701C9.85373 15.5701 9.71065 15.6127 9.58828 15.6929L6.50547 17.6937Z"
        fill={fillColor}
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BookmarkIcon;
