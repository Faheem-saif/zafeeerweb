'use client'
import React, { useState, useEffect } from "react";

const imageUrls = [
  "https://res.cloudinary.com/dgox1rcsc/image/upload/v1705900009/Banners/f5gpimmbav7rcldsc7sy.png",
  "https://res.cloudinary.com/dgox1rcsc/image/upload/v1705900009/Banners/bcxctsascgqirk6d5v5z.png",
];

const HeroHomePage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 1000); // Change 2000 to the desired interval in milliseconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <><div className="flex justify-center items-center">
        
    <img className="  md:h-[40vh]  w-[70vw] md:w-auto" src={imageUrls[index]} alt={`Banner ${index}`} />;
    </div>
    </>
  )
};

export default HeroHomePage;
