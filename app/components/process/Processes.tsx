'use client'

import { useEffect, useState } from "react";

export default function Processes() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row px-10 py-5">
                {/* Process 1 */}
                <div className="flex md:flex-col">
                    <div className={`hidden md:flex item-center justify-center  w-[60%] md:w-auto md:h-[30%] text-center font-bold text-5xl ${currentWordIndex === 0 && "text-orange-500"}`}>
                        1
                    </div>
                    <div className="  w-[40%] md:w-auto  flex justify-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Group%20194.png?alt=media&token=30adbbb1-df9f-45bc-a209-3eee7189d583" className=" md:w-[60%] " alt="" />
                    </div>
                    <div className={`md:hidden block ps-10 pt-10 w-[60%] font-bold text-4xl md:w-[60%] ${currentWordIndex === 0 && "text-orange-500"}`}>
                        1
                    </div>

                </div>

                {/* Process 2 */}
                <div className="flex md:flex-col">

                    <div className={`md:hidden block text-center font-bold text-4xl ps-10 pt-10 w-[60%] md:w-[60%] ${currentWordIndex === 1 && "text-blue-700"}`}>
                        2
                    </div>
                    <div className="w-[40%] md:w-auto  flex justify-center ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Group%20195.png?alt=media&token=461efdf8-0a18-4fa9-a0f2-db7a6f327a50" className=" md:w-[60%] " alt="" />
                    </div>
                    <div className={`hidden md:flex justify-center  md:pt-5 md:w-auto  w-[60%]  font-bold text-5xl  ${currentWordIndex === 1 && "text-blue-700"}`}>
                        2
                    </div>
                </div>

                {/* Process 3 */}
                <div className="flex md:flex-col">
                    <div className={`hidden md:flex item-center justify-center  w-[60%] md:h-[30%] text-center font-bold text-5xl md:w-auto ${currentWordIndex === 2 && "text-purple-700"}`}>
                        3
                    </div>
                    <div className="w-[40%] md:w-auto  flex justify-center ">
                        <img src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Group%20196.png?alt=media&token=e690f9c8-87eb-4514-a02b-ac3320cec876" className=" md:w-[60%] " alt="" />
                    </div>
                    <div className={`md:hidden block ps-10 pt-10 font-bold text-4xl  w-[60%] ${currentWordIndex === 2 && "text-purple-700"}`}>
                        3
                    </div>
                </div>

                {/* Process 4 */}
                <div className="flex md:flex-col">
                    <div className={`md:hidden block text-center font-bold text-4xl ps-10 pt-10 w-[60%] md:w-[60%] ${currentWordIndex === 3 && "text-orange-700"}`}>
                        4
                    </div>
                    <div className="w-[40%] md:w-auto  flex justify-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/myunipixel-beta.appspot.com/o/Group%20197.png?alt=media&token=96e13c6a-22ee-4c4a-8f98-dc0ad1fdcdfe" className=" md:w-[60%] " alt="" />
                    </div>
                    <div className={`hidden md:flex justify-center  items-end  md:pt-5  w-[60%] md:w-auto  font-bold text-5xl  ${currentWordIndex === 3 && "text-orange-700"}`}>
                        4
                    </div>
                </div>
            </div>
        </>
    );
}
