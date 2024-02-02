"use client"
import React, { useEffect, useState } from 'react';
import './HomePageHeading.css'; // Import your CSS file

export default function HomePageHeading() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 1000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount

    }, []);

    return (
        <>
            <h1 className="heading  text-center  mt-3 mb-5 font-vazirmatn">
                <span className={currentWordIndex === 0 ? 'blue' : 'black'}>Empowering</span>{' '}
                <span className={currentWordIndex === 1 ? 'orange' : 'black'}>Individuals</span>{' '}
                <br />
                <span className={currentWordIndex === 2 ? 'orange' : 'black'}>Elevating</span>{' '}
                <span className={currentWordIndex === 3 ? 'blue' : 'black'}>Companies</span>
            </h1>
           <div className='flex justify-center mt-3 text-[18px] mb-5 p-0'> <p className='text-center md:w-[445px] '>We empower people and boost businesses by offering a variety of digital services for both individuals and companies. </p></div>
        </>
    );
}
