"use client"
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

interface CardServiceProps {
    src: string;
    heading: string;
    animation?: string;
}

const CardService: React.FC<CardServiceProps> = ({ src, heading, animation }) => {
    useEffect(() => {
        Aos.init(); // Add your AOS configuration here
    }, []); // Run only once on mount
    return (
        <>
            <div className=" bg-white shadow-md p-4 md:p-10 h-full effectDiv " data-aos={animation}
                data-aos-duration="1400"
                data-aos-easing="ease-in-sine">
                <div className="">
                <div className="flex justify-center flex-row" >
                    <img src={src} className="w-[80%] md:w-[60%]  " alt={heading} />
                </div>
                <p className="text-center text-[16px] md:text-[20px] ">{heading}</p>
                </div>
            </div>
        </>
    );
}

export default CardService;




